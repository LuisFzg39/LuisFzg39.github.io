import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BrimstoneFullBody from '../../assets/Brimstone/Brimstone-fullbody.svg'
import BrimstonePfp from '../../assets/Brimstone/Brimstone-pfp.svg'
import BrimstoneAbility1 from '../../assets/Brimstone/BrimstoneAbility-1.svg'
import BrimstoneAbility2 from '../../assets/Brimstone/BrimstoneAbility-2.svg'
import BrimstoneAbility3 from '../../assets/Brimstone/BrimstoneAbility-3.svg'
import BrimstoneAbility4 from '../../assets/Brimstone/BrimstoneAbility-4.svg'
import JettFullBody from '../../assets/Jett/Jett-fullbody.svg'
import JettPfp from '../../assets/Jett/Jett-pfp.svg'
import JettAbility1 from '../../assets/Jett/JettAbility-1.svg'
import JettAbility2 from '../../assets/Jett/JettAbility-2.svg'
import JettAbility3 from '../../assets/Jett/JettAbility-3.svg'
import JettAbility4 from '../../assets/Jett/JettAbility-4.svg'
import PhoenixFullBody from '../../assets/Phoenix/Phoenix-fullbody.svg'
import PhoenixPfp from '../../assets/Phoenix/Phoenix-pfp.svg'
import PhoenixAbility1 from '../../assets/Phoenix/PhoenixAbility-1.svg'
import PhoenixAbility2 from '../../assets/Phoenix/PhoenixAbility-2.svg'
import PhoenixAbility3 from '../../assets/Phoenix/PhoenixAbility-3.svg'
import PhoenixAbility4 from '../../assets/Phoenix/PhoenixAbility-4.svg'
import SageFullBody from '../../assets/Sage/Sage-fullbody.svg'
import SagePfp from '../../assets/Sage/Sage-pfp.svg'
import SageAbility1 from '../../assets/Sage/SageAbility-1.svg'
import SageAbility2 from '../../assets/Sage/SageAbility-2.svg'
import SageAbility3 from '../../assets/Sage/SageAbility-3.svg'
import SageAbility4 from '../../assets/Sage/SageAbility-4.svg'
import ViperFullBody from '../../assets/Viper/Viper-fullbody.svg'
import ViperPfp from '../../assets/Viper/Viper-pfp.svg'
import ViperAbility1 from '../../assets/Viper/ViperAbility-1.svg'
import ViperAbility2 from '../../assets/Viper/ViperAbility-2.svg'
import ViperAbility3 from '../../assets/Viper/ViperAbility-3.svg'
import ViperAbility4 from '../../assets/Viper/ViperAbility-4.svg'
import './CharacterSelect.css'

gsap.registerPlugin(ScrollTrigger)

type Agent = {
  name: string
  role: string
  bio: string
  portrait: string
  fullBody: string
  abilities: string[]
}

const agents: Agent[] = [
  {
    name: 'Phoenix',
    role: 'DUELIST',
    bio:
      "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
    portrait: PhoenixPfp,
    fullBody: PhoenixFullBody,
    abilities: [PhoenixAbility1, PhoenixAbility2, PhoenixAbility3, PhoenixAbility4],
  },
  {
    name: 'Brimstone',
    role: 'CONTROLLER',
    bio:
      "Joining from the U.S.A., Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots on the ground commander.",
    portrait: BrimstonePfp,
    fullBody: BrimstoneFullBody,
    abilities: [BrimstoneAbility1, BrimstoneAbility2, BrimstoneAbility3, BrimstoneAbility4],
  },
  {
    name: 'Sage',
    role: 'SENTINEL',
    bio:
      "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she gives her team a calm center in the midst of a fight.",
    portrait: SagePfp,
    fullBody: SageFullBody,
    abilities: [SageAbility1, SageAbility2, SageAbility3, SageAbility4],
  },
  {
    name: 'Viper',
    role: 'CONTROLLER',
    bio:
      'The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy’s vision.',
    portrait: ViperPfp,
    fullBody: ViperFullBody,
    abilities: [ViperAbility1, ViperAbility2, ViperAbility3, ViperAbility4],
  },
  {
    name: 'Jett',
    role: 'DUELIST✦',
    bio:
      'Representing her home country of South Korea, Jett’s agile and evasive fighting style lets her take risks no one else can.',
    portrait: JettPfp,
    fullBody: JettFullBody,
    abilities: [JettAbility1, JettAbility2, JettAbility3, JettAbility4],
  },
]

