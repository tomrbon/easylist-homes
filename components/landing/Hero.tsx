import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Zap, Clock } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 hero-pattern opacity-50" />

            {/* Gradient Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-subtle" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-subtle" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full mb-6 animate-fade-in-up">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-medium">AI-Powered Real Estate Listings</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            Create Professional Real Estate Listings in{" "}
                            <span className="gradient-text">60 Seconds</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl lg:max-w-none animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            AI-powered descriptions that sell properties faster. Perfect for agents, homeowners, and vacation rental hosts.{" "}
                            <span className="font-semibold text-gray-900 dark:text-white">No MLS required.</span>
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <Link href="/generator" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
                                Start for Free
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="#how-it-works" className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
                                See How It Works
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 dark:text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-amber-500" />
                                <span>2 Free Listings/Month</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-green-500" />
                                <span>Results in Seconds</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-blue-500" />
                                <span>GPT-4 Powered</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Modern House Image */}
                    <div className="relative animate-fade-in-up hidden lg:block" style={{ animationDelay: '0.3s' }}>
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-2xl -z-10" />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-500/10 rounded-2xl -z-10" />

                            {/* Main Image */}
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/hero-house.png"
                                    alt="Modern luxury home - AI-powered real estate listings"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Stats Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Listing Generated</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">In 2.3 seconds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Preview Card - Below on mobile, shown on all sizes */}
                <div className="mt-16 max-w-3xl mx-auto animate-fade-in-up lg:hidden" style={{ animationDelay: '0.5s' }}>
                    <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                        <Image
                            src="/hero-house.png"
                            alt="Modern luxury home"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Sample Listing Card */}
                <div className="mt-8 lg:mt-16 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <div className="card p-6 md:p-8 relative overflow-hidden">
                        {/* Decorative gradient */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-transparent dark:from-blue-900/20 rounded-bl-full" />

                        <div className="relative z-10">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center flex-shrink-0">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Sample AI-Generated Listing</h3>
                                    <p className="text-sm text-gray-500">4 bed • 3 bath • 2,400 sqft • Pool</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                <p>
                                    <span className="font-semibold text-gray-900 dark:text-white">Welcome to your dream home</span> in the heart of Sunset Valley!
                                    This stunning 4-bedroom, 3-bathroom residence offers 2,400 sq ft of thoughtfully designed living space.
                                    Entertain in style with the sparkling pool and beautifully landscaped backyard, perfect for those California evenings.
                                    The gourmet kitchen features quartz countertops and stainless steel appliances, flowing seamlessly into the sun-drenched
                                    living areas. Top-rated schools and minutes from downtown dining. <span className="text-blue-600">Your new life awaits!</span>
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                                        Short Version
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                                        Medium Version
                                    </span>
                                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
                                        Full Narrative
                                    </span>
                                </div>
                                <span className="text-xs text-gray-400">Generated in 2.3s</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
