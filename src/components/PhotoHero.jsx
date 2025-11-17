import { Camera, Video, Sparkles } from 'lucide-react'

export default function PhotoHero({ onCTAClick }) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-fuchsia-50 via-rose-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" /> Cinematic Photos • Films • Reels
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Capture Your Story With Style
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Premium photography, videography, and reel creation for weddings, events, and brands. Crafted with emotion and detail.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button onClick={onCTAClick} className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-rose-600 text-white font-semibold shadow hover:bg-rose-700 transition">
              <Camera className="w-5 h-5 mr-2" /> Explore Services
            </button>
            <a href="#book" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-rose-700 border border-rose-200 font-semibold hover:border-rose-300">
              <Video className="w-5 h-5 mr-2" /> Book Now
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-500">Free Style • Pre‑Wedding • Candid • Wedding</div>
        </div>
        <div className="relative">
          <div className="absolute -inset-10 bg-gradient-to-tr from-rose-200/40 to-amber-200/40 rounded-3xl blur-3xl" />
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop" alt="Couple photoshoot" className="relative rounded-2xl shadow-xl ring-1 ring-black/5" />
        </div>
      </div>
    </header>
  )
}
