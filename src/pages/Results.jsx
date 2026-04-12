import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import styles from './Results.module.css'

const RESULTS = [
  {
    tag: 'M365 Security',
    accent: 'blue',
    company: 'Law Firm — 40 employees',
    industry: 'Legal · Buffalo, NY',
    headline: 'Stopped a business email compromise attack mid-flight.',
    body: 'The firm came to us after a partner received a convincing wire transfer request that turned out to be a spoofed email. We hardened their M365 environment — enforced MFA across all accounts, deployed Defender for Office 365, configured anti-phishing policies, enabled the Unified Audit Log, and set up automated backup. Two months later Defender flagged and blocked an identical attack before it reached any inbox.',
    metrics: [
      { val: '14',  unit: 'days',   label: 'Full M365 hardening' },
      { val: '100', unit: '%',      label: 'MFA enforcement achieved' },
      { val: '1',   unit: 'attack', label: 'Blocked post-deployment' },
    ],
    service: '/services/m365',
  },
  {
    tag: 'Fractional vCISO',
    accent: 'lime',
    company: 'SaaS Startup — 22 employees',
    industry: 'FinTech · Remote',
    headline: 'Closed a $1.8M enterprise deal that required proof of security leadership.',
    body: 'The client lost a shortlisted contract when the prospect asked for a named security officer and a risk governance program — neither of which existed. We stepped in as fractional vCISO within the week: drafted the security policy library, built a risk register, produced an executive security report, and represented their security program on the prospect\'s vendor review call. The contract was signed three weeks later.',
    metrics: [
      { val: '3',    unit: 'weeks', label: 'Engagement to signed contract' },
      { val: '$1.8M', unit: '',    label: 'Deal value unlocked' },
      { val: '20+',  unit: 'docs', label: 'Policies delivered' },
    ],
    service: '/services/vciso',
  },
  {
    tag: 'Security Risk Assessment',
    accent: 'lime',
    company: 'Healthcare Admin — 14 employees',
    industry: 'Healthcare · Niagara Region, ON',
    headline: 'Approved for $2M cyber policy after two prior rejections.',
    body: 'The client had been rejected by two insurers because they could not demonstrate adequate security controls. We ran a NIST CSF gap assessment, documented their security posture, implemented the minimum required controls, and produced the evidence package insurers ask for. They were approved within 30 days at a premium below the industry benchmark for their revenue tier.',
    metrics: [
      { val: '30',  unit: 'days', label: 'Rejection to approval' },
      { val: '$2M', unit: '',     label: 'Coverage approved' },
      { val: '1',   unit: 'week', label: 'Assessment delivered' },
    ],
    service: '/services/assessment',
  },
  {
    tag: 'IAM Advisory',
    accent: 'blue',
    company: 'Financial Services Firm — 60 employees',
    industry: 'Finance · Buffalo, NY',
    headline: 'Eliminated 340 orphaned accounts and passed an FFIEC access control review.',
    body: 'The client had never conducted a formal access review. Our IAM audit found 340 orphaned accounts — former employees with active credentials — plus 18 service accounts with no documented owner and 12 admin accounts without MFA. We mapped every privileged identity, designed a quarterly access review process, and remediated the critical findings. Their regulator\'s access control review six weeks later found zero material issues.',
    metrics: [
      { val: '340', unit: 'accounts', label: 'Orphaned accounts eliminated' },
      { val: '0',   unit: 'findings', label: 'Regulatory review result' },
      { val: '6',   unit: 'weeks',    label: 'Audit to clean review' },
    ],
    service: '/services/iam',
  },
]

const STATS = [
  { val: '0',    label: 'Client data breaches post-engagement' },
  { val: '<3',   label: 'Weeks avg from kickoff to delivery' },
  { val: '$0',   label: 'Hidden fees — flat scope, flat fee' },
  { val: '4.9★', label: 'Average client rating' },
]

export default function Results() {
  return (
    <>
      <SEO
        title="Client Results"
        description="Real outcomes from real clients — M365 hardening, vCISO advisory, IAM audits, and risk assessments. Buffalo NY and Niagara region."
        path="/results"
      />

      <PageHero
        label="Results"
        title="Outcomes that"
        accent="matter."
        desc="Every engagement is measured by one thing — did it work? Here's what working looks like."
        breadcrumb={[{ label: 'Results' }]}
      />

      <section className={styles.statsBar}>
        {STATS.map(s => (
          <div key={s.label} className={styles.statItem}>
            <div className={styles.statVal}>{s.val}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>Case Studies</div>
        <div className={styles.caseGrid}>
          {RESULTS.map((r, i) => (
            <article key={i} className={styles.caseCard}>
              <div className={`${styles.caseBar} ${styles[r.accent]}`} />
              <div className={styles.caseTop}>
                <span className={`${styles.tag} ${styles[r.accent]}`}>{r.tag}</span>
                <div className={styles.company}>{r.company}</div>
                <div className={styles.industry}>{r.industry}</div>
              </div>
              <h3 className={styles.headline}>{r.headline}</h3>
              <p className={styles.body}>{r.body}</p>
              <div className={styles.metrics}>
                {r.metrics.map(m => (
                  <div key={m.label} className={styles.metric}>
                    <div className={styles.metricVal}>{m.val}<span>{m.unit}</span></div>
                    <div className={styles.metricLabel}>{m.label}</div>
                  </div>
                ))}
              </div>
              <Link to={r.service} className={styles.caseLink}>Learn about this service →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaStrip}>
        <div className={styles.ctaInner}>
          <h2>Ready to be the next case study?</h2>
          <Link to="/contact" className={styles.btn}>Book a Free Call</Link>
        </div>
      </section>
    </>
  )
}
