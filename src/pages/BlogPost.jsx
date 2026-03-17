import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import styles from './BlogPost.module.css'

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    async function fetchPost() {
      if (!supabase) { setNotFound(true); setLoading(false); return }
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()
      if (error || !data) { setNotFound(true) }
      else { setPost(data) }
      setLoading(false)
    }
    fetchPost()
    window.scrollTo(0, 0)
  }, [slug])

  if (loading) return (
    <div className={styles.loading}>
      <div className={styles.loadingBar} />
      <div className={styles.loadingBar} style={{width:'60%'}} />
      <div className={styles.loadingBar} style={{width:'80%'}} />
    </div>
  )

  if (notFound) return (
    <>
      <SEO title="Post Not Found" description="This post could not be found." path={`/blog/${slug}`} />
      <div className={styles.notFound}>
        <div className={styles.notFoundCode}>404</div>
        <div className={styles.notFoundMsg}>Post not found.</div>
        <Link to="/blog" className={styles.backLink}>← Back to blog</Link>
      </div>
    </>
  )

  const date = new Date(post.published_at).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        article={{ publishedAt: post.published_at, tags: [post.tag] }}
      />

      <PageHero
        label={post.tag}
        title={post.title}
        desc={post.excerpt}
        breadcrumb={[{ label: 'Blog', href: '/blog' }, { label: post.tag }]}
      />

      <article className={styles.article}>
        <div className={styles.meta}>
          <span className={`${styles.tag} ${styles[post.accent || 'lime']}`}>{post.tag}</span>
          <span className={styles.date}>{date}</span>
          <span className={styles.readTime}>{post.read_time}</span>
        </div>

        <div className={styles.content}>
          {post.content.split('\n\n').map((para, i) => (
            para.trim() && <p key={i}>{para.trim()}</p>
          ))}
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaLabel}>// Ready to get started?</div>
          <h3 className={styles.ctaTitle}>Book a free 30-minute assessment.</h3>
          <p className={styles.ctaDesc}>No sales pitch. Just an honest look at where you stand and what it takes to get compliant.</p>
          <Link to="/contact" className={styles.ctaBtn}>Book Free Call →</Link>
        </div>

        <div className={styles.back}>
          <Link to="/blog" className={styles.backLink}>← Back to all posts</Link>
        </div>
      </article>
    </>
  )
}
