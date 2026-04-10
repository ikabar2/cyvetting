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
              <Link to="/services/m365">M365 Security &amp; Backup</Link>
              <Link to="/services/assessment">Security Risk Assessment</Link>
              <Link to="/services/vciso">Fractional vCISO</Link>
              <Link to="/services/iam">IAM Advisory &amp; Audit</Link>
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
