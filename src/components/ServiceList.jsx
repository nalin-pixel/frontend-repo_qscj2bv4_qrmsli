import { useEffect, useState } from 'react'
import { Heart, Users, Sparkles } from 'lucide-react'

const icons = {
  "Free Style": Sparkles,
  "Pre-Wedding Shoot": Heart,
  "Candid Photography": Users,
  "Wedding Photography": Heart,
}

export default function ServiceList() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const run = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        // Try to load; if empty, call seed endpoint then reload
        let res = await fetch(`${baseUrl}/api/services`)
        if (!res.ok) throw new Error('Failed to load services')
        let data = await res.json()
        if (data.length === 0) {
          await fetch(`${baseUrl}/api/services/seed`, { method: 'POST' })
          res = await fetch(`${baseUrl}/api/services`)
          data = await res.json()
        }
        setServices(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  if (loading) return <section className="py-16 text-center">Loading services...</section>
  if (error) return <section className="py-16 text-center text-red-600">{error}</section>

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = icons[s.name] || Sparkles
            return (
              <div key={s.id} className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-rose-600" />
                  <h3 className="font-semibold text-gray-900">{s.name}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">{s.description || 'Professional coverage tailored to your story.'}</p>
                {s.duration_hours && (
                  <p className="mt-2 text-xs text-gray-500">Approx. {s.duration_hours} hours</p>
                )}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-rose-700 font-semibold">{s.price ? `$${s.price}` : 'Custom Pricing'}</span>
                  <a href={`#book?service=${encodeURIComponent(s.name)}&id=${s.id}`} className="text-sm font-semibold text-rose-700 hover:text-rose-800">Book now →</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
