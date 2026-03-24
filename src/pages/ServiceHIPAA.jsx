import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import styles from './ServicePage.module.css'
import SEO from '../components/SEO'

const STEPS = [
  { num: '01', title: 'Risk Assessment', desc: 'We conduct a full HIPAA Security Rule risk analysis — identifying where ePHI lives in your environment, who can access it, and what technical, administrative, and physical safeguards are missing. This is the foundational required document for any HIPAA audit.' },
  { num: '02', title: 'Gap Report', desc: 'We map your current controls against all 54 HIPAA Security Rule standards and implementation specifications. You get a prioritized report showing exactly what is required, what is addressable, and what is already in place.' },
  { num: '03', title: 'Policy & Procedure Library', desc: 'We write the 10 core HIPAA policies every covered entity and business associate needs — access management, audit controls, incident response, workforce training, breach notification, and more.' },
  { num: '04', title: 'Technical Safeguards', desc: 'We configure your M365 environment — encryption, MFA, audit logging, automatic logoff, and access controls — to satisfy HIPAA technical safeguard requirements. Most of this is free inside your existing M365 subscription.' },
  { num: '05', title: 'BAA Review & Vendor Register', desc: 'Every vendor touching ePHI needs a signed Business Associate Agreement. We audit your vendor list, identify missing BAAs, and provide standard BAA language your legal team can use to close the gaps.' },
]

const FAQS = [
  { q: 'Who needs to comply with HIPAA?', a: 'Covered entities (healthcare providers, health plans, clearinghouses) and their business associates — any vendor or contractor who creates, receives, maintains, or transmits protected health information on their behalf. This includes medical billing companies, EHR software vendors, telehealth platforms, dental software, healthcare chatbot tools, and any SaaS touching patient data.' },
  { q: 'What is the penalty for non-compliance?', a: 'HIPAA fines range from $100 to $50,000 per violation, with annual caps of $1.5M per violation category. The average settlement for a small healthcare business is $500K–$2M. More importantly, a breach triggers mandatory notification to affected patients, HHS, and often local media — reputational damage that is hard to recover from.' },
  { q: 'How does this differ from SOC 2?', a: 'SOC 2 covers general information security for technology companies. HIPAA is specific to protected health information and has legally mandated requirements. The good news: about 80% of the technical controls overlap. If you are already SOC 2 compliant, HIPAA readiness typically takes 2–3 weeks of additional work, not months.' },
  { q: 'What is a Business Associate Agreement?', a: 'A BAA is a legally required contract between a covered entity and any vendor who handles PHI on its behalf. If you use Google Workspace, Microsoft 365, AWS, Stripe, or any SaaS tool to process patient data, you need a signed BAA with each of them. Missing BAAs are the most common HIPAA violation we find.' },
  { q: 'How long does HIPAA readiness take?', a: 'For companies starting from scratch: 4–6 weeks for a full gap assessment, policy library, and technical safeguard implementation. For companies already SOC 2 compliant: 2–3 weeks. There is no formal audit or certification for HIPAA — the goal is documented evidence of a good-faith compliance program.' },
]

const INCLUDED = [
  'Full HIPAA Security Rule risk assessment',
  'Gap report mapped to all 54 implementation specifications',
  '10 core HIPAA policy documents',
  'M365 technical safeguard configuration',
  'BAA audit — identify every vendor missing a signed agreement',
  'Standard BAA template for your legal team',
  'Workforce security awareness training outline',
  'Breach notification procedure and response plan',
  '30-day Q&A support post-delivery',
]

export default function ServiceHIPAA() {
  return (
    <>
      <SEO
        title="HIPAA Readiness"
        description="HIPAA compliance for healthcare SaaS, medical billing, telehealth, and any business handling patient data. Gap assessment, policy library, and M365 configuration. Dallas TX, Nashville TN, Phoenix AZ, Buffalo NY, Nashville TN, Phoenix AZ, and Buffalo NY."
        path="/services/hipaa"
      />
      <PageHero
        label="Service"
        title="HIPAA Readiness —"
        accent="Protect patient data."
        desc="From risk assessment to audit-ready documentation — we build a defensible HIPAA compliance program so you can pass vendor reviews, win healthcare clients, and avoid catastrophic fines."
        breadcrumb={[{ label: 'Services', href: '/#services' }, { label: 'HIPAA Readiness' }]}
      />

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <div className={styles.label}>Why It Matters</div>
            <h2 className={styles.h2}>One breach can end a small healthcare business.</h2>
            <p>HIPAA is not optional. Any company that creates, receives, maintains, or transmits protected health information is legally required to comply — regardless of size. The average HIPAA settlement for a small business is $500K. The reputational damage from a breach notification is permanent.</p>
            <p>Beyond the legal requirement, healthcare enterprise clients now require evidence of HIPAA compliance before signing vendor contracts. If you are selling into hospitals, health systems, insurance companies, or medical practices — HIPAA readiness is a sales requirement, not just a legal one.</p>
            <p>If you are already pursuing SOC 2, we can deliver HIPAA readiness simultaneously — about 80% of the controls overlap and the additional work is minimal.</p>
            <Link to="/contact" className={styles.btnPrimary}>Start HIPAA Readiness</Link>
          </div>
          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <div className={styles.statVal}>$500K<span>+</span></div>
              <div className={styles.statDesc}>average HIPAA settlement for a small business</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>80<span>%</span></div>
              <div className={styles.statDesc}>control overlap with SOC 2 — easy upsell if already compliant</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>4–6<span>wks</span></div>
              <div className={styles.statDesc}>average time to full HIPAA readiness with CyVetting</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.label}>How It Works</div>
        <h2 className={styles.h2}>Five steps to a defensible HIPAA program.</h2>
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
        <div className={styles.twoCol}>
          <div>
            <div className={styles.label}>What's Included</div>
            <h2 className={styles.h2}>Everything you need. Nothing you don't.</h2>
            <p>Our HIPAA Readiness engagement is fixed-scope and flat-fee. No hourly billing, no scope creep, no surprises. You know exactly what you're getting before you sign.</p>
            <div className={styles.checklist}>
              {INCLUDED.map(item => (
                <div key={item} className={styles.checkItem}>
                  <span className={styles.check}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.pricingBox}>
            <div className={styles.pricingLabel}>HIPAA Readiness</div>
            <div className={styles.pricingVal}>$3,500</div>
            <div className={styles.pricingNote}>Flat fee · 4–6 weeks · no auditor cost</div>
            <div className={styles.pricingDivider}/>
            <div className={styles.pricingAddon}>
              <span>Add-on if already doing SOC 2</span>
              <span className={styles.addonVal}>$2,000</span>
            </div>
            <div className={styles.pricingAddon}>
              <span>HIPAA + SOC 2 bundle</span>
              <span className={styles.addonVal}>$9,000</span>
            </div>
            <Link to="/contact" className={styles.btnPrimary} style={{marginTop:'24px',display:'block',textAlign:'center'}}>Get Started</Link>
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
        <h3>Not sure if you need HIPAA compliance?</h3>
        <Link to="/contact" className={styles.btnPrimary}>Book a Free Assessment</Link>
      </div>
    </>
  )
}
