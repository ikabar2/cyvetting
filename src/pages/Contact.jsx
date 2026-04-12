import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <>
      <SEO
        title="Book a Free Call"
        description="Book a free 30-minute intro call with CyVetting. No sales pitch — just an honest assessment of where you stand. Buffalo NY, Niagara region. Remote nationwide. Relocation available."
        path="/contact"
      />
      <PageHero
        label="Contact"
        title="Let's talk."
        accent="No pitch. Just clarity."
        desc="Fill in the form and we will be in touch within one business day. Or email us directly at contact@cyvetting.com"
        breadcrumb={[{ label: 'Contact' }]}
      />
      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoLabel}>// Where we operate</div>
            <div className={styles.cities}>
              {['Dallas, TX','Nashville, TN','Phoenix, AZ','Buffalo, NY'].map(c => (
                <div key={c} className={styles.city}>{c}</div>
              ))}
              <div className={styles.city}>Nationwide — Remote</div>
            </div>
            <div className={styles.infoLabel} style={{marginTop:'32px'}}>// Services</div>
            <ul className={styles.serviceList}>
              <li>M365 Security &amp; Backup</li>
              <li>Security Risk Assessment</li>
              <li>SOC 2 Readiness</li>
              <li>HIPAA Gap Assessment</li>
            </ul>
            <div className={styles.infoLabel} style={{marginTop:'32px'}}>// Email</div>
            <a href="mailto:contact@cyvetting.com" className={styles.email}>contact@cyvetting.com</a>
          </div>
          <div className={styles.formWrap}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
