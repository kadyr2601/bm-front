"use client"
import {useEffect, useState} from "react"
import Link from "next/link"
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
import Image from "next/image";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isMobileMenuOpen])

    return (
        <header className={`pt-4 w-full bg-black`}>
            <div
                className={`mx-auto hidden items-center justify-between self-start rounded-full bg-background/90 md:flex backdrop-blur-md border border-border/40 container shadow-xl px-4 py-3`}>


                <nav className="flex flex-row items-center justify-center gap-2 text-sm font-medium">
                    <Link
                        href="/about"
                        className="relative px-5 py-2.5 text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-accent/50 border border-transparent hover:border-border/50 hover:shadow-md group"
                    >
                        <span className="relative z-20">About</span>
                    </Link>
                    <Link
                        href="/insights"
                        className="relative px-5 py-2.5 text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-accent/50 border border-transparent hover:border-border/50 hover:shadow-md group"
                    >
                        <span className="relative z-20">Insights</span>
                    </Link>
                    <Link
                        href="/blog"
                        className="relative px-5 py-2.5 text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-accent/50 border border-transparent hover:border-border/50 hover:shadow-md group"
                    >
                        <span className="relative z-20">Blog</span>
                    </Link>
                </nav>
                <Link className="z-50 transition-all duration-300 hover:scale-105" href="/">
                    <Image src="/logo.png" alt="Logo" width={170} height={180} className={'object-cover'}/>
                </Link>
                <div
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded-full bg-accent/30 border border-border/30">
                    <a
                        href="https://www.linkedin.com/in/brad-margison-266549b0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="w-4 h-4"/>
                    </a>
                    <a
                        href="https://www.facebook.com/brad.margison.1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                        aria-label="Facebook"
                    >
                        <FaFacebook className="w-4 h-4"/>
                    </a>
                    <a
                        href="https://x.com/bradmrgison"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-foreground hover:bg-foreground/10 hover:border-foreground/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                        aria-label="X"
                    >
                        <FaXTwitter className="w-4 h-4"/>
                    </a>
                    <a
                        href="https://www.instagram.com/brad.margison/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-[#E4405F] hover:bg-[#E4405F]/10 hover:border-[#E4405F]/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <FaInstagram className="w-4 h-4"/>
                    </a>

                    <div className="w-px h-6 bg-border/40 mx-1"/>

                    <a
                        href="https://www.youtube.com/channel/UCx2oaBdvr59AHtIDv6RMM6Q"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-[#FF0000] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                        aria-label="YouTube"
                    >
                        <FaYoutube className="w-4 h-4"/>
                    </a>
                    <a
                        href="https://wa.me/971528667010"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp className="w-4 h-4"/>
                    </a>
                    <a
                        href="https://t.me/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-[#0088cc] hover:bg-[#0088cc]/10 hover:border-[#0088cc]/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                        aria-label="Telegram"
                    >
                        <FaTelegram className="w-4 h-4"/>
                    </a>
                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-background/50 border border-border/20 text-muted-foreground hover:text-foreground hover:bg-foreground/10 hover:border-foreground/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                        aria-label="TikTok"
                    >
                        <FaTiktok className="w-4 h-4"/>
                    </a>
                </div>
            </div>

            <div className="md:hidden mx-4">
                <div
                    className="sticky top-4 z-50 flex w-full flex-row items-center justify-between rounded-full bg-background/90 backdrop-blur-md border border-border/40 shadow-xl px-5 py-3">
                    <Link
                        className="flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
                        href="/"
                    >
                        <Image src="/logo.png" alt="Logo" width={150} height={140} className={'object-cover'}/>
                    </Link>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex items-center justify-center w-11 h-11 rounded-full bg-accent/50 border border-border/40 transition-all duration-300 hover:bg-accent hover:scale-105 active:scale-95"
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1.5">
              <span
                  className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
                            <span
                                className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                            ></span>
                            <span
                                className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                            ></span>
                        </div>
                    </button>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                        isMobileMenuOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                >
                    <div
                        className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl p-6">
                        <nav className="flex flex-col space-y-2">
                            <Link
                                href="/about"
                                className="text-left px-5 py-4 text-lg font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-xl hover:bg-accent/50 active:scale-95"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/insights"
                                className="text-left px-5 py-4 text-lg font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-xl hover:bg-accent/50 active:scale-95"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Insights
                            </Link>
                            <Link
                                href="/blog"
                                className="text-left px-5 py-4 text-lg font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-xl hover:bg-accent/50 active:scale-95"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>
                        </nav>

                        <div className="border-t border-border/50 pt-6 mt-6">
                            <p className="text-sm font-semibold text-foreground/80 mb-4 px-2">Connect with me</p>
                            <div className="grid grid-cols-4 gap-3">
                                <a
                                    href="https://www.linkedin.com/in/brad-margison-266549b0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center h-14 rounded-xl bg-accent/50 border border-border/30 text-muted-foreground hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 active:scale-95 transition-all duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin className="w-5 h-5"/>
                                </a>
                                <a
                                    href="https://www.facebook.com/brad.margison.1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center h-14 rounded-xl bg-accent/50 border border-border/30 text-muted-foreground hover:text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30 active:scale-95 transition-all duration-300"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook className="w-5 h-5"/>
                                </a>
                                <a
                                    href="https://x.com/bradmrgison"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center h-14 rounded-xl bg-accent/50 border border-border/30 text-muted-foreground hover:text-foreground hover:bg-foreground/10 hover:border-foreground/30 active:scale-95 transition-all duration-300"
                                    aria-label="X"
                                >
                                    <FaXTwitter className="w-5 h-5"/>
                                </a>
                                <a
                                    href="https://www.instagram.com/brad.margison/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center h-14 rounded-xl bg-accent/50 border border-border/30 text-muted-foreground hover:text-[#E4405F] hover:bg-[#E4405F]/10 hover:border-[#E4405F]/30 active:scale-95 transition-all duration-300"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram className="w-5 h-5"/>
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCx2oaBdvr59AHtIDv6RMM6Q"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center h-14 rounded-xl bg-accent/50 border border-border/30 text-muted-foreground hover:text-[#FF0000] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/30 active:scale-95 transition-all duration-300"
                                    aria-label="YouTube"
                                >
                                    <FaYoutube className="w-5 h-5"/>
                                </a>
                                <a
                                    href="https://wa.me/971528667010"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center h-14 rounded-xl bg-accent/50 border border-border/30 text-muted-foreground hover:text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/30 active:scale-95 transition-all duration-300"
                                    aria-label="WhatsApp"
                                >
                                    <FaWhatsapp className="w-5 h-5"/>
                                </a>
                                <a
                                    href="https://t.me/username"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center h-14 rounded-xl bg-accent/50 border border-border/30 text-muted-foreground hover:text-[#0088cc] hover:bg-[#0088cc]/10 hover:border-[#0088cc]/30 active:scale-95 transition-all duration-300"
                                    aria-label="Telegram"
                                >
                                    <FaTelegram className="w-5 h-5"/>
                                </a>
                                <a
                                    href="https://tiktok.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center h-14 rounded-xl bg-accent/50 border border-border/30 text-muted-foreground hover:text-foreground hover:bg-foreground/10 hover:border-foreground/30 active:scale-95 transition-all duration-300"
                                    aria-label="TikTok"
                                >
                                    <FaTiktok className="w-5 h-5"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
