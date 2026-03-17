import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import styles from './ServicePage.module.css'
import SEO from '../components/SEO'

const STEPS = [
  { num: '01', title: 'Scope Definition', desc: 'We identify every system, network, and process that touches cardholder data — your cardholder data environment (CDE). Proper scoping is the most critical step: too broad and your compliance burden triples; too narrow and you fail your audit. We right-size the scope from day one.' },
  { num: '02', title: 'Gap Assessment', desc: 'We assess your environment against all PCI DSS v4.0 requirements — 12 requirements, 64 objectives, and over 250 test procedures. You get a prioritized gap report showing which controls are missing, which are partially implemented, and which are already compliant.' },
  { num: '03', title: 'Remediation Roadmap', desc: 'We build a prioritized remediation plan with specific technical steps for each gap. For M365-based businesses, we configure the controls directly — MFA enforcement, audit logging, network segmentation guidance, and access control hardening.' },
  { num: '04', title: 'Policy Documentation', desc: 'PCI DSS requires documented policies for 12 control areas. We write them — information security policy, access control procedures, incident response plan, vendor management policy, and the annual security awareness training program.' },
  { num: '05', title: 'SAQ Completion Support', desc: 'Most small businesses qualify for a Self-Assessment Questionnaire instead of a full QSA audit. We guide you through the correct SAQ type (A, A-EP, B, B-IP, C, D), complete it with you, and prepare your Attestation of Compliance for submission to your acquiring bank.' },
]

const FAQS = [
  { q: 'Who needs PCI DSS compliance?', a: 'Any business that accepts, processes, stores, or transmits credit card data. This includes e-commerce companies, SaaS businesses with subscription billing, restaurants, retail stores, and any company that accepts card payments — regardless of transaction volume. If you use Stripe, Square, or any payment processor, PCI DSS applies to you.' },
  { q: 'PCI DSS v4.0 is now mandatory — what changed?', a: 'PCI DSS v4.0 became the only active standard in March 2024. Key new requirements include multi-factor authentication for all access to the cardholder data environment (not just admin accounts), enhanced logging and monitoring, targeted risk analysis for each control, and new requirements around phishing-resistant authentication.' },
  { q: 'Do I need a QSA or can I self-assess?', a: 'Most small businesses qualify for a Self-Assessment Questionnaire (SAQ) rather than a full Qualified Security Assessor audit. The SAQ type depends on how you process cards — if you use a payment gateway like Stripe with no card data touching your servers, you likely qualify for SAQ A, which is the simplest. We determine the correct SAQ type in our scoping step.' },
  { q: 'What does non-compliance cost?', a: 'Card brands can fine your acquiring bank $5,000–$100,000 per month for non-compliance, which gets passed to you. After a breach, fines reach $5,000–$100,000 per incident plus the cost of forensic investigation, card reissuance, and potential loss of card processing privileges entirely — which is fatal for most businesses.' },
  { q: 'We use Stripe — do we still need to comply?', a: 'Yes, but your scope is dramatically reduced. If Stripe handles all card data and your servers never see card numbers, you likely qualify for SAQ A — the simplest self-assessment. You still need to demonstrate that your integration is correctly configured, your access controls are adequate, and your policies are in place.' },
]

const INCLUDED = [
  'Cardholder data environment scoping',
  'Full PCI DSS v4.0 gap assessment',
  'Prioritized remediation roadmap',
  'M365 technical control configuration (MFA, logging, access)',
  '12 required PCI DSS policy documents',
  'SAQ type determination and completion support',
  'Attestation of Compliance preparation',
  'Vendor and payment processor review',
  '30-day Q&A support post-delivery',
]

export default function ServicePCI() {
  return (
    <>
      <SEO
        title="PCI DSS Readiness"
        description="PCI DSS v4.0 compliance for small businesses, e-commerce, and SaaS with payment processing. Gap assessment, SAQ completion, and M365 configuration. Dallas TX, Chicago IL, and Denver CO."
        path="/services/pci"
      />
      <PageHero
        label="Service"
        title="PCI DSS Readiness —"
        accent="Keep card data safe."
        desc="PCI DSS v4.0 is now the only active standard. We scope your environment, close the gaps, and complete your Self-Assessment Questionnaire so you stay compliant and keep processing payments."
        breadcrumb={[{ label: 'Services', href: '/#services' }, { label: 'PCI DSS Readiness' }]}
      />

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <div className={styles.label}>Why It Matters</div>
            <h2 className={styles.h2}>Non-compliance can end your ability to accept card payments.</h2>
            <p>If your business accepts credit cards, PCI DSS is not optional. The card brands — Visa, Mastercard, Amex — require it as a condition of being allowed to process payments. Non-compliance means fines, forensic investigation costs, and potentially losing your payment processing privileges permanently.</p>
            <p>PCI DSS v4.0 introduced significant new requirements in 2024 that most small businesses haven't implemented — especially around multi-factor authentication and enhanced monitoring. The window to get compliant before your acquiring bank demands it is closing.</p>
            <p>Most small businesses qualify for a Self-Assessment Questionnaire instead of an expensive QSA audit. We determine your SAQ type, help you complete it, and configure your M365 environment to satisfy the technical requirements.</p>
            <Link to="/contact" className={styles.btnPrimary}>Start PCI DSS Readiness</Link>
          </div>
          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <div className={styles.statVal}>$100K<span>/mo</span></div>
              <div className={styles.statDesc}>maximum monthly fine for non-compliant merchants</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>v4.0</div>
              <div className={styles.statDesc}>only active PCI DSS version since March 2024 — new MFA requirements</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>3–4<span>wks</span></div>
              <div className={styles.statDesc}>average time to SAQ completion with CyVetting</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.label}>How It Works</div>
        <h2 className={styles.h2}>Five steps to PCI DSS compliance.</h2>
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
            <p>Our PCI DSS Readiness engagement is fixed-scope and flat-fee. No hourly billing, no scope creep, no surprises.</p>
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
            <div className={styles.pricingLabel}>PCI DSS Readiness</div>
            <div className={styles.pricingVal}>$4,500</div>
            <div className={styles.pricingNote}>Flat fee · 3–4 weeks · SAQ included</div>
            <div className={styles.pricingDivider}/>
            <div className={styles.pricingAddon}>
              <span>Add-on if already doing SOC 2</span>
              <span className={styles.addonVal}>$2,500</span>
            </div>
            <div className={styles.pricingAddon}>
              <span>PCI + HIPAA bundle</span>
              <span className={styles.addonVal}>$7,000</span>
            </div>
            <div className={styles.pricingAddon}>
              <span>PCI + SOC 2 + HIPAA</span>
              <span className={styles.addonVal}>$12,500</span>
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
        <h3>Not sure which PCI SAQ type you need?</h3>
        <Link to="/contact" className={styles.btnPrimary}>Book a Free Scoping Call</Link>
      </div>
    </>
  )
}
