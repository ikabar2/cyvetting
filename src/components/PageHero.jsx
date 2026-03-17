import { Link } from 'react-router-dom'
import styles from './PageHero.module.css'

export default function PageHero({ label, title, accent, desc, breadcrumb }) {
  return (
    <div className={styles.hero}>
      <div className={styles.scanner} />
      <div className={styles.inner}>
        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span>/</span>
          {breadcrumb.map((b, i) => (
            <span key={i}>
              {b.href ? <Link to={b.href}>{b.label}</Link> : <span className={styles.current}>{b.label}</span>}
              {i < breadcrumb.length - 1 && <span>/</span>}
            </span>
          ))}
        </div>
        <div className={styles.label}>{label}</div>
        <h1 className={styles.title}>
          {title} <em>{accent}</em>
        </h1>
        {desc && <p className={styles.desc}>{desc}</p>}
      </div>
    </div>
  )
}
