import Link from "next/link";
import { Check, Sparkles } from "lucide-react";

const plans = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Perfect for trying out EasyList.Homes",
        features: [
            "2 listing generations/month",
            "3 format variations per listing",
            "Copy-paste ready output",
            "Fair housing compliant",
        ],
        cta: "Start Free",
        href: "/generator",
        popular: false,
    },
    {
        name: "Starter",
        price: "$9",
        period: "/month",
        description: "Ideal for part-time agents and FSBO sellers",
        features: [
            "20 listing generations/month",
            "3 format variations per listing",
            "Listing history saved",
            "Priority generation speed",
            "Email support",
        ],
        cta: "Get Started",
        href: "/signup?plan=starter",
        popular: true,
    },
    {
        name: "Pro",
        price: "$19",
        period: "/month",
        description: "For full-time agents and power users",
        features: [
            "Unlimited generations",
            "3 format variations per listing",
            "Full listing history",
            "Priority generation speed",
            "Custom tone options",
            "Priority email support",
        ],
        cta: "Go Pro",
        href: "/signup?plan=pro",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="section bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
                        Pricing
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Start free, upgrade when you need more. No hidden fees, cancel anytime.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`card p-8 relative ${plan.popular ? 'ring-2 ring-blue-600 dark:ring-blue-400 scale-105' : ''}`}
                        >
                            {plan.popular && (
                                <div className="popular-badge">
                                    <Sparkles className="w-3 h-3 inline mr-1" />
                                    Most Popular
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-500 dark:text-gray-400">
                                        {plan.period}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                                        </div>
                                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={plan.href}
                                className={`w-full block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                        ? 'btn-primary'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* One-Time Option */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 dark:text-gray-400 mb-2">
                        Just need a single listing?
                    </p>
                    <Link href="/generator" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                        Try our $5 one-time listing option →
                    </Link>
                </div>
            </div>
        </section>
    );
}
