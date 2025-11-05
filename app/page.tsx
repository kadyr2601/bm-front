import type { Metadata } from "next"
import Hero from "@/components/home/hero"
import Features from "@/components/features"
import { TestimonialsSection } from "@/components/testimonials"
import { NewReleasePromo } from "@/components/new-release-promo"
import { PricingSection } from "@/components/pricing-section"

export const metadata: Metadata = {
    title: "Dubai Real Estate | Luxury Properties & Investment Opportunities",
    description:
        "Discover premium real estate opportunities in Dubai with 37 years of expertise. Explore luxury properties, investment insights, and personalized service in Dubai's most prestigious locations.",
    keywords:
        "Dubai real estate, luxury properties Dubai, Dubai property investment, Dubai apartments, Dubai villas, real estate Dubai, property Dubai",
    openGraph: {
        title: "Dubai Real Estate | Luxury Properties & Investment Opportunities",
        description:
            "Discover premium real estate opportunities in Dubai with 37 years of expertise. Explore luxury properties, investment insights, and personalized service.",
        type: "website",
        url: "https://bradmargisonproperties.com",
        siteName: "Dubai Real Estate",
        images: [
            {
                url: "/og-img.webp",
                width: 1200,
                height: 630,
                alt: "Dubai Real Estate - Luxury Properties",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Dubai Real Estate | Luxury Properties & Investment Opportunities",
        description:
            "Discover premium real estate opportunities in Dubai with 37 years of expertise. Explore luxury properties and investment insights.",
        images: ["/og-img.webp"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

export default function Home() {
    // JSON-LD structured data for Organization
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        name: "Dubai Real Estate",
        description:
            "Premium real estate services in Dubai with 37 years of expertise in luxury properties and investment opportunities.",
        url: "https://bradmargisonproperties.com",
        logo: "https://bradmargisonproperties.com/logo.png",
        image: "https://bradmargisonproperties.com/og-img.webp",
        telephone: "+971-XX-XXX-XXXX",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Your Street Address",
            addressLocality: "Dubai",
            addressCountry: "AE",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: "25.2048",
            longitude: "55.2708",
        },
        sameAs: [
            "https://www.facebook.com/yourpage",
            "https://www.instagram.com/yourpage",
            "https://www.linkedin.com/company/yourpage",
            "https://twitter.com/yourpage",
            "https://www.youtube.com/yourchannel",
        ],
        areaServed: {
            "@type": "City",
            name: "Dubai",
        },
        priceRange: "$$$",
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
            },
        ],
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="min-h-screen w-full relative bg-black">
                <Hero />
                <Features />
                <TestimonialsSection />
                <NewReleasePromo />
                <PricingSection />
            </div>
        </>
    )
}
