import type React from "react"
import type {Metadata} from "next"
import {Playfair_Display, Inter} from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar";
import {StickyFooter} from "@/components/sticky-footer";

const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
})

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
})

export const metadata: Metadata = {
    title: "Brad Margison - Real Estate Broker",
    description:
        "Experienced real estate broker specializing in residential, commercial, and investment properties. Your trusted partner in finding the perfect property.",
    generator: "v0.app",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`dark ${playfairDisplay.variable} ${inter.variable}`}>
        <body className="dark font-sans">
        <Navbar/>
        {children}
        <StickyFooter/>
        </body>
        </html>
    )
}
