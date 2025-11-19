import React from 'react'
import { motion } from 'framer-motion'
import { Github, Terminal, FileText, Download, Twitter, Linkedin, Share2, Bot, Layers, Sparkles, FolderTree, FileCode2, Play, ArrowRight } from 'lucide-react'

export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="relative w-full scroll-mt-24 bg-[#03030A] px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_400px_at_20%_10%,rgba(212,175,55,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>{eyebrow}</span>
            </div>
          )}
          <h2 className="mt-6 text-3xl font-semibold text-[#F3F4F7] sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 max-w-2xl text-white/70">{subtitle}</p>}
        </motion.div>
        <div className="relative mt-10">{children}</div>
      </div>
    </section>
  )
}

export function DashboardDemo() {
  return (
    <div id="demo-dashboard" className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-xl">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-4">
          <Card title="Repo Selection">
            <ul className="space-y-2 text-sm text-white/80">
              {['openai/gpt','vercel/next.js','facebook/react','nitrictech/cli'].map(r => (
                <li key={r} className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2 hover:bg-white/10">
                  <span>{r}</span>
                  <span className="text-[11px] text-[#D4AF37]">ready</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Export Options">
            <div className="flex flex-wrap gap-2 text-xs">
              {[{label:'PDF',icon:FileText},{label:'MD',icon:FileCode2},{label:'Tweet',icon:Twitter},{label:'LinkedIn',icon:Linkedin}].map(({label,icon:Icon}) => (
                <button key={label} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#0A0F18]/60 px-3 py-1.5 text-white/80 transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]">
                  <Icon className="h-3.5 w-3.5" /> {label}
                </button>
              ))}
            </div>
          </Card>
        </div>
        <div className="md:col-span-2 space-y-4">
          <Card title="File-level Summaries">
            <div className="grid gap-3 md:grid-cols-2">
              {['api/routes/repo.ts','cli/index.ts','ui/components/graph.tsx','docs/architecture.md'].map(f => (
                <div key={f} className="rounded-lg border border-white/10 bg-[#0B0F19] p-3 text-[12px] text-white/80">
                  <div className="mb-2 flex items-center justify-between text-white/60"><span>{f}</span><span className="text-[#D4AF37]">AI</span></div>
                  <p>Summarized key responsibilities, highlighted risks, and recommended refactors.</p>
                </div>
              ))}
            </div>
          </Card>
          <Card title="Insights & Docs Generator">
            <div className="rounded-md bg-[#0B0F19] p-3 text-[12px] leading-6 text-white/80">
              README suggests quickstart, contribution guide, and architecture diagram. Detected missing CODEOWNERS. Propose release strategy via changesets.
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export function VSCodeDemo() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-xl">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-[#0B0F19] p-3">
          <div className="mb-2 text-xs text-white/50">VSCode — Tibeb Sidebar</div>
          <ul className="space-y-1 text-[13px] text-white/80">
            {[{n:'src',d:true},{n:'api',d:true},{n:'cli',d:true},{n:'README.md',d:false}].map((i,idx)=>(
              <li key={idx} className="flex items-center justify-between rounded-md px-2 py-1 hover:bg-white/5">
                <div className="flex items-center gap-2">
                  <FolderTree className={`h-4 w-4 ${i.d ? 'text-[#D4AF37]' : 'text-white/50'}`}/>
                  <span>{i.n}</span>
                </div>
                <button className="text-xs text-[#D4AF37] hover:underline">Summarize</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#0B0F19] p-4">
          <div className="mb-2 flex items-center justify-between text-white/60"><span>AI Summary</span><span className="text-[#D4AF37]">Inline</span></div>
          <div className="space-y-2 text-[13px] text-white/80">
            <p>• File establishes REST routes and validation guards.</p>
            <p>• Consider caching responses and adding ETags.</p>
            <p>• Tests cover critical flows but miss error branches.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CLIDemo() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-xl">
      <div className="rounded-lg border border-white/10 bg-[#0B0F19] p-4 font-mono text-[13px] text-[#F3F4F7]">
        <div className="mb-3 text-white/60">Terminal — tibeb</div>
        <pre className="whitespace-pre-wrap">$ tibeb summarize .{"\n"}Generating summary…✨{"\n"}repo: 183 files • 1,245 commits • 12 contributors{"\n"}insights: architecture, hotspots, docs gaps{"\n\n"}$ tibeb watch repo{"\n"}Watching for new commits… real-time insights enabled{"\n\n"}$ tibeb export --markdown{"\n"}Saved to ./summary.md</pre>
        <div className="mt-3 text-[#D4AF37]">█</div>
      </div>
    </div>
  )
}

export function ChromeDemo() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-xl">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-[#0B0F19] p-3">
          <div className="text-xs text-white/50">GitHub — Repository</div>
          <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white/80">
            <button className="rounded-md border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1.5 text-[#D4AF37] hover:bg-[#D4AF37]/15">Summarize this repo</button>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#0B0F19] p-4">
          <div className="mb-2 flex items-center justify-between text-white/60"><span>Sidebar Summary</span><span className="text-[#D4AF37]">Chrome</span></div>
          <div className="space-y-2 text-[13px] text-white/80">
            <p>Key files: src/index.ts, api/server.ts, docs/README.md</p>
            <p>Subfolder insights: src/utils — duplicated helpers; propose merge.</p>
            <p>Risks: Unpinned actions in CI, large LFS assets.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ContentDemo() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-xl">
      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Tweet Preview">
          <div className="rounded-md border border-white/10 bg-[#0B0F19] p-3 text-sm text-white/80">
            ⚡ Tibeb turns any repo into instant insights. File-by-file summaries, docs generator, and export to Tweet/LinkedIn. Try it free. #AI #DevTools
          </div>
          <div className="mt-3 flex gap-2 text-xs">
            <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#0A0F18]/60 px-3 py-1.5 text-white/80 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"><Share2 className="h-3.5 w-3.5"/>Share</button>
            <button className="rounded-md border border-white/10 bg-[#0A0F18]/60 px-3 py-1.5 text-white/80 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]">Regenerate tone</button>
          </div>
        </Card>
        <Card title="LinkedIn Preview">
          <div className="rounded-md border border-white/10 bg-[#0B0F19] p-3 text-sm text-white/80">
            Today I tried Tibeb — an AI assistant that summarizes GitHub repos and generates docs and content. It saved me hours reviewing a large codebase. Recommended!
          </div>
          <div className="mt-3 flex gap-2 text-xs">
            <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#0A0F18]/60 px-3 py-1.5 text-white/80 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"><Share2 className="h-3.5 w-3.5"/>Share</button>
            <button className="rounded-md border border-white/10 bg-[#0A0F18]/60 px-3 py-1.5 text-white/80 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]">Regenerate tone</button>
          </div>
        </Card>
        <Card title="Blog Outline">
          <ul className="space-y-2 text-sm text-white/80">
            <li>1. Why repo summarization matters</li>
            <li>2. How Tibeb analyzes architecture</li>
            <li>3. File-level insights</li>
            <li>4. Docs automation and exports</li>
            <li>5. CLI + IDE + Web — seamless flow</li>
          </ul>
          <div className="mt-3 flex gap-2 text-xs">
            <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#0A0F18]/60 px-3 py-1.5 text-white/80 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"><Download className="h-3.5 w-3.5"/>Export</button>
            <button className="rounded-md border border-white/10 bg-[#0A0F18]/60 px-3 py-1.5 text-white/80 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]">Multi-language</button>
          </div>
        </Card>
      </div>
    </div>
  )
}

function Card({ title, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-2xl transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(212,175,55,0.08)]">
      {title && <div className="mb-3 text-sm text-white/60">{title}</div>}
      {children}
    </div>
  )
}
