"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="container mx-auto">
                <div className="flex items-center justify-between h-16 px-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="EasyList.Homes"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            EasyList<span className="text-blue-600">.Homes</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                            Features
                        </Link>
                        <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                            How It Works
                        </Link>
                        <Link href="#pricing" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                            Pricing
                        </Link>
                        <Link href="#faq" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                            FAQ
                        </Link>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/login" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors font-medium">
                            Log In
                        </Link>
                        <Link href="/generator" className="btn-primary text-sm">
                            Try Free
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden px-4 pb-4 pt-2 border-t border-gray-200 dark:border-gray-700">
                        <nav className="flex flex-col gap-4">
                            <Link href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>
                                Features
                            </Link>
                            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>
                                How It Works
                            </Link>
                            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>
                                Pricing
                            </Link>
                            <Link href="#faq" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>
                                FAQ
                            </Link>
                            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <Link href="/login" className="text-center py-2 text-gray-600 font-medium">
                                    Log In
                                </Link>
                                <Link href="/generator" className="btn-primary text-center">
                                    Try Free
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
