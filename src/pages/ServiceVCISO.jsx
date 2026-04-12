import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import styles from './ServicePage.module.css'
import SEO from '../components/SEO'

const DELIVERABLES = [
  { icon: '📋', title: 'Security Strategy & Roadmap', desc: 'A 12-month prioritised security roadmap aligned to your business goals, risk tolerance, and budget — not a generic checklist.' },
  { icon: '⚖️', title: 'Risk Register & Governance', desc: 'Documented risk register, treatment plans, and a governance framework that gives you defensible evidence of due diligence.' },
  { icon: '📄', title: 'Policy Library', desc: 'Complete information security policy suite — access control, incident response, acceptable use, data classification, and vendor management.' },
  { icon: '🏢', title: 'Board & Executive Reporting', desc: 'Plain-English security metrics and risk reports for leadership — translating technical posture into business language your board understands.' },
  { icon: '🔗', title: 'Vendor & Supply Chain Oversight', desc: 'Vendor risk assessment process, third-party questionnaire reviews, and contract security clause guidance.' },
  { icon: '🚨', title: 'Incident Response Planning', desc: 'Documented IR playbooks, tabletop exercise facilitation, and cyber insurance alignment — so your team knows exactly what to do.' },
]

const FAQS = [
  { q: 'What is a fractional vCISO?', a: 'A Virtual Chief Information Security Officer (vCISO) is an outsourced security executive who provides the strategic security leadership your business needs — without the contact us cost of a full-time CISO hire. You get executive-level cybersecurity guidance on a monthly retainer, typically 8–20 hours per month depending on your needs.' },
  { q: 'Who needs a vCISO?', a: 'Any business that handles sensitive data, faces regulatory requirements, or has customers asking for security documentation — but cannot justify a full-time CISO. SaaS companies preparing for SOC 2, healthcare businesses managing HIPAA, financial services firms under FFIEC, and any SMB that has been asked to complete a security questionnaire by a customer.' },
  { q: 'How is this different from a consultant?', a: 'A consultant delivers a project and leaves. A fractional vCISO is an ongoing executive relationship — we attend your leadership meetings, answer security questions in real time, review contracts before you sign them, and own your security program continuity month over month. You have a direct line to senior security expertise, not a ticketing queue.' },
  { q: 'What does the monthly retainer include?', a: 'Monthly retainers include a standing call with leadership, risk register maintenance, policy library updates, vendor questionnaire reviews, incident response oversight, and availability for ad hoc questions. Scope is defined at engagement start and reviewed quarterly.' },
  { q: 'Do you replace our IT team?', a: 'No. A vCISO operates at the strategy and governance layer — we set direction, define policy, and measure outcomes. Your IT team or MSP handles day-to-day implementation. We tell them what needs to be done and why; they execute.' },
]

export default function ServiceVCISO() {
  return (
    <>
      <SEO
        title="Fractional vCISO Services"
        description="On-demand security leadership for SMBs. Strategy, governance, policy, and board reporting — without the contact usK full-time CISO cost. Dallas TX, Nashville TN, Phoenix AZ, Buffalo NY."
        path="/services/vciso"
      />
      <PageHero
        label="Service"
        title="Fractional vCISO —"
        accent="Security leadership on demand."
        desc="Executive-level cybersecurity strategy, governance, and risk management — without the contact us full-time hire. Available as a monthly retainer from contact us."
        breadcrumb={[{ label: 'Services', href: '/#services' }, { label: 'Fractional vCISO' }]}
      />

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <div className={styles.label}>Why It Matters</div>
            <h2 className={styles.h2}>90% of small businesses have no security leader.</h2>
            <p>According to the 2026 CISO Report, close to zero percent of small businesses worldwide employ a dedicated security officer — yet they face the same ransomware, regulatory scrutiny, and customer security questionnaires as enterprise companies. The gap is the business risk.</p>
            <p>A fractional vCISO gives your business a senior security executive at a fraction of the cost. We set strategy, own governance, manage risk, and represent your security program to customers, auditors, and insurers — so you can focus on running your business.</p>
            <p>Monthly retainer. Direct access. No ticketing queue.</p>
            <Link to="/contact" className={styles.btnPrimary}>Book an Intro Call</Link>
          </div>
          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <div className={styles.statVal}>90<span>%</span></div>
              <div className={styles.statDesc}>of SMBs have no dedicated security officer</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>contact usK</div>
              <div className={styles.statDesc}>average full-time CISO cost — vs contact usK/mo fractional</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>86<span>%</span></div>
              <div className={styles.statDesc}>of MSPs are adding vCISO services in 2026</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.label}>What's Included</div>
        <h2 className={styles.h2}>Everything your security program needs.</h2>
        <div className={styles.steps}>
          {DELIVERABLES.map(d => (
            <div key={d.title} className={styles.step}>
              <div className={styles.stepNum}>{d.icon}</div>
              <div>
                <div className={styles.stepTitle}>{d.title}</div>
                <p className={styles.stepDesc}>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <div className={styles.label}>Pricing</div>
            <h2 className={styles.h2}>Predictable monthly retainer.</h2>
            <p>No surprise invoices. Scope defined upfront, reviewed quarterly. Cancel with 30 days notice.</p>
          </div>
          <div className={styles.pricingBox}>
            <div className={styles.pricingLabel}>Fractional vCISO Retainer</div>
            <div className={styles.pricingVal}>contact us<span style={{fontSize:'14px',fontWeight:400}}>/mo</span></div>
            <div className={styles.pricingNote}>Scope defined per engagement</div>
            <div className={styles.pricingDivider}/>
            <div className={styles.pricingAddon}><span>Add M365 hardening</span><span className={styles.addonVal}>On request</span></div>
            <div className={styles.pricingAddon}><span>Add IAM audit</span><span className={styles.addonVal}>On request</span></div>
            <div className={styles.pricingAddon}><span>Add risk assessment</span><span className={styles.addonVal}>On request</span></div>
            <Link to="/contact" className={styles.btnPrimary} style={{marginTop:'24px',display:'block',textAlign:'center'}}>Start the Conversation</Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.label}>FAQ</div>
        <h2 className={styles.h2}>Common questions.</h2>
        <div className={styles.faqs}>
          {FAQS.map(f => (
            <div key={f.q} className={styles.faq}>
              <div className={styles.faqQ}>{f.q}</div>
              <p className={styles.faqA}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.ctaBar}>
        <h3>Ready for security leadership without the overhead?</h3>
        <Link to="/contact" className={styles.btnPrimary}>Book a Free Intro Call</Link>
      </div>
    </>
  )
}
