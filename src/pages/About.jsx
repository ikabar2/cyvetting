import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { supabase } from '../lib/supabase'
import styles from './About.module.css'
import SEO from '../components/SEO'

const VALUES = [
  { icon: '🎯', title: 'Outcome-Driven', desc: "We measure success by your audit pass, your insurance approval, your closed deal — not hours billed." },
  { icon: '🔍', title: 'Radically Transparent', desc: "No jargon, no upselling fear. We tell you exactly what you need, what you don't, and why." },
  { icon: '⚡', title: 'Built for Small Teams', desc: "Enterprise-grade security doesn't require an enterprise team. We right-size everything for how you actually work." },
  { icon: '🤝', title: 'Long-Term Partner', desc: "We're not a vendor. We're the security person you call when something happens at 11pm on a Friday." },
]

const EDUCATION = [
  { year: '2021', yearColor: 'lime', degree: 'BSc Computer Science', institution: 'WLU Waterloo', last: false },
  { year: '2024', yearColor: 'blue', degree: 'Post-Graduate Certificate — Project Management', institution: 'Humber College', last: false },
  { year: '2026', yearColor: 'lime', degree: 'Post-Graduate Certificate — Cybersecurityt', institution: 'Centennial College', last: true },
]

function TeamCard({ member }) {
  return (
    <div className={styles.memberCard}>
      <div className={styles.memberPhoto}>
        {member.photo_url
          ? <img src={member.photo_url} alt={member.name} className={styles.memberImg} />
          : <div className={styles.photoPlaceholder}>
              <span>{member.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase()}</span>
            </div>
        }
      </div>
      <div className={styles.memberInfo}>
        <div className={styles.memberName}>{member.name}</div>
        <div className={styles.memberTitle}>{member.title}</div>
        {member.bio && <p className={styles.memberBio}>{member.bio}</p>}
        {member.creds && member.creds.length > 0 && (
          <div className={styles.creds}>
            {member.creds.map(c => (
              <span key={c} className={styles.cred}>{c}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function EducationTimeline() {
  return (
    <div className={styles.eduSection}>
      <div className={styles.label}>Education</div>
      <div className={styles.sectionTitle}>Academic background.</div>
      <div className={styles.timeline}>
        {EDUCATION.map((item, i) => (
          <div key={i} className={styles.timelineItem}>
            <div className={styles.timelineLeft}>
              <div className={`${styles.yearBadge} ${styles[`year_${item.yearColor}`]}`}>
                {item.year}
              </div>
              {!item.last && <div className={styles.timelineRail} />}
            </div>
            <div className={`${styles.timelineContent} ${item.last ? styles.timelineLast : ''}`}>
              <div className={styles.eduDegree}>{item.degree}</div>
              <div className={styles.eduInstitution}>{item.institution}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    async function fetchTeam() {
      if (!supabase) {
        setError(true)
        setLoading(false)
        return
      }
      try {
        const { data, error: dbError } = await supabase
          .from('team')
          .select('*')
          .eq('active', true)
          .order('sort_order')

        if (dbError) throw dbError
        setTeam(data || [])
      } catch (err) {
        console.error('Team fetch error:', err)
        setError(true)
      }
      setLoading(false)
    }
    fetchTeam()
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [team])

  return (
    <>
      <SEO
        title="About CyVetting"
        description="Meet the team behind CyVetting Security — experienced cybersecurity professionals helping small businesses stay protected."
        path="/about"
      />
      <PageHero
        label="About CyVetting"
        title="Security expertise."
        accent="Built for business."
        desc="CyVetting is a lean cybersecurity practice built for small and mid-sized businesses that need enterprise-grade protection without enterprise overhead."
        breadcrumb={[{ label: 'About' }]}
      />

      {/* TEAM SECTION */}
      <section className={styles.section} ref={ref}>
        <div className={styles.label}>The Team</div>
        <div className={styles.sectionTitle}>
          The people behind <em>CyVetting</em>
        </div>

        {loading && (
          <div className={styles.loading}>
            <div className={styles.loadingBar} />
            <div className={styles.loadingBar} style={{width:'60%'}} />
            <div className={styles.loadingBar} style={{width:'80%'}} />
          </div>
        )}

        {!loading && error && (
          <div className={styles.errorMsg}>
            Team information unavailable. Please check back soon.
          </div>
        )}

        {!loading && !error && team.length === 0 && (
          <div className={styles.errorMsg}>
            Team information coming soon.
          </div>
        )}

        {!loading && !error && team.length > 0 && (
          <div className={`${styles.teamGrid} ${team.length === 1 ? styles.single : ''}`}>
            {team.map(member => (
              <div key={member.id} className="fade-up">
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* EDUCATION */}
      <section className={`${styles.section} ${styles.dark}`}>
        <EducationTimeline />
      </section>

      {/* VALUES */}
      <section className={styles.section}>
        <div className={styles.label}>Our Values</div>
        <div className={styles.sectionTitle}>How we work.</div>
        <div className={styles.valuesGrid}>
          {VALUES.map((v) => (
            <div key={v.title} className={`${styles.valueCard} fade-up`}>
              <span className={styles.valueIcon}>{v.icon}</span>
              <div className={styles.valueTitle}>{v.title}</div>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.ctaBar}>
        <h3>Ready to work together?</h3>
        <Link to="/contact" className={styles.btnPrimary}>Book an Intro Call</Link>
      </div>
    </>
  )
}
