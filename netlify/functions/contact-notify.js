export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    const body = await req.json()
    const { name, email, company, service, message } = body

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'CyVetting Contact Form <notifications@cyvetting.com>',
        to: ['contact@cyvetting.com'],
        reply_to: email,
        subject: `New lead: ${name} — ${service || 'General inquiry'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #050a0f; padding: 24px; border-bottom: 3px solid #aaff00;">
              <h1 style="color: #aaff00; font-size: 18px; margin: 0; font-family: monospace;">
                // New CyVetting Lead
              </h1>
            </div>
            <div style="background: #0a1520; padding: 32px; border: 1px solid #162030;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; color: #5a7a90; font-size: 13px; width: 120px;">Name</td>
                  <td style="padding: 10px 0; color: #ffffff; font-size: 13px; font-weight: bold;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #5a7a90; font-size: 13px;">Email</td>
                  <td style="padding: 10px 0; color: #00b4ff; font-size: 13px;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #5a7a90; font-size: 13px;">Company</td>
                  <td style="padding: 10px 0; color: #ffffff; font-size: 13px;">${company || '—'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #5a7a90; font-size: 13px;">Service</td>
                  <td style="padding: 10px 0; color: #aaff00; font-size: 13px;">${service || 'General inquiry'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #5a7a90; font-size: 13px; vertical-align: top;">Message</td>
                  <td style="padding: 10px 0; color: #d0e4f0; font-size: 13px; line-height: 1.6;">${message}</td>
                </tr>
              </table>
            </div>
            <div style="background: #050a0f; padding: 16px 24px;">
              <a href="mailto:${email}" 
                 style="background: #aaff00; color: #050a0f; padding: 10px 24px; 
                        text-decoration: none; font-weight: bold; font-size: 13px;
                        display: inline-block;">
                Reply to ${name} →
              </a>
            </div>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend error:', error)
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (err) {
    console.error('Function error:', err)
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

export const config = {
  path: '/api/contact-notify',
}
