import React from 'react'
import BackgroundFX from './components/BackgroundFX'
import Hero from './components/Hero'
import Section, { DashboardDemo, VSCodeDemo, CLIDemo, ChromeDemo, ContentDemo } from './components/Section'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#03030A] text-white">
      {/* Global parallax gold nebula and stars */}
      <BackgroundFX />

      {/* Hero with Spline cover */}
      <Hero />

      {/* Dashboard Demo */}
      <Section
        eyebrow="Dashboard"
        title="See everything at a glance — clean, fast, intelligent."
        subtitle="Floating glass cards with golden highlights show summaries, insights, docs, and exports."
      >
        <DashboardDemo />
      </Section>

      {/* VSCode Extension Demo */}
      <Section
        eyebrow="VSCode Extension"
        title="Your AI copilots your repo — without leaving VSCode."
      >
        <VSCodeDemo />
      </Section>

      {/* CLI Demo */}
      <Section
        eyebrow="CLI Tool"
        title="Powerful command-line tools for fast, scriptable workflows."
      >
        <CLIDemo />
      </Section>

      {/* Chrome Extension Demo */}
      <Section
        eyebrow="Chrome Extension"
        title="Summaries on GitHub — instantly where you need them."
      >
        <ChromeDemo />
      </Section>

      {/* Content Generator Demo */}
      <Section
        eyebrow="Content Generator"
        title="Turn your code into shareable content — in one click."
      >
        <ContentDemo />
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
