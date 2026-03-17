import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import styles from './Legal.module.css'
import SEO from '../components/SEO'

export default function TermsOfService() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const updated = 'March 2025'
  return (
    <>
      <SEO
        title="Terms of Service"
        description="CyVetting Security terms of service — the rules and conditions for using our website and services."
        canonical="/terms-of-service"
        noindex={true}
      />
      <PageHero
        label="Legal"
        title="Terms of Service"
        accent=""
        desc={`Last updated: ${updated}`}
        breadcrumb={[{ label: 'Terms of Service' }]}
      />
      <section className={styles.section}>
        <div className={styles.doc}>

          <div className={styles.block}>
            <h2>1. Agreement to Terms</h2>
            <p>By accessing or using the CyVetting Security Inc. website at cyvetting.com (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Site.</p>
          </div>

          <div className={styles.block}>
            <h2>2. Services</h2>
            <p>CyVetting Security Inc. provides cybersecurity consulting services including SOC 2 readiness, Microsoft 365 security, and vendor risk management. Specific services are governed by a separate Master Services Agreement (MSA) and Statement of Work (SOW) executed between CyVetting and the client. These Terms apply solely to use of this Site.</p>
          </div>

          <div className={styles.block}>
            <h2>3. Use of the Site</h2>
            <p>You agree to use this Site only for lawful purposes. You must not:</p>
            <ul>
              <li>Attempt to gain unauthorized access to any part of the Site or its infrastructure</li>
              <li>Use the Site to transmit harmful, offensive, or unlawful content</li>
              <li>Scrape, copy, or reproduce content from this Site without written permission</li>
              <li>Use automated tools to access the Site in a manner that could damage or overburden it</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2>4. Intellectual Property</h2>
            <p>All content on this Site — including text, graphics, logos, and design — is the property of CyVetting Security Inc. and is protected by applicable copyright and trademark laws. Nothing on this Site grants you any license to use our intellectual property without prior written consent.</p>
          </div>

          <div className={styles.block}>
            <h2>5. No Professional Advice</h2>
            <p>Content on this Site, including blog posts and service descriptions, is provided for general informational purposes only. It does not constitute legal, compliance, or professional security advice. You should not act on any information on this Site without first seeking qualified professional advice specific to your situation.</p>
          </div>

          <div className={styles.block}>
            <h2>6. Disclaimer of Warranties</h2>
            <p>The Site is provided "as is" and "as available" without warranties of any kind, express or implied. CyVetting does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
          </div>

          <div className={styles.block}>
            <h2>7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable law, CyVetting Security Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Site.</p>
          </div>

          <div className={styles.block}>
            <h2>8. Third-Party Links</h2>
            <p>This Site may contain links to third-party websites. These links are provided for convenience only. CyVetting has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>
          </div>

          <div className={styles.block}>
            <h2>9. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of [Wyoming / New Mexico — match your LLC state], without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of that state, or — where applicable — through binding arbitration under the rules of the American Arbitration Association.</p>
          </div>

          <div className={styles.block}>
            <h2>10. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised "Last updated" date. Continued use of the Site after changes are posted constitutes your acceptance of the new Terms.</p>
          </div>

          <div className={styles.block}>
            <h2>11. Contact</h2>
            <p>Questions about these Terms?</p>
            <p><strong>CyVetting Security Inc.</strong><br />
            Email: admin@cyvetting.com<br />
            [Your Registered Address]</p>
          </div>

        </div>
      </section>
    </>
  )
}
