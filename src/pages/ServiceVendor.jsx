import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import styles from './ServicePage.module.css'
import SEO from '../components/SEO'

const INCLUDED = [
  { icon: '🔍', title: 'Vendor Risk Assessment', desc: "Security questionnaires, SOC 2 review, and risk scoring for every vendor with access to your data or systems." },
  { icon: '📋', title: 'Vendor Risk Program', desc: "A repeatable process for onboarding, reviewing, and offboarding vendors — with tiering by risk level." },
  { icon: '📄', title: 'Insurance Readiness Report', desc: "A documentation package showing insurers you have the controls they require — reducing premiums and improving coverage." },
  { icon: '🛡️', title: 'Policy & Contract Review', desc: "Data processing agreements, vendor contracts, and BAAs reviewed for security gaps before you sign." },
  { icon: '📊', title: 'Risk Register', desc: "A living document of your vendor risks, review dates, and remediation actions — auditor and insurer friendly." },
  { icon: '🔄', title: 'Annual Review Cycle', desc: "Scheduled annual re-assessment of all vendors plus immediate review triggered by breaches or significant changes." },
]

const FAQS = [
  { q: "Why do I need a vendor risk program?", a: "Your security is only as strong as your weakest vendor. 60% of data breaches involve a third party. Regulators, cyber insurers, and enterprise clients increasingly require documented vendor risk management." },
  { q: "How does this help with cyber insurance?", a: "Insurers use your security controls to set your premium and coverage limits. Companies with documented vendor risk programs, MFA, and backup typically pay 20–40% less and get broader coverage than those without." },
  { q: "What if a vendor fails our assessment?", a: "We help you negotiate security requirements with the vendor, find alternatives if needed, or document the accepted risk with mitigating controls — all in a way that satisfies your insurer and auditors." },
  { q: "How many vendors can you assess?", a: "Our base engagement covers up to 10 vendors. Additional vendors are assessed at a flat rate per vendor. Most small businesses have 5–15 vendors with meaningful data access." },
]

export default function ServiceVendor() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <SEO
        title="Vendor Security & Cyber Insurance"
        description="Third-party vendor risk management programs and cyber insurance readiness documentation to protect your business and reduce premiums."
        canonical="/services/vendor"
      />
      <PageHero
        label="Service"
        title="Vendor Security & Cyber Insurance —"
        accent="Own your third-party risk."
        desc="Assess every vendor with access to your data, build a defensible risk program, and qualify for better cyber insurance coverage — all in one engagement."
        breadcrumb={[{ label: 'Services', href: '/#services' }, { label: 'Vendor Security & Cyber Insurance' }]}
      />

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <div className={styles.label}>The Reality</div>
            <h2 className={styles.h2}>Your vendors are your attack surface.</h2>
            <p>The average small business shares data with 15–30 vendors. Payroll providers, accounting software, CRMs, cloud storage — each one is a potential entry point for attackers.</p>
            <p>Meanwhile, cyber insurers are tightening requirements. Premiums are up 50–100% since 2020. Companies without documented controls are being denied coverage or hit with exclusions that make the policy nearly worthless.</p>
            <p>We help you manage vendor risk systematically and document it in a way that directly reduces your insurance premium.</p>
            <Link to="/contact" className={styles.btnPrimary}>Start Vendor Risk Program</Link>
          </div>
          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <div className={styles.statVal}>60<span>%</span></div>
              <div className={styles.statDesc}>of breaches involve a third-party vendor</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>40<span>%</span></div>
              <div className={styles.statDesc}>lower premiums for companies with documented controls</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>15<span>–30</span></div>
              <div className={styles.statDesc}>vendors the average SMB shares sensitive data with</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.label}>What&apos;s Included</div>
        <h2 className={styles.h2}>A complete vendor risk program.</h2>
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
        <h3>Ready to manage your vendor risk?</h3>
        <Link to="/contact" className={styles.btnPrimary}>Book a Free Consultation</Link>
      </div>
    </>
  )
}
