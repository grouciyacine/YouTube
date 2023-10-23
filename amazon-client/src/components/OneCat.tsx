import React from 'react'
import { Link } from 'react-router-dom'


type Props={
  first:any,
  title:string
}
function OneCat({first,title}:Props) {
  return (
    <Link to={`/List/${first?.title}`} className='p-2 group w-[140px] h-[200px] rounded-md bg-white flex flex-col justify-start items-start md:justify-start sm:w-[150px] sm:h-[280px] lg:translate-x-2  md:w-[170px] md:h-[280px] lg:w-[240px] mini:w-[90px] overflow-y-hidden mini1:w-[100px] mini1:h-[170px] mini:h-[170px]  lg:h-[380px]   '>
    <h5 className='lg:text-2xl md:text-base text-xs  mini1:flex mini1:text-[10px] mini:text-[10px]  font-bold mb-2 '>{first?.title}</h5>
        <img className='w-full h-full cursor-pointer' src={first?.img}/>
    <h6 className='group-hover:text-red-300 text-[#007185] sm:text-sm  mini:text-[9px] p-2 mx-0'>Shop Now</h6>


</Link>
  )
}

export default OneCat