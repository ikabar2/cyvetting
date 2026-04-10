import { Link } from 'react-router-dom'
import styles from './Services.module.css'

const SERVICES = [
  {
    icon: '☁️',
    accent: 'blue',
    title: 'M365 Security & Backup',
    desc: 'Full hardening, MFA enforcement, Microsoft Defender configuration, and automated backup. Most clients see results in under two weeks.',
    link: '/services/m365',
    tag: 'Core service',
  },
  {
    icon: '🔍',
    accent: 'lime',
    title: 'Security Risk Assessment',
    desc: 'Plain-English gap report and 90-day remediation roadmap mapped against the NIST Cybersecurity Framework. Delivered in one week.',
    link: '/services/assessment',
    tag: 'Entry point',
  },
  {
    icon: '👤',
    accent: 'blue',
    title: 'Fractional vCISO',
    desc: 'On-demand security leadership — strategy, risk governance, policy, vendor oversight, and board reporting. No $300K full-time hire needed.',
    link: '/services/vciso',
    tag: 'Advisory · retainer',
  },
  {
    icon: '🔑',
    accent: 'lime',
    title: 'IAM Advisory & Audit',
    desc: 'Identity is the new perimeter. We audit your Entra ID, Active Directory, MFA policies, privilege access, and access review program.',
    link: '/services/iam',
    tag: 'Identity · access',
  },
]

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.label}>What we do</div>
      <h2 className={styles.heading}>
        Four focused services.<br />
        <em>One trusted partner.</em>
      </h2>
      <div className={`${styles.grid} ${styles.grid4}`}>
        {SERVICES.map(s => (
          <div key={s.title} className={styles.card}>
            <div className={`${styles.cardBar} ${styles[s.accent]}`} />
            <div className={styles.cardTop}>
              <span className={styles.icon}>{s.icon}</span>
              <span className={`${styles.cardTag} ${styles[s.accent]}`}>{s.tag}</span>
            </div>
            <div className={styles.cardTitle}>{s.title}</div>
            <p className={styles.cardDesc}>{s.desc}</p>
            <Link to={s.link} className={styles.cardLink}>Learn more →</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
