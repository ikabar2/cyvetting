import { Link, NavLink } from 'react-router-dom'
import { LogoNav } from './Logo'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logoWrap}>
        <LogoNav height={36} />
      </Link>
      <ul className={styles.links}>
        <li>
          <span className={styles.dropdown}>
            Services
            <div className={styles.dropMenu}>
              <Link to="/services/soc2">SOC 2 Readiness</Link>
              <Link to="/services/m365">M365 Security & Backup</Link>
              <Link to="/services/vendor">Vendor Security &amp; Cyber Insurance</Link>
              <Link to="/services/hipaa">HIPAA Readiness</Link>
              <Link to="/services/pci">PCI DSS Readiness</Link>
              <Link to="/services/gdpr">GDPR Compliance</Link>
              <Link to="/services/iso27001">ISO 27001 Readiness</Link>
            </div>
          </span>
        </li>
        <li><NavLink to="/about"   className={({isActive}) => isActive ? styles.active : ''}>About</NavLink></li>
        <li><NavLink to="/results" className={({isActive}) => isActive ? styles.active : ''}>Results</NavLink></li>
        <li><NavLink to="/blog"    className={({isActive}) => isActive ? styles.active : ''}>Blog</NavLink></li>
      </ul>
      <Link to="/contact" className={styles.cta}>Get Protected</Link>
    </nav>
  )
}
