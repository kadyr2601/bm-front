import { Play } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import {
    FaInstagram,
    FaLinkedin,
    FaTelegram,
    FaTiktok,
    FaWhatsapp,
    FaYoutube,
    FaFacebook,
    FaXTwitter,
} from "react-icons/fa6"


export const metadata: Metadata = {
    title: "Market Insights | Dubai Real Estate Analysis",
    description:
        "Expert analysis and insights on Dubai's real estate market. Stay informed with the latest trends, investment guides, and market forecasts.",
}

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


export default function InsightsPage() {
    return (
        <div className="min-h-screen w-full bg-black">
            <div className="container mx-auto px-4 py-16 space-y-16">
                {/* Header Section */}
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                        Market <span className="text-primary">Insights</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                        Expert analysis and insights on Dubai's real estate market
                    </p>
                </div>

                {/* Insights Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {insights.map((insight) => (
                        <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group block">
                            <article className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                {/* Video Thumbnail */}
                                <div className="relative aspect-video bg-muted overflow-hidden">
                                    <img
                                        src={`https://img.youtube.com/vi/${insight.videoId}/maxresdefault.jpg`}
                                        alt={insight.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-lg">
                                            <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    {/* Category Badge */}
                                    <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase tracking-wide">
                      {insight.category}
                    </span>
                                        <span className="text-xs text-muted-foreground uppercase tracking-wide">{insight.date}</span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors text-balance">
                                        {insight.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{insight.description}</p>

                                    {/* Footer */}
                                    <div className="pt-4 border-t border-border">
                    <span className="text-sm font-medium text-primary inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Watch now
                      <span className="text-lg">→</span>
                    </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-2xl p-8 md:p-12 text-center space-y-6 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-balance">Stay Updated with Market Insights</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Subscribe to receive the latest market insights, investment tips, and exclusive property listings directly
                        to your inbox.
                    </p>

                    {/* Social Media Links Section */}
                    <div className="flex justify-center">
                        <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-full bg-accent/30 border border-border/30">
                            <a
                                href="https://www.linkedin.com/in/brad-margison-266549b0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.facebook.com/brad.margison.1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <FaFacebook className="w-4 h-4" />
                            </a>
                            <a
                                href="https://x.com/bradmrgison"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-foreground hover:bg-foreground/10 hover:border-foreground/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                                aria-label="X"
                            >
                                <FaXTwitter className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.instagram.com/brad.margison/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-[#E4405F] hover:bg-[#E4405F]/10 hover:border-[#E4405F]/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="w-4 h-4" />
                            </a>

                            <div className="w-px h-6 bg-border/40 mx-1" />

                            <a
                                href="https://www.youtube.com/channel/UCx2oaBdvr59AHtIDv6RMM6Q"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-[#FF0000] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                                aria-label="YouTube"
                            >
                                <FaYoutube className="w-4 h-4" />
                            </a>
                            <a
                                href="https://wa.me/971528667010"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp className="w-4 h-4" />
                            </a>
                            <a
                                href="https://t.me/username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-[#0088cc] hover:bg-[#0088cc]/10 hover:border-[#0088cc]/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                                aria-label="Telegram"
                            >
                                <FaTelegram className="w-4 h-4" />
                            </a>
                            <a
                                href="https://tiktok.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-foreground hover:bg-foreground/10 hover:border-foreground/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                                aria-label="TikTok"
                            >
                                <FaTiktok className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
