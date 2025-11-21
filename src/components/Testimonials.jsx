import { useEffect, useState } from 'react'

export default function Testimonials(){
  const [items, setItems] = useState([])

  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL
    fetch(`${base}/api/testimonials`).then(r => r.json()).then(data => setItems(data.items || [])).catch(() => {})
  }, [])

  return (
    <section id="testimonials" className="py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Client outcomes</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">What leaders say about partnering with us.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <p className="text-slate-200 italic">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">— {t.author}{t.role ? `, ${t.role}` : ''}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
