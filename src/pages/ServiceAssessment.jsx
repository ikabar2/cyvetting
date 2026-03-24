import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import styles from './ServicePage.module.css'
import SEO from '../components/SEO'

const STEPS = [
  { num: '01', title: 'Discovery Call', desc: 'A 60-minute structured interview with your key stakeholders — IT, operations, and leadership. We map your technology environment, data flows, and existing security controls. No questionnaire to fill out beforehand.' },
  { num: '02', title: 'Environment Review', desc: 'We review your Microsoft 365 configuration, network architecture, access controls, backup posture, and vendor relationships. We identify what is in place and what is missing against the NIST Cybersecurity Framework.' },
  { num: '03', title: 'Risk Report', desc: 'You receive a plain-English report — red, amber, green — showing every gap ranked by risk level. No technical jargon. Every finding includes the business impact and a specific recommendation.' },
  { num: '04', title: 'Remediation Roadmap', desc: 'A prioritised 90-day action plan. We tell you exactly what to fix first, what to fix next, and what can wait. Quick wins are separated from longer-term projects so your team knows where to start.' },
]

const INCLUDED = [
  '60-minute discovery call with key stakeholders',
  'NIST CSF gap analysis across all five functions',
  'M365 security posture review',
  'Access control and privilege assessment',
  'Backup and recovery posture review',
  'Red / amber / green risk report',
  'Prioritised 90-day remediation roadmap',
  'Executive summary for leadership and insurers',
  '2-week Q&A support after delivery',
]

const FAQS = [
  { q: 'What is a cybersecurity risk assessment?', a: 'A structured review of your organisation\'s current security controls mapped against an industry standard — typically the NIST Cybersecurity Framework. It identifies gaps, ranks risks by severity, and gives you a clear action plan. It is the starting point for any security improvement program.' },
  { q: 'Who needs one?', a: 'Any business that handles customer data, processes payments, stores employee records, or operates in a regulated industry. Cyber insurers now require a documented risk assessment as a condition of coverage. Many enterprise contracts require evidence of one before signing.' },
  { q: 'How long does it take?', a: 'One week from the discovery call to final report delivery. Your team commits approximately 2–3 hours total — one discovery call and availability to answer follow-up questions.' },
  { q: 'Is this the same as a penetration test?', a: 'No. A penetration test actively attempts to exploit vulnerabilities in your systems — it requires more time, higher cost, and written authorisation. A risk assessment reviews your controls and policies against a framework. Most SMBs need an assessment before a penetration test — the assessment tells you what to fix, the pen test verifies the fixes.' },
  { q: 'Can I use this report for cyber insurance?', a: 'Yes. The executive summary is formatted for insurers and includes the security controls your insurer will ask about. Many clients use this report to complete their cyber insurance application or negotiate better terms.' },
]

export default function ServiceAssessment() {
  return (
    <>
      <SEO
        title="Cybersecurity Risk Assessment"
        description="NIST-based cybersecurity risk assessment for small businesses. Plain-English gap report and 90-day remediation roadmap. Dallas TX, Nashville TN, Buffalo NY."
        path="/services/assessment"
      />
      <PageHero
        label="Service"
        title="Security Risk Assessment —"
        accent="Know where you stand."
        desc="A plain-English review of your security posture — every gap ranked by risk, every fix prioritised. Delivered in one week. No jargon, no scare tactics."
        breadcrumb={[{ label: 'Services', href: '/#services' }, { label: 'Security Assessment' }]}
      />

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <div className={styles.label}>Why It Matters</div>
            <h2 className={styles.h2}>You can't fix what you can't see.</h2>
            <p>Most small businesses have no idea what their actual security exposure looks like. They assume their IT provider has it covered, or that they're too small to be a target. Neither is true — 46% of all cyberattacks target small businesses.</p>
            <p>A risk assessment gives you a clear picture of where you are vulnerable, what the business impact of each gap is, and what to fix first. It is the starting point for any security program — and what cyber insurers increasingly require before issuing or renewing a policy.</p>
            <p>One week. Plain-English report. No prior security knowledge required from your team.</p>
            <Link to="/contact" className={styles.btnPrimary}>Book Your Assessment</Link>
          </div>
          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <div className={styles.statVal}>46<span>%</span></div>
              <div className={styles.statDesc}>of cyberattacks target small businesses</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>1<span>week</span></div>
              <div className={styles.statDesc}>from discovery call to final report</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>$2K</div>
              <div className={styles.statDesc}>starting price — least expensive entry into a full security program</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.label}>How It Works</div>
        <h2 className={styles.h2}>Four steps. One week.</h2>
        <div className={styles.steps}>
          {STEPS.map(s => (
            <div key={s.num} className={styles.step}>
              <div className={styles.stepNum}>{s.num}</div>
              <div><div className={styles.stepTitle}>{s.title}</div><p className={styles.stepDesc}>{s.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <div className={styles.label}>What's Included</div>
            <h2 className={styles.h2}>Everything you need to get started.</h2>
            <p>Fixed scope, flat fee. You know exactly what you are getting before you sign.</p>
            <div className={styles.checklist}>
              {INCLUDED.map(item => (
                <div key={item} className={styles.checkItem}><span className={styles.check}>✓</span>{item}</div>
              ))}
            </div>
          </div>
          <div className={styles.pricingBox}>
            <div className={styles.pricingLabel}>Security Risk Assessment</div>
            <div className={styles.pricingVal}>$2,000</div>
            <div className={styles.pricingNote}>Flat fee · 1 week · NIST CSF based</div>
            <div className={styles.pricingDivider}/>
            <div className={styles.pricingAddon}><span>Add M365 hardening</span><span className={styles.addonVal}>+$2,500</span></div>
            <div className={styles.pricingAddon}><span>Add SOC 2 readiness</span><span className={styles.addonVal}>+$4,500</span></div>
            <div className={styles.pricingAddon}><span>Add HIPAA gap assessment</span><span className={styles.addonVal}>+$2,000</span></div>
            <Link to="/contact" className={styles.btnPrimary} style={{marginTop:'24px',display:'block',textAlign:'center'}}>Book Assessment</Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.label}>FAQ</div>
        <h2 className={styles.h2}>Common questions.</h2>
        <div className={styles.faqs}>
          {FAQS.map(f => (
            <div key={f.q} className={styles.faq}><div className={styles.faqQ}>{f.q}</div><p className={styles.faqA}>{f.a}</p></div>
          ))}
        </div>
      </section>

      <div className={styles.ctaBar}>
        <h3>Not sure where to start? Start here.</h3>
        <Link to="/contact" className={styles.btnPrimary}>Book a Free Call</Link>
      </div>
    </>
  )
}
