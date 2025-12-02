import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FirstSectionArt from '../../assets/FirstSection-element.svg'
import './FirstSection.css'

gsap.registerPlugin(ScrollTrigger)

const FirstSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const artRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        x: -100,
        rotation: -5,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })


      gsap.from(subtitleRef.current, {
        opacity: 0,
        x: -80,
        scale: 0.9,
        duration: 0.9,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        delay: 0.2,
      })

      gsap.from(bodyRef.current, {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        delay: 0.4,
      })

      gsap.from(buttonRef.current, {
        opacity: 0,
        x: -40,
        scale: 0.8,
        rotation: -5,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        delay: 0.6,
      })

      buttonRef.current?.addEventListener('mouseenter', () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          x: 5,
          backgroundColor: '#ff4655',
          color: '#fff',
          duration: 0.3,
          ease: 'power2.out',
        })
      })

      buttonRef.current?.addEventListener('mouseleave', () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          x: 0,
          boxShadow: '',
          backgroundColor: '',
          color: '',
          duration: 0.3,
          ease: 'power2.out',
        })
      })

      gsap.from(artRef.current, {
        opacity: 0,
        x: 100,
        scale: 1.3,
        rotation: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.to(artRef.current, {
        y: -30,
        rotation: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to(artRef.current, {
        y: 0,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="first-section" aria-labelledby="first-section-title">
      <div className="first-section__wrapper">
        <div ref={contentRef} className="first-section__content">
          <h2 ref={titleRef} className="first-section__title" id="first-section-title">
            WE ARE VALORANT
          </h2>
          <h3 ref={subtitleRef} className="first-section__subtitle">
            DEFY THE LIMITS
          </h3>
          <p ref={bodyRef} className="first-section__body">
            Blend your style and experience on a global, competitive stage. You have 13
            rounds to attack and defend your side using sharp gunplay and tactical
            abilities. And, with one life per-round, you'll need to think faster than your
            opponent if you want to survive. Take on foes across Competitive and
            Unranked modes as well as Deathmatch and Spike Rush.
          </p>
          <button ref={buttonRef} className="first-section__cta" type="button">
            LEARN THE GAME
          </button>
        </div>
        <div ref={artRef} className="first-section__art">
          <img src={FirstSectionArt} alt="Valorant agents in action" />
        </div>
      </div>
    </section>
  )
}

export default FirstSection

