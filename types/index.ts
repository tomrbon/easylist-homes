// Property types supported by EasyList.Homes
export type PropertyType =
    | "single_family"
    | "condo"
    | "townhouse"
    | "multi_family"
    | "land"
    | "vacation_rental";

export const PROPERTY_TYPES: { value: PropertyType; label: string }[] = [
    { value: "single_family", label: "Single Family Home" },
    { value: "condo", label: "Condo / Apartment" },
    { value: "townhouse", label: "Townhouse" },
    { value: "multi_family", label: "Multi-Family" },
    { value: "land", label: "Land / Lot" },
    { value: "vacation_rental", label: "Vacation Rental" },
];

// Property features for selection
export const PROPERTY_FEATURES = [
    "Updated Kitchen",
    "Renovated Bathrooms",
    "Hardwood Floors",
    "Pool",
    "Garage",
    "Fireplace",
    "Central A/C",
    "Large Backyard",
    "Mountain Views",
    "Ocean Views",
    "Smart Home Features",
    "Solar Panels",
    "Home Office",
    "Open Floor Plan",
    "High Ceilings",
    "Walk-in Closets",
    "Granite Countertops",
    "Stainless Steel Appliances",
    "New Roof",
    "New Windows",
];

// Property data for form submission
export interface PropertyData {
    address: string;
    city: string;
    state: string;
    propertyType: PropertyType;
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    yearBuilt?: number;
    lotSize?: string;
    features: string[];
    neighborhoodHighlights: string;
    additionalNotes?: string;
}

// Generated listing output
export interface ListingOutput {
    short: string;    // Social media caption (50-100 words)
    medium: string;   // Zillow/Redfin listing (150-200 words)
    long: string;     // Full MLS narrative (300-400 words)
}

// User subscription tiers
export type SubscriptionTier = "free" | "starter" | "pro";

// User profile
export interface UserProfile {
    id: string;
    email: string;
    fullName?: string;
    subscriptionTier: SubscriptionTier;
    stripeCustomerId?: string;
    monthlyUsage: number;
    createdAt: string;
}

// Saved listing
export interface SavedListing {
    id: string;
    userId: string;
    propertyData: PropertyData;
    shortDescription: string;
    mediumDescription: string;
    longDescription: string;
    createdAt: string;
}

// API response types
export interface GenerateListingResponse {
    success: boolean;
    listings?: ListingOutput;
    error?: string;
    remainingCredits?: number;
}
