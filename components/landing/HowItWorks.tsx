import { ClipboardList, Sparkles, Copy } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Enter Property Details",
        description: "Fill in basic info: address, beds, baths, square footage, and key features. Takes about 30 seconds.",
        color: "from-blue-600 to-blue-400",
    },
    {
        number: "02",
        icon: Sparkles,
        title: "AI Generates Listings",
        description: "Our GPT-4 powered engine creates 3 compelling descriptions tailored for different platforms.",
        color: "from-purple-600 to-purple-400",
    },
    {
        number: "03",
        icon: Copy,
        title: "Copy & Use Anywhere",
        description: "One-click copy for each variation. Paste directly into MLS, Zillow, social media, or anywhere else.",
        color: "from-green-600 to-green-400",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="section">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
                        How It Works
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                        Three Simple Steps to Perfect Listings
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        No learning curve. No complex setup. Just enter details and get professional listings.
                    </p>
                </div>

                {/* Steps */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
                        {/* Connection Line (Desktop) */}
                        <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 dark:from-blue-800 dark:via-purple-800 dark:to-green-800" />

                        {steps.map((step, index) => (
                            <div key={step.number} className="relative text-center group">
                                {/* Step Number */}
                                <div className="relative inline-block mb-6">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <step.icon className="w-9 h-9 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center">
                                        <span className="text-xs font-bold text-gray-900 dark:text-white">{step.number}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">Ready to save hours on every listing?</p>
                    <a href="/generator" className="btn-primary inline-flex items-center gap-2">
                        Try It Free Now
                        <Sparkles className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
