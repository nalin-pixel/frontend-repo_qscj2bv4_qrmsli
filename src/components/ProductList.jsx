import { useEffect, useState } from 'react'
import { Warehouse, Leaf } from 'lucide-react'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/products`)
        if (!res.ok) throw new Error('Failed to load products')
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) return <section className="py-16 text-center">Loading products...</section>
  if (error) return <section className="py-16 text-center text-red-600">{error}</section>

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Warehouse className="w-6 h-6 text-emerald-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Available Products</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <img src={p.image_url || 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop'} alt={p.name} className="h-40 w-full object-cover rounded-lg" />
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{p.name} {p.variety && <span className="text-gray-500">• {p.variety}</span>}</h3>
                  <span className="text-emerald-700 font-bold">${p.price_per_ton.toLocaleString()}/t</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">Grade: {p.grade || 'N/A'} • Stock: {p.stock_tons} t</p>
                <p className="mt-2 text-sm text-gray-500">Origin: {p.origin || '—'}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center text-emerald-700 text-sm"><Leaf className="w-4 h-4 mr-1"/> Moisture {p.moisture ?? '—'}%</span>
                  <a href={`#contact?product=${encodeURIComponent(p.name)}&id=${p.id}`} className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">Request quote →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
