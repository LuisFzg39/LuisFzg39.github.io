import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RazeImage from '../../assets/RazeSection2-img.svg'
import ReynaImage from '../../assets/ReynaSection2-img.svg'
import './SecondSection.css'

gsap.registerPlugin(ScrollTrigger)

const SecondSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const artRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const reynaRef = useRef<HTMLImageElement>(null)
  const razeRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de Reyna con efecto especial
      const reynaTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })
      reynaTl
        .from(reynaRef.current, {
          opacity: 0,
          x: -150,
          scale: 0.8,
          rotation: -10,
          duration: 1.2,
          ease: 'power3.out',
        })
        .to(reynaRef.current, {
          filter: 'drop-shadow(0 0 15px rgba(255, 70, 85, 0.4))',
          duration: 0.5,
        })

      // Animación de Raze con efecto especial
      const razeTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })
      razeTl
        .from(razeRef.current, {
          opacity: 0,
          x: 150,
          scale: 0.8,
          rotation: 10,
          duration: 1.2,
          ease: 'power3.out',
        })
        .to(razeRef.current, {
          filter: 'drop-shadow(0 0 15px rgba(255, 70, 85, 0.4))',
          duration: 0.5,
        })

      // Animaciones continuas de flotación para los agentes
      gsap.to(reynaRef.current, {
        y: -15,
        rotation: -2,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      })

      gsap.to(razeRef.current, {
        y: -15,
        rotation: 2,
        duration: 3.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      })

      // Animación del título
      gsap.from(titleRef.current, {
        opacity: 0,
        x: 100,
        scale: 0.9,
        duration: 0.9,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })

      // Animación del subtítulo con efecto wave
      gsap.from(subtitleRef.current, {
        opacity: 0,
        x: 80,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        delay: 0.15,
      })

      // Animación del cuerpo
      gsap.from(bodyRef.current, {
        opacity: 0,
        x: 60,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        delay: 0.3,
      })

      // Animación del botón
      gsap.from(buttonRef.current, {
        opacity: 0,
        x: 40,
        scale: 0.8,
        rotation: 5,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        delay: 0.45,
      })

      // Efecto hover avanzado en el botón
      buttonRef.current?.addEventListener('mouseenter', () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          x: 5,
          backgroundColor: '#161F29',
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

      // Efecto parallax avanzado en scroll para los agentes
      gsap.to(reynaRef.current, {
        x: -30,
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      gsap.to(razeRef.current, {
        x: 0,
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="second-section" aria-labelledby="second-section-title">
      <div className="second-section__wrapper">

        <div ref={artRef} className="second-section__art">
          <img
            ref={reynaRef}
            src={ReynaImage}
            alt="Reyna standing confidently"
            className="second-section__agent second-section__agent--reyna"
          />
          <img
            ref={razeRef}
            src={RazeImage}
            alt="Raze ready for battle"
            className="second-section__agent second-section__agent--raze"
          />
        </div>
        <div ref={contentRef} className="second-section__content">
          <h2 ref={titleRef} className="second-section__title" id="second-section-title">
            PROVE YOUR SKILL
          </h2>
          <h3 ref={subtitleRef} className="second-section__subtitle">CREATIVITY IS YOUR GREATEST WEAPON.</h3>
          <p ref={bodyRef} className="second-section__body">
            More than guns and bullets, you&apos;ll choose an Agent armed with adaptive,
            swift, and lethal abilities that create opportunities to let your gunplay
            shine. No two Agents play alike, just as no two highlight reels will look the
            same.
          </p>
          <button ref={buttonRef} className="second-section__cta" type="button">
            DOWNLOAD NOW
          </button>
        </div>
      </div>
    </section>
  )
}

export default SecondSection

