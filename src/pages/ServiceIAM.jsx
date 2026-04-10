import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import styles from './ServicePage.module.css'
import SEO from '../components/SEO'

const SCOPE = [
  { num: '01', title: 'Entra ID & Azure AD Review', desc: 'Full audit of your Microsoft Entra ID configuration — Conditional Access policies, MFA enforcement, risky sign-in detection, guest account controls, and privileged identity management settings.' },
  { num: '02', title: 'Active Directory Health Check', desc: 'On-premises AD review covering stale accounts, privileged group membership, password policies, Kerberoastable accounts, and domain controller security hardening gaps.' },
  { num: '03', title: 'Privilege Access Assessment', desc: 'We map every privileged account, service account, and admin role — identify over-privileged users, shared credentials, and accounts without MFA. Least-privilege gap report included.' },
  { num: '04', title: 'Access Review Program Design', desc: 'Document and implement a repeatable quarterly access recertification process — who reviews what, how decisions are logged, and how access is revoked. Required for SOC 2 and HIPAA.' },
  { num: '05', title: 'Offboarding & Provisioning Audit', desc: 'Review your user lifecycle process — how accounts are created, modified, and terminated. Identify orphaned accounts and access that survives employee departures.' },
  { num: '06', title: 'IAM Remediation Roadmap', desc: 'Plain-English prioritised findings report — critical, high, medium — with specific remediation steps, timelines, and tool recommendations. Ready to hand to your IT team.' },
]

const FAQS = [
  { q: 'Why does IAM matter in 2026?', a: 'Identity is now the primary attack surface. Over 80% of breaches involve compromised credentials — not malware, not zero-days. Attackers buy or phish a valid username and password, then log in through your front door. If your identity controls are weak, your firewall is irrelevant.' },
  { q: 'What does the audit cover?', a: 'We review your Microsoft Entra ID (Azure AD), Active Directory (if on-premises), MFA configuration, Conditional Access policies, privileged account inventory, user lifecycle processes (onboarding and offboarding), and access review practices. Deliverable is a gap report with severity-ranked findings.' },
  { q: 'How long does it take?', a: 'Two to three weeks from kickoff to final report. We need read-only access to your Microsoft tenant and AD environment — we never modify settings.' },
  { q: 'Who needs this?', a: 'Any business with more than 10 employees, particularly those in regulated industries (healthcare, financial services, legal, SaaS), companies preparing for SOC 2 or HIPAA, and businesses that have had an account compromise or are tightening cyber insurance requirements.' },
  { q: 'Do you touch our systems?', a: 'No changes are made. Everything is read-only. We use Microsoft Graph API and standard PowerShell modules to pull configuration data. We do not install agents, modify policies, or write to your directory.' },
]

export default function ServiceIAM() {
  return (
    <>
      <SEO
        title="IAM Advisory & Audit"
        description="Identity and Access Management audit for SMBs — Entra ID, Active Directory, MFA, and privilege access review. Dallas TX, Nashville TN, Phoenix AZ, Buffalo NY."
        path="/services/iam"
      />
      <PageHero
        label="Service"
        title="IAM Advisory & Audit —"
        accent="Identity is the new perimeter."
        desc="Over 80% of breaches start with a compromised identity. We audit your entire access control program — Entra ID, Active Directory, MFA, and privilege management — and deliver a prioritised remediation roadmap."
        breadcrumb={[{ label: 'Services', href: '/#services' }, { label: 'IAM Advisory' }]}
      />

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <div className={styles.label}>Why Identity</div>
            <h2 className={styles.h2}>The perimeter is gone. Identity is what's left.</h2>
            <p>In 2026 your firewall is not your first line of defence — your login page is. Attackers no longer break through walls; they walk through doors using stolen or weak credentials. Identity and access management controls are the single most effective security investment a small business can make.</p>
            <p>We review your entire identity program: who has access, what they can access, how that access was granted, and whether it has ever been reviewed. We identify over-privileged accounts, stale credentials, MFA gaps, and dangerous admin configurations — before an attacker does.</p>
            <Link to="/contact" className={styles.btnPrimary}>Book Your IAM Audit</Link>
          </div>
          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <div className={styles.statVal}>80<span>%+</span></div>
              <div className={styles.statDesc}>of breaches involve compromised credentials</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>2–3<span>wks</span></div>
              <div className={styles.statDesc}>from kickoff to final report</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>$4K</div>
              <div className={styles.statDesc}>starting price — flat fee, no surprises</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.label}>Audit Scope</div>
        <h2 className={styles.h2}>Six areas. One complete picture.</h2>
        <div className={styles.steps}>
          {SCOPE.map(s => (
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
            <div className={styles.label}>Pricing</div>
            <h2 className={styles.h2}>Flat-fee engagement. No surprises.</h2>
            <p>Fixed scope, flat fee. You know exactly what you are getting before you sign. Every finding includes a severity rating, business impact description, and specific remediation step.</p>
          </div>
          <div className={styles.pricingBox}>
            <div className={styles.pricingLabel}>IAM Advisory & Audit</div>
            <div className={styles.pricingVal}>$4,000–$7,000</div>
            <div className={styles.pricingNote}>Flat fee · 2–3 weeks · read-only</div>
            <div className={styles.pricingDivider}/>
            <div className={styles.pricingAddon}><span>Add M365 hardening</span><span className={styles.addonVal}>+$2,500</span></div>
            <div className={styles.pricingAddon}><span>Add vCISO retainer</span><span className={styles.addonVal}>from $3K/mo</span></div>
            <div className={styles.pricingAddon}><span>Add access review program</span><span className={styles.addonVal}>+$2,000</span></div>
            <Link to="/contact" className={styles.btnPrimary} style={{marginTop:'24px',display:'block',textAlign:'center'}}>Book IAM Audit</Link>
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
        <h3>Know who has access to what — before an attacker does.</h3>
        <Link to="/contact" className={styles.btnPrimary}>Start Your IAM Audit</Link>
      </div>
    </>
  )
}
