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
          {/* SOCIAL LINKS */}
          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/company/cyvetting"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="CyVetting on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/soc2">SOC 2 Readiness</Link></li>
            <li><Link to="/services/hipaa">HIPAA Readiness</Link></li>
            <li><Link to="/services/pci">PCI DSS Readiness</Link></li>
            <li><Link to="/services/m365">M365 Security & Backup</Link></li>
            <li><Link to="/services/vendor">Vendor Risk & Insurance</Link></li>
            <li><Link to="/services/gdpr">GDPR Compliance</Link></li>
            <li><Link to="/services/iso27001">ISO 27001 Readiness</Link></li>
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
          <h4 style={{marginTop:'28px'}}>Follow</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/company/cyvetting"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn — CyVetting
              </a>
            </li>
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
            <li><a href="mailto:admin@cyvetting.com">admin@cyvetting.com</a></li>
            <li>Dallas: (214) 555-0190</li>
            <li>Chicago: (312) 555-0190</li>
            <li>Denver: (720) 555-0190</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} CyVetting Security Inc. All rights reserved.</p>
        <div className={styles.bottomRight}>
          <Link to="/privacy-policy">Privacy Policy</Link>
          {' · '}
          <Link to="/terms-of-service">Terms of Service</Link>
          {' · '}
          <a href="https://www.linkedin.com/company/cyvetting" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
