AuraiumLMS — Next.js (App Router) exact replica

This project is a componentized Next.js (App Router) + Tailwind CSS recreation of the AuraiumLMS homepage (exact visual replica), with placeholder pages for Features, Pricing, and Contact.

How to run locally
1. Ensure Node.js 18+ and npm are installed.
2. From the project root run:
   npm install
   npm run dev
3. Open http://localhost:3000

What this includes
- app/layout.jsx, app/page.jsx
- components/Header.jsx
- Tailwind configured with `tailwind.config.js` and `postcss.config.js`
- styles/globals.css with Tailwind imports
- Placeholder pages: /features, /pricing, /contact

Notes
- This project is a front-end replica. Any server-side APIs or backend integrations from the original site are not included.
- After installing, you can deploy to Vercel directly or run locally with `npm run dev`.
