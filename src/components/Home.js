import React from 'react'
import Navbarrr from './Navbarrr'
import Carousel from './Carousel'
import NewsLetter from './NewsLetter'
import Team from './Team'
import About from './About'
import ContactUs from './ContactUs'
import Products from './Products'
import Footer from './Footer'
export default function Home() {
  return (
    <>
    <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
    <Carousel/>
    <NewsLetter/>
    <About/>
   
    <Team/>
    <ContactUs/>
    <Footer/>
    </div>
    </>
  )
}
