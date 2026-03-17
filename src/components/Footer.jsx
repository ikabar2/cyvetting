import { Link } from 'react-router-dom'
import { LogoFull } from './Logo'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logoWrap}>
            <LogoFull height={40} />
          </Link>
          <p>Enterprise cybersecurity for the modern threat landscape. Protecting businesses in Dallas, Chicago, Denver, and beyond.</p>
        </div>
        <div className={styles.col}>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/soc2">SOC 2 Readiness</Link></li>
            <li><Link to="/services/m365">M365 Security & Backup</Link></li>
            <li><Link to="/services/vendor">Vendor Security</Link></li>
            <li><Link to="/services/vendor">Cyber Insurance</Link></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About CyVetting</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
          </ul>
          <h4 style={{marginTop:'28px'}}>Contact</h4>
          <ul>
            <li>admin@cyvetting.com</li>
            <li>Dallas: (214) 555-0190</li>
            <li>Chicago: (312) 555-0190</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} CyVetting Security Inc. All rights reserved.</p>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link>
          {' · '}
          <Link to="/terms-of-service">Terms of Service</Link>
        </p>
      </div>
    </footer>
  )
}
