import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import styles from './ServicePage.module.css'
import SEO from '../components/SEO'

const STEPS = [
  { num: '01', title: 'Data Mapping', desc: 'We identify every category of personal data your organisation collects, where it is stored, how it flows between systems, and who has access. This Record of Processing Activities (ROPA) is the foundational GDPR document — and the first thing a regulator asks for.' },
  { num: '02', title: 'Gap Assessment', desc: 'We assess your current practices against all key GDPR obligations — lawful basis, consent management, data subject rights, retention policies, breach notification procedures, and cross-border transfer mechanisms.' },
  { num: '03', title: 'Privacy Documentation', desc: 'We write your privacy notice, cookie policy, data retention schedule, and internal data protection policy — all plain-language documents that satisfy regulatory requirements without the legalese.' },
  { num: '04', title: 'Vendor & DPA Review', desc: 'Every vendor processing EU/UK personal data on your behalf needs a signed Data Processing Agreement. We audit your vendor list, identify gaps, and provide standard DPA language your legal team can use.' },
  { num: '05', title: 'Breach Response Plan', desc: 'GDPR requires notification to regulators within 72 hours of a breach. We build your incident response procedure so when something happens, your team knows exactly what to do and when.' },
]

const INCLUDED = [
  'Record of Processing Activities (ROPA)',
  'GDPR gap assessment report',
  'Privacy notice and cookie policy',
  'Data retention schedule',
  'Internal data protection policy',
  'Vendor DPA audit — identify missing agreements',
  'Standard DPA template',
  'Data subject rights request procedure',
  '72-hour breach notification plan',
  '30-day Q&A support post-delivery',
]

const FAQS = [
  { q: 'Who needs GDPR compliance?', a: 'Any organisation that processes personal data of EU or UK residents — regardless of where the organisation is based. If your SaaS has European customers, if your website has European visitors, or if you process data on behalf of a European client, GDPR applies to you.' },
  { q: 'What are the fines for non-compliance?', a: 'Up to €20 million or 4% of global annual turnover — whichever is higher. For serious violations like unlawful data transfers or failure to implement security measures. For minor violations, fines up to €10 million or 2% of turnover.' },
  { q: 'Does GDPR apply to US companies?', a: 'Yes — if you process personal data of EU/UK residents. This includes website analytics data, email subscribers, and customer data. US companies are regularly fined by EU regulators. The "we are not based in the EU" defence does not work.' },
  { q: 'How does GDPR relate to SOC 2?', a: 'SOC 2 covers security controls. GDPR covers data privacy practices. They overlap on incident response, access controls, and vendor management — but GDPR adds specific requirements around consent, data subject rights, and cross-border transfers that SOC 2 does not address.' },
]

export default function ServiceGDPR() {
  return (
    <>
      <SEO
        title="GDPR Compliance"
        description="GDPR compliance for US companies with EU and UK customers. Data mapping, privacy documentation, vendor DPA review, and breach response planning."
        path="/services/gdpr"
      />
      <PageHero
        label="Service"
        title="GDPR Compliance —"
        accent="Protect EU data rights."
        desc="If you have EU or UK customers, GDPR applies to you — regardless of where your company is based. We build your compliance program so you can sell into Europe without regulatory risk."
        breadcrumb={[{ label: 'Services', href: '/#services' }, { label: 'GDPR Compliance' }]}
      />
      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <div className={styles.label}>Why It Matters</div>
            <h2 className={styles.h2}>EU regulators fine US companies. Regularly.</h2>
            <p>GDPR has extraterritorial reach — if you process data of EU or UK residents, you must comply, regardless of where your business is incorporated. US companies are fined every month by EU data protection authorities for exactly this reason.</p>
            <p>Beyond the legal requirement, EU and UK enterprise clients require documented GDPR compliance before signing. If you are expanding into European markets, GDPR readiness is a sales prerequisite.</p>
            <p>If you are already SOC 2 or ISO 27001 compliant, GDPR readiness adds 2–3 weeks of focused privacy work on top of controls you already have.</p>
            <Link to="/contact" className={styles.btnPrimary}>Start GDPR Compliance</Link>
          </div>
          <div className={styles.statsBox}>
            <div className={styles.statItem}><div className={styles.statVal}>€20M<span>+</span></div><div className={styles.statDesc}>maximum fine for serious GDPR violations</div></div>
            <div className={styles.statItem}><div className={styles.statVal}>72<span>hrs</span></div><div className={styles.statDesc}>to notify regulators after a data breach</div></div>
            <div className={styles.statItem}><div className={styles.statVal}>3–4<span>wks</span></div><div className={styles.statDesc}>average time to full GDPR readiness</div></div>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.label}>How It Works</div>
        <h2 className={styles.h2}>Five steps to GDPR compliance.</h2>
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
            <h2 className={styles.h2}>Everything you need.</h2>
            <div className={styles.checklist}>
              {INCLUDED.map(item => (
                <div key={item} className={styles.checkItem}><span className={styles.check}>✓</span>{item}</div>
              ))}
            </div>
          </div>
          <div className={styles.pricingBox}>
            <div className={styles.pricingLabel}>GDPR Compliance</div>
            <div className={styles.pricingVal}>$4,000</div>
            <div className={styles.pricingNote}>Flat fee · 3–4 weeks</div>
            <div className={styles.pricingDivider}/>
            <div className={styles.pricingAddon}><span>Add-on with SOC 2</span><span className={styles.addonVal}>$2,000</span></div>
            <div className={styles.pricingAddon}><span>GDPR + ISO 27001 bundle</span><span className={styles.addonVal}>$14,000</span></div>
            <Link to="/contact" className={styles.btnPrimary} style={{marginTop:'24px',display:'block',textAlign:'center'}}>Get Started</Link>
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
        <h3>Have EU or UK customers?</h3>
        <Link to="/contact" className={styles.btnPrimary}>Book a Free Assessment</Link>
      </div>
    </>
  )
}
