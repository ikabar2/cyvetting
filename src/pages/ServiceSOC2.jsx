import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import styles from './ServicePage.module.css'
import SEO from '../components/SEO'

const STEPS = [
  { num: '01', title: 'Gap Assessment', desc: "We audit your current environment against all five SOC 2 Trust Service Criteria — Security, Availability, Processing Integrity, Confidentiality, and Privacy — and deliver a prioritized gap report." },
  { num: '02', title: 'Policy Development', desc: "We write or refine every policy your auditor will request — information security, access control, change management, incident response, vendor management, and more." },
  { num: '03', title: 'Evidence Collection', desc: "We set up automated evidence collection so your team isn't scrambling at audit time. Logs, access reviews, training records — all organized and auditor-ready." },
  { num: '04', title: 'Remediation', desc: "We fix the gaps. Technical controls, process improvements, and vendor assessments handled end-to-end so your risk score drops before the auditor walks in." },
  { num: '05', title: 'Audit Support', desc: "We stay with you through the audit — responding to auditor questions, providing evidence, and ensuring nothing falls through the cracks on the way to your report." },
]

const FAQS = [
  { q: 'How long does SOC 2 readiness take?', a: "Typically 3–6 months from gap assessment to audit-ready, depending on your current state. Companies with existing security programs can move faster." },
  { q: 'Do I need SOC 2 Type 1 or Type 2?', a: "Type 1 validates your controls exist at a point in time — faster and cheaper. Type 2 validates they operated effectively over 6–12 months. Most enterprise clients require Type 2. We recommend starting with Type 1 to close deals quickly, then pursuing Type 2." },
  { q: 'What does it cost?', a: "Our SOC 2 readiness engagement starts at $8,000 for companies under 50 employees. This covers gap assessment, policy development, evidence setup, and audit support. The auditor fee is separate ($8K–$30K depending on the firm)." },
  { q: 'Can a small company get SOC 2?', a: "Absolutely — and increasingly they must. SaaS companies, MSPs, and any business handling client data are being asked for SOC 2 reports by their customers. We specialize in right-sizing the program for small teams." },
]

export default function ServiceSOC2() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <SEO
        title="SOC 2 Readiness"
        description="CyVetting helps small businesses achieve SOC 2 compliance — from gap assessment to audit-ready in 90 days. Dallas, TX · Chicago, IL · Denver, CO."
        canonical="/services/soc2"
      />
      <PageHero
        label="Service"
        title="SOC 2 Readiness —"
        accent="Audit-ready, faster."
        desc="From gap assessment to passing your SOC 2 audit — we guide your organization through every step so you can close enterprise deals and build client trust."
        breadcrumb={[{ label: 'Services', href: '/#services' }, { label: 'SOC 2 Readiness' }]}
      />

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <div className={styles.label}>Why It Matters</div>
            <h2 className={styles.h2}>Enterprise clients won&apos;t sign without it.</h2>
            <p>SOC 2 has become the baseline trust credential for any B2B company handling customer data. Without it, you&apos;re losing deals to competitors who have it — often without knowing why.</p>
            <p>A SOC 2 report tells your clients that an independent auditor has verified your security controls. It removes procurement blockers, accelerates contract cycles, and signals that your company is serious about protecting their data.</p>
            <p>We&apos;ve seen clients close contracts 3x faster after getting their SOC 2 report. The report pays for itself in the first deal it unlocks.</p>
            <Link to="/contact" className={styles.btnPrimary}>Start Your SOC 2 Journey</Link>
          </div>
          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <div className={styles.statVal}>86<span>%</span></div>
              <div className={styles.statDesc}>of enterprise buyers require SOC 2 before signing</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>3<span>x</span></div>
              <div className={styles.statDesc}>faster deal cycles after SOC 2 certification</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>90<span>days</span></div>
              <div className={styles.statDesc}>average time to Type 1 readiness with CyVetting</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.label}>Our Process</div>
        <h2 className={styles.h2}>Five steps to your SOC 2 report.</h2>
        <div className={styles.steps}>
          {STEPS.map(s => (
            <div key={s.num} className={styles.step}>
              <div className={styles.stepNum}>{s.num}</div>
              <div>
                <div className={styles.stepTitle}>{s.title}</div>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
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
        <h3>Ready to get SOC 2 certified?</h3>
        <Link to="/contact" className={styles.btnPrimary}>Book a Free Gap Assessment</Link>
      </div>
    </>
  )
}
