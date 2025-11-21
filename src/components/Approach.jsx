export default function Approach(){
  const steps = [
    { k: '01', title: 'Diagnose', body: 'Rapid assessment to quantify value at stake, identify constraints, and set targets.' },
    { k: '02', title: 'Design', body: 'Blueprint the future-state operating system and governance to enable sustained performance.' },
    { k: '03', title: 'Deliver', body: 'Hands-on execution with joint teams to install capabilities and realize results.' },
    { k: '04', title: 'Sustain', body: 'Embed management routines, KPIs, and continuous improvement to lock in gains.' },
  ]

  return (
    <section id="approach" className="py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">How we work</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">A structured, collaborative approach that balances speed, rigor, and change adoption.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.k} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="text-blue-400 font-mono text-sm">{s.k}</div>
              <h3 className="mt-2 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
