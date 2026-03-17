import { useEffect, useRef } from 'react'
import styles from './About.module.css'

const TAGS = ['SOC 2 Ready', 'NIST Framework', 'Zero Trust', 'ISO 27001', 'HIPAA Compliant', 'MS Partner']

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className={styles.section} id="about" ref={ref}>
      <div className={styles.split}>
        <div className={`${styles.terminal} fade-up`}>
          <div className={styles.bar}>
            <span className={`${styles.dot} ${styles.red}`} />
            <span className={`${styles.dot} ${styles.yellow}`} />
            <span className={`${styles.dot} ${styles.green}`} />
            <span className={styles.barTitle}>cyvetting@ops ~ threat-scan</span>
          </div>
          <div className={styles.body}>
            <div className={styles.line}><span className={styles.prompt}>$</span><span className={styles.cmd}>cyvetting --init threat-assessment --target client-env</span></div>
            <div className={styles.output}>Connecting to CyVetting Security Platform v4.2...</div>
            <div className={styles.success}>✓ Cloud environment scanned</div>
            <div className={styles.success}>✓ Identity providers verified</div>
            <div className={styles.warn}>⚠ 3 misconfigured IAM policies detected</div>
            <div className={styles.warn}>⚠ Unmonitored inbound port: 8080</div>
            <div className={styles.err}>✗ MFA disabled — 14 accounts at risk</div>
            <div className={`${styles.line} ${styles.mt}`}><span className={styles.prompt}>$</span><span className={styles.cmd}>cyvetting --remediate --auto-patch --notify</span></div>
            <div className={styles.success}>✓ Patches applied: 3/3</div>
            <div className={styles.success}>✓ Port 8080 quarantined</div>
            <div className={styles.success}>✓ MFA enforcement pushed to all accounts</div>
            <div className={`${styles.line} ${styles.mt}`}><span className={styles.accentText}>Risk Score: 91 → 12 (SECURE)</span></div>
            <div className={styles.line}><span className={styles.prompt}>$</span><span className={`${styles.accentText} ${styles.blink}`}>█</span></div>
          </div>
        </div>

        <div className={`${styles.text} fade-up`}>
          <div className={styles.label}>Who We Are</div>
          <div className={styles.title}>Built by experts.<br />Trusted by <em>business</em>.</div>
          <p>CyVetting was founded by a team of former enterprise security architects and ethical hackers who grew tired of watching businesses suffer from preventable breaches. We built the firm we wished existed.</p>
          <p>Headquartered in Dallas, TX with offices in Chicago, IL and Denver, CO — we serve clients nationwide, delivering enterprise-grade security regardless of scale.</p>
          <p>We don't just react to threats. We anticipate them.</p>
          <div className={styles.tags}>
            {TAGS.map(t => <span key={t} className={styles.tag}>{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
