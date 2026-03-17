import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import styles from './Results.module.css'

const RESULTS = [
  {
    tag: 'SOC 2 Type I',
    accent: 'lime',
    company: 'SaaS Platform — 28 employees',
    industry: 'FinTech · Dallas, TX',
    headline: 'Passed SOC 2 Type I in 11 weeks.',
    body: 'The client had been told by a Big 4 firm it would take 6 months and cost $80,000. We ran the gap assessment, mapped controls to their existing AWS and M365 stack, wrote the policies, and had them audit-ready in under 3 months — at a fraction of the cost. Their auditor called it one of the cleanest first-time submissions he had seen.',
    metrics: [
      { val: '11', unit: 'weeks', label: 'Gap to audit-ready' },
      { val: '0',  unit: 'findings', label: 'Critical audit findings' },
      { val: '60', unit: '%', label: 'Cost vs Big 4 quote' },
    ],
    service: '/services/soc2',
  },
  {
    tag: 'M365 Security',
    accent: 'blue',
    company: 'Law Firm — 55 employees',
    industry: 'Legal · New York, NY',
    headline: 'Stopped a business email compromise attack mid-flight.',
    body: 'The firm engaged us after a partner received a convincing wire transfer request that turned out to be a spoofed email. We hardened their M365 environment in two weeks — enforced MFA across all users, deployed Defender for Business, configured anti-phishing policies, and set up automated backup. Two months later Defender flagged and blocked an identical attack before it reached any inbox.',
    metrics: [
      { val: '14', unit: 'days', label: 'Full M365 hardening' },
      { val: '100', unit: '%', label: 'MFA enforcement' },
      { val: '1',  unit: 'attack', label: 'Blocked post-deployment' },
    ],
    service: '/services/m365',
  },
  {
    tag: 'Cyber Insurance',
    accent: 'lime',
    company: 'Healthcare Admin — 12 employees',
    industry: 'Healthcare · Remote',
    headline: 'Approved for $2M cyber policy after two prior rejections.',
    body: 'The client had been rejected by two insurers because they could not demonstrate adequate controls. We documented their security posture, implemented the minimum required controls, and produced the evidence package insurers actually ask for. They were approved within 30 days and their premium came in 22% below the industry benchmark for their revenue tier.',
    metrics: [
      { val: '30', unit: 'days', label: 'Rejection to approval' },
      { val: '$2M', unit: '', label: 'Coverage approved' },
      { val: '22', unit: '%', label: 'Below benchmark premium' },
    ],
    service: '/services/vendor',
  },
  {
    tag: 'Vendor Risk',
    accent: 'blue',
    company: 'E-commerce Brand — 40 employees',
    industry: 'Retail · Dallas, TX',
    headline: 'Closed a $1.4M enterprise deal blocked by vendor questionnaire.',
    body: 'A Fortune 500 retailer sent the client a 200-question vendor security questionnaire as a condition of contract signing. The client had no security programme and no idea how to answer. We built a lightweight vendor risk programme, answered the questionnaire, and provided supporting evidence. The contract was signed three weeks later.',
    metrics: [
      { val: '3',   unit: 'weeks', label: 'Questionnaire to signed contract' },
      { val: '$1.4M', unit: '', label: 'Deal value unlocked' },
      { val: '200', unit: 'Qs', label: 'Vendor questionnaire answered' },
    ],
    service: '/services/vendor',
  },
]

const STATS = [
  { val: '100%', label: 'SOC 2 pass rate' },
  { val: '<90',  label: 'Days avg gap to audit' },
  { val: '$0',   label: 'Client data breaches' },
  { val: '4.9★', label: 'Average client rating' },
]

export default function Results() {
  return (
    <>
      <SEO
        title="Client Results"
        description="Real outcomes from real clients. SOC 2 audits passed, M365 environments secured, cyber insurance approved."
        path="/results"
      />

      <PageHero
        label="Results"
        title="Outcomes that"
        accent="matter."
        desc="Every engagement is measured by one thing — did it work? Here's what working looks like."
        breadcrumb={[{ label: 'Results' }]}
      />

      {/* STATS BAR */}
      <section className={styles.statsBar}>
        {STATS.map(s => (
          <div key={s.label} className={styles.statItem}>
            <div className={styles.statVal}>{s.val}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* CASE STUDIES */}
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
                    <div className={styles.metricVal}>
                      {m.val}<span>{m.unit}</span>
                    </div>
                    <div className={styles.metricLabel}>{m.label}</div>
                  </div>
                ))}
              </div>

              <Link to={r.service} className={styles.caseLink}>
                Learn about this service →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaStrip}>
        <div className={styles.ctaInner}>
          <h2>Ready to be the next case study?</h2>
          <Link to="/contact" className={styles.btn}>Book a Free Call</Link>
        </div>
      </section>
    </>
  )
}
