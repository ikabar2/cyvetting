import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import styles from './ServicePage.module.css'
import SEO from '../components/SEO'

const INCLUDED = [
  { icon: '🔐', title: 'Conditional Access Policies', desc: "Block sign-ins from risky locations, devices, and users. Define exactly who can access what — and when." },
  { icon: '📱', title: 'MFA Enforcement', desc: "Multi-factor authentication rolled out to every account. We handle the configuration and user communication so adoption is smooth." },
  { icon: '🛡️', title: 'Microsoft Defender', desc: "Defender for Office 365, Endpoint, and Identity configured and tuned — catching phishing, malware, and identity attacks before damage is done." },
  { icon: '👤', title: 'Azure AD Hardening', desc: "Privileged Identity Management, legacy authentication blocked, guest access reviewed, service accounts secured." },
  { icon: '💾', title: 'Automated Backup', desc: "Exchange, SharePoint, Teams, and OneDrive backed up daily with a tested recovery process. Microsoft does not back up your data by default." },
  { icon: '📊', title: 'Monthly Security Report', desc: "Clear monthly report showing your Secure Score, active threats, actions taken, and what's next." },
]

const FAQS = [
  { q: "Does Microsoft back up my data?", a: "No — this is one of the most dangerous misconceptions in IT. Microsoft provides infrastructure redundancy but not backup. If you accidentally delete files or get hit by ransomware, Microsoft cannot restore your data. You need a third-party backup." },
  { q: "How long does the M365 hardening take?", a: "Initial hardening is typically completed in 1–2 weeks. We work around your business hours to minimize disruption and communicate changes to your team in advance." },
  { q: "Will this affect how my team uses Office?", a: "Minimal impact for normal usage. MFA adds a 10-second step at login. The security policies work in the background. We test all changes in a staging environment before rollout." },
  { q: "What is the ongoing retainer?", a: "Our M365 monitoring retainer starts at $500/month. It includes monthly Secure Score reviews, policy updates, backup monitoring, and incident response for any alerts triggered." },
]

export default function ServiceM365() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <SEO
        title="M365 Security & Backup"
        description="Full Microsoft 365 hardening, MFA enforcement, Microsoft Defender configuration, and automated backup for your business."
        canonical="/services/m365"
      />
      <PageHero
        label="Service"
        title="M365 Security & Backup —"
        accent="Your productivity stack, locked down."
        desc="Microsoft 365 out of the box is not secure. We harden your environment, enforce identity controls, and ensure your data is backed up and recoverable."
        breadcrumb={[{ label: 'Services', href: '/#services' }, { label: 'M365 Security & Backup' }]}
      />

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <div className={styles.label}>The Problem</div>
            <h2 className={styles.h2}>M365 default settings leave you exposed.</h2>
            <p>Microsoft 365 ships with security features turned off or set to the lowest common denominator. Legacy authentication protocols are enabled. MFA is optional. Backup doesn&apos;t exist.</p>
            <p>The result: 85% of cyberattacks against small businesses now target Microsoft 365 credentials. Business email compromise (BEC) alone costs US businesses over $2.7 billion a year.</p>
            <p>We fix all of it — in two weeks or less.</p>
            <Link to="/contact" className={styles.btnPrimary}>Secure My M365 Environment</Link>
          </div>
          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <div className={styles.statVal}>85<span>%</span></div>
              <div className={styles.statDesc}>of SMB cyberattacks target M365 credentials</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>$2.7<span>B</span></div>
              <div className={styles.statDesc}>lost annually to business email compromise in the US</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>0<span>%</span></div>
              <div className={styles.statDesc}>of your M365 data is backed up by Microsoft by default</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.label}>What&apos;s Included</div>
        <h2 className={styles.h2}>Everything in one engagement.</h2>
        <div className={styles.grid3}>
          {INCLUDED.map(item => (
            <div key={item.title} className={styles.featureCard}>
              <span className={styles.featureIcon}>{item.icon}</span>
              <div className={styles.featureTitle}>{item.title}</div>
              <p className={styles.featureDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.label}>FAQ</div>
        <h2 className={styles.h2}>Common questions.</h2>
        <div className={styles.faqs}>
          {FAQS.map(f => (
            <div key={f.q} className={styles.faq}>
              <div className={styles.faqQ}>{f.q}</div>
              <div className={styles.faqA}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.ctaBar}>
        <h3>Ready to lock down your M365?</h3>
        <Link to="/contact" className={styles.btnPrimary}>Get a Free Security Assessment</Link>
      </div>
    </>
  )
}
