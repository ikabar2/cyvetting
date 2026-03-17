import ContactForm from './ContactForm'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>

        {/* Left — info */}
        <div className={styles.info}>
          <div className={styles.label}>Get In Touch</div>
          <h2 className={styles.heading}>
            Your security posture <span>starts here.</span>
          </h2>
          <p className={styles.subtext}>
            Tell us about your organization and a CyVetting specialist will respond within 24 hours.
          </p>

          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>📍</span>
              <div>
                <div className={styles.detailTitle}>Dallas HQ</div>
                <div className={styles.detailVal}>2100 Ross Avenue, Suite 800, TX 75201</div>
              </div>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>📍</span>
              <div>
                <div className={styles.detailTitle}>Chicago</div>
                <div className={styles.detailVal}>1 World Trade Center, Floor 42, NY 10007</div>
              </div>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>✉️</span>
              <div>
                <div className={styles.detailTitle}>Email</div>
                <div className={styles.detailVal}>admin@cyvetting.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className={styles.formWrap}>
          <ContactForm />
        </div>

      </div>
    </section>
  )
}
