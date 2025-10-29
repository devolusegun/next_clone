import '../styles/globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'FION',
  description: 'Public Engagement Service - FION NGO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">
          {children}
        </main>
        <footer className="mt-8 border-t border-slate-100 text-center py-6 text-slate-500">
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <div className="font-semibold">FionIMS</div>
            <div className="text-sm">Terms</div>
            <div className="text-sm">Policy</div>
            <div className="text-sm">About</div>
            <div className="text-sm">Support</div>
          </div>
          <div className="mt-3 text-sm">© 2025 AuraiumLMS. All rights reserved.</div>
        </footer>
      </body>
    </html>
  )
}
