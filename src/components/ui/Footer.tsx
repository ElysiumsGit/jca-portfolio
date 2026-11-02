import React from 'react'
import { ArrowUp } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0d0d] text-white">
      <div className="mx-auto flex min-h-[80px] max-w-380 flex-col items-center justify-between gap-5 border-t border-white/10 px-5 py-6 sm:flex-row sm:gap-4 sm:px-8 sm:py-0">

        {/* Left */}
        <div className="flex items-center gap-4">
          <a
            href="#top"
            className="text-[22px] font-bold tracking-tight"
          >
            JC<span className="text-blue-500">.</span>
          </a>

          <span className="text-[10px] text-white/40">
            © 2026 John Carlo Abanes
          </span>
        </div>

        {/* Center */}
        <p className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 md:block">
          Built with intention.
        </p>

        {/* Right */}
        <a
          href="#top"
          className="group flex items-center gap-3 text-[10px] text-white/60 transition-colors hover:text-white"
        >
          <span>Back to top</span>
          <ArrowUp
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </footer>
  )
}
