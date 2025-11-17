import { useEffect, useState } from 'react'
import { Send } from 'lucide-react'

export default function BookingForm(){
  const [form, setForm] = useState({ name: '', email: '', phone: '', service_name: '', event_date: '', location: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: '', error: '' })

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1])
    const service = params.get('service')
    if (service) setForm((f) => ({ ...f, service_name: service }))
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: '', error: '' })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to place booking')
      setStatus({ loading: false, success: 'Thank you! We will confirm your booking shortly.', error: '' })
      setForm({ name: '', email: '', phone: '', service_name: '', event_date: '', location: '', message: '' })
    } catch (e) {
      setStatus({ loading: false, success: '', error: e.message })
    }
  }

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <section id="book" className="py-16 bg-rose-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Book Your Shoot</h2>
        <form onSubmit={submit} className="bg-white border rounded-xl p-6 shadow-sm grid sm:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required className="border rounded-lg p-3" />
          <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" required className="border rounded-lg p-3" />
          <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="border rounded-lg p-3 sm:col-span-2" />
          <input name="service_name" value={form.service_name} onChange={onChange} placeholder="Service (e.g., Wedding Photography)" className="border rounded-lg p-3" />
          <input name="event_date" type="date" value={form.event_date} onChange={onChange} className="border rounded-lg p-3" />
          <input name="location" value={form.location} onChange={onChange} placeholder="Location" className="border rounded-lg p-3 sm:col-span-2" />
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Details" rows="4" className="border rounded-lg p-3 sm:col-span-2" />
          <button disabled={status.loading} className="sm:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-rose-600 text-white font-semibold shadow hover:bg-rose-700 transition">
            <Send className="w-5 h-5 mr-2" /> {status.loading ? 'Sending...' : 'Place Order'}
          </button>
          {status.success && <p className="sm:col-span-2 text-rose-700 text-sm">{status.success}</p>}
          {status.error && <p className="sm:col-span-2 text-red-600 text-sm">{status.error}</p>}
        </form>
      </div>
    </section>
  )
}
