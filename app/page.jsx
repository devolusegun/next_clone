import Link from 'next/link'

export default function Home(){
  return (
    <div>
      <section className="flex flex-col md:flex-row items-start md:items-center gap-8 py-12">
        <div className="md:flex-1">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">Transform the nation with our modern ideas platform.</h1>
          <p className="text-slate-600 mt-4">Nigerians create amazing discourses, People engage at their own pace.</p>
          <div className="mt-6 flex items-center gap-3">
            <a className="inline-flex items-center rounded-md bg-violet-600 text-white px-4 py-2 font-semibold" href="#">Get Started</a>
            <Link href="#" className="inline-flex items-center rounded-md border border-slate-200 px-4 py-2">Sign In</Link>
          </div>
          <div className="mt-4 flex gap-2">
            <span className="px-3 py-1 border rounded-full text-sm">Private</span>
            <span className="px-3 py-1 border rounded-full text-sm">Public</span>
          </div>
        </div>
        <div className="md:flex-1 flex items-center justify-center">
          <div className="w-full max-w-md h-56 rounded-lg bg-gradient-to-b from-slate-100 to-white flex items-center justify-center text-slate-500 font-medium">Screenshot / Illustration</div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Everything you need for modern governance</h2>
        <p className="text-slate-600 mt-2">Powerful system designed to enhance growth and learning experiences</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="card"><strong>Interactive Board</strong><div className="text-slate-600 mt-2">Create engaging discourses with real content, thoughts, and interactive topics.</div></div>
          <div className="card"><strong>Live Ratings</strong><div className="text-slate-600 mt-2">Vote real-time on other ideas shared and interactive boards.</div></div>
          <div className="card"><strong>Smart Ideas</strong><div className="text-slate-600 mt-2">Create, submit, and auto-rate opinions with detailed feedback.</div></div>
          <div className="card"><strong>Progress Tracking</strong><div className="text-slate-600 mt-2">Monitor ideas progress with detailed performance insights.</div></div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Simple, transparent process</h2>
        <p className="text-slate-600 mt-2">Start with a free registration, then get unlimited access. No fees, engage anytime.</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="min-w-[220px] p-6 rounded-xl border bg-gradient-to-b from-white to-slate-50">
            <div className="text-sm text-slate-500">Most Popular</div>
            <h3 className="text-xl font-bold mt-1">Lorem</h3>
            <div className="text-3xl font-extrabold mt-2">5 <span className="text-base font-semibold">/per Ipsum</span></div>
            <div className="text-slate-600 mt-2">Everything you need for sharing ideas</div>
            <ul className="text-slate-600 mt-4 list-disc ml-5 space-y-1">
              <li>Up to 5 ideas</li>
              <li>Unlimited enagements</li>
              <li>Live ratings</li>
              <li>Interactive board</li>
              <li>Advanced submission</li>
            </ul>
            <div className="mt-4"><a className="inline-flex items-center rounded-md bg-violet-600 text-white px-4 py-2 font-semibold" href="#">Start Ipsum</a></div>
          </div>

          <div className="min-w-[220px] p-6 rounded-xl border bg-white">
            <h3 className="text-xl font-bold">Rater</h3>
            <div className="text-2xl font-bold mt-1">0 <span className="text-sm">/Lorem</span></div>
            <div className="text-slate-600 mt-2">Lorem Ipsum • No documents required</div>
            <div className="mt-4"><a className="inline-flex items-center rounded-md border border-slate-200 px-4 py-2" href="#">Start Free Rating</a></div>
          </div>
        </div>
      </section>
    </div>
  )
}
