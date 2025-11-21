import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company'),
      phone: form.get('phone'),
      message: form.get('message'),
      source: 'website'
    }
    try{
      const base = import.meta.env.VITE_BACKEND_URL
      const res = await fetch(`${base}/api/leads`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if(!res.ok) throw new Error('Request failed')
      setStatus('ok')
      e.currentTarget.reset()
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Let’s talk</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">Tell us about your objectives. We’ll respond within one business day.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <input name="name" required placeholder="Full name" className="rounded-xl bg-slate-900/60 border border-white/10 p-3 text-white placeholder:text-slate-500" />
          <input name="email" required type="email" placeholder="Email" className="rounded-xl bg-slate-900/60 border border-white/10 p-3 text-white placeholder:text-slate-500" />
          <input name="company" placeholder="Company" className="rounded-xl bg-slate-900/60 border border-white/10 p-3 text-white placeholder:text-slate-500" />
          <input name="phone" placeholder="Phone" className="rounded-xl bg-slate-900/60 border border-white/10 p-3 text-white placeholder:text-slate-500" />
          <textarea name="message" required rows="5" placeholder="What would you like to achieve?" className="md:col-span-2 rounded-xl bg-slate-900/60 border border-white/10 p-3 text-white placeholder:text-slate-500" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-500 transition-colors">Send message</button>
            {status === 'sending' && <span className="text-slate-400">Sending…</span>}
            {status === 'ok' && <span className="text-green-400">Thank you — we’ll be in touch.</span>}
            {status === 'error' && <span className="text-red-400">Something went wrong. Please try again.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
