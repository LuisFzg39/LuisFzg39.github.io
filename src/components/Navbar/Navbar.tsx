import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import RiotGamesLogo from '../../assets/RiotGames-logo.svg'
import ValorantLogo from '../../assets/Valorant-logo.svg'
import SearchIcon from '../../assets/Search-icon.svg'
import WebIcon from '../../assets/Web-icon.svg'
import './Navbar.css'

const navItems = [
  { label: 'GAME INFO', dropdown: true },
  { label: 'MEDIA' },
  { label: 'NEWS' },
  { label: 'SUPPORT', dropdown: true },
  { label: 'OUR SOCIALS', dropdown: true },
  { label: 'ESPORTS', external: true },
  { label: 'MORE', dropdown: true },
]

const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null)
  const brandingRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLElement>(null)
  const actionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada desde arriba con efecto de rebote
      gsap.from(navbarRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      // Animación del branding con rotación
      gsap.from(brandingRef.current?.children || [], {
        opacity: 0,
        x: -30,
        rotation: -10,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.2,
      })

      // Animación de los links con efecto wave
      gsap.from(linksRef.current?.children || [], {
        opacity: 0,
        y: -20,
        scale: 0.9,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out',
        delay: 0.4,
      })

      // Animación de las acciones
      gsap.from(actionsRef.current?.children || [], {
        opacity: 0,
        x: 30,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.5,
      })

      // Efectos hover avanzados en los links
      const linkButtons = linksRef.current?.querySelectorAll('.navbar__link')
      linkButtons?.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          gsap.to(link, {
            y: -3,
            scale: 1.05,
            color: '#ff4655',
            duration: 0.2,
            ease: 'power2.out',
          })
          const caret = link.querySelector('.navbar__caret')
          if (caret) {
            gsap.to(caret, {
              rotation: 180,
              duration: 0.3,
              ease: 'power2.out',
            })
          }
        })

        link.addEventListener('mouseleave', () => {
          gsap.to(link, {
            y: 0,
            scale: 1,
            color: '',
            duration: 0.2,
            ease: 'power2.out',
          })
          const caret = link.querySelector('.navbar__caret')
          if (caret) {
            gsap.to(caret, {
              rotation: 0,
              duration: 0.3,
              ease: 'power2.out',
            })
          }
        })
      })

      // Efectos hover en los iconos
      const iconButtons = actionsRef.current?.querySelectorAll('.navbar__icon-btn')
      iconButtons?.forEach((iconBtn) => {
        iconBtn.addEventListener('mouseenter', () => {
          gsap.to(iconBtn, {
            scale: 1.15,
            rotation: 360,
            duration: 0.4,
            ease: 'power2.out',
          })
        })

        iconBtn.addEventListener('mouseleave', () => {
          gsap.to(iconBtn, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: 'power2.out',
          })
        })
      })

      // Efecto hover en el botón CTA
      const ctaButton = actionsRef.current?.querySelector('.navbar__cta')
      if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
          gsap.to(ctaButton, {
            scale: 1.05,
            backgroundColor: '#ff4655',
            color: '#fff',
            boxShadow: '0 5px 20px rgba(255, 70, 85, 0.5)',
            duration: 0.3,
            ease: 'power2.out',
          })
        })

        ctaButton.addEventListener('mouseleave', () => {
          gsap.to(ctaButton, {
            scale: 1,
            backgroundColor: '',
            color: '',
            boxShadow: '',
            duration: 0.3,
            ease: 'power2.out',
          })
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <header ref={navbarRef} className="navbar">
      <div ref={brandingRef} className="navbar__branding">
        <img src={RiotGamesLogo} alt="Riot Games" className="navbar__logo" />
        <span className="navbar__divider" />
        <img src={ValorantLogo} alt="Valorant" className="navbar__logo" />
      </div>

      <nav ref={linksRef} className="navbar__links" aria-label="Primary">
        {navItems.map((item) => (
          <button key={item.label} className="navbar__link" type="button">
            <span>{item.label}</span>
            {item.dropdown && <span className="navbar__caret">▾</span>}
            {item.external && <span className="navbar__external">↗</span>}
          </button>
        ))}
      </nav>

      <div ref={actionsRef} className="navbar__actions">
        <button className="navbar__icon-btn" type="button" aria-label="Search">
          <img id="search-icon" src={SearchIcon} alt="" aria-hidden="true" />
        </button>
        <button className="navbar__icon-btn" type="button" aria-label="Change region">
          <img src={WebIcon} alt="" aria-hidden="true" />
        </button>
        <button className="navbar__cta" type="button">
          PLAY NOW
        </button>
      </div>
    </header>
  )
}

export default Navbar

