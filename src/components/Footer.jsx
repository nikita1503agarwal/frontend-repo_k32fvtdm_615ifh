import React from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#03030A] px-6 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_400px_at_80%_10%,rgba(212,175,55,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="text-2xl font-semibold text-[#D4AF37]">Tibeb (ጥበብ)</div>
            <p className="mt-2 text-sm text-white/70">Built for developers. Powered by AI.</p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-white/75">
            {['Features','Docs','Pricing','Blog','Login'].map((l)=> (
              <a key={l} href="#" className="hover:text-[#D4AF37]">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="GitHub" className="text-white/70 transition hover:text-[#D4AF37]"><Github className="h-5 w-5"/></a>
            <a href="#" aria-label="Twitter" className="text-white/70 transition hover:text-[#D4AF37]"><Twitter className="h-5 w-5"/></a>
            <a href="#" aria-label="LinkedIn" className="text-white/70 transition hover:text-[#D4AF37]"><Linkedin className="h-5 w-5"/></a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © 2025 Tibeb. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
