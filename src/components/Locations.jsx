import { useEffect, useRef } from 'react'
import styles from './Locations.module.css'

const LOCATIONS = [
  {
    city: 'Buffalo, NY',
    addr: ['Western New York', 'Buffalo, New York', 'contact@cyvetting.com'],
    badge: 'Primary Market',
    hq: true,
  },
  {
    city: 'Niagara Region, ON',
    addr: ['Ontario Border Market', 'Niagara Region, Ontario', 'IAM · M365 · vCISO'],
    badge: 'Cross-Border',
    hq: false,
  },
  {
    city: 'Remote',
    addr: ['24/7 Security Operations', 'Serving clients coast to coast', 'Nationwide coverage'],
    badge: 'Always On',
    hq: false,
    remote: true,
  },
  {
    city: 'Relocation',
    addr: ['Available on request', 'Dallas · Nashville · Phoenix', 'Open to US markets'],
    badge: 'On Request',
    hq: false,
  },
],
    badge: 'Headquarters',
    hq: true,
  },
  {
    city: 'Nashville, TN',
    addr: ['Healthcare Capital', 'Nashville, Tennessee', 'HIPAA · SOC 2'],
    badge: 'Healthcare Focus',
    hq: false,
  },
  {
    city: 'Phoenix, AZ',
    addr: ['Southwest Market', 'Phoenix, Arizona', 'M365 · Risk Assessment'],
    badge: 'Southwest',
    hq: false,
  },
  {
    city: 'Buffalo, NY',
    addr: ['Ontario Border Market', 'Buffalo, New York', 'IAM · HIPAA · SOC 2'],
    badge: 'Border Market',
    hq: false,
  },
  {
    city: 'Remote',
    addr: ['24/7 Security Operations', 'Monitoring clients coast to coast', 'Nationwide response'],
    badge: 'Always On',
    hq: false,
    remote: true,
  },
]

export default function Locations() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 120)
      }),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className={styles.section} id="locations" ref={ref}>
      <div className={styles.label}>Where We Operate</div>
      <div className={styles.title}>Buffalo & Niagara.<br /><em>Remote nationwide.</em></div>
      <div className={styles.grid}>
        {LOCATIONS.map((loc, i) => (
          <div key={i} className={`${styles.card} ${loc.remote ? styles.remote : ''} fade-up`}>
            <div className={`${styles.city} ${loc.remote ? styles.cityMuted : ''}`}>{loc.city}</div>
            <div className={styles.addr}>
              {loc.addr.map((line, j) => <span key={j}>{line}<br /></span>)}
            </div>
            <span className={`${styles.badge} ${loc.remote ? styles.badgeMuted : ''}`}>{loc.badge}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
