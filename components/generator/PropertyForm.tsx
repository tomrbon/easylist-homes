"use client";

import { useState } from "react";
import {
    Home,
    Bed,
    Bath,
    Ruler,
    Calendar,
    MapPin,
    CheckSquare,
    FileText,
    Sparkles,
    Loader2
} from "lucide-react";
import { PropertyData, PROPERTY_TYPES, PROPERTY_FEATURES, PropertyType } from "@/types";

interface PropertyFormProps {
    onSubmit: (data: PropertyData) => Promise<void>;
    isLoading: boolean;
}

export default function PropertyForm({ onSubmit, isLoading }: PropertyFormProps) {
    const [formData, setFormData] = useState<PropertyData>({
        address: "",
        city: "",
        state: "",
        propertyType: "single_family",
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 1500,
        yearBuilt: undefined,
        lotSize: "",
        features: [],
        neighborhoodHighlights: "",
        additionalNotes: "",
    });

    const handleFeatureToggle = (feature: string) => {
        setFormData(prev => ({
            ...prev,
            features: prev.features.includes(feature)
                ? prev.features.filter(f => f !== feature)
                : [...prev.features, feature]
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Location Section */}
            <div className="card p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-3">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Street Address
                        </label>
                        <input
                            type="text"
                            className="input"
                            placeholder="123 Main Street"
                            value={formData.address}
                            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                            required
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            City
                        </label>
                        <input
                            type="text"
                            className="input"
                            placeholder="San Francisco"
                            value={formData.city}
                            onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            State
                        </label>
                        <input
                            type="text"
                            className="input"
                            placeholder="CA"
                            value={formData.state}
                            onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
                            required
                        />
                    </div>
                </div>
            </div>

            {/* Property Details Section */}
            <div className="card p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Home className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Property Details</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="md:col-span-2 lg:col-span-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Property Type
                        </label>
                        <select
                            className="input"
                            value={formData.propertyType}
                            onChange={(e) => setFormData(prev => ({ ...prev, propertyType: e.target.value as PropertyType }))}
                        >
                            {PROPERTY_TYPES.map(type => (
                                <option key={type.value} value={type.value}>{type.label}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <Bed className="w-4 h-4 inline mr-1" />
                            Bedrooms
                        </label>
                        <input
                            type="number"
                            className="input"
                            min="0"
                            max="20"
                            value={formData.bedrooms}
                            onChange={(e) => setFormData(prev => ({ ...prev, bedrooms: parseInt(e.target.value) || 0 }))}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <Bath className="w-4 h-4 inline mr-1" />
                            Bathrooms
                        </label>
                        <input
                            type="number"
                            className="input"
                            min="0"
                            max="20"
                            step="0.5"
                            value={formData.bathrooms}
                            onChange={(e) => setFormData(prev => ({ ...prev, bathrooms: parseFloat(e.target.value) || 0 }))}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <Ruler className="w-4 h-4 inline mr-1" />
                            Square Feet
                        </label>
                        <input
                            type="number"
                            className="input"
                            min="0"
                            value={formData.squareFeet}
                            onChange={(e) => setFormData(prev => ({ ...prev, squareFeet: parseInt(e.target.value) || 0 }))}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <Calendar className="w-4 h-4 inline mr-1" />
                            Year Built
                        </label>
                        <input
                            type="number"
                            className="input"
                            placeholder="Optional"
                            min="1800"
                            max={new Date().getFullYear()}
                            value={formData.yearBuilt || ""}
                            onChange={(e) => setFormData(prev => ({ ...prev, yearBuilt: parseInt(e.target.value) || undefined }))}
                        />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="card p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <CheckSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Key Features</h3>
                        <p className="text-sm text-gray-500">Select all that apply</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {PROPERTY_FEATURES.map(feature => (
                        <button
                            key={feature}
                            type="button"
                            onClick={() => handleFeatureToggle(feature)}
                            className={`p-3 rounded-lg text-sm font-medium text-left transition-all duration-200 border ${formData.features.includes(feature)
                                    ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-500 text-blue-700 dark:text-blue-300'
                                    : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300'
                                }`}
                        >
                            {feature}
                        </button>
                    ))}
                </div>
            </div>

            {/* Additional Details Section */}
            <div className="card p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Additional Details</h3>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Neighborhood Highlights
                        </label>
                        <textarea
                            className="input min-h-[100px]"
                            placeholder="E.g., Walking distance to downtown, top-rated schools, quiet cul-de-sac, near parks and trails..."
                            value={formData.neighborhoodHighlights}
                            onChange={(e) => setFormData(prev => ({ ...prev, neighborhoodHighlights: e.target.value }))}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Additional Notes (Optional)
                        </label>
                        <textarea
                            className="input min-h-[80px]"
                            placeholder="Any other details you want included in the listing..."
                            value={formData.additionalNotes}
                            onChange={(e) => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
                        />
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Generating Listings...
                    </>
                ) : (
                    <>
                        <Sparkles className="w-5 h-5" />
                        Generate Listings
                    </>
                )}
            </button>
        </form>
    );
}
