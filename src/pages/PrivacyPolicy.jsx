import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import styles from './Legal.module.css'
import SEO from '../components/SEO'

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const updated = 'April 2026'
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="CyVetting Security privacy policy — how we collect, use, and protect your information."
        canonical="/privacy-policy"
        noindex={true}
      />
      <PageHero
        label="Legal"
        title="Privacy Policy"
        accent=""
        desc={`Last updated: ${updated}`}
        breadcrumb={[{ label: 'Privacy Policy' }]}
      />
      <section className={styles.section}>
        <div className={styles.doc}>

          <div className={styles.block}>
            <h2>1. Who We Are</h2>
            <p>CyVetting Security Inc. ("CyVetting", "we", "us", or "our") is a cybersecurity consulting firm serving clients in Buffalo, NY, the Niagara region, and remotely across North America. We operate this website at cyvetting.com (the "Site").</p>
            <p>For questions about this policy, contact us at: <strong>contact@cyvetting.com</strong></p>
          </div>

          <div className={styles.block}>
            <h2>2. Information We Collect</h2>
            <p>We collect information you provide directly to us when you:</p>
            <ul>
              <li>Submit the contact form on our Site (name, email address, company name, phone number, and message)</li>
              <li>Email us directly</li>
              <li>Engage us for services</li>
            </ul>
            <p>We do not use tracking cookies, advertising pixels, or behavioral analytics tools. We do not collect any information automatically beyond standard web server logs (IP address, browser type, pages visited) which are retained for 30 days for security purposes.</p>
          </div>

          <div className={styles.block}>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul>
              <li>Respond to your inquiry</li>
              <li>Provide the services you have requested</li>
              <li>Send you updates directly related to your engagement with us</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </div>

          <div className={styles.block}>
            <h2>4. Data Storage</h2>
            <p>Contact form submissions are stored in a secure database provided by Supabase, Inc., located in the United States. Supabase is SOC 2 Type 2 certified. Data is encrypted at rest and in transit.</p>
            <p>We retain contact form submissions for 24 months, after which they are deleted.</p>
          </div>

          <div className={styles.block}>
            <h2>5. Your Rights (Canadian Residents — PIPEDA)</h2>
            <p>Under Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), you have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Withdraw consent to our use of your information (subject to legal and contractual restrictions)</li>
              <li>File a complaint with the Office of the Privacy Commissioner of Canada</li>
            </ul>
            <p>To exercise these rights, email us at <strong>contact@cyvetting.com</strong>. We will respond within 30 days.</p>
          </div>

          <div className={styles.block}>
            <h2>6. Your Rights (US Residents)</h2>
            <p>If you are a resident of California, Texas, or another state with applicable privacy laws, you may have additional rights regarding your personal information. Contact us at <strong>contact@cyvetting.com</strong> to make a request.</p>
          </div>

          <div className={styles.block}>
            <h2>7. Cookies</h2>
            <p>This Site does not use cookies for tracking or advertising. We may use a single session cookie for technical functionality only (e.g., form submission state). No consent banner is required as we do not use tracking cookies.</p>
          </div>

          <div className={styles.block}>
            <h2>8. Third-Party Links</h2>
            <p>Our Site may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>
          </div>

          <div className={styles.block}>
            <h2>9. Children's Privacy</h2>
            <p>Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors.</p>
          </div>

          <div className={styles.block}>
            <h2>10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised "Last updated" date. Continued use of the Site after changes constitutes acceptance of the updated policy.</p>
          </div>

          <div className={styles.block}>
            <h2>11. Contact</h2>
            <p>For any privacy-related questions or requests:</p>
            <p><strong>CyVetting Security Inc.</strong><br />
            Email: contact@cyvetting.com<br />
            Buffalo, NY · Niagara Region, ON · Remote</p>
          </div>

        </div>
      </section>
    </>
  )
}
