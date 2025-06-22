import { Heart, Facebook } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-[#EBEBEB] px-4 py-12">
      <div className="max-w-sm mx-auto md:max-w-6xl">
        {/* Brand Section - Mobile Optimized */}
        <div className="text-center mb-10">
            <div className="mb-4">
              <span className="text-xl font-semibold md:text-2xl">Contact</span>
            </div>
            <p className="text-[#EBEBEB]/90 text-sm leading-relaxed md:text-base md:max-w-md md:mx-auto">
              Have questions or project inquiries? Feel free to reach out we're here to help.
            </p>
          </div>


        {/* Social Links - Mobile Stack */}
        <div className="space-y-4 mb-10 md:flex md:items-center md:justify-center md:gap-8 md:space-y-0">
          {/* Facebook Link */}
          <Link
            href="https://www.facebook.com/profile.php?id=61577572921830"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-4 p-4 bg-[#EBEBEB]/5 rounded-xl hover:bg-[#1877F2]/20 transition-all duration-300 active:scale-95"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#1877F2] transition-colors duration-300 md:w-10 md:h-10">
              <Facebook className="w-6 h-6 md:w-5 md:h-5" />
            </div>
            <div className="flex-1 text-left md:flex-none">
              <div className="font-medium text-[#EBEBEB]">KRLN</div>
              <div className="text-xs text-[#EBEBEB]/60 md:hidden">Message us on Facebook</div>
            </div>
          </Link>

          {/* TikTok Link */}
          <Link
            href="https://www.tiktok.com/@krelq"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-4 p-4 bg-[#EBEBEB]/5 rounded-xl hover:bg-[#000000]/20 transition-all duration-300 active:scale-95"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#000000] transition-colors duration-300 md:w-10 md:h-10">
              <svg className="w-6 h-6 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.76 20.5a6.34 6.34 0 0 0 10.86-4.43V7.83a8.2 8.2 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.8-.26z" />
              </svg>
            </div>
            <div className="flex-1 text-left md:flex-none">
              <div className="font-medium text-[#EBEBEB]">@krelq</div>
              <div className="text-xs text-[#EBEBEB]/60 md:hidden">Message us on TikTok</div>
            </div>
          </Link>
        </div>

        {/* Copyright - Mobile Optimized */}
        <div className="border-t border-[#EBEBEB]/20 pt-6">
          <div className="text-center space-y-3 md:flex md:items-center md:justify-between md:space-y-0">
            <p className="text-[#EBEBEB] text-xs md:text-sm">&copy; 2025 KRLN. All rights reserved.</p>
            <div className="flex items-center justify-center gap-1 text-[#EBEBEB] text-xs md:text-sm">
              <span>Created</span>
             
              <span>by KRLN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
