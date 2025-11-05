"use client"
import type React from "react"
import { Home, TrendingUp, Users } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const services = [
    {
      icon: Home,
      title: "Luxury Property Sales",
      description:
        "Specializing in the sale of high-end residential properties, ensuring maximum value for your asset.",
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Providing strategic advice to help you build a profitable real estate portfolio in Dubai.",
    },
    {
      icon: Users,
      title: "Buyer Representation",
      description: "Expertly navigating the market to find your perfect luxury home or investment property.",
    }
  ]

  return (
    <section id="services" className="relative overflow-hidden py-8 sm:py-12 bg-black">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 flex flex-col items-center"
      >
        <h2
          className={cn(
            "text-white text-center text-4xl font-semibold tracking-tight md:text-5xl mb-4",
            geist.className,
          )}
        >
          Services Offered
        </h2>
        <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl">
          Expert guidance for every step of your real estate journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
