import { useState } from 'react'
import { supabase } from '../lib/supabase'
import styles from './ContactForm.module.css'

const SERVICES = [
  'M365 Security & Backup',
  'Security Risk Assessment',
  'Fractional vCISO',
  'IAM Advisory & Audit',
  'General Inquiry',
]

// US and Canada phone validation
// Accepts: (xxx) xxx-xxxx, xxx-xxx-xxxx, +1xxxxxxxxxx, 10 digits
function isValidNAPhone(phone) {
  if (!phone) return false
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 11 && digits[0] === '1') return true
  if (digits.length === 10) return true
  return false
}

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `(${digits.slice(0,3)}) ${digits.slice(3)}`
  return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '', service: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = e => {
    const { name, value } = e.target
    if (name === 'phone') {
      setForm(f => ({ ...f, phone: formatPhone(value) }))
    } else {
      setForm(f => ({ ...f, [name]: value }))
    }
    // Clear error on change
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address'
    if (!form.company.trim()) errs.company = 'Company name is required'
    if (!form.phone.trim()) errs.phone = 'Phone number is required'
    else if (!isValidNAPhone(form.phone)) errs.phone = 'Enter a valid US or Canadian phone number'
    return errs
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus('loading')

    try {
      if (supabase) {
        const { error } = await supabase
          .from('contacts')
          .insert([{ ...form, created_at: new Date().toISOString() }])
        if (error) throw new Error(error.message)
      }
      try {
        await fetch('/api/contact-notify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
      } catch (_) {}

      setStatus('success')
      setForm({ name: '', email: '', company: '', phone: '', service: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <div className={styles.successTitle}>Message received.</div>
        <p className={styles.successDesc}>We will be in touch within one business day.</p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* Row 1: Name + Email */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>Full Name <span className={styles.req}>*</span></label>
          <input
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            name="name" value={form.name} onChange={handleChange}
            placeholder="Your full name" autoComplete="name"
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Email <span className={styles.req}>*</span></label>
          <input
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="you@company.com" autoComplete="email"
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
      </div>

      {/* Row 2: Company + Phone */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>Company <span className={styles.req}>*</span></label>
          <input
            className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
            name="company" value={form.company} onChange={handleChange}
            placeholder="Company name" autoComplete="organization"
          />
          {errors.company && <span className={styles.error}>{errors.company}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Phone <span className={styles.req}>*</span></label>
          <input
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            name="phone" type="tel" value={form.phone} onChange={handleChange}
            placeholder="(555) 555-5555" autoComplete="tel"
            maxLength={14}
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        </div>
      </div>

      {/* Service */}
      <div className={styles.field}>
        <label className={styles.label}>Service</label>
        <select className={styles.input} name="service" value={form.service} onChange={handleChange}>
          <option value="">Select a service (optional)</option>
          {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Message */}
      <div className={styles.field}>
        <label className={styles.label}>Message</label>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          name="message" value={form.message} onChange={handleChange}
          placeholder="Tell us about your security needs..."
          rows={4}
        />
      </div>

      {status === 'error' && (
        <div className={styles.submitError}>
          Something went wrong. Please email us directly at contact@cyvetting.com
        </div>
      )}

      <button type="submit" className={styles.btn} disabled={status === 'loading'}>
        {status === 'loading' ? (
          <>Sending…</>
        ) : (
          <>
            Send Message
            <span className={styles.btnArrow} aria-hidden="true">→</span>
          </>
        )}
      </button>

      <p className={styles.note}>
        <span className={styles.req}>*</span> Required fields.
        We respond within one business day.
      </p>
    </form>
  )
}
