# Swapnil Pawar — Cloud & DevOps Portfolio

Personal portfolio of **Swapnil Pawar** (2026 BCA graduate, Cloud Computing intern, Pune, India) — targeting entry-level **Cloud Engineer / DevOps Engineer / SRE** roles.

- GitHub: https://github.com/swapnilpawar0204
- LinkedIn: https://linkedin.com/in/swapnil-pawar-a2907a326/

## Features

- Cyber-terminal themed, responsive single-page site (desktop, tablet, mobile)
- Hero, About, Skills (honest proficiency levels + interactive terminal), Internship Experience, Featured Project, Certifications, Learning Journey, Contact
- Resume download button (activates automatically when a PDF is added — see below)
- 100% static: no backend, no API keys, no paid services
- Hash-based routing (`/#/projects`) so deep links and refreshes work on S3 static hosting

## Technology stack

React 18 · TypeScript · Vite 6 · Tailwind CSS 3 · Framer Motion · React Router (HashRouter) · Lucide icons

## Editing content

All content is in `src/data/portfolio.ts` (profile, skills, internship, project, certifications, contact).

- **Resume:** copy your PDF into `src/assets/resume/` (e.g. `Swapnil_Pawar_Resume.pdf`), then rebuild. Until then the button shows "Resume (coming soon)".
- **Certificate links:** set `credentialUrl` for each entry in `CERTIFICATIONS` when you have a real verification/Credly URL.
- **Screenshots:** add images to `docs/screenshots/` and reference them in the Screenshots section below.

## Installation & local development (Windows 11)

Install [Node.js LTS](https://nodejs.org) (18+), then in PowerShell:

```powershell
cd devops-portfolio-main
npm install
npm run dev
```

Open http://localhost:5173.

## Production build

```powershell
npm run build
npm run preview   # optional: preview the production build locally
```

The build output is the **`dist/`** folder.

## Deploying to AWS S3 static website hosting

Nothing is deployed automatically. Manual steps in the AWS Console:

1. Create an S3 bucket (S3 is pay-per-use; a small static site costs very little — check current pricing).
2. Bucket → **Properties → Static website hosting → Enable**; set *Index document* to `index.html`.
3. Bucket → **Permissions → Block public access** → turn off (required for a public website), and add a bucket policy allowing public read of objects:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [{
       "Effect": "Allow",
       "Principal": "*",
       "Action": "s3:GetObject",
       "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
     }]
   }
   ```
4. Upload the **contents** of `dist/` (not the folder itself) so `index.html` sits at the bucket root, along with `assets/`, `icons/`, `favicon.svg`. Console upload, or with AWS CLI: `aws s3 sync dist/ s3://YOUR-BUCKET-NAME --delete`
5. Open the *Bucket website endpoint* from the Static website hosting section.

Note: S3 website endpoints are HTTP only; HTTPS needs CloudFront (optional, separate service).

## Screenshots

_Add screenshots here (e.g. `docs/screenshots/home.png`)._

## Credits & license

Based on the open-source **devops-portfolio** template by **Neeraj Chandra Nakka**: https://github.com/neerajnakka/devops-portfolio.
The original README declares the **MIT License**. The ZIP provided contained no separate LICENSE file, so none was removed or overwritten; if the upstream repo adds one, keep it with this project and retain the original copyright notice.

Template content (blog, case studies, original projects/skills/metrics) was removed; all content here is Swapnil Pawar's own.
