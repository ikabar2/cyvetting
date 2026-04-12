export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://cyvetting.com/#business',
        name: 'CyVetting Security Inc.',
        description: 'Enterprise cybersecurity for small and mid-sized businesses. SOC 2 readiness, M365 security, vendor risk management.',
        url: 'https://cyvetting.com',
        logo: 'https://cyvetting.com/logo.svg',
        image: 'https://cyvetting.com/og-image.png',
        email: 'contact@cyvetting.com',
        areaServed: ['Dallas, TX', 'Nashville, TN', 'Phoenix, AZ', 'Buffalo, NY', 'United States'],
        serviceType: ['SOC 2 Readiness', 'M365 Security', 'Vendor Risk Management', 'Cyber Insurance'],
        priceRange: '$$',
        knowsAbout: ['SOC 2', 'Microsoft 365', 'Cybersecurity', 'Vendor Risk', 'Cyber Insurance', 'Zero Trust', 'NIST'],
        sameAs: [
          'https://www.linkedin.com/company/cyvetting',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://cyvetting.com/#website',
        url: 'https://cyvetting.com',
        name: 'CyVetting',
        publisher: { '@id': 'https://cyvetting.com/#business' },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
