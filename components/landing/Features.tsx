import { Sparkles, Clock, Globe, Layout, Shield, Zap } from "lucide-react";

const features = [
    {
        icon: Sparkles,
        title: "AI-Powered Writing",
        description: "Powered by GPT-4 to generate compelling, professional listing descriptions that capture buyers' attention.",
        color: "from-blue-600 to-blue-400",
    },
    {
        icon: Clock,
        title: "Ready in Seconds",
        description: "Get 3 polished listing variations in under 60 seconds. Short for social, medium for Zillow, full narrative for MLS.",
        color: "from-green-600 to-green-400",
    },
    {
        icon: Globe,
        title: "No MLS Required",
        description: "Simply enter property details manually. Perfect for FSBO sellers, international agents, and vacation rentals.",
        color: "from-purple-600 to-purple-400",
    },
    {
        icon: Layout,
        title: "3 Format Options",
        description: "Every generation includes a social media caption, medium listing, and full narrative—copy-paste ready.",
        color: "from-amber-600 to-amber-400",
    },
    {
        icon: Shield,
        title: "Fair Housing Compliant",
        description: "AI is trained to avoid discriminatory language and follows fair housing guidelines automatically.",
        color: "from-rose-600 to-rose-400",
    },
    {
        icon: Zap,
        title: "Simple & Affordable",
        description: "No complex features you won't use. Just great listings at a fraction of competitor prices.",
        color: "from-cyan-600 to-cyan-400",
    },
];

export default function Features() {
    return (
        <section id="features" className="section bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
                        Features
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                        Everything You Need, Nothing You Don&apos;t
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        We focused on solving one problem exceptionally well: generating professional real estate listings that sell.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="card p-6 group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`feature-icon bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
