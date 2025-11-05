"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const insights = [
    {
        category: "MARKET TRENDS",
        date: "Q2 2024",
        title: "The Rise of Branded Residences in Downtown Dubai",
        description: "An in-depth look at why branded residences are becoming the top choice for discerning investors.",
        videoId: "037WKTADPj0",
        slug: "the-rise-of-branded-residences-in-downtown-dubai",
    },
    {
        category: "INVESTMENT GUIDE",
        date: "MAY 2024",
        title: "Navigating Off-Plan vs. Secondary Market",
        description: "A comprehensive guide to help you decide which investment strategy is right for your portfolio.",
        videoId: "037WKTADPj0",
        slug: "navigating-off-plan-vs-secondary-market",
    },
    {
        category: "LUXURY LIVING",
        date: "APRIL 2024",
        title: "Top 5 Waterfront Communities for 2024",
        description: "Discover Dubai's most sought-after waterfront communities, from Palm Jumeirah to Dubai Marina.",
        videoId: "037WKTADPj0",
        slug: "top-5-waterfront-communities-for-2024",
    },
]

export function PricingSection() {
    const [playingVideo, setPlayingVideo] = useState<number | null>(null)

    return (
        <section className="relative py-24 px-4 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4"
                    >
                        <span className="text-sm font-medium text-primary">Market Analysis</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Dubai Real Estate Insights</h2>

                    <p className="text-lg text-white/60 max-w-3xl mx-auto">
                        Stay ahead with expert analysis on market trends, investment opportunities, and the future of Dubai's
                        property landscape.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {insights.map((insight, index) => (
                        <motion.div
                            key={insight.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
                                <div className="relative aspect-video bg-white/10 overflow-hidden">
                                    {playingVideo === index ? (
                                        <iframe
                                            src={`https://www.youtube.com/embed/${insight.videoId}?autoplay=1`}
                                            title={insight.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="absolute inset-0 w-full h-full"
                                        />
                                    ) : (
                                        <>
                                            <Image
                                                src={`https://img.youtube.com/vi/${insight.videoId}/maxresdefault.jpg`}
                                                alt={insight.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <button
                                                onClick={() => setPlayingVideo(index)}
                                                className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-300 hover:bg-black/50 cursor-pointer"
                                                aria-label={`Play video: ${insight.title}`}
                                            >
                                                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                                    <Play className="w-8 h-8 text-black fill-black ml-1" />
                                                </div>
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="text-xs font-medium text-white/50 mb-3 tracking-wider">
                                        {insight.category} • {insight.date}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">{insight.title}</h3>

                                    <p className="text-white/60 text-sm mb-6 leading-relaxed">{insight.description}</p>

                                    <a
                                        href={`/insights/${insight.slug}`}
                                        className="inline-flex items-center gap-2 text-primary font-medium text-sm transition-all duration-200 group-hover:gap-3"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
