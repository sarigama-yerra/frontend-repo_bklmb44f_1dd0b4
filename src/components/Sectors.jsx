export default function Sectors(){
  const sectors = [
    { title: 'Industrial Manufacturing', body: 'Discrete and process manufacturing across metals, chemicals, pulp & paper, and more.' },
    { title: 'Aerospace & Defense', body: 'Complex, highly regulated environments where quality and delivery are paramount.' },
    { title: 'Private Equity', body: 'Performance improvement across portfolio companies to accelerate value creation.' },
    { title: 'Logistics & Distribution', body: 'Network design, capacity planning, and productivity improvement at scale.' },
  ]

  return (
    <section id="sectors" className="py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Who we serve</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">We focus on capital-intensive industries where operational excellence drives enterprise value.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
