import React from 'react'
import Hero from '../Components/Hero'
import Programs from '../Components/Programs'
import Title from '../Components/Title'
import About from '../Components/About'
import Campus from '../Components/Campus'
import Testimonials from '../Components/Testimonials'
import Contact from '../Components/Contact'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <div className="container">
          <Title title="Our Programs" subtitle="What We Offer" />
          <Programs />
          <Title title="About Us" subtitle="Who We Are" />
          <About />
          <Title title="Gallery" subtitle="Campus Photos" />
          <Campus />
          <Title title="Testimonials" subtitle="What Students Says" />
          <Testimonials />
          <Title title="Contact us" subtitle="Get in touch" />
          <Contact />
        </div>
        
    </div>
  )
}

export default HomePage