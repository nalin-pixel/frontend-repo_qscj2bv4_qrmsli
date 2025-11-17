import { useRef } from 'react'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import InquiryForm from './components/InquiryForm'
import Footer from './components/Footer'

function App() {
  const productsRef = useRef(null)
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero onCTAClick={scrollToProducts} />
      <ProductList ref={productsRef} />
      <InquiryForm />
      <Footer />
    </div>
  )
}

export default App
