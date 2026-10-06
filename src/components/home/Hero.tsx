import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CreditCard, Store, Sparkles, ChevronDown } from 'lucide-react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)

  const smoothP = useRef(0)
  const rafRef = useRef(0)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    let targetP = 0

    const updateTarget = () => {
      const rect = section.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      targetP = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      smoothP.current = lerp(smoothP.current, targetP, 0.07)
      const p = smoothP.current

      // — Scrub video timeline with scroll —
      if (video.duration && !isNaN(video.duration)) {
        const t = p * video.duration
        if (Math.abs(video.currentTime - t) > 0.016) {
          video.currentTime = t
        }
      }

      // — 3D parallax on the video scene —
      const scene = sceneRef.current
      if (scene) {
        const rotX = lerp(10, -14, p)
        const rotY = lerp(-6, 9, p)
        const scale = lerp(0.82, 1.08, p)
        const tz = lerp(-80, 50, p)
        scene.style.transform = `translateZ(${tz}px) scale(${scale}) rotateX(${rotX}deg) rotateY(${rotY}deg)`
      }

      // — Text parallax (moves faster, fades out) —
      const txt = textRef.current
      if (txt) {
        const ty = lerp(0, -90, p)
        const op = lerp(1, 0, Math.min(p * 2, 1))
        txt.style.transform = `translateY(${ty}px)`
        txt.style.opacity = String(op)
      }

      // — Decorative blobs parallax (slowest layer) —
      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate3d(0, ${lerp(0, 140, p)}px, -120px)`
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate3d(0, ${lerp(0, -100, p)}px, -90px)`
      }

      // — Scroll hint fades quickly —
      if (hintRef.current) {
        hintRef.current.style.opacity = String(lerp(1, 0, Math.min(p * 5, 1)))
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    updateTarget()
    rafRef.current = requestAnimationFrame(tick)
    window.addEventListener('scroll', updateTarget, { passive: true })
    window.addEventListener('resize', updateTarget)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('scroll', updateTarget)
      window.removeEventListener('resize', updateTarget)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative" style={{ height: '300vh' }}>
      <div
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-light-blue via-bg-main to-bg-main"
        style={{ perspective: '1400px' }}
      >
        {/* Parallax decorative blobs */}
        <div
          ref={blob1Ref}
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <div
          ref={blob2Ref}
          className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-primary-light/10 blur-3xl"
          style={{ transformStyle: 'preserve-3d' }}
        />

        {/* 3D Video Scene */}
        <div
          ref={sceneRef}
          className="relative z-10 will-change-transform"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(-80px) scale(0.82) rotateX(10deg) rotateY(-6deg)',
          }}
        >
          <video
            ref={videoRef}
            src="/asapay-logo.mp4"
            muted
            playsInline
            preload="auto"
            className="max-h-[72vh] max-w-[90vw] rounded-3xl shadow-2xl shadow-primary/20"
          />

        </div>

        {/* Text overlay with parallax */}
        <div
          ref={textRef}
          className="absolute inset-x-0 bottom-0 z-20 px-4 pb-10 text-center sm:pb-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            اعتبار خرید، ساده و مطمئن
          </div>
          <h1 className="text-3xl font-bold leading-tight text-dark-blue sm:text-4xl lg:text-5xl">
            با آساپی، خریدت رو آسون‌تر کن
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-8 text-text-main/70 lg:text-lg">
            اعتبار خرید دریافت کن و کالا و خدمات موردنیازت رو از پذیرندگان آساپی تهیه کن.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/services" className="btn-primary w-full sm:w-auto">
              <CreditCard className="h-5 w-5" />
              دریافت اعتبار
            </Link>
            <Link to="/merchants" className="btn-outline w-full sm:w-auto">
              <Store className="h-5 w-5" />
              مشاهده پذیرندگان
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          ref={hintRef}
          className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2 text-primary/50"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
