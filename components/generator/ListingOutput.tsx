"use client";

import { useState } from "react";
import { Copy, Check, RefreshCw, Twitter, FileText, BookOpen } from "lucide-react";
import { ListingOutput } from "@/types";

interface ListingOutputDisplayProps {
    listings: ListingOutput;
    onRegenerate: () => void;
    isLoading: boolean;
}

type TabType = "short" | "medium" | "long";

const tabs: { id: TabType; label: string; icon: React.ReactNode; description: string }[] = [
    {
        id: "short",
        label: "Social Media",
        icon: <Twitter className="w-4 h-4" />,
        description: "Perfect for Instagram, Facebook, and Twitter posts"
    },
    {
        id: "medium",
        label: "Zillow/Redfin",
        icon: <FileText className="w-4 h-4" />,
        description: "Ideal for listing platforms and property websites"
    },
    {
        id: "long",
        label: "Full Narrative",
        icon: <BookOpen className="w-4 h-4" />,
        description: "Complete MLS listing with all details"
    },
];

export default function ListingOutputDisplay({
    listings,
    onRegenerate,
    isLoading
}: ListingOutputDisplayProps) {
    const [activeTab, setActiveTab] = useState<TabType>("medium");
    const [copiedTab, setCopiedTab] = useState<TabType | null>(null);

    const handleCopy = async (tab: TabType) => {
        const text = listings[tab];
        await navigator.clipboard.writeText(text);
        setCopiedTab(tab);
        setTimeout(() => setCopiedTab(null), 2000);
    };

    const getWordCount = (text: string) => {
        return text.trim().split(/\s+/).length;
    };

    return (
        <div className="card overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 text-sm font-medium transition-colors ${activeTab === tab.id
                                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                            }`}
                    >
                        {tab.icon}
                        <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Tab Description */}
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {tabs.find(t => t.id === activeTab)?.description}
                </p>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4 min-h-[200px]">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                        {listings[activeTab]}
                    </p>
                </div>

                {/* Stats & Actions */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        {getWordCount(listings[activeTab])} words
                    </div>

                    <div className="flex gap-3 w-full sm:w-auto">
                        <button
                            onClick={() => handleCopy(activeTab)}
                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            {copiedTab === activeTab ? (
                                <>
                                    <Check className="w-4 h-4 text-green-500" />
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4" />
                                    Copy
                                </>
                            )}
                        </button>

                        <button
                            onClick={onRegenerate}
                            disabled={isLoading}
                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 btn-primary text-sm disabled:opacity-50"
                        >
                            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                            Regenerate
                        </button>
                    </div>
                </div>
            </div>

            {/* Copy All Section */}
            <div className="px-6 pb-6">
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex flex-wrap gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => handleCopy(tab.id)}
                                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                {copiedTab === tab.id ? (
                                    <Check className="w-3 h-3 text-green-500" />
                                ) : (
                                    <Copy className="w-3 h-3" />
                                )}
                                Copy {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
