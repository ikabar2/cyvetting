import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

const TERMINAL_LINES = [
  { color: 'lime',  text: '$ cyvetting --scan target.com' },
  { color: 'muted', text: '› Checking M365 configuration...' },
  { color: 'muted', text: '› Running SOC 2 gap analysis...' },
  { color: 'muted', text: '› Scanning vendor risk surface...' },
  { color: 'blue',  text: '✓ 3 critical issues found' },
  { color: 'blue',  text: '✓ 12 medium severity items' },
  { color: 'lime',  text: '→ Book remediation call ▌' },
  { color: 'red',   text: '⚠ Immediate action recommended' },
  { color: 'muted', text: 'cyvetting.com' },
]

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className={styles.hero} ref={ref}>
      <div className={styles.scanner} />
      <div className={styles.glow} />

      <div className={styles.inner}>
        {/* LEFT — content */}
        <div className={styles.content}>
          <div className={`${styles.tag} fade-up`}>
            // Dallas · Nashville · Phoenix · Buffalo
          </div>

          <h1 className={`${styles.h1} fade-up`}>
            <span className={styles.white}>Verify.</span>
            <span className={styles.lime}>Protect.</span>
            <span className={styles.white}>Comply.</span>
          </h1>

          <p className={`${styles.desc} fade-up`}>
            Enterprise-grade cybersecurity for small businesses.<br />
            SOC 2 readiness, M365 security, vendor risk management.
          </p>

          <div className={`${styles.actions} fade-up`}>
            <Link to="/contact" className={styles.btnPrimary}>Book Free Call</Link>
            <Link to="/services/soc2" className={styles.btnGhost}>View Services</Link>
          </div>

          <div className={`${styles.stats} fade-up`}>
            <div className={styles.stat}>
              <div className={styles.statVal}>99<span>.9%</span></div>
              <div className={styles.statLabel}>Uptime SLA</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statVal}>24<span>/7</span></div>
              <div className={styles.statLabel}>Monitoring</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statVal}>0<span>-Day</span></div>
              <div className={styles.statLabel}>Response</div>
            </div>
          </div>
        </div>

        {/* RIGHT — terminal */}
        <div className={`${styles.terminal} fade-up`}>
          <div className={styles.terminalBar}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotLime}`} />
            <span className={`${styles.dot} ${styles.dotBlue}`} />
            <span className={styles.termTitle}>cyvetting — scan</span>
          </div>
          <div className={styles.terminalBody}>
            {TERMINAL_LINES.map((line, i) => (
              <div key={i} className={`${styles.termLine} ${styles[`t_${line.color}`]}`}>
                {line.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
