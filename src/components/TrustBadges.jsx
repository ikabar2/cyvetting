import styles from './TrustBadges.module.css'

const FRAMEWORKS = ['SOC 2','HIPAA','PCI DSS v4.0','NIST CSF','ISO 27001','GDPR','M365']

export default function TrustBadges() {
  return (
    <section className={styles.section}>
      <div className={styles.label}>Trusted · Verified · Certified</div>

      <div className={styles.badges}>

        {/* Badge 1 */}
        <div className={`${styles.badge} ${styles.lime}`}>
          <svg width="36" height="40" viewBox="0 0 36 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2 L34 8 L34 20 C34 28 26 35 18 38 C10 35 2 28 2 20 L2 8 Z" fill="none" stroke="#f5c518" strokeWidth="1.5"/>
            <path d="M11 20 L16 25 L25 15" fill="none" stroke="#f5c518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className={styles.badgeTitle}>Verified<br/>Consultant</div>
          <div className={styles.badgeYear}>2026</div>
        </div>

        {/* Badge 2 */}
        <div className={`${styles.badge} ${styles.blue}`}>
          <svg width="40" height="36" viewBox="0 0 40 36" xmlns="http://www.w3.org/2000/svg">
            <polygon points="20,2 36,11 36,25 20,34 4,25 4,11" fill="none" stroke="#f5c518" strokeWidth="1.5"/>
            <text fontFamily="Share Tech Mono, monospace" fontSize="9" fill="#f5c518" x="20" y="19" textAnchor="middle" dominantBaseline="central" fontWeight="700">SOC 2</text>
          </svg>
          <div className={styles.badgeTitle}>Compliance<br/>Specialist</div>
          <div className={styles.badgeYear}>Certified</div>
        </div>

        {/* Badge 3 */}
        <div className={`${styles.badge} ${styles.lime}`}>
          <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <polygon points="18,2 34,18 18,34 2,18" fill="none" stroke="#f5c518" strokeWidth="1.5"/>
            <polygon points="18,8 28,18 18,28 8,18" fill="none" stroke="#f5c518" strokeWidth="0.8" opacity="0.5"/>
          </svg>
          <div className={styles.badgeTitle}>HIPAA · PCI<br/>Practitioner</div>
          <div className={styles.badgeYear}>2026</div>
        </div>

      </div>

      {/* Framework strip */}
      <div className={styles.frameworks}>
        <span className={styles.fwLabel}>Frameworks covered</span>
        <div className={styles.fwList}>
          {FRAMEWORKS.map(f => (
            <span key={f} className={styles.fwTag}>{f}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
