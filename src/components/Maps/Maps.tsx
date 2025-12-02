import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Maps.css'
import AscentMap from '../../assets/Maps/Ascent-map.svg'
import BindMap from '../../assets/Maps/Bind-map.svg'
import HavenMap from '../../assets/Maps/Haven-map.svg'
import SplitMap from '../../assets/Maps/Split-map.svg'

gsap.registerPlugin(ScrollTrigger)

const maps = [
  { name: 'Ascent', image: AscentMap },
  { name: 'Bind', image: BindMap },
  { name: 'Haven', image: HavenMap },
  { name: 'Split', image: SplitMap },
]

const Maps = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const imagesRef = useRef<HTMLImageElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 120,
        scale: 0.7,
        duration: 1.1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="maps-section" aria-label="Valorant maps gallery">
      <div className="maps-grid">
        {maps.map((map, index) => (
          <div
            key={map.name}
            ref={(el) => {
              if (el) cardsRef.current[index] = el
            }}
            className="map-card"
          >
            <img
              ref={(el) => {
                if (el) imagesRef.current[index] = el
              }}
              src={map.image}
              alt={`${map.name} map`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Maps

