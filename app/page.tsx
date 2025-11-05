import Hero from "@/components/home/hero"
import Features from "@/components/features"
import {TestimonialsSection} from "@/components/testimonials"
import {NewReleasePromo} from "@/components/new-release-promo"
import {PricingSection} from "@/components/pricing-section"

export default function Home() {

    return (
        <div className="min-h-screen w-full relative bg-black">
            <Hero/>
            <Features/>
            <PricingSection/>
            <TestimonialsSection/>
            <NewReleasePromo/>
        </div>
    )
}
