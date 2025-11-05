"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, TrendingUp, Award, Users } from "lucide-react"

function useCounter(end: number, duration = 2000, start = 0) {
    const [count, setCount] = useState(start)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (hasAnimated) return

        setHasAnimated(true)
        let startTime: number | null = null
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)

            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOutQuart * (end - start) + start))

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [end, duration, start, hasAnimated])

    return count
}

export default function Hero() {
    const [mounted, setMounted] = useState(false)

    const experienceCount = useCounter(37, 2000)
    const propertiesCount = useCounter(1200, 2500)
    const clientsCount = useCounter(900, 2500)
    const salesCount = useCounter(1, 2000)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="relative overflow-hidden  to-muted/20">
            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                            <Award className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">37 Years of Excellence</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                            Discover Your
                            <span className="block text-primary mt-2">Dream Property</span>
                            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground mt-3">
                in Dubai's Premier Locations
              </span>
                        </h1>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                            Transform your vision into reality with personalized service and unmatched market expertise. We guide you
                            through every step of your real estate journey.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="https://wa.me/971528667010?text=Hi%2C%20I%27d%20like%20to%20schedule%20a%20consultation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Schedule Consultation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                            <div className="space-y-1">
                                <div className="text-2xl font-bold text-foreground">{propertiesCount.toLocaleString()}+</div>
                                <div className="text-xs text-muted-foreground">Properties Listed</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-2xl font-bold text-foreground">{clientsCount}+</div>
                                <div className="text-xs text-muted-foreground">Happy Clients</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-2xl font-bold text-foreground">${salesCount}B+</div>
                                <div className="text-xs text-muted-foreground">Sales Volume</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative h-[500px] lg:h-[600px]"
                    >
                        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/dubai.webp" alt="Dubai Luxury Real Estate" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="absolute top-8 right-8 bg-card/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Market Growth</div>
                                    <div className="text-lg font-bold text-foreground">+24%</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="absolute bottom-8 left-8 bg-card/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                                    <div className="text-lg font-bold text-foreground">98%</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        </div>
    )
}
