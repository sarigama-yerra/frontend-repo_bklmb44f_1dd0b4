import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Sectors from './components/Sectors'
import Approach from './components/Approach'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(800px_400px_at_90%_-10%,rgba(99,102,241,0.12),transparent_60%)]" />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Sectors />
        <Approach />
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-sm">© {new Date().getFullYear()} Northmann Group. All rights reserved.</div>
          <form className="flex items-stretch gap-2" onSubmit={async (e)=>{
            e.preventDefault();
            const email = e.currentTarget.email.value
            if(!email) return
            try{
              const base = import.meta.env.VITE_BACKEND_URL
              await fetch(`${base}/api/newsletter`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
              e.currentTarget.reset()
              alert('Subscribed!')
            }catch(err){
              alert('Subscription failed')
            }
          }}>
            <input name="email" type="email" placeholder="Join our newsletter" className="rounded-xl bg-slate-900/60 border border-white/10 p-3 text-white placeholder:text-slate-500 w-64" />
            <button className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-500 transition-colors">Subscribe</button>
          </form>
        </div>
      </footer>
    </div>
  )
}

export default App
