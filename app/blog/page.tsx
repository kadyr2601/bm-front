"use client"

import type React from "react"
import Link from "next/link"
import { Calendar, ArrowRight, Play } from "lucide-react"
import { useState } from "react"

const blogPosts = [
    {
        id: "dubai-marina-lifestyle",
        slug: "a-day-in-the-life-living-in-dubai-marina",
        title: "A Day in the Life: Living in Dubai Marina",
        category: "Lifestyle",
        dateFormatted: "March 18, 2024",
        excerpt:
            "Step into a typical day in Dubai Marina — from sunrise coffees overlooking yachts to evening strolls along the glittering promenade. Experience the city’s most vibrant waterfront lifestyle.",
        videoId: "037WKTADPj0",
    },
    {
        id: "property-buying-checklist",
        slug: "10-things-to-check-before-buying-your-dubai-property",
        title: "10 Things to Check Before Buying Your Dubai Property",
        category: "Tips",
        dateFormatted: "March 12, 2024",
        excerpt:
            "A must-read checklist for buyers to make confident real estate decisions — covering hidden costs, developer reputation, ROI, and property management essentials.",
        image: "/property-inspection-checklist.png",
    },
    {
        id: "metro-expansion-impact",
        slug: "dubai-new-metro-line-impact-on-property-values",
        title: "Dubai's New Metro Line: Impact on Property Values",
        category: "News",
        dateFormatted: "March 8, 2024",
        excerpt:
            "Discover how Dubai’s new metro expansion is set to reshape property values, boost connectivity, and spotlight emerging investment hotspots across the city.",
        videoId: "dQw4w9WgXcQ",
    },
    {
        id: "downtown-dubai-schools",
        slug: "best-schools-near-downtown-dubai",
        title: "Best Schools Near Downtown Dubai",
        category: "Community",
        dateFormatted: "March 3, 2024",
        excerpt:
            "Explore the most reputable international and private schools near Downtown Dubai — a complete guide for families relocating to the heart of the city.",
        image: "/dubai-schools.jpg",
    },
    {
        id: "rental-income-maximization",
        slug: "maximizing-your-property-rental-income",
        title: "Maximizing Your Property's Rental Income",
        category: "Tips",
        dateFormatted: "February 25, 2024",
        excerpt:
            "Practical, data-driven strategies to boost your rental yield — from pricing tactics and interior upgrades to smart tenant retention methods in Dubai’s dynamic market.",
        image: "/rental-property-income.jpg",
    },
    {
        id: "sustainable-architecture",
        slug: "the-future-of-sustainable-architecture-in-dubai",
        title: "The Future of Sustainable Architecture in Dubai",
        category: "News",
        dateFormatted: "February 18, 2024",
        excerpt:
            "How Dubai’s vision for sustainability is redefining luxury real estate — with eco-conscious materials, green certifications, and smart building innovations.",
        image: "/sustainable-architecture-dubai.jpg",
    },
    {
        id: "offplan-investment-guide",
        slug: "complete-guide-to-investing-in-offplan-dubai-properties",
        title: "Complete Guide to Investing in Off-Plan Properties in Dubai",
        category: "Investment",
        dateFormatted: "February 10, 2024",
        excerpt:
            "Understand the pros, cons, and key stages of investing in off-plan developments — from choosing the right developer to maximizing returns before project completion.",
        image: "/dubai.webp",
    },
];


function MediaCard({ post, isFeatured = false }: { post: (typeof blogPosts)[0]; isFeatured?: boolean }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const hasVideo = !!post.videoId

    const handlePlayClick = (e: React.MouseEvent) => {
        if (hasVideo) {
            e.preventDefault()
            setIsPlaying(true)
        }
    }

    return (
        <div className={`relative ${isFeatured ? "h-[500px] md:h-[600px]" : "h-64"} overflow-hidden`}>
            {isPlaying && hasVideo ? (
                <iframe
                    src={`https://www.youtube.com/embed/${post.videoId}?autoplay=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <>
                    <img
                        src={
                            hasVideo
                                ? `https://img.youtube.com/vi/${post.videoId}/maxresdefault.jpg`
                                : post.image || "/placeholder.svg"
                        }
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {hasVideo && (
                        <button
                            onClick={handlePlayClick}
                            className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors"
                        >
                            <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white/20">
                                <Play className="w-10 h-10 text-white fill-white ml-1" />
                            </div>
                        </button>
                    )}
                </>
            )}
        </div>
    )
}

export default function BlogPage() {
    const featuredPost = blogPosts[0]
    const regularPosts = blogPosts.slice(1)

    return (
        <div className="min-h-screen w-full bg-black">
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <Link href={`/blog/${featuredPost.slug}`} className="group block relative rounded-3xl overflow-hidden">
                        <MediaCard post={featuredPost} isFeatured />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end pointer-events-none">
                            <div className="max-w-3xl space-y-4">
                <span className="inline-block text-xs font-semibold text-primary bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                  Featured Story
                </span>

                                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300">
                                    {featuredPost.title}
                                </h2>

                                <p className="text-base md:text-lg text-white/90 leading-relaxed">{featuredPost.excerpt}</p>

                                <div className="flex items-center gap-4 text-sm text-white/80">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                      {featuredPost.dateFormatted}
                  </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group bg-card/20 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                            >
                                <MediaCard post={post} />

                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl md:text-2xl font-serif font-bold group-hover:text-primary transition-colors leading-tight line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>

                                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                          {post.dateFormatted}
                      </span>
                                        </div>

                                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
