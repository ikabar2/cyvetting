import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import styles from './ServicePage.module.css'
import SEO from '../components/SEO'

const STEPS = [
  { num: '01', title: 'Scope & Context', desc: 'We define the scope of your ISMS — which systems, processes, and locations are in scope — and document the internal and external context that shapes your security risks. Getting scope right is the most important decision in the whole process.' },
  { num: '02', title: 'Risk Assessment', desc: 'We conduct a formal ISO 27001 risk assessment — identifying information assets, threats, vulnerabilities, and existing controls — and produce a Risk Treatment Plan that maps to all 93 controls in Annex A.' },
  { num: '03', title: 'Control Implementation', desc: 'We implement or document the controls in your Risk Treatment Plan. If you are already SOC 2 compliant, roughly 70% of this work is already done — we document what you have and close the remaining gaps.' },
  { num: '04', title: 'Policy & Documentation', desc: 'ISO 27001 requires a documented ISMS including 20+ mandatory documents and records. We write them — information security policy, acceptable use, access control, incident management, business continuity, and more.' },
  { num: '05', title: 'Internal Audit & Review', desc: 'We conduct a pre-certification internal audit, identify any remaining non-conformities, and support your management review. You go into certification with a clean ISMS and no surprises.' },
]

const INCLUDED = [
  'ISMS scope and context documentation',
  'Formal ISO 27001 risk assessment and treatment plan',
  'Annex A control mapping (all 93 controls)',
  '20+ mandatory ISMS policy documents',
  'Statement of Applicability (SoA)',
  'Asset register and risk register',
  'Internal audit against ISO 27001:2022',
  'Management review support',
  'Certification body shortlist and intro',
  '60-day support through Stage 1 and Stage 2 audit',
]

const FAQS = [
  { q: 'What is ISO 27001 and who needs it?', a: 'ISO 27001 is the international standard for information security management systems. It is required by European enterprise clients, UK government contracts, and increasingly by US enterprise procurement teams. Any company trying to sell into Europe or enterprise markets without SOC 2 will be asked for ISO 27001.' },
  { q: 'How does ISO 27001 relate to SOC 2?', a: 'They overlap significantly — about 70% of the technical controls are identical. If you are already SOC 2 compliant, ISO 27001 readiness takes roughly 40% of the original effort. The main additions are the formal risk management framework, Statement of Applicability, and broader documentation requirements.' },
  { q: 'How long does ISO 27001 certification take?', a: 'From gap assessment to certification: 4–9 months depending on your current state. The certification audit itself has two stages — Stage 1 (documentation review) and Stage 2 (controls verification). We prepare you for both.' },
  { q: 'What does ISO 27001 certification cost?', a: 'Our readiness engagement starts at $12,000. The certification body audit fee is separate — typically $8,000–$20,000 for a small company depending on scope. Total first-year cost is usually $20,000–$35,000 — significantly less than most firms quote.' },
]

export default function ServiceISO27001() {
  return (
    <>
      <SEO
        title="ISO 27001 Readiness"
        description="ISO 27001 readiness for SaaS companies selling into European and enterprise markets. Risk assessment, ISMS documentation, and certification support."
        path="/services/iso27001"
      />
      <PageHero
        label="Service"
        title="ISO 27001 Readiness —"
        accent="The international standard."
        desc="ISO 27001 is required by European enterprise clients and increasingly by US enterprise procurement. If you are already SOC 2 compliant, 70% of the work is already done."
        breadcrumb={[{ label: 'Services', href: '/#services' }, { label: 'ISO 27001' }]}
      />
      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <div className={styles.label}>Why It Matters</div>
            <h2 className={styles.h2}>The global enterprise credential.</h2>
            <p>SOC 2 is the US standard. ISO 27001 is what the rest of the world recognises. If you are selling into Europe, the UK, Canada, or APAC — or trying to land US enterprise contracts with globally-minded procurement teams — ISO 27001 is increasingly required.</p>
            <p>The good news: if you are already SOC 2 compliant, you have done 70% of the work. ISO 27001 adds a formal risk management framework, Statement of Applicability, and broader documentation requirements — but the underlying technical controls largely overlap.</p>
            <Link to="/contact" className={styles.btnPrimary}>Start ISO 27001 Readiness</Link>
          </div>
          <div className={styles.statsBox}>
            <div className={styles.statItem}><div className={styles.statVal}>70<span>%</span></div><div className={styles.statDesc}>control overlap with SOC 2 — faster if already compliant</div></div>
            <div className={styles.statItem}><div className={styles.statVal}>93</div><div className={styles.statDesc}>Annex A controls mapped in your readiness engagement</div></div>
            <div className={styles.statItem}><div className={styles.statVal}>4–9<span>mo</span></div><div className={styles.statDesc}>typical gap-to-certification timeline</div></div>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.label}>How It Works</div>
        <h2 className={styles.h2}>Five steps to ISO 27001 certification readiness.</h2>
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
            <div className={styles.pricingLabel}>ISO 27001 Readiness</div>
            <div className={styles.pricingVal}>$12,000</div>
            <div className={styles.pricingNote}>Flat fee · 4–9 months · cert body extra</div>
            <div className={styles.pricingDivider}/>
            <div className={styles.pricingAddon}><span>Add-on if SOC 2 complete</span><span className={styles.addonVal}>$7,500</span></div>
            <div className={styles.pricingAddon}><span>ISO 27001 + GDPR bundle</span><span className={styles.addonVal}>$14,000</span></div>
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
        <h3>Selling into European markets?</h3>
        <Link to="/contact" className={styles.btnPrimary}>Book a Free Assessment</Link>
      </div>
    </>
  )
}
