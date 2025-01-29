import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Testimonial from './Testimonial'
import Faq from './Faq'
import Newsletter from './Newsletter'
import Hero from './Hero'

const Home = () => {
  return (
     <div>
          <Navbar />
          <Hero />
          <Newsletter />
          <Testimonial />
          <Faq />
          <Footer />
     </div>
  )
}

export default Home
