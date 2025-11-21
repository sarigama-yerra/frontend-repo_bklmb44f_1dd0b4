export default function Services(){
  const services = [
    {
      title: 'Operations Transformation',
      desc: 'End-to-end programs that redesign processes, governance, and capability to deliver sustainable results.',
      points: ['Lean diagnostics', 'Network optimization', 'Operating model redesign']
    },
    {
      title: 'Throughput & Yield',
      desc: 'Unlock bottlenecks, stabilize variation, and improve first-pass yield using proven methods.',
      points: ['Bottleneck analysis', 'Reliability & maintenance', 'Quality systems']
    },
    {
      title: 'Cost & Working Capital',
      desc: 'Reduce conversion costs and optimize inventory with data-driven levers and rigorous execution.',
      points: ['Labor & OEE', 'Sourcing & should-cost', 'Inventory & flow']
    },
  ]

  return (
    <section id="services" className="py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">What we do</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">Targeted interventions and full-scale transformations to create lasting competitive advantage.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold text-xl">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-slate-300/80 text-sm">
                {s.points.map(p => (
                  <li key={p} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" /> {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
