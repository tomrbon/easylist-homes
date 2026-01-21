import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { PropertyData, ListingOutput } from "@/types";

// Lazily initialize OpenAI client to avoid build-time errors
function getOpenAIClient() {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        throw new Error("OPENAI_API_KEY is not set");
    }
    return new OpenAI({ apiKey });
}

// System prompt for real estate listing generation
const SYSTEM_PROMPT = `You are a professional real estate copywriter with expertise in creating compelling property listings that sell.

Your writing style is:
- Engaging and evocative, using sensory language
- Professional yet warm and inviting
- Action-oriented with clear calls to emotion
- SEO-optimized with relevant keywords
- Compliant with Fair Housing Act guidelines (never mention race, color, religion, national origin, sex, familial status, or disability)

You will generate THREE versions of a property listing:
1. SHORT (50-80 words): A punchy social media caption perfect for Instagram/Facebook
2. MEDIUM (150-200 words): A balanced listing for Zillow, Redfin, or property websites
3. LONG (300-400 words): A full narrative MLS listing with rich details

Each version should highlight the property's unique selling points and create urgency without being pushy.`;

function buildUserPrompt(property: PropertyData): string {
    const features = property.features.length > 0
        ? property.features.join(", ")
        : "None specified";

    return `Generate real estate listings for this property:

PROPERTY DETAILS:
- Address: ${property.address}, ${property.city}, ${property.state}
- Type: ${property.propertyType.replace(/_/g, ' ')}
- Bedrooms: ${property.bedrooms}
- Bathrooms: ${property.bathrooms}
- Square Feet: ${property.squareFeet.toLocaleString()}
${property.yearBuilt ? `- Year Built: ${property.yearBuilt}` : ''}
${property.lotSize ? `- Lot Size: ${property.lotSize}` : ''}

KEY FEATURES:
${features}

NEIGHBORHOOD:
${property.neighborhoodHighlights || 'Not specified'}

${property.additionalNotes ? `ADDITIONAL NOTES:\n${property.additionalNotes}` : ''}

Please provide the three listing versions in the following JSON format:
{
  "short": "...",
  "medium": "...",
  "long": "..."
}

Ensure each version is unique, compelling, and tailored to its intended platform.`;
}

export async function POST(request: NextRequest) {
    try {
        // Check for API key
        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                { success: false, error: "OpenAI API key not configured" },
                { status: 500 }
            );
        }

        // Parse request body
        const body = await request.json();
        const propertyData: PropertyData = body.propertyData;

        // Validate required fields
        if (!propertyData.address || !propertyData.city || !propertyData.state) {
            return NextResponse.json(
                { success: false, error: "Address, city, and state are required" },
                { status: 400 }
            );
        }

        // Get OpenAI client
        const openai = getOpenAIClient();

        // Generate listings using OpenAI
        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: buildUserPrompt(propertyData) }
            ],
            temperature: 0.8,
            max_tokens: 2000,
            response_format: { type: "json_object" }
        });

        const content = completion.choices[0]?.message?.content;

        if (!content) {
            return NextResponse.json(
                { success: false, error: "Failed to generate listings" },
                { status: 500 }
            );
        }

        // Parse the JSON response
        const listings: ListingOutput = JSON.parse(content);

        // Validate the response structure
        if (!listings.short || !listings.medium || !listings.long) {
            return NextResponse.json(
                { success: false, error: "Invalid response format from AI" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            listings,
            remainingCredits: 999 // TODO: Implement usage tracking
        });

    } catch (error) {
        console.error("Listing generation error:", error);

        if (error instanceof SyntaxError) {
            return NextResponse.json(
                { success: false, error: "Failed to parse AI response" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: false, error: "An error occurred while generating listings" },
            { status: 500 }
        );
    }
}
