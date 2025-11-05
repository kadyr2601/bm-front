import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, ArrowLeft, Play } from "lucide-react"
import { notFound } from "next/navigation"


const blogPosts = [
    {
        id: "dubai-marina-lifestyle",
        slug: "a-day-in-the-life-living-in-dubai-marina",
        title: "A Day in the Life: Living in Dubai Marina",
        category: "Lifestyle",
        dateFormatted: "March 18, 2024",
        excerpt:
            "Step into a typical day in Dubai Marina — from sunrise coffees overlooking yachts to evening strolls along the glittering promenade. Experience the city's most vibrant waterfront lifestyle.",
        videoId: "037WKTADPj0",
        content: `
      <p>Dubai Marina represents the pinnacle of waterfront living in the UAE. This vibrant neighborhood combines luxury residential towers with world-class dining, entertainment, and stunning views of the Arabian Gulf.</p>
      
      <h2>Morning Rituals</h2>
      <p>The day begins with sunrise yoga sessions along the Marina Walk, followed by artisanal coffee at one of the many waterfront cafés. The morning light reflecting off the water creates an atmosphere of tranquility despite being in the heart of a bustling metropolis.</p>
      
      <h2>Daytime Activities</h2>
      <p>Residents enjoy access to pristine beaches, luxury shopping at Marina Mall, and countless water sports activities. The Marina's strategic location provides easy access to both business districts and leisure destinations.</p>
      
      <h2>Evening Entertainment</h2>
      <p>As the sun sets, the Marina transforms into a vibrant social hub. The promenade comes alive with joggers, families, and couples enjoying the cool evening breeze. Restaurants and bars offer stunning waterfront views with diverse culinary experiences.</p>
    `,
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
        content: `
      <p>Investing in Dubai real estate requires careful consideration and due diligence. This comprehensive checklist will help you make informed decisions and avoid common pitfalls.</p>
      
      <h2>1. Developer Reputation</h2>
      <p>Research the developer's track record, previous projects, and delivery timelines. Established developers with a proven history offer greater security for your investment.</p>
      
      <h2>2. Location Analysis</h2>
      <p>Evaluate proximity to metro stations, schools, hospitals, and business districts. Location significantly impacts both rental yields and property appreciation.</p>
      
      <h2>3. Hidden Costs</h2>
      <p>Factor in registration fees, agent commissions, maintenance charges, and utility deposits. These can add 5-7% to your total investment.</p>
      
      <h2>4. ROI Projections</h2>
      <p>Analyze rental yields in the area, typically ranging from 5-8% in prime locations. Consider both short-term rental income and long-term capital appreciation.</p>
      
      <h2>5. Property Inspection</h2>
      <p>Conduct thorough inspections for structural issues, quality of finishes, and building amenities. Hire professional inspectors for comprehensive assessments.</p>
    `,
    },
    {
        id: "metro-expansion-impact",
        slug: "dubai-new-metro-line-impact-on-property-values",
        title: "Dubai's New Metro Line: Impact on Property Values",
        category: "News",
        dateFormatted: "March 8, 2024",
        excerpt:
            "Discover how Dubai's new metro expansion is set to reshape property values, boost connectivity, and spotlight emerging investment hotspots across the city.",
        videoId: "dQw4w9WgXcQ",
        content: `
      <p>Dubai's ambitious metro expansion project is set to revolutionize urban connectivity and create new investment opportunities across the emirate.</p>
      
      <h2>The Expansion Plan</h2>
      <p>The new metro lines will connect previously underserved areas, extending the network by over 50 kilometers and adding 30 new stations. This infrastructure development is expected to be completed by 2030.</p>
      
      <h2>Property Value Impact</h2>
      <p>Historical data shows that properties within 500 meters of metro stations experience 15-25% higher appreciation rates compared to similar properties further away. Early investors in these corridors stand to benefit significantly.</p>
      
      <h2>Emerging Hotspots</h2>
      <p>Areas like Dubai South, Expo City, and certain parts of Jebel Ali are poised for substantial growth. These locations offer more affordable entry points with strong appreciation potential.</p>
    `,
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
        content: `
      <p>For families considering Downtown Dubai, access to quality education is a top priority. This guide covers the best educational institutions in the area.</p>
      
      <h2>International Schools</h2>
      <p>Downtown Dubai is surrounded by prestigious international schools offering British, American, and IB curricula. These institutions maintain high academic standards and excellent facilities.</p>
      
      <h2>Top Recommendations</h2>
      <p>GEMS Wellington International School, Dubai International Academy, and Jumeirah English Speaking School are among the most sought-after options, offering comprehensive programs from early years through secondary education.</p>
      
      <h2>Admission Process</h2>
      <p>Most schools require early registration, often 6-12 months in advance. Entrance assessments and interviews are standard procedures for admission.</p>
    `,
    },
    {
        id: "rental-income-maximization",
        slug: "maximizing-your-property-rental-income",
        title: "Maximizing Your Property's Rental Income",
        category: "Tips",
        dateFormatted: "February 25, 2024",
        excerpt:
            "Practical, data-driven strategies to boost your rental yield — from pricing tactics and interior upgrades to smart tenant retention methods in Dubai's dynamic market.",
        image: "/rental-property-income.jpg",
        content: `
      <p>Optimizing rental income requires strategic planning and market awareness. These proven strategies will help you maximize returns on your Dubai property investment.</p>
      
      <h2>Strategic Pricing</h2>
      <p>Conduct thorough market research to set competitive rates. Consider seasonal fluctuations and adjust pricing accordingly. Properties priced 5-10% below market average tend to attract quality tenants faster.</p>
      
      <h2>Interior Upgrades</h2>
      <p>Smart renovations can increase rental value by 15-20%. Focus on kitchens, bathrooms, and modern amenities like smart home features. Quality furnishings for short-term rentals can command premium rates.</p>
      
      <h2>Tenant Retention</h2>
      <p>Maintaining good tenant relationships reduces vacancy periods and turnover costs. Responsive maintenance and fair lease terms encourage long-term tenancies.</p>
    `,
    },
    {
        id: "sustainable-architecture",
        slug: "the-future-of-sustainable-architecture-in-dubai",
        title: "The Future of Sustainable Architecture in Dubai",
        category: "News",
        dateFormatted: "February 18, 2024",
        excerpt:
            "How Dubai's vision for sustainability is redefining luxury real estate — with eco-conscious materials, green certifications, and smart building innovations.",
        image: "/sustainable-architecture-dubai.jpg",
        content: `
      <p>Dubai is pioneering sustainable architecture in the Middle East, combining luxury with environmental responsibility through innovative design and technology.</p>
      
      <h2>Green Building Standards</h2>
      <p>The Dubai Municipality's green building regulations mandate energy-efficient designs for new developments. LEED and BREEAM certifications are becoming standard for premium properties.</p>
      
      <h2>Innovative Technologies</h2>
      <p>Solar panels, smart energy management systems, and water recycling technologies are being integrated into new developments. These features reduce operational costs while minimizing environmental impact.</p>
      
      <h2>Market Demand</h2>
      <p>Sustainable properties command 10-15% premium in rental and sale prices. Environmentally conscious buyers and tenants are driving demand for green-certified buildings.</p>
    `,
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
        content: `
      <p>Off-plan property investment in Dubai offers unique opportunities for capital appreciation and flexible payment plans. Understanding the process is crucial for success.</p>
      
      <h2>Advantages of Off-Plan Investment</h2>
      <p>Lower entry prices, flexible payment plans, and potential for significant appreciation before completion make off-plan properties attractive. Investors can secure properties at pre-construction prices with minimal upfront capital.</p>
      
      <h2>Risk Management</h2>
      <p>Choose reputable developers with proven track records. Verify project approvals, construction timelines, and developer financial stability. Escrow account protection provides additional security.</p>
      
      <h2>Exit Strategies</h2>
      <p>Many investors flip properties before completion, capitalizing on appreciation during construction. Others hold for rental income post-handover. Understanding market cycles is essential for timing your exit.</p>
    `,
    },
]


