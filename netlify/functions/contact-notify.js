export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    const body = await req.json()
    const { name, email, company, phone, service, message } = body

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      dateStyle: 'full',
      timeStyle: 'short',
    })

    // ── 1. OWNER NOTIFICATION → contact@cyvetting.com ──
    const ownerHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a1222;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center" style="padding:32px 16px;">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- HEADER -->
        <tr><td style="background:#091729;border-top:4px solid #f5c518;padding:28px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <span style="font-family:monospace;font-size:18px;font-weight:700;color:#f5c518;">Cy</span>
                <span style="font-family:monospace;font-size:18px;color:#ffffff;">Vetting</span>
                <span style="font-family:monospace;font-size:11px;color:#6b8db5;margin-left:12px;">// Security Consulting</span>
              </td>
              <td align="right">
                <span style="background:#f5c518;color:#091729;font-size:11px;font-weight:700;
                             font-family:monospace;padding:4px 12px;">NEW LEAD</span>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- TIMESTAMP BANNER -->
        <tr><td style="background:#0f2240;padding:10px 32px;border-left:1px solid #1e3a5f;border-right:1px solid #1e3a5f;">
          <span style="font-family:monospace;font-size:11px;color:#6b8db5;">
            // Received: ${timestamp} ET
          </span>
        </td></tr>

        <!-- LEAD DETAILS -->
        <tr><td style="background:#0f2240;padding:32px;border:1px solid #1e3a5f;border-top:none;">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${[
              ['Name',    name,                      '#ffffff'],
              ['Email',   email,                     '#f5c518'],
              ['Phone',   phone || '—',              '#f5c518'],
              ['Company', company || '—',            '#ffffff'],
              ['Service', service || 'General Inquiry', '#f5c518'],
            ].map(([label, value, color]) => `
            <tr>
              <td style="padding:12px 0;color:#6b8db5;font-size:12px;
                         font-family:monospace;width:110px;vertical-align:top;
                         border-bottom:1px solid #1e3a5f;">${label}</td>
              <td style="padding:12px 0;font-size:14px;font-weight:600;
                         color:${color};border-bottom:1px solid #1e3a5f;">${value}</td>
            </tr>`).join('')}
            <tr>
              <td style="padding:12px 0;color:#6b8db5;font-size:12px;
                         font-family:monospace;vertical-align:top;">Message</td>
              <td style="padding:12px 0;font-size:14px;color:#c8d8e8;line-height:1.7;">
                ${message ? message.replace(/\n/g, '<br>') : '<em style="color:#6b8db5;">No message provided</em>'}
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- CTA -->
        <tr><td style="background:#091729;padding:24px 32px;border:1px solid #1e3a5f;border-top:none;">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding-right:12px;">
                <a href="mailto:${email}?subject=Re: Your CyVetting inquiry&body=Hi ${name},%0A%0AThank you for reaching out to CyVetting.%0A%0A"
                   style="background:#f5c518;color:#091729;padding:12px 24px;
                          text-decoration:none;font-weight:700;font-size:13px;
                          font-family:Arial,sans-serif;display:inline-block;">
                  Reply to ${name} →
                </a>
              </td>
              ${phone && phone !== '—' ? `
              <td>
                <a href="tel:${phone.replace(/\D/g,'')}"
                   style="border:1px solid #f5c518;color:#f5c518;padding:11px 20px;
                          text-decoration:none;font-size:13px;
                          font-family:Arial,sans-serif;display:inline-block;">
                  Call ${phone}
                </a>
              </td>` : ''}
            </tr>
          </table>
        </td></tr>

        <!-- FOOTER -->
        <tr><td style="background:#070f1c;padding:16px 32px;border-top:2px solid #f5c518;">
          <p style="margin:0;font-family:monospace;font-size:10px;color:#3a5070;">
            CyVetting Security Inc. · contact@cyvetting.com · cyvetting.com
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

    // ── 2. AUTO-REPLY → lead's email ──
    const autoReplyHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center" style="padding:32px 16px;">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- HEADER -->
        <tr><td style="background:#091729;border-top:4px solid #f5c518;padding:28px 32px;">
          <span style="font-family:monospace;font-size:20px;font-weight:700;color:#f5c518;">Cy</span>
          <span style="font-family:monospace;font-size:20px;color:#ffffff;">Vetting</span>
          <span style="display:block;font-family:monospace;font-size:11px;color:#6b8db5;margin-top:4px;">
            Security Consulting · Buffalo, NY · Niagara, ON · Remote
          </span>
        </td></tr>

        <!-- BODY -->
        <tr><td style="background:#ffffff;padding:40px 32px;">
          <p style="margin:0 0 20px;font-size:22px;font-weight:700;color:#0f2240;">
            Hi ${name},
          </p>
          <p style="margin:0 0 16px;font-size:15px;color:#334155;line-height:1.75;">
            Thank you for reaching out to CyVetting. I've received your message and
            will be in touch within <strong>one business day</strong>.
          </p>
          <p style="margin:0 0 16px;font-size:15px;color:#334155;line-height:1.75;">
            In the meantime, here's a quick overview of what we help businesses with:
          </p>

          <!-- Services list -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
            ${[
              ['M365 Security & Backup',   'MFA, Defender, audit logging, automated backup'],
              ['Security Risk Assessment', 'NIST CSF gap report + remediation roadmap'],
              ['Fractional vCISO',         'Security leadership on a monthly retainer'],
              ['IAM Advisory & Audit',     'Entra ID, Active Directory, privilege access'],
            ].map(([svc, desc], i) => `
            <tr>
              <td style="padding:10px 16px;${i % 2 === 0 ? 'background:#f8fafc;' : 'background:#fff;'}
                         border-left:3px solid #f5c518;">
                <div style="font-size:13px;font-weight:700;color:#0f2240;">${svc}</div>
                <div style="font-size:12px;color:#64748b;margin-top:2px;">${desc}</div>
              </td>
            </tr>`).join('')}
          </table>

          <p style="margin:24px 0 8px;font-size:15px;color:#334155;line-height:1.75;">
            If your inquiry is urgent, reply directly to this email or visit
            <a href="https://cyvetting.com" style="color:#0f2240;font-weight:700;">cyvetting.com</a>.
          </p>
          <p style="margin:0;font-size:15px;color:#334155;line-height:1.75;">
            Looking forward to speaking with you.
          </p>
          <p style="margin:24px 0 0;font-size:14px;color:#0f2240;font-weight:700;">
            — CyVetting Security
          </p>
        </td></tr>

        <!-- CTA BUTTON -->
        <tr><td style="background:#0f2240;padding:24px 32px;text-align:center;">
          <a href="https://cyvetting.com"
             style="background:#f5c518;color:#0f2240;padding:13px 32px;
                    text-decoration:none;font-weight:700;font-size:14px;
                    font-family:Arial,sans-serif;display:inline-block;">
            Visit cyvetting.com →
          </a>
        </td></tr>

        <!-- FOOTER -->
        <tr><td style="background:#070f1c;padding:16px 32px;border-top:2px solid #f5c518;text-align:center;">
          <p style="margin:0;font-family:monospace;font-size:10px;color:#3a5070;">
            CyVetting Security Inc. · contact@cyvetting.com · cyvetting.com<br>
            Buffalo, NY · Niagara Region, ON · Remote Nationwide
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

    // ── SEND BOTH EMAILS via Resend ──
    const [ownerRes, autoRes] = await Promise.all([
      // 1. Owner notification
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'CyVetting Leads <notifications@cyvetting.com>',
          to: ['contact@cyvetting.com'],
          reply_to: email,
          subject: `🔔 New lead: ${name} · ${company || 'No company'} · ${service || 'General'}`,
          html: ownerHtml,
        }),
      }),
      // 2. Auto-reply to lead
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'CyVetting Security <contact@cyvetting.com>',
          to: [email],
          reply_to: 'contact@cyvetting.com',
          subject: `Thanks for reaching out, ${name.split(' ')[0]} — CyVetting`,
          html: autoReplyHtml,
        }),
      }),
    ])

    if (!ownerRes.ok) {
      const err = await ownerRes.text()
      console.error('Owner email error:', err)
    }
    if (!autoRes.ok) {
      const err = await autoRes.text()
      console.error('Auto-reply error:', err)
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })

  } catch (err) {
    console.error('Function error:', err)
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

export const config = {
  path: '/api/contact-notify',
}
