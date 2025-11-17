import { useRef } from 'react'
import PhotoHero from './components/PhotoHero'
import ServiceList from './components/ServiceList'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'

export default function PhotoApp(){
  const servicesRef = useRef(null)
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <PhotoHero onCTAClick={scrollToServices} />
      <ServiceList ref={servicesRef} />
      <BookingForm />
      <Footer />
    </div>
  )
}
