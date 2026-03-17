import { useEffect, useRef } from 'react'
import styles from './Locations.module.css'

const LOCATIONS = [
  {
    city: 'Dallas, TX',
    addr: ['2100 Ross Avenue, Suite 800', 'Dallas, Texas 75201', '+1 (214) 555-0190'],
    badge: 'Headquarters',
    hq: true,
  },
  {
    city: 'Chicago, IL',
    addr: ['444 West Lake Street, Suite 1700', 'Chicago, Illinois 60606', '+1 (312) 555-0190'],
    badge: 'Midwest Office',
    hq: false,
  },
  {
    city: 'Denver, CO',
    addr: ['1700 Lincoln Street, Suite 2000', 'Denver, Colorado 80203', '+1 (720) 555-0190'],
    badge: 'Mountain Office',
    hq: false,
  },
  {
    city: 'Remote SOC',
    addr: ['24/7 Security Operations Center', 'Monitoring clients coast to coast', 'Nationwide response capability'],
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
      <div className={styles.title}>Three cities.<br /><em>National coverage.</em></div>
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
