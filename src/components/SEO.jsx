import { Helmet } from 'react-helmet-async'

const SITE = 'https://cyvetting.com'
const DEFAULT_IMAGE = `${SITE}/og-image.png`

export default function SEO({
  title,
  description,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  article = null,
}) {
  const fullTitle = title
    ? `${title} — CyVetting`
    : 'CyVetting — Verify. Protect. Comply.'
  const url = `${SITE}${path}`

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type"        content={type} />
      <meta property="og:url"         content={url} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={image} />
      <meta property="og:site_name"   content="CyVetting" />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />

      {/* Article extras */}
      {article?.publishedAt && (
        <meta property="article:published_time" content={article.publishedAt} />
      )}
      {article?.tags?.map(tag => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}
    </Helmet>
  )
}
