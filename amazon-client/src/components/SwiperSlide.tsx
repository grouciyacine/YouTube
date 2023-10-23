import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import img1 from '../assets/61lwJy4B8PL._SX3000_.jpg'
import img2 from '../assets/71Ie3JXGfVL._SX3000_.jpg'
import img3 from '../assets/71U-Q+N7PXL._SX3000_.jpg'
import img4 from '../assets/81KkrQWEHIL._SX3000_.jpg'
import Categories from './Categories'


function SwiperSlide() {
    let setting={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slideToScroll:1,
        autoplay:true,

    }
  return (
    <div className='relative'>
        <Slider {...setting} className='w-full overflow-hidden  relative'>
<a >
    <img src={img1} alt='1' className='w-full md:h-[600px] h-[300px]  object-cover'/>
</a>
<a >
    <img src={img2} alt='1' className='w-full md:h-[600px] h-[300px] object-cover'/>
</a>
<a>
    <img src={img3} alt='1' className='w-full  md:h-[600px] h-[300px]  object-cover'/>
</a>
<a >
    <img src={img4} alt='1' className='w-full md:h-[600px] h-[300px] object-cover'/>
</a>
    </Slider>
    <div className='p-3'>
        <Categories/>
    </div>
    
    </div>

  )
}

export default SwiperSlide