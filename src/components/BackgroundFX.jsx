import React, { useEffect, useRef } from 'react'

// Subtle parallax and twinkling gold particles across the page
export default function BackgroundFX() {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(0, ${y * 0.1}px, 0)`
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden" aria-hidden>
      {/* Deep space gradient base */}
      <div className="absolute inset-0 bg-[#03030A]" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_70%_-10%,rgba(131,88,255,0.25)_0%,transparent_60%),radial-gradient(900px_700px_at_20%_10%,rgba(255,255,255,0.08)_0%,transparent_55%)]" />

      {/* Gold nebula wisps */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(800px 600px at 20% 30%, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.02) 55%, transparent 70%), radial-gradient(700px 500px at 80% 60%, rgba(212,175,55,0.10) 0%, rgba(212,175,55,0.02) 55%, transparent 70%)',
          filter: 'blur(16px)'
        }}
      />

      {/* Twinkling particles */}
      <Stars />
    </div>
  )
}

function Stars({ count = 80 }) {
  const stars = Array.from({ length: count })
  return (
    <div className="absolute inset-0">
      {stars.map((_, i) => {
        const left = Math.random() * 100
        const top = Math.random() * 100
        const size = Math.random() * 2 + 1
        const delay = Math.random() * 5
        const duration = 3 + Math.random() * 4
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              background: 'rgba(212,175,55,0.9)',
              boxShadow: '0 0 8px rgba(212,175,55,0.8), 0 0 16px rgba(212,175,55,0.3)',
              animation: `twinkle ${duration}s ease-in-out ${delay}s infinite`
            }}
          />
        )
      })}
    </div>
  )
}
