import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Play, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#03030A] text-white">
      {/* Spline 3D cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_70%_20%,rgba(3,3,10,0.2),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,10,0.6)_0%,rgba(3,3,10,0.8)_35%,rgba(3,3,10,0.9)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>Tibeb (ጥበብ) — AI GitHub Repo Summaries</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-[#F3F4F7] sm:text-5xl md:text-6xl">
            Extract the Wisdom in Your Code — Instantly.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            AI-powered repo summaries, file-level insights, auto-generated content, and tools that supercharge developers.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#demo-dashboard"
              className="group inline-flex items-center justify-center rounded-xl bg-[#D4AF37] px-5 py-3 text-[15px] font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.35)] transition duration-300 hover:brightness-110 hover:shadow-[0_12px_36px_rgba(212,175,55,0.5)]"
            >
              Summarize a Repo — Free
            </a>
            <a
              href="#video"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-[15px] font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Play className="mr-2 h-4 w-4" /> Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Floating glass dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="relative mt-16 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl"
        >
          <div className="rounded-xl border border-white/10 bg-[#0A0F18]/60 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs text-white/50">tibeb.app — Dashboard</div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-5">
              <div className="md:col-span-2 space-y-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-xs uppercase tracking-wide text-white/60">Repos</div>
                  <div className="mt-2 space-y-2 text-sm">
                    {['openai/gpt', 'vercel/next.js', 'facebook/react', 'pallets/flask'].map((r) => (
                      <div key={r} className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2 text-white/80 hover:bg-white/10">
                        <span>{r}</span>
                        <span className="rounded-md bg-[#D4AF37]/15 px-2 py-0.5 text-[11px] text-[#D4AF37]">Summarized</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-xs uppercase tracking-wide text-white/60">Export</div>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    {['PDF','MD','Tweet','LinkedIn'].map((e) => (
                      <button key={e} className="rounded-md border border-white/10 bg-[#0A0F18]/60 px-3 py-1 text-white/80 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]">{e}</button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 space-y-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>Summary</span>
                    <span className="text-[#D4AF37]">AI</span>
                  </div>
                  <pre className="mt-2 max-h-52 overflow-auto rounded-md bg-[#0B0F19] p-3 text-[12px] leading-5 text-white/80"><code>• High-level architecture: monorepo with packages for UI, API, embeddings
• Key flows: indexing -> chunking -> embedding -> retrieval -> generation
• Strengths: modular, test coverage, thoughtful DX utilities
• Risks: large binary assets, duplicated scripts across packages
• Suggested improvements: consolidate CI, add repo-level CODEOWNERS, adopt changesets
</code></pre>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <div className="text-sm text-white/60">File-level Insights</div>
                    <ul className="mt-2 space-y-1 text-[13px] text-white/80">
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D4AF37]" /> auth/service.ts — duplicated error handling</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D4AF37]" /> cli/index.ts — add --dry-run flag</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D4AF37]" /> api/routes/repo.ts — cache heavy endpoints</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <div className="text-sm text-white/60">Docs Generator</div>
                    <div className="mt-2 rounded-md bg-[#0B0F19] p-3 text-[12px] text-white/80">
                      README.md → updated badges, quickstart, architecture diagram
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