const CharacterSelect = () => {
  const [activeAgent, setActiveAgent] = useState(agents[0])
  const [isAnimating, setIsAnimating] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const artRef = useRef<HTMLDivElement>(null)
  const thumbnailsRef = useRef<HTMLButtonElement[]>([])
  const titleRef = useRef<HTMLHeadingElement>(null)
  const abilitiesRef = useRef<HTMLDivElement>(null)
  const agentImageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación inicial de entrada del sidebar con efecto especial
      gsap.from(sidebarRef.current?.children || [], {
        opacity: 0,
        x: -50,
        rotation: -5,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })

      // Animación del título con efecto de brillo
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 0.9,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })

      // Animación continua de brillo en el título
      gsap.to(titleRef.current, {
        textShadow: '0 0 15px rgba(255, 70, 85, 0.5)',
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      // Animación de las habilidades con efecto especial
      const abilities = abilitiesRef.current?.children
      if (abilities) {
        gsap.from(abilities, {
          opacity: 0,
          scale: 0,
          rotation: -180,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.3,
        })
      }

      // Animación del resto del contenido
      const contentChildren = Array.from(contentRef.current?.children || []).filter(
        (child) => !child.contains(titleRef.current) && !child.contains(abilitiesRef.current)
      )
      gsap.from(contentChildren, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        delay: 0.5,
      })

      // Animación del arte con efecto especial
      gsap.from(artRef.current, {
        opacity: 0,
        x: 100,
        scale: 0.8,
        rotation: 5,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })

      // Animación continua de flotación en Phoenix
      gsap.to(agentImageRef.current, {
        y: -20,
        rotation: 2,
        duration: 4,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      })

      // Efecto parallax en Phoenix
      gsap.to(agentImageRef.current, {
        x: 20,
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // Animación avanzada de hover en los thumbnails
      thumbnailsRef.current.forEach((thumb, index) => {
        if (thumb) {
          const img = thumb.querySelector('img')

          thumb.addEventListener('mouseenter', () => {
            gsap.to(thumb, {
              scale: 1.15,
              y: -5,
              rotation: 5,
              duration: 0.3,
              ease: 'power2.out',
            })
            gsap.to(img, {
              filter: 'brightness(1.3) drop-shadow(0 0 10px rgba(255, 70, 85, 0.6))',
              duration: 0.3,
            })
            gsap.to(thumb, {
              boxShadow: '0 5px 20px rgba(255, 70, 85, 0.5)',
              duration: 0.3,
            })
          })

          thumb.addEventListener('mouseleave', () => {
            gsap.to(thumb, {
              scale: 1,
              y: 0,
              rotation: 0,
              duration: 0.3,
              ease: 'power2.out',
            })
            gsap.to(img, {
              filter: '',
              duration: 0.3,
            })
            gsap.to(thumb, {
              boxShadow: '',
              duration: 0.3,
            })
          })

          // Animación de entrada individual para cada thumbnail
          gsap.from(thumb, {
            opacity: 0,
            scale: 0,
            rotation: -90,
            duration: 0.5,
            delay: index * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!contentRef.current || !artRef.current || !agentImageRef.current) return

    setIsAnimating(true)
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: 'power2.out' },
      onComplete: () => setIsAnimating(false),
    })

    tl.to(
      [contentRef.current, artRef.current],
      { opacity: 0, y: 20, stagger: 0.05 },
      0,
    )
      .add(() => {
        if (agentImageRef.current) {
          agentImageRef.current.src = activeAgent.fullBody
          agentImageRef.current.alt = `${activeAgent.name} agent full body illustration`
        }
      })
      .add(() => {
        if (contentRef.current) {
          const heading = contentRef.current.querySelector('.character-select__title')
          const role = contentRef.current.querySelector('.character-select__meta-value')
          const bio = contentRef.current.querySelector('.character-select__body')
          const abilities = contentRef.current.querySelectorAll('.character-select__abilities img')

          if (heading) heading.textContent = activeAgent.name.toUpperCase()
          if (role) role.textContent = activeAgent.role
          if (bio) bio.textContent = activeAgent.bio
          abilities.forEach((node, index) => {
            const ability = activeAgent.abilities[index]
            if (ability) node.setAttribute('src', ability)
          })
        }
      })
      .fromTo(
        [contentRef.current, artRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.05 },
        0.65,
      )

    return () => {
      tl.kill()
    }
  }, [activeAgent])

  const handleAgentSelect = (agent: Agent) => {
    if (isAnimating || agent.name === activeAgent.name) return
    setActiveAgent(agent)
  }

  return (
    <section ref={sectionRef} className="character-select" aria-labelledby="character-select-heading">
      <div className="character-select__wrapper">
        <div ref={sidebarRef} className="character-select__sidebar">
          <span className="character-select__label">AGENT</span>
          <div className="character-select__list">
            {agents.map((agent, index) => (
              <button
                key={agent.name}
                ref={(el) => {
                  if (el) thumbnailsRef.current[index] = el
                }}
                className={`character-select__thumb ${
                  agent.name === activeAgent.name ? 'is-active' : ''
                }`}
                type="button"
                aria-label={agent.name}
                onClick={() => handleAgentSelect(agent)}
              >
                <img src={agent.portrait} alt="" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>

        <div ref={contentRef} className="character-select__content">
          <header className="character-select__header">
            <div>
              <h2 ref={titleRef} id="character-select-heading" className="character-select__title">
                {activeAgent.name.toUpperCase()}
              </h2>
            </div>
          </header>

          <div ref={abilitiesRef} className="character-select__abilities">
            {activeAgent.abilities.map((icon, index) => (
              <img key={index} src={icon} alt="" aria-hidden="true" />
            ))}
          </div>

          <div className="character-select__details">
            <div className="character-select__meta">
              <p className="character-select__meta-label">//Role</p>
              <p className="character-select__meta-value">{activeAgent.role}</p>
            </div>
            <div className="character-select__meta">
              <p className="character-select__meta-label">//Biography</p>
              <p className="character-select__body">
                {activeAgent.bio}
              </p>
            </div>
          </div>
        </div>

        <div ref={artRef} className="character-select__art">
          <img
            ref={agentImageRef}
            src={activeAgent.fullBody}
            alt={`${activeAgent.name} agent full body illustration`}
          />
        </div>
      </div>
    </section>
  )
}

export default CharacterSelect

