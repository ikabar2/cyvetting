import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import styles from './Contact.module.css'
import SEO from '../components/SEO'

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <SEO
        title="Contact CyVetting"
        description="Book a free 30-minute intro call with CyVetting. Get expert cybersecurity advice for your business — no obligation."
        canonical="/contact"
      />
      <PageHero
        label="Contact"
        title="Let's talk."
        accent="No sales pressure."
        desc="Book a free 30-minute intro call. We'll listen to your situation and tell you honestly whether and how we can help."
        breadcrumb={[{ label: 'Contact' }]}
      />
      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <div className={styles.infoLabel}>Dallas Headquarters</div>
              <p>2100 Ross Avenue, Suite 800<br />Dallas, Texas 75201<br />+1 (214) 555-0190</p>
            </div>
            <div className={styles.infoBlock}>
              <div className={styles.infoLabel}>Chicago Office</div>
              <p>444 West Lake Street, Suite 1700<br />Chicago, IL 60606<br />+1 (312) 555-0190</p>
            </div>
            <div className={styles.infoBlock}>
              <div className={styles.infoLabel}>Email</div>
              <p>admin@cyvetting.com</p>
            </div>
            <div className={styles.infoBlock}>
              <div className={styles.infoLabel}>Response Time</div>
              <p>Within 24 hours on business days.<br />Urgent matters: call directly.</p>
            </div>
          </div>
          <div className={styles.formWrap}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