type Props = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        return {
            title: "Post Not Found",
        }
    }

    const imageUrl = post.videoId
        ? `https://img.youtube.com/vi/${post.videoId}/maxresdefault.jpg`
        : post.image || "/placeholder.svg"

    return {
        title: `${post.title} | Dubai Real Estate Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [imageUrl],
        },
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    const hasVideo = !!post.videoId
    const imageUrl = hasVideo
        ? `https://img.youtube.com/vi/${post.videoId}/maxresdefault.jpg`
        : post.image || "/placeholder.svg"

    // JSON-LD structured data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: imageUrl,
        publisher: {
            "@type": "Organization",
            name: "Dubai Real Estate Blog",
            logo: {
                "@type": "ImageObject",
                url: "/logo.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://yourdomain.com/blog/${post.slug}`,
        },
        articleSection: post.category,
        keywords: `Dubai, Real Estate, ${post.category}, Property Investment`,
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="min-h-screen w-full  bg-black">
                {/* Hero Section - Full Width */}
                <div className="relative w-full container mx-auto pt-12 h-[60vh] md:h-[70vh] overflow-hidden">
                    {hasVideo ? (
                        <div className="relative w-full h-full">
                            <iframe
                                src={`https://www.youtube.com/embed/${post.videoId}`}
                                className="w-full h-full object-cover"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    ) : (
                        <img src={imageUrl || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                    {/* Hero Content - Inside Container */}
                    <div className="absolute inset-0 flex items-end">
                        <div className="container mx-auto px-4 pb-12 md:pb-16">
                            <div className="max-w-4xl space-y-6">
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
                                >
                                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                    <span className="text-sm font-medium">Back to Blog</span>
                                </Link>

                                <div className="space-y-4">
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                    {post.category}
                  </span>

                                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">{post.title}</h1>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                        {post.dateFormatted}
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Content - Inside Container */}
                    <article className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            {/* Excerpt */}
                            <div className="mb-12 pb-12 border-b border-border/30">
                                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">{post.excerpt}</p>
                            </div>

                            {/* Main Content */}
                            <div
                                className="prose prose-invert prose-lg max-w-none
                  prose-headings:font-serif prose-headings:font-bold prose-headings:text-white
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-white prose-strong:font-semibold
                  prose-ul:my-6 prose-li:text-muted-foreground
                  prose-img:rounded-2xl prose-img:my-8"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Related Posts */}
                            <div className="py-16 pt-12 border-t border-border/30">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8">Related Articles</h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {blogPosts
                                        .slice(0, 3)
                                        .map((relatedPost) => (
                                            <Link
                                                key={relatedPost.id}
                                                href={`/blog/${relatedPost.slug}`}
                                                className="group bg-card/20 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                                            >
                                                <div className="relative h-48 overflow-hidden">
                                                    <img
                                                        src={
                                                            relatedPost.videoId
                                                                ? `https://img.youtube.com/vi/${relatedPost.videoId}/maxresdefault.jpg`
                                                                : relatedPost.image || "/placeholder.svg"
                                                        }
                                                        alt={relatedPost.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                    {relatedPost.videoId && (
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                                            <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                                                                <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="p-6">
                                                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                                                        {relatedPost.title}
                                                    </h3>
                                                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                                                </div>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </article>
            </div>
        </>
    )
}
