"use client"
import Link from "next/link"
import { Linkedin, Instagram, Youtube, MessageCircle, Send, Music } from "lucide-react"
import Image from "next/image";

export function StickyFooter() {
  return (
    <footer className="relative z-10 w-full bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9">
          {/* Brand Section */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.png" alt="Logo" width={170} height={180} className={'object-cover'}/>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted partner in Dubai's luxury real estate market. Specializing in high-end properties and
              investment opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-5">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+971528667010" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  +971 52 866 7010
                </a>
              </li>
              <li>
                <a
                  href="mailto:brad@margison.ae"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  brad@margison.ae
                </a>
              </li>
              <li className="text-sm text-gray-400">
                Dubai Marina, Dubai
                <br />
                United Arab Emirates
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Brad Margison. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-primary hover:gray-400 transition-colors">
                Developed by Kadyr.dev
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
