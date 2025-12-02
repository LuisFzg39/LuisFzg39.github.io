import './Footer.css'
import DiscordIcon from '../../assets/Icons/Discord-icon.svg'
import FacebookIcon from '../../assets/Icons/Facebook-icon.svg'
import InstagramIcon from '../../assets/Icons/Instagram-icon.svg'
import TiktokIcon from '../../assets/Icons/Tiktok-icon.svg'
import XIcon from '../../assets/Icons/X-icon.svg'
import YoutubeIcon from '../../assets/Icons/Youtube-icon.svg'
import RiotLogo from '../../assets/RiotGames-logo.svg'

const socials = [
  { name: 'X', icon: XIcon },
  { name: 'YouTube', icon: YoutubeIcon },
  { name: 'Instagram', icon: InstagramIcon },
  { name: 'TikTok', icon: TiktokIcon },
  { name: 'Facebook', icon: FacebookIcon },
  { name: 'Discord', icon: DiscordIcon },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__cta">Download Riot Mobile Companion App</div>

      <div className="footer__inner">
        <div className="footer__socials" aria-label="Riot social media links">
          {socials.map((social) => (
            <button key={social.name} className="footer__social-btn" type="button" aria-label={social.name}>
              <img src={social.icon} alt="" aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className="footer__brand">
          <img src={RiotLogo} alt="Riot Games" />
        </div>

        <p className="footer__legal">
          2020-2025 Riot Games, Inc. RIOT GAMES, VALORANT and any associated logos are trademarks, service marks,
          and/or registered trademarks of Riot Games, Inc.
        </p>

        <div className="footer__links">
          <button type="button">Privacy Notice</button>
          <button type="button">Terms of Service</button>
          <button type="button">Cookie Preferences</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer