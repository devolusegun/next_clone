import Link from 'next/link'

export default function Header(){
  return (
    <header className="container flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-lg bg-gradient-to-b from-violet-600 to-violet-800 text-white font-bold flex items-center justify-center">A</div>
        <div className="font-bold text-lg">AuraiumLMS</div>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link href='/features' className="text-slate-600 hover:text-slate-800">Features</Link>
        <Link href='/pricing' className="text-slate-600 hover:text-slate-800">Pricing</Link>
        <Link href='/contact' className="text-slate-600 hover:text-slate-800">Contact</Link>
        <a className="inline-flex items-center rounded-md bg-violet-600 text-white px-4 py-2 font-semibold" href="#">Get Started</a>
      </nav>
    </header>
  )
}
