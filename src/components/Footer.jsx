export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-3">About</h3>
          <p className="text-sm">We connect growers with global buyers, providing consistent quality, transparent sourcing, and reliable logistics.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Products</h3>
          <ul className="text-sm space-y-2">
            <li>Wheat</li>
            <li>Corn (Maize)</li>
            <li>Barley</li>
            <li>Pulses & Oilseeds</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Compliance</h3>
          <ul className="text-sm space-y-2">
            <li>ISO 22000</li>
            <li>HACCP</li>
            <li>FSSAI</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: sales@grainco.example</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
          <p className="text-sm">HQ: 120 Grain Market Rd, Kansas City, MO</p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} GrainCo. All rights reserved.</div>
    </footer>
  )
}
