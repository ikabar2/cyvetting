# CyVetting — cyvetting.com

Enterprise cybersecurity consulting for small businesses.
SOC 2 · HIPAA · PCI DSS · M365 Security · Vendor Risk

---

## Stack
- React 18 + Vite 5
- React Router v6
- Supabase (database + storage)
- IBM Plex Sans + Share Tech Mono
- Deployed on Netlify

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Create your env file
cp .env.example .env
# Fill in your Supabase URL and anon key

# 3. Start dev server
npm run dev
# Opens at http://localhost:5173
```

---

## Supabase Setup (one-time)

1. Go to supabase.com → New Project → name it `cyvetting`
2. SQL Editor → paste contents of `supabase/schema.sql` → Run
3. Copy Project URL and anon key from Settings > API

---

## Deployment

### Option A — GitHub + Netlify (recommended, auto-deploy)

**Step 1 — Push to GitHub**
```bash
cd cyvetting
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cyvetting.git
git push -u origin main
```

**Step 2 — Connect to Netlify**
1. Go to app.netlify.com → Add new site → Import from Git
2. Connect GitHub → select `cyvetting` repo
3. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click Deploy site

**Step 3 — Add environment variables**
Netlify → Site Settings → Environment Variables → Add:
```
VITE_SUPABASE_URL        your-supabase-url
VITE_SUPABASE_ANON_KEY   your-anon-key
```
Then: Deploys → Trigger deploy → Deploy site

**Step 4 — Add custom domain**
Netlify → Site Settings → Domain Management → Add domain:
```
cyvetting.com
```
Netlify gives you these DNS values — add them in Cloudflare.

**Future updates:**
```bash
# Make your changes, then:
git add .
git commit -m "describe your change"
git push
# Netlify auto-deploys in 2–3 minutes
```

---

### Option B — Drag and Drop (no GitHub needed)

**Step 1 — Build**
```bash
npm run build
# Creates dist/ folder
```

**Step 2 — Deploy**
1. Go to app.netlify.com → Sites → Add new site
2. Select "Deploy manually"
3. Drag the `dist/` folder onto the deploy zone
4. Site is live at random-name.netlify.app in ~30 seconds

**Step 3 — Add environment variables**
Netlify → Site Settings → Environment Variables → Add:
```
VITE_SUPABASE_URL        your-supabase-url
VITE_SUPABASE_ANON_KEY   your-anon-key
```
Deploys → Trigger deploy → Deploy site

**Step 4 — Add custom domain**
Same as Option A Step 4.

**Future updates:**
```bash
npm run build
# Drag the new dist/ folder onto Netlify deploy zone
```

---

## Cloudflare DNS Records

Add these in Cloudflare → your domain → DNS:

| Type  | Name | Value                    | Proxy  |
|-------|------|--------------------------|--------|
| A     | @    | 75.2.60.5                | OFF    |
| CNAME | www  | cyvetting.netlify.app    | OFF    |
| MX    | @    | mx.zoho.com (pri 10)     | OFF    |
| MX    | @    | mx2.zoho.com (pri 20)    | OFF    |
| MX    | @    | mx3.zoho.com (pri 50)    | OFF    |
| TXT   | @    | v=spf1 include:zoho.com ~all | — |
| TXT   | _dmarc | v=DMARC1; p=none; rua=mailto:admin@cyvetting.com | — |

⚠️ Netlify records must be grey cloud (DNS only) — NOT orange (proxied)

---

## Adding Content (no code changes needed)

### Add a blog post
Supabase → Table Editor → posts → Insert row:
- slug, title, excerpt, content, tag, accent (lime/blue), read_time
- Set published = true

### Add a team member
Supabase → Table Editor → team → Insert row:
- name, title, bio, creds (array), photo_url, sort_order, active

### Add a team photo
Supabase → Storage → bucket "team-photos" (public) → Upload
Copy URL → paste into photo_url field

OR drop photo in `public/images/` → set photo_url to `/images/your-photo.jpg`

---

## Rollback
Netlify → your site → Deploys → click any previous deploy → Publish deploy

---

## Contact
admin@cyvetting.com
cyvetting.com
