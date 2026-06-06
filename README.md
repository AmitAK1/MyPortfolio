# Amit Kamble - AI Engineer Portfolio

A dark, electric-blue themed AI Engineer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Build for production:

```
npm run build
```

## Assets

Place the resume PDF and profile photo in `public/assets` with these filenames:

- `profile.png`
- `amit-kamble-resume.pdf`

Update links in `src/data/portfolio.ts` if you change filenames.

## Deployment (GitHub + Vercel)

1. Create a GitHub repository and push this project to it (root of repo should be the project folder).

2. Connect the repository to Vercel:
	- Go to https://vercel.com, import the GitHub repo, and follow the prompts.
	- Vercel will detect Next.js and use `npm run build` (you can override with `vercel.json`).

3. Optional: CI via GitHub Actions
	- A basic GitHub Actions workflow is included at `.github/workflows/ci.yml` that runs `npm ci` and `npm run build` on pushes and PRs.

4. After connecting, Vercel will automatically deploy on push to the selected branches. Use the Vercel dashboard to view deployment logs and set environment variables if needed.

Troubleshooting:
- Ensure you push the `public/assets` files (resume and profile image) to the repo so they're available in the deployment.
- If you see storage-related errors during development, open the app via `http://localhost:3000` and avoid loading via `file://` or sandboxed frames.

