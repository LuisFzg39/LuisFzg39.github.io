import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const DEBUG_SCROLLTRIGGER = false

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll-controlled zoom-out for the hero background + title/button motion.
 */
export function initHeroScrollTimeline(heroEl: HTMLElement, titleEl: HTMLElement, ctaEl: HTMLElement) {
  const bg = heroEl.querySelector<HTMLElement>('.hero__bg')
  const inner = heroEl.querySelector<HTMLElement>('.hero__inner')
  if (!bg || !inner || !titleEl || !ctaEl) return

  const mm = gsap.matchMedia()

  mm.add('(min-width: 0px)', () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroEl,
        start: 'top top',
        end: '+=170%',
        scrub: true,
        pin: true,
        markers: DEBUG_SCROLLTRIGGER,
      },
    })

    tl.fromTo(
      bg,
      { scale: 2.2, yPercent: -18, transformOrigin: '50% 8%' },
      { scale: 1, yPercent: 0, ease: 'none' },
      0,
    )

    tl.fromTo(
      titleEl,
      { yPercent: 25, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.35, ease: 'power2.out' },
      0,
    )

    tl.to(
      inner,
      { yPercent: -130, ease: 'none' },
      0.35,
    )

    tl.fromTo(
      ctaEl,
      { yPercent: 180, opacity: 0 },
      { yPercent: 0, opacity: 1, ease: 'power2.out' },
      0.88,
    )

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  })

  return () => mm.revert()
}

/**
 * Hover micro-interaction for the CTA.
 */
export function initHeroButtonHover(ctaEl: HTMLElement) {
  const onEnter = () => gsap.to(ctaEl, { scale: 1.05, duration: 0.2, ease: 'power1.out' })
  const onLeave = () => gsap.to(ctaEl, { scale: 1, duration: 0.2, ease: 'power1.out' })

  ctaEl.addEventListener('mouseenter', onEnter)
  ctaEl.addEventListener('mouseleave', onLeave)

  return () => {
    ctaEl.removeEventListener('mouseenter', onEnter)
    ctaEl.removeEventListener('mouseleave', onLeave)
  }
}
