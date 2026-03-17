import styles from './Ticker.module.css'

const ITEMS = [
  'SOC 2 Readiness',
  'M365 Security & Backup',
  'Vendor Security Assessment',
  'Cyber Insurance Support',
  'Zero Trust Framework',
  'Incident Response',
  'Compliance & Audit Ready',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className={styles.wrap}>
      <div className={styles.ticker}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot}>▸</span> {item}
          </span>
        ))}
      </div>
    </div>
  )
}
