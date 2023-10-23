import React, { useCallback, useState } from 'react'
import Filter from './Filter'



function LeftList() {
    const [toggle ,setToggle]=useState(false)
    const toggleHandler=useCallback(()=>{
        setToggle((active)=>!active)
    },[])
  return (
    <>
        <div className='bg-white    w-1/4 border-r-2 border-gray-200  hidden sm:flex-col sm:flex justify-start items-start'>
        <h4 className='font-bold text-sm p-2'>Department</h4>
        <h4 className='font-bold text-sm  mx-6'>Computers</h4>
        <div className='text-sm  mx-10 justify-start flex flex-col items-start '>
            <h6 className='hover:text-red-400 transition-all duration-75 cursor-pointer'>Computer</h6>
            <h6 className='hover:text-red-400 transition-all duration-75 cursor-pointer'>Graphic Card</h6>
            <h6 className='hover:text-red-400 transition-all duration-75 cursor-pointer'>Hard drive</h6>
            <h6 className='hover:text-red-400 transition-all duration-75 cursor-pointer'>Laptop</h6>
        </div>
        <h4 className='font-bold text-sm  mx-6'>Business Type</h4>
        <div className='flex flex-row justify-start items-center mx-6 space-x-2'>
        <input type='checkbox' name='Small business' value='Small business'/>
        <label>Small business</label>            
        </div>
        <h4 className='font-bold text-sm  mx-6'>More-sustainable Products</h4>
        <div className='flex flex-row justify-start items-center mx-6 space-x-2'>
            <input type='checkbox' name='Climate Pledge Friendly' value='Climate Pledge Friendly'/>
            <label>Climate Pledge Friendly</label>
        </div>
        <h4 className='font-bold text-sm  mx-6'>Augmented Reality</h4>
        <div className='flex flex-row justify-start items-center mx-6 space-x-2'>
        <input type='checkbox' name='View In Your Room' value='View In Your Room'/>
        <label>View In Your Room</label>
        </div>
        <div className='flex flex-row justify-start items-center mx-6 space-x-2'>
        <input type='checkbox' name='Virtual Try-On' value='Virtual Try-On'/>
        <label>Virtual Try-On</label> 
        </div>
        <h4 className='font-bold text-sm  mx-6'>Featured Brands</h4>
        <div className='flex flex-row justify-start items-center mx-6 space-x-2'>
        <input type='checkbox' name='SAMSUNG' value='SAMSUNG'/>
        <label>SAMSUNG</label>
        </div>
        <div className='flex flex-row justify-start items-center mx-6 space-x-2'>
        <input type='checkbox' name='Apple' value='Apple'/>
        <label>Apple</label>            
        </div>
        <div className='flex flex-row justify-start items-center mx-6 space-x-2'>
        <input type='checkbox' name='HP' value='HP'/>
        <label>HP</label>            
        </div>
        <div className='flex flex-row justify-start items-center mx-6 space-x-2'>
        <input type='checkbox' name='Syntech' value='Syntech'/>
        <label>Syntech</label>            
        </div>
        <div className='flex flex-row justify-start items-center mx-6 space-x-2'>
        <input type='checkbox' name='Amazon Basics' value='Amazon Basics'/>
        <label>Amazon Basics</label>            
        </div>
        <h4 className='font-bold text-sm  mx-6'>Packaging Option</h4>
        <div className='flex flex-row justify-start items-center mx-6 space-x-2'>
            <input type='checkbox' name='Frustration-Free Packaging' value='Frustration-Free Packaging'/>
            <label>Frustration-Free Packaging</label>
        </div>
        <h4 className='font-bold text-sm  mx-6'>Price</h4>
        <div className='flex flex-col justify-start items-start pt-2 mx-6'>
            <h5 className='hover:text-red-400 transition-all duration-75 cursor-pointer'>Under $25</h5>
            <h5 className='hover:text-red-400 transition-all duration-75 cursor-pointer'>$25 to $50</h5>
            <h5 className='hover:text-red-400 transition-all duration-75 cursor-pointer'>$50 to $100</h5>
            <h5 className='hover:text-red-400 transition-all duration-75 cursor-pointer'>$100 to $200</h5>
            <h5 className='hover:text-red-400 transition-all duration-75 cursor-pointer'>$200 & Above</h5>
        </div>
    </div>
    <div className='flex w-full border-b-[2px] border-b-gray-300 flex-col sm:hidden'>
        <h6 className='text-end p-3 hover:text-red-500' onClick={toggleHandler}>{!toggle?'filter':'close'}</h6>
        {toggle && <Filter/>}
    </div>
    </>

  )
}

export default LeftList