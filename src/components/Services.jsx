import { Link } from 'react-router-dom'
import styles from './Services.module.css'

const SERVICES = [
  {
    icon: '🛡️',
    accent: 'lime',
    title: 'SOC 2 Readiness',
    desc: 'Gap assessment to audit-ready in 90 days. We map your controls, close the gaps, and deliver audit-ready documentation.',
    link: '/services/soc2',
  },
  {
    icon: '☁️',
    accent: 'blue',
    title: 'M365 Security & Backup',
    desc: 'Full hardening, MFA enforcement, Microsoft Defender configuration, and automated backup.',
    link: '/services/m365',
  },
  {
    icon: '🔍',
    accent: 'lime',
    title: 'Vendor Risk & Insurance',
    desc: 'Third-party risk programs and cyber insurance readiness documentation at better premiums.',
    link: '/services/vendor',
  },
  {
    icon: '🏥',
    accent: 'blue',
    title: 'HIPAA Readiness',
    desc: 'Risk assessment, policy library, BAA audit, and M365 configuration for any business handling patient data.',
    link: '/services/hipaa',
  },
  {
    icon: '💳',
    accent: 'lime',
    title: 'PCI DSS Readiness',
    desc: 'Scope your cardholder environment, close v4.0 gaps, and complete your SAQ before your bank asks.',
    link: '/services/pci',
  },
  {
    icon: '🇪🇺',
    accent: 'blue',
    title: 'GDPR Compliance',
    desc: 'Data protection compliance for businesses with EU and UK customers. Privacy docs, DPAs, and breach response.',
    link: '/services/gdpr',
  },
  {
    icon: '🌐',
    accent: 'lime',
    title: 'ISO 27001 Readiness',
    desc: 'The international security standard — required by European enterprise clients. 70% overlap with SOC 2.',
    link: '/services/iso27001',
  },
]

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.label}>What we do</div>
      <h2 className={styles.heading}>
        Seven services.<br />
        <em>One trusted partner.</em>
      </h2>
      <div className={styles.grid}>
        {SERVICES.map(s => (
          <div key={s.title} className={styles.card}>
            <div className={`${styles.cardBar} ${styles[s.accent]}`} />
            <span className={styles.icon}>{s.icon}</span>
            <div className={styles.cardTitle}>{s.title}</div>
            <p className={styles.cardDesc}>{s.desc}</p>
            <Link to={s.link} className={styles.cardLink}>Learn more →</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
