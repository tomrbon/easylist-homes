"use client";

import Link from "next/link";
import {
    Home,
    LayoutDashboard,
    FileText,
    CreditCard,
    Settings,
    LogOut,
    Zap,
    ArrowRight,
    Clock,
    Sparkles
} from "lucide-react";

// Mock data - replace with actual data from Supabase
const mockUser = {
    name: "John Smith",
    email: "john@example.com",
    subscription: "free" as const,
    usage: 1,
    limit: 2,
};

const mockListings = [
    {
        id: "1",
        address: "123 Main Street, San Francisco, CA",
        createdAt: "2024-01-15T10:30:00",
        preview: "Welcome to this stunning 3-bedroom home in the heart of..."
    },
    {
        id: "2",
        address: "456 Oak Avenue, Los Angeles, CA",
        createdAt: "2024-01-14T15:45:00",
        preview: "Discover your dream residence in this charming..."
    },
];

export default function DashboardPage() {
    const usagePercentage = (mockUser.usage / mockUser.limit) * 100;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-40 hidden md:block">
                <div className="p-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                            <Home className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            EasyList<span className="text-blue-600">.Homes</span>
                        </span>
                    </Link>
                </div>

                <nav className="px-4 space-y-1">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium"
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </Link>
                    <Link
                        href="/generator"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <Sparkles className="w-5 h-5" />
                        Generator
                    </Link>
                    <Link
                        href="/dashboard/history"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <FileText className="w-5 h-5" />
                        My Listings
                    </Link>
                    <Link
                        href="/dashboard/billing"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <CreditCard className="w-5 h-5" />
                        Billing
                    </Link>
                    <Link
                        href="/dashboard/settings"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <Settings className="w-5 h-5" />
                        Settings
                    </Link>
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-800">
                    <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-full">
                        <LogOut className="w-5 h-5" />
                        Sign out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="md:ml-64 p-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Welcome back, {mockUser.name}!
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Here&apos;s an overview of your account
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {/* Usage Card */}
                    <div className="card p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Usage</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {mockUser.usage}/{mockUser.limit}
                                </p>
                            </div>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${usagePercentage}%` }}
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            {mockUser.limit - mockUser.usage} listings remaining this month
                        </p>
                    </div>

                    {/* Plan Card */}
                    <div className="card p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                <CreditCard className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Current Plan</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                                    {mockUser.subscription}
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/#pricing"
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                        >
                            Upgrade for more listings
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Total Listings Card */}
                    <div className="card p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Total Listings</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {mockListings.length}
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/dashboard/history"
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                        >
                            View all listings
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="card p-6 mb-8">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Quick Actions
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/generator" className="btn-primary flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            Create New Listing
                        </Link>
                        <Link href="/dashboard/history" className="btn-secondary flex items-center gap-2">
                            <FileText className="w-5 h-5" />
                            View My Listings
                        </Link>
                    </div>
                </div>

                {/* Recent Listings */}
                <div className="card overflow-hidden">
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Recent Listings
                        </h2>
                    </div>
                    {mockListings.length > 0 ? (
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            {mockListings.map((listing) => (
                                <div key={listing.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-medium text-gray-900 dark:text-white truncate">
                                                {listing.address}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">
                                                {listing.preview}
                                            </p>
                                            <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                                                <Clock className="w-3 h-3" />
                                                {new Date(listing.createdAt).toLocaleDateString()}
                                            </div>
                                        </div>
                                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                            View
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-12 text-center">
                            <FileText className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                            <p className="text-gray-500 dark:text-gray-400 mb-4">
                                No listings yet. Create your first one!
                            </p>
                            <Link href="/generator" className="btn-primary inline-flex items-center gap-2">
                                <Sparkles className="w-4 h-4" />
                                Create Listing
                            </Link>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
