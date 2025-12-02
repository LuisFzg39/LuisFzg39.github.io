import { useEffect, useRef } from 'react'
import ValorantTitle from '../../assets/Valorant-title.svg'
import { initHeroButtonHover, initHeroScrollTimeline } from '../../animations/heroAnimations.ts'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLImageElement | null>(null)
  const ctaRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !ctaRef.current) return

    const cleanupScroll = initHeroScrollTimeline(heroRef.current, titleRef.current, ctaRef.current)
    const cleanupHover = initHeroButtonHover(ctaRef.current)

    return () => {
      cleanupScroll?.()
      cleanupHover?.()
    }
  }, [])

  return (
    <section className="hero" aria-labelledby="hero-heading" ref={heroRef}>
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__inner">
        <img
          src={ValorantTitle}
          alt="Valorant"
          id="hero-heading"
          className="hero__title"
          ref={titleRef}
        />
        <button className="hero__cta" type="button" ref={ctaRef}>
          <span>Play now</span>
        </button>
      </div>
    </section>
  )
}

export default Hero
