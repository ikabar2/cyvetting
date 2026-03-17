-- ============================================
-- CyVetting — Supabase Schema
-- Run this in Supabase SQL Editor
-- ============================================

-- CONTACTS TABLE (contact form submissions)
create table if not exists contacts (
  id         uuid default gen_random_uuid() primary key,
  name       text not null,
  email      text not null,
  company    text,
  phone      text,
  service    text,
  message    text not null,
  created_at timestamp with time zone default now()
);
alter table contacts enable row level security;
create policy "Allow public inserts" on contacts
  for insert with check (true);

-- ============================================
-- TEAM TABLE (About page — add members here)
-- ============================================
create table if not exists team (
  id          uuid default gen_random_uuid() primary key,
  name        text not null,
  title       text not null,
  bio         text,
  creds       text[],           -- array e.g. {"CISSP","CISM","CompTIA Security+"}
  photo_url   text,             -- full URL to hosted photo (Supabase Storage or external)
  sort_order  integer default 0, -- lower number = appears first
  active      boolean default true,
  created_at  timestamp with time zone default now()
);
alter table team enable row level security;
create policy "Public can read active team" on team
  for select using (active = true);

-- ============================================
-- HOW TO ADD A TEAM MEMBER
-- ============================================
-- Option 1: Supabase Table Editor (no SQL needed)
--   → Go to Table Editor → team → Insert row → fill in fields
--
-- Option 2: SQL
insert into team (name, title, bio, creds, photo_url, sort_order, active)
values (
  'Your Name',
  'Founder & Principal Security Consultant',
  'Your bio here. Tell your story — where you came from, why you founded CyVetting, and what drives you.',
  '{"CISSP","CISM","CompTIA Security+","MS Security Certified"}',
  null,   -- replace with photo URL when ready
  0,      -- sort_order 0 = first
  true
);

-- ============================================
-- HOW TO ADD A SECOND TEAM MEMBER
-- ============================================
-- insert into team (name, title, bio, creds, photo_url, sort_order, active)
-- values (
--   'New Person Name',
--   'Security Analyst',
--   'Their bio here.',
--   '{"CompTIA Security+","Azure Security"}',
--   null,
--   1,    -- sort_order 1 = second
--   true
-- );

-- ============================================
-- HOW TO UPLOAD A PHOTO
-- ============================================
-- 1. Go to Supabase → Storage → Create bucket "team-photos" → set to Public
-- 2. Upload headshot image
-- 3. Copy the public URL
-- 4. Paste into the photo_url field for that team member
-- 5. Photo appears automatically on the website

-- ============================================
-- BLOG POSTS TABLE
-- ============================================
create table if not exists posts (
  id           uuid default gen_random_uuid() primary key,
  slug         text not null unique,
  title        text not null,
  excerpt      text,
  content      text,
  tag          text,
  accent       text default 'lime',  -- 'lime' or 'blue'
  read_time    text,
  published    boolean default false,
  published_at timestamp with time zone default now(),
  created_at   timestamp with time zone default now()
);
alter table posts enable row level security;
create policy "Public can read published posts" on posts
  for select using (published = true);

-- ============================================
-- HOW TO ADD A BLOG POST
-- ============================================
-- Option 1: Supabase Table Editor — Insert row, fill in fields, set published = true
--
-- Option 2: SQL
-- insert into posts (slug, title, excerpt, content, tag, accent, read_time, published, published_at)
-- values (
--   'my-post-slug',
--   'Post Title Here',
--   'One sentence that hooks the reader and appears on the blog index.',
--   'Full post content in plain text or markdown.',
--   'SOC 2',
--   'lime',
--   '5 min read',
--   true,
--   now()
-- );
