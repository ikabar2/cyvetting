import { useState } from 'react'
import { supabase } from '../lib/supabase'
import styles from './ContactForm.module.css'

const SERVICES = [
  'SOC 2 Readiness',
  'M365 Security & Backup',
  'Vendor Security & Cyber Insurance',
  'General Inquiry',
]

const INITIAL = { name: '', email: '', company: '', phone: '', service: '', message: '' }

export default function ContactForm() {
  const [form, setForm]     = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError]   = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    if (!supabase) { setStatus("error"); setError("Contact form not configured yet. Email us directly at admin@cyvetting.com"); return; }

    const { error: sbError } = await supabase
      .from('contacts')
      .insert([{
        name:    form.name,
        email:   form.email,
        company: form.company,
        phone:   form.phone,
        service: form.service,
        message: form.message,
      }])

    if (sbError) {
      setStatus('error')
      setError(sbError.message)
    } else {
      setStatus('success')
      setForm(INITIAL)
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h3>Message received.</h3>
        <p>A CyVetting security specialist will be in touch within 24 hours.</p>
        <button className={styles.resetBtn} onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>Full Name <span>*</span></label>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Email Address <span>*</span></label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>Company</label>
          <input
            className={styles.input}
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Acme Corp"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Phone</label>
          <input
            className={styles.input}
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Service of Interest</label>
        <select
          className={styles.select}
          name="service"
          value={form.service}
          onChange={handleChange}
        >
          <option value="">— Select a service —</option>
          {SERVICES.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Message <span>*</span></label>
        <textarea
          className={styles.textarea}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your security needs..."
          rows={5}
          required
        />
      </div>

      {status === 'error' && (
        <div className={styles.errorMsg}>
          ✗ {error || 'Something went wrong. Please try again.'}
        </div>
      )}

      <button
        type="submit"
        className={styles.submit}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <span className={styles.spinner}>Sending<span className={styles.dots}>...</span></span>
        ) : (
          'Send Message →'
        )}
      </button>
    </form>
  )
}
