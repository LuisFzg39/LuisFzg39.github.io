import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ThirdSection.css'
import SectionThreeImage from '../../assets/Section3-img.svg'
import PlaceWord from '../../assets/PLACE.svg'

gsap.registerPlugin(ScrollTrigger)

const ThirdSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const artRef = useRef<HTMLDivElement>(null)
  const wordRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de la palabra "PLACE" con rotación y efecto especial
      const wordTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
      wordTl
        .from(wordRef.current, {
          opacity: 0,
          rotation: -25,
          scale: 0.5,
          x: -50,
          duration: 1.2,
          ease: 'back.out(1.7)',
        })
        .to(wordRef.current, {
          filter: 'drop-shadow(0 0 20px rgba(255, 70, 85, 0.6))',
          duration: 0.5,
        })

      // Animación continua de rotación sutil en "PLACE"
      gsap.to(wordRef.current, {
        rotation: 5,
        duration: 4,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      })

      // Animación del título
      gsap.from(titleRef.current, {
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

      // Animación del subtítulo
      gsap.from(subtitleRef.current, {
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        delay: 0.35,
      })

      // Animación del cuerpo
      gsap.from(bodyRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        delay: 0.5,
      })

      // Animación del botón
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
        delay: 0.65,
      })

      // Efecto hover avanzado en el botón
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

      // Animación de la imagen desde la derecha con zoom
      gsap.from(artRef.current, {
        opacity: 0,
        x: 100,
        scale: 0.85,
        rotation: 5,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      // Efecto parallax en la imagen
      gsap.to(imageRef.current, {
        y: -40,
        x: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      // Animación continua de flotación en la imagen
      gsap.to(imageRef.current, {
        y: -15,
        rotation: 2,
        duration: 5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="third-section" aria-labelledby="third-section-heading">
      <div className="third-section__wrapper">
        <div ref={contentRef} className="third-section__content">
          <img ref={wordRef} className="third-section__word" src={PlaceWord} aria-hidden="true" alt="" />
          <h2 ref={titleRef} id="third-section-heading" className="third-section__title">
            YOUR MAPS
          </h2>
          <h3 ref={subtitleRef} className="third-section__subtitle">FIGHT AROUND THE WORLD.</h3>
          <p ref={bodyRef} className="third-section__body">
            Each map is a playground to showcase your creative thinking. Purpose-built for
            team strategies, spectacular plays, and clutch moments. Make the play others
            will imitate for years to come.
          </p>
          <button ref={buttonRef} className="third-section__cta" type="button">
            Explore
          </button>
        </div>
        <div ref={artRef} className="third-section__art">
          <img ref={imageRef} src={SectionThreeImage} alt="Valorant map scenery" />
        </div>
      </div>
    </section>
  )
}

export default ThirdSection

