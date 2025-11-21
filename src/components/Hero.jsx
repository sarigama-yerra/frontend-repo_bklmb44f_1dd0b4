import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-10%,rgba(37,99,235,0.3),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Operational Excellence for Industrial Leaders
            </motion.h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              We partner with manufacturers and capital-intensive businesses to unlock throughput, reduce cost, and scale with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-colors">Talk to an expert</a>
              <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-white/10 px-6 py-3 text-white/90 hover:text-white hover:border-white/20 transition-colors">Explore services</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-semibold text-white">$500M+</div>
                <div className="text-slate-400 text-sm">Value created</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-white">20%+</div>
                <div className="text-slate-400 text-sm">Throughput lift</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-white">30+</div>
                <div className="text-slate-400 text-sm">Plants transformed</div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-600/30 to-indigo-600/30 ring-1 ring-white/10" />
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-blue-500/20 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-indigo-500/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
