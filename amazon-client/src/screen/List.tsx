import React from 'react'
import LeftList from '../components/LeftList'
import CenterList from '../components/CenterList'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'



function List() {
  const {title}=useParams()
  return (
    <div className='bg-white  flex flex-col'>
    <Navbar/>
        <div className='flex  bg-white flex-col justify-between items-start  sm:flex-row'>
        <LeftList/>
        <CenterList title={title}/>
    </div>
    <Footer/>
    </div>

  )
}

export default List