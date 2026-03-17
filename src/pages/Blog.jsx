import SEO from '../components/SEO'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { supabase } from '../lib/supabase'
import styles from './Blog.module.css'

const FALLBACK_POSTS = [
  {
    id: '1',
    slug: 'soc2-myths-small-business',
    title: '5 SOC 2 Myths That Are Costing Small Businesses Real Money',
    excerpt: 'Most small businesses think SOC 2 is only for enterprise companies. That belief is leaving money on the table and doors open to attackers.',
    tag: 'SOC 2',
    accent: 'lime',
    read_time: '6 min read',
    published_at: '2025-03-01',
  },
  {
    id: '2',
    slug: 'm365-hardening-checklist',
    title: 'The M365 Security Checklist Every Small Business Needs in 2025',
    excerpt: 'Microsoft 365 ships with most security features turned off by default. Here is what to enable before something goes wrong.',
    tag: 'M365',
    accent: 'blue',
    read_time: '8 min read',
    published_at: '2025-02-14',
  },
  {
    id: '3',
    slug: 'cyber-insurance-rejection',
    title: 'Why Your Cyber Insurance Application Gets Rejected (And How to Fix It)',
    excerpt: 'Insurers are rejecting more applications than ever. The reason is almost always the same — and it is fixable in under 30 days.',
    tag: 'Cyber Insurance',
    accent: 'lime',
    read_time: '5 min read',
    published_at: '2025-01-28',
  },
  {
    id: '4',
    slug: 'vendor-questionnaire-guide',
    title: 'How to Answer a Vendor Security Questionnaire Without a Security Team',
    excerpt: 'Enterprise clients are sending longer and more demanding security questionnaires. Here is how to answer them without hiring a full security team.',
    tag: 'Vendor Risk',
    accent: 'blue',
    read_time: '7 min read',
    published_at: '2025-01-10',
  },
]

function PostCard({ post }) {
  const date = new Date(post.published_at).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
  return (
    <article className={styles.card}>
      <div className={`${styles.cardBar} ${styles[post.accent || 'lime']}`} />
      <div className={styles.cardMeta}>
        <span className={`${styles.tag} ${styles[post.accent || 'lime']}`}>{post.tag}</span>
        <span className={styles.readTime}>{post.read_time}</span>
      </div>
      <h2 className={styles.cardTitle}>{post.title}</h2>
      <p className={styles.cardExcerpt}>{post.excerpt}</p>
      <div className={styles.cardFooter}>
        <span className={styles.date}>{date}</span>
        <Link to={`/blog/${post.slug}`} className={styles.readLink}>Read article →</Link>
      </div>
    </article>
  )
}

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      if (!supabase) {
        setPosts(FALLBACK_POSTS)
        setLoading(false)
        return
      }
      const { data } = await supabase
        .from('posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false })

      setPosts(data?.length ? data : FALLBACK_POSTS)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  return (
    <>
      <SEO
        title="Security Blog"
        description="Practical cybersecurity insights for small business owners. SOC 2, M365, vendor risk, and more — written by a practitioner."
        path="/blog"
      />

      <PageHero
        label="Blog"
        title="Security insights,"
        accent="no fluff."
        desc="Practical cybersecurity guidance written for business owners, not security analysts."
        breadcrumb={[{ label: 'Blog' }]}
      />

      <section className={styles.section}>
        {loading ? (
          <div className={styles.loadingGrid}>
            {[1,2,3,4].map(i => (
              <div key={i} className={styles.skeleton}>
                <div className={styles.skeletonBar} />
                <div className={styles.skeletonTitle} />
                <div className={styles.skeletonLine} />
                <div className={styles.skeletonLine} style={{width:'75%'}} />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.grid}>
            {posts.map(post => <PostCard key={post.id} post={post} />)}
          </div>
        )}
      </section>

      {/* NEWSLETTER CTA */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterInner}>
          <div>
            <div className={styles.nlLabel}>// Stay sharp</div>
            <h3 className={styles.nlTitle}>Security insights, monthly.</h3>
            <p className={styles.nlDesc}>No spam. Practical security guidance for business owners — once a month.</p>
          </div>
          <Link to="/contact" className={styles.nlBtn}>Get in touch</Link>
        </div>
      </section>
    </>
  )
}
