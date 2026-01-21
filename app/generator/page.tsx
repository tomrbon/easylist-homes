"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, ArrowLeft, Sparkles, Zap } from "lucide-react";
import PropertyForm from "@/components/generator/PropertyForm";
import ListingOutputDisplay from "@/components/generator/ListingOutput";
import { PropertyData, ListingOutput, GenerateListingResponse } from "@/types";

export default function GeneratorPage() {
    const [listings, setListings] = useState<ListingOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [lastPropertyData, setLastPropertyData] = useState<PropertyData | null>(null);

    const handleGenerate = async (propertyData: PropertyData) => {
        setIsLoading(true);
        setError(null);
        setLastPropertyData(propertyData);

        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ propertyData }),
            });

            const data: GenerateListingResponse = await response.json();

            if (data.success && data.listings) {
                setListings(data.listings);
            } else {
                setError(data.error || "Failed to generate listings");
            }
        } catch (err) {
            setError("Network error. Please try again.");
            console.error("Generation error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegenerate = () => {
        if (lastPropertyData) {
            handleGenerate(lastPropertyData);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            {/* Header */}
            <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span className="text-sm">Back</span>
                            </Link>
                            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700" />
                            <Link href="/" className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                                    <Home className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-bold text-gray-900 dark:text-white">
                                    EasyList<span className="text-blue-600">.Homes</span>
                                </span>
                            </Link>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <Zap className="w-4 h-4 text-amber-500" />
                                <span>2 free listings remaining</span>
                            </div>
                            <Link href="/login" className="btn-secondary text-sm py-2 px-4">
                                Log In
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Page Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full mb-4">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-medium">AI-Powered Generator</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                            Create Your Property Listing
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Enter your property details below and let our AI create compelling listings in seconds.
                        </p>
                    </div>

                    {/* Error Display */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300">
                            <p className="font-medium">Error</p>
                            <p className="text-sm">{error}</p>
                        </div>
                    )}

                    {/* Results Display */}
                    {listings && (
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="w-5 h-5 text-green-500" />
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Your Generated Listings
                                </h2>
                            </div>
                            <ListingOutputDisplay
                                listings={listings}
                                onRegenerate={handleRegenerate}
                                isLoading={isLoading}
                            />
                        </div>
                    )}

                    {/* Property Form */}
                    <div className={listings ? 'pt-8 border-t border-gray-200 dark:border-gray-800' : ''}>
                        {listings && (
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                                Generate Another Listing
                            </h2>
                        )}
                        <PropertyForm onSubmit={handleGenerate} isLoading={isLoading} />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 dark:border-gray-800 mt-12 py-6">
                <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} EasyList.Homes. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
