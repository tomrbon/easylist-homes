"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How does EasyList.Homes work?",
        answer: "Simply enter your property details (address, beds, baths, sqft, key features) into our form. Our AI, powered by GPT-4, generates three professional listing descriptions in different lengths: a short social media caption, a medium listing for platforms like Zillow, and a full narrative for MLS. Copy and use anywhere!",
    },
    {
        question: "Do I need MLS access to use EasyList.Homes?",
        answer: "No! Unlike competitors that require MLS integration, EasyList.Homes works with manual input. This makes it perfect for FSBO sellers, international agents, vacation rental hosts, and anyone without MLS access.",
    },
    {
        question: "How is this different from using ChatGPT directly?",
        answer: "While you could use ChatGPT, EasyList.Homes is specifically optimized for real estate. Our prompts are fine-tuned for compelling property descriptions, fair housing compliance, and real estate best practices. Plus, you get three format variations instantly without crafting prompts yourself.",
    },
    {
        question: "Is the AI output fair housing compliant?",
        answer: "Yes. Our AI is trained to avoid discriminatory language and follows fair housing guidelines. We automatically filter out references to race, religion, national origin, sex, familial status, and disability that could violate the Fair Housing Act.",
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer: "Absolutely. There are no contracts or commitments. Cancel anytime from your dashboard, and you'll retain access until the end of your billing period.",
    },
    {
        question: "What if I need more than 20 listings but not unlimited?",
        answer: "Our Pro plan at $19/month offers unlimited generations. If you only occasionally need more than 20, you can also purchase individual listings for $5 each without upgrading.",
    },
    {
        question: "What property types does EasyList.Homes support?",
        answer: "We support all residential property types: single-family homes, condos, townhouses, multi-family, land/lots, and vacation rentals. Each type has optimized prompts for its specific selling points.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Everything you need to know about EasyList.Homes
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="card overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-500 dark:text-gray-400 mb-2">
                        Still have questions?
                    </p>
                    <a href="mailto:support@easylist.homes" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                        Contact us at support@easylist.homes →
                    </a>
                </div>
            </div>
        </section>
    );
}
