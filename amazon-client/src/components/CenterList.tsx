import { Star } from '@mui/icons-material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { makeRequest } from '../makeRequest'
import RatingStars from './Rating'
import { useNavigate } from 'react-router-dom'


type Props={
    title:string | undefined,
}
function CenterList({title}:Props) {
    const {data,error,isLoading}=useQuery(['products',title],()=>
    makeRequest.get(`/product/products/${title}`).then((response)=>response.data))
    const navigate=useNavigate()
  return (
    <div className='bg-white flex-1 w-full flex flex-col justify-start items-start p-2'>
        <h1 className='text-3xl font-semibold'>Computers, Tablets and IT Accessories</h1>
        <h6 className='text-sm'>Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and storage, accessories and more</h6>
        <div className='border-2 border-gray-200 h-10 flex items-start flex-row  mt-12  w-full rounded-md'>
            <h1 className='mx-8 sm:translate-y-1 mini:translate-y-2 sm:text-base mini1:text-sm  mini:text-xs'>1-12 of over 60,000 results for <span className='text-[#c45500] font-bold'> {title}</span> </h1>
        </div>
        <div className='grid  gap-6 p-2 grid-rows-1'>
            {error?'error':(isLoading?'loading':data.map((product:any,key:number)=>(
            <div className='w-full h-52 sm:h-full space-x-4 pt-5 flex flex-row bg-white sm:bg-[#f8f8f8] sm:p-2   border-[1px] border-gray-200'>
                <img onClick={()=>navigate(`/Product/${product?._id}/${title}`)} className='sm:mx-3  sm:w-52 mini1:w-36 mini1:h-36 mini:w-28   mini:h-28 cursor-pointer sm:h-52 w-36 h-36 rounded-lg ml-2 sm:bg-[#f8f8f8]  object-contain ' src={product.img} alt='pro'/>
                <div className='flex flex-1  mini1:text-sm mini:text-xs sm:text-base flex-col justify-start items-start h-full sm:p-2  bg-white '>
                    <h5 className='cursor-pointer '>{product.title}</h5>
                    <div className=' flex flex-row '>
                        <RatingStars rating={product.rating}/>
                    </div>
                    <h3 className='text-3xl font-bold'>${product.price}</h3>
                </div>
            </div>                
            ))
            
            )}
            </div>
        </div>
    
  )
}

export default CenterList