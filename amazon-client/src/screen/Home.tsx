import React from 'react'
import Navbar from '../components/Navbar'
import SwiperSlide from '../components/SwiperSlide'
import AllCat from '../components/AllCat'
import Footer from '../components/Footer'



function Home() {
  return (
    <div>
        <Navbar/>
        <SwiperSlide/>
        <AllCat/>
        <Footer/>
    </div>
  )
}

export default Home