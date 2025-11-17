import { useEffect, useState } from 'react'
import { Send } from 'lucide-react'

export default function InquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', product_name: '', quantity_tons: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: '', error: '' })

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1])
    const product = params.get('product')
    if (product) setForm((f) => ({ ...f, product_name: product }))
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: '', error: '' })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, quantity_tons: form.quantity_tons ? Number(form.quantity_tons) : null }),
      })
      if (!res.ok) throw new Error('Failed to submit inquiry')
      setStatus({ loading: false, success: 'Thanks! We will contact you shortly.', error: '' })
      setForm({ name: '', email: '', phone: '', product_name: '', quantity_tons: '', message: '' })
    } catch (e) {
      setStatus({ loading: false, success: '', error: e.message })
    }
  }

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <section id="contact" className="py-16 bg-emerald-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Request a Quote</h2>
        <form onSubmit={submit} className="bg-white border rounded-xl p-6 shadow-sm grid sm:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required className="border rounded-lg p-3" />
          <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" required className="border rounded-lg p-3" />
          <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="border rounded-lg p-3 sm:col-span-2" />
          <input name="product_name" value={form.product_name} onChange={onChange} placeholder="Product (e.g., Wheat)" className="border rounded-lg p-3" />
          <input name="quantity_tons" value={form.quantity_tons} onChange={onChange} placeholder="Quantity (tons)" className="border rounded-lg p-3" />
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Details" rows="4" className="border rounded-lg p-3 sm:col-span-2" />
          <button disabled={status.loading} className="sm:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition">
            <Send className="w-5 h-5 mr-2" /> {status.loading ? 'Submitting...' : 'Send Inquiry'}
          </button>
          {status.success && <p className="sm:col-span-2 text-emerald-700 text-sm">{status.success}</p>}
          {status.error && <p className="sm:col-span-2 text-red-600 text-sm">{status.error}</p>}
        </form>
      </div>
    </section>
  )
}
