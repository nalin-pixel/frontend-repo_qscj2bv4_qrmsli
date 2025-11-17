import { Wheat, ShoppingBag, PhoneCall } from 'lucide-react'

export default function Hero({ onCTAClick }) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-lime-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            <Wheat className="w-4 h-4" /> Premium Grains • Global Supply
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Reliable Grain Supply for a Growing World
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We source and deliver high‑quality Wheat, Corn, Barley, and Pulses from trusted farms to mills and food manufacturers around the world.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button onClick={onCTAClick} className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition">
              <ShoppingBag className="w-5 h-5 mr-2" /> Browse Products
            </button>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-emerald-700 border border-emerald-200 font-semibold hover:border-emerald-300">
              <PhoneCall className="w-5 h-5 mr-2" /> Request a Quote
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-500">FSSAI | ISO 22000 | HACCP Certified</div>
        </div>
        <div className="relative">
          <div className="absolute -inset-10 bg-gradient-to-tr from-emerald-200/40 to-amber-200/40 rounded-3xl blur-3xl" />
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1800&auto=format&fit=crop" alt="Grain silos" className="relative rounded-2xl shadow-xl ring-1 ring-black/5" />
        </div>
      </div>
    </header>
  )
}
