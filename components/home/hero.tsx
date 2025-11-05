"use client"

import {motion} from "framer-motion"
import {useState, useEffect} from "react"
import Image from "next/image"

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
        <div className="container mx-auto px-4 py-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                className="relative overflow-hidden rounded-3xl min-h-[500px] sm:min-h-[600px] flex flex-col justify-center"
            >
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/dubai.webp"
                        alt="Dubai Luxury Real Estate"
                        fill
                        className="object-cover"
                    />
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"/>
                </div>

                <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-16 sm:py-20">
                    <motion.h1
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl text-balance leading-tight"
                    >
                        37 Years of Unmatched Real Estate Expertise in Dubai
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl"
                    >
                        Guiding you through Dubai's luxury property market with integrity and precision.
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.3}}
                    >
                        <a
                            href="#contact"
                            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                        >
                            Schedule Your Consultation
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.4}}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
            >
                <div
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
                    <div className="text-sm text-gray-400 mb-2">Experience</div>
                    <div className="text-4xl font-bold text-white">
                        {experienceCount}
                        <span className="text-primary">+</span> Years
                    </div>
                </div>

                <div
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
                    <div className="text-sm text-gray-400 mb-2">Properties Sold</div>
                    <div className="text-4xl font-bold text-white">
                        {propertiesCount.toLocaleString()}
                        <span className="text-primary">+</span>
                    </div>
                </div>

                <div
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
                    <div className="text-sm text-gray-400 mb-2">Satisfied Clients</div>
                    <div className="text-4xl font-bold text-white">
                        {clientsCount}
                        <span className="text-primary">+</span>
                    </div>
                </div>

                <div
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
                    <div className="text-sm text-gray-400 mb-2">Total Sales</div>
                    <div className="text-4xl font-bold text-white">
                        <span className="text-primary">$</span>
                        {salesCount} Billion<span className="text-primary">+</span>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
