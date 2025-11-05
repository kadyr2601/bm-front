import type { Metadata } from "next"
import Link from "next/link"
import {Calendar, ArrowLeft, Clock, TrendingUp, Play} from "lucide-react"
import { notFound } from "next/navigation"

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
    {
        category: "ECONOMIC OUTLOOK",
        date: "MARCH 2024",
        title: "Dubai’s 2024 Property Forecast: What Investors Should Expect",
        description: "Market insights on pricing trends, foreign investment flows, and where the next big opportunities lie.",
        videoId: "037WKTADPj0",
        slug: "dubai-2024-property-forecast-investor-outlook",
    },
    {
        category: "SUSTAINABILITY",
        date: "FEBRUARY 2024",
        title: "Green Buildings: Dubai’s Path Toward Sustainable Luxury",
        description: "How eco-friendly architecture and sustainable design are transforming Dubai’s skyline and buyer preferences.",
        videoId: "037WKTADPj0",
        slug: "green-buildings-dubai-sustainable-luxury",
    },
    {
        category: "TECH & INNOVATION",
        date: "JANUARY 2024",
        title: "How Smart Homes Are Redefining Dubai Real Estate",
        description: "Exploring how AI, IoT, and automation are creating smarter, safer, and more efficient living spaces.",
        videoId: "037WKTADPj0",
        slug: "how-smart-homes-are-redefining-dubai-real-estate",
    },
    {
        category: "LIFESTYLE",
        date: "DECEMBER 2023",
        title: "Why Dubai Remains a Global Magnet for Expats",
        description: "A closer look at what keeps Dubai at the top of the list for professionals seeking luxury and opportunity.",
        videoId: "037WKTADPj0",
        slug: "why-dubai-remains-global-magnet-for-expats",
    },
    {
        category: "DEVELOPER INSIGHTS",
        date: "NOVEMBER 2023",
        title: "Inside Emaar’s Vision for the Next Decade",
        description: "An exclusive look at how one of Dubai’s biggest developers plans to shape the city’s future skyline.",
        videoId: "037WKTADPj0",
        slug: "inside-emaar-vision-for-the-next-decade",
    },
    {
        category: "COMMUNITY SPOTLIGHT",
        date: "OCTOBER 2023",
        title: "Jumeirah Village Circle: Dubai’s Hidden Investment Gem",
        description: "Why savvy investors are turning their attention to JVC for affordable luxury and strong rental yields.",
        videoId: "037WKTADPj0",
        slug: "jumeirah-village-circle-dubai-investment-gem",
    }
];

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return insights.map((insight) => ({
        slug: insight.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const insight = insights.find((i) => i.slug === slug)

    if (!insight) {
        return {
            title: "Insight Not Found",
        }
    }

    const imageUrl = `https://img.youtube.com/vi/${insight.videoId}/maxresdefault.jpg`

    return {
        title: `${insight.title} | Dubai Real Estate Insights`,
        description: insight.description,
        openGraph: {
            title: insight.title,
            description: insight.description,
            type: "article",
            publishedTime: insight.date,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: insight.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: insight.title,
            description: insight.description,
            images: [imageUrl],
        },
    }
}

export default async function InsightPage({ params }: Props) {
    const { slug } = await params
    const insight = insights.find((i) => i.slug === slug)

    if (!insight) {
        notFound()
    }

    const imageUrl = `https://img.youtube.com/vi/${insight.videoId}/maxresdefault.jpg`

    // JSON-LD structured data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: insight.title,
        description: insight.description,
        thumbnailUrl: imageUrl,
        uploadDate: insight.date,
        contentUrl: `https://www.youtube.com/watch?v=${insight.videoId}`,
        embedUrl: `https://www.youtube.com/embed/${insight.videoId}`,
        publisher: {
            "@type": "Organization",
            name: "Dubai Real Estate Insights",
            logo: {
                "@type": "ImageObject",
                url: "/logo.png",
            },
        },
        genre: insight.category,
        keywords: `Dubai, Real Estate, ${insight.category}, Property Investment, Market Analysis`,
    }

    // Get related insights from the same category
    const relatedInsights = insights.filter((i) => i.slug !== slug && i.category === insight.category).slice(0, 3)

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="min-h-screen w-full bg-gradient-to-b from-black via-background to-black">
                {/* Hero Section - Refined with better spacing and typography */}
                <div className="relative w-full py-10">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-50" />
                    <div className="container mx-auto px-4 relative">
                        {/* Back Button - More elegant styling */}
                        <Link
                            href="/insights"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 group mb-12"
                        >
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-primary/30 transition-all duration-300">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-300" />
                            </div>
                            <span className="text-sm font-medium tracking-wide">Back to Insights</span>
                        </Link>

                        {/* Category Badge - More refined */}
                        <div className="mb-8">
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 backdrop-blur-xl px-5 py-2.5 rounded-full border border-primary/20 shadow-lg shadow-primary/5">
                <TrendingUp className="w-3.5 h-3.5" />
                  {insight.category}
              </span>
                        </div>

                        {/* Title - Enhanced typography */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 max-w-6xl text-balance tracking-tight">
                            {insight.title}
                        </h1>

                        {/* Description - Better spacing and typography */}
                        <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-4xl text-pretty">
                            {insight.description}
                        </p>

                        {/* Meta Info - More elegant presentation */}
                        <div className="flex flex-wrap items-center gap-8 text-sm text-white/50">
                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span className="font-medium">{insight.date}</span>
                            </div>
                            <div className="w-px h-4 bg-white/10" />
                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                                <Clock className="w-4 h-4 text-primary" />
                                <span className="font-medium">Video Insight</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Section - Enhanced with elegant frame */}
                <div className="w-full py-10">
                    <div className="container mx-auto px-4">
                        <div className="relative max-w-7xl mx-auto">
                            {/* Decorative glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-3xl opacity-30" />

                            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-black">
                                <iframe
                                    src={`https://www.youtube.com/embed/${insight.videoId}`}
                                    title={insight.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Takeaways Section - More elegant cards */}
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 text-balance">
                                    Key Takeaways
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                            </div>

                            <div className="grid gap-8">
                                <div className="group relative bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative flex gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/20 shadow-lg shadow-primary/10">
                                            1
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-serif font-bold text-white mb-2 tracking-tight">Market Analysis</h3>
                                            <p className="text-muted-foreground leading-relaxed text-base">
                                                Comprehensive insights into current market trends and future projections for Dubai's real estate
                                                sector.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group relative bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative flex gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/20 shadow-lg shadow-primary/10">
                                            2
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-serif font-bold text-white mb-2 tracking-tight">
                                                Investment Opportunities
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed text-base">
                                                Expert guidance on identifying and capitalizing on emerging investment opportunities in the
                                                market.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group relative bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative flex gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/20 shadow-lg shadow-primary/10">
                                            3
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-serif font-bold text-white mb-2 tracking-tight">
                                                Strategic Insights
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed text-base">
                                                Actionable strategies and recommendations from industry experts to maximize your investment
                                                returns.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Insights - Enhanced cards */}
                {relatedInsights.length > 0 && (
                    <div className="w-full border-t border-white/5">
                        <div className="container mx-auto px-4">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 text-balance">
                                        Related Insights
                                    </h2>
                                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    {relatedInsights.map((related) => (
                                        <Link
                                            key={related.slug}
                                            href={`/insights/${related.slug}`}
                                            className="group relative bg-gradient-to-br from-card/30 to-card/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
                                        >
                                            <div className="relative h-56 overflow-hidden">
                                                <img
                                                    src={`https://img.youtube.com/vi/${related.videoId}/maxresdefault.jpg`}
                                                    alt={related.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                                <div className="absolute top-4 left-4">
                          <span className="text-xs font-semibold tracking-wider uppercase text-primary bg-primary/20 backdrop-blur-xl px-4 py-2 rounded-full border border-primary/30 shadow-lg shadow-primary/10">
                            {related.category}
                          </span>
                                                </div>

                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                    <div className="w-16 h-16 rounded-full bg-primary/95 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                                                        <Play className="w-7 h-7 text-black fill-black ml-1" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-7">
                                                <h3 className="text-xl font-serif font-bold text-white group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-3 leading-tight">
                                                    {related.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                                                    {related.description}
                                                </p>
                                                <div className="flex items-center gap-2.5 text-xs text-white/40 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10 w-fit">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    <span className="font-medium">{related.date}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Section - More elegant and refined */}
                <div className="w-full py-12 border-t border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-8 border border-primary/20 shadow-2xl shadow-primary/20">
                                    <TrendingUp className="w-8 h-8 text-primary" />
                                </div>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 text-balance leading-tight tracking-tight">
                                Ready to Make Your Move?
                            </h2>

                            <p className="text-base md:text-lg text-white/60 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
                                Connect with our expert team to explore investment opportunities tailored to your goals and discover how
                                you can capitalize on Dubai's thriving real estate market.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 text-base"
                                >
                                    Schedule a Consultation
                                    <svg
                                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/insights"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-xl text-base"
                                >
                                    Explore More Insights
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
