'use client'
import { useRef} from "react"
import {motion, useInView, useScroll, useTransform} from "framer-motion"
import {ArrowRight, Phone} from "lucide-react";

export default function AboutPage() {

    return (
        <div className="min-h-screen w-full relative bg-black">
            <section className="relative overflow-hidden py-8 md:py-12">
                <div className="container mx-auto px-6">
                    <div className="relative overflow-hidden rounded-2xl border-2 border-border/40 bg-background shadow-2xl">
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Left Side - Text Content */}
                            <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex flex-col justify-center">
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
                                >
                                    Brad
                                    <br />
                                    <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                  Margison
                </span>
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="grid grid-cols-2 gap-6 mb-10 pb-10 border-b border-border/30"
                                >
                                    <div className="space-y-1.5">
                                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">
                                            37+
                                        </div>
                                        <div className="text-[10px] md:text-xs text-muted-foreground/70 uppercase tracking-[0.15em] font-medium">
                                            Years Experience
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">
                                            1.2K+
                                        </div>
                                        <div className="text-[10px] md:text-xs text-muted-foreground/70 uppercase tracking-[0.15em] font-medium">
                                            Properties Sold
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">
                                            $1B+
                                        </div>
                                        <div className="text-[10px] md:text-xs text-muted-foreground/70 uppercase tracking-[0.15em] font-medium">
                                            Total Sales
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">
                                            900+
                                        </div>
                                        <div className="text-[10px] md:text-xs text-muted-foreground/70 uppercase tracking-[0.15em] font-medium">
                                            Happy Clients
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <a
                                        href="tel:+1234567890"
                                        className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-primary-foreground bg-primary rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98]"
                                    >
                                        <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                                        <span className="relative z-10">Schedule Consultation</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                    </a>
                                    <a
                                        href="#timeline"
                                        className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-foreground bg-transparent border border-border/40 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm"
                                    >
                                        <span className="relative z-10">Explore My Journey</span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </motion.div>
                            </div>

                            {/* Right Side - Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="relative h-[400px] lg:h-full min-h-[500px] border-l border-border/40"
                            >
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20 z-10" />
                                <img
                                    src="/fw2.jpg"
                                    alt="Brad Margison - Dubai Real Estate Expert"
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent z-[5]" />
                            </motion.div>
                        </div>
                    </div>
                    {/* </CHANGE> */}
                </div>
            </section>

            <section id="timeline" className="container mx-auto px-4 py-20 max-w-6xl">
                <div className="space-y-20">
                    {/* Interactive Timeline */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6}}
                            className="text-center space-y-4"
                        >
                            <p className="text-primary text-sm font-semibold uppercase tracking-wider">My Journey</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-balance">An Interactive Timeline of
                                Experience</h2>
                            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-balance">
                                Tracing 37 years of dedication, growth, and landmark achievements in the Dubai real
                                estate sector.
                            </p>
                        </motion.div>

                        {/* Timeline */}
                        <TimelineSection/>
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 text-center space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">Ready to Find Your Dream Property?</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Let's discuss your real estate goals and explore the opportunities Dubai has to offer.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+1234567890"
                                className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-6 py-3"
                            >
                                Call Me Now
                            </a>
                            <a
                                href="/#contact"
                                className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-background/50 border border-border/50 text-foreground px-6 py-3"
                            >
                                Schedule a Meeting
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

function TimelineSection() {
    const timelineRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"],
    })

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    const timelineItems = [
        {
            year: "1987",
            title: "The Beginning",
            description:
                "Arrived in a burgeoning Dubai and took my first steps into the real estate world, witnessing the city's foundational growth.",
            side: "left",
        },
        {
            year: "2002",
            title: "Freehold Market Opens",
            description:
                "Pivotal year. Navigated the new laws allowing foreign ownership, opening Dubai to a global audience and shaping my expertise in international client relations.",
            side: "right",
        },
        {
            year: "2009",
            title: "Navigating the Downturn",
            description:
                "Successfully guided clients through the global financial crisis, reinforcing my commitment to long-term value and strategic advice.",
            side: "left",
        },
        {
            year: "2015",
            title: "Luxury Market Specialist",
            description:
                "Established myself as a leading expert in Dubai's luxury property sector, specializing in high-end developments across Palm Jumeirah and Downtown Dubai.",
            side: "right",
        },
        {
            year: "2020",
            title: "Digital Transformation",
            description:
                "Pioneered virtual property tours and digital client services, adapting to the new normal while maintaining personalized service excellence.",
            side: "left",
        },
        {
            year: "2024",
            title: "Continued Excellence",
            description:
                "Today, I continue to help clients navigate Dubai's dynamic real estate market, combining decades of experience with cutting-edge market insights and technology.",
            side: "right",
        },
    ]

    return (
        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
            {/* Animated vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/30 hidden md:block">
                <motion.div style={{height: lineHeight}}
                            className="w-full bg-gradient-to-b from-primary to-primary/50"/>
            </div>

            <div className="space-y-12 md:space-y-24">
                {timelineItems.map((item, index) => (
                    <TimelineItem key={index} item={item} index={index}/>
                ))}
            </div>
        </div>
    )
}

function TimelineItem({item, index}: { item: any; index: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: "-100px"})

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, x: item.side === "left" ? -50 : 50}}
            animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: item.side === "left" ? -50 : 50}}
            transition={{duration: 0.6, delay: index * 0.1}}
            className="relative grid md:grid-cols-2 gap-8 items-center"
        >
            {item.side === "left" ? (
                <>
                    <div className="md:text-right space-y-4">
                        <motion.div
                            initial={{opacity: 0, scale: 0.9}}
                            animate={isInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.9}}
                            transition={{duration: 0.5, delay: index * 0.1 + 0.2}}
                            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                        >
                            <p className="text-primary text-sm font-semibold">{item.year}</p>
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </motion.div>
                    </div>
                    <div className="hidden md:block"/>
                </>
            ) : (
                <>
                    <div className="hidden md:block"/>
                    <div className="space-y-4">
                        <motion.div
                            initial={{opacity: 0, scale: 0.9}}
                            animate={isInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.9}}
                            transition={{duration: 0.5, delay: index * 0.1 + 0.2}}
                            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                        >
                            <p className="text-primary text-sm font-semibold">{item.year}</p>
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </motion.div>
                    </div>
                </>
            )}

            {/* Animated timeline dot */}
            <motion.div
                initial={{scale: 0}}
                animate={isInView ? {scale: 1} : {scale: 0}}
                transition={{duration: 0.4, delay: index * 0.1 + 0.3}}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"
            >
                <motion.div
                    animate={isInView ? {scale: [1, 1.2, 1]} : {}}
                    transition={{duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1}}
                    className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50"
                />
            </motion.div>
        </motion.div>
    )
}
