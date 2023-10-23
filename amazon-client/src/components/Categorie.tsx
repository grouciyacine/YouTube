import React from 'react'
import { Link } from 'react-router-dom'


type Props={
    first:any,
    seconde:any,
    third:any, 
    fourth:any,
    title:string
}
function Categorie({first,fourth,seconde,third,title}:Props) {
    return (
        <div className='p-2 rounded-md bg-white  w-[200px] h-[250px] flex flex-col items-start justify-start  lg:justify-start mini:w-[100px] mini:h-[170px] mini1:h-[170px] mini1:[100px] md:w-[170px] sm:w-[150px] lg:w-[250px] md:translate-x-0 sm:h-[280px] lg:h-[380px]  '>
            <h5 className='lg:text-2xl mini:text-[10px] md:text-base   text-base  mini1:flex mini1:text-[10px] font-bold'>{title} </h5>
            <div className='pt-4 mini:pt-0  lg:grid lg:grid-cols-2 lg:gap-2 grid grid-cols-2 gap-2  '>
                <Link to={`/List/${first?.title}`}>
                    <img className='lg:w-30 lg:h-30  md:w-30  object-contain cursor-pointer' src={first?.img} alt='' />
                    <h6 className='md:text-base sm:text-sm mini1:text-[7px]  mini:text-[7px]  '>{first?.title}</h6>
                </Link>
                <Link to={`/List/${seconde?.title}`}>
                    <img className='w-30 h-30 cursor-pointer' src={seconde?.img} alt='' />
                    <h6 className='md:text-base sm:text-sm mini1:text-[7px]  mini:text-[7px] '>{seconde?.title}</h6>
                </Link>
                <Link to={`/List/${third?.title}`}>
                    <img className='w-30 h-30 cursor-pointer' src={third?.img} alt='' />
                    <h6 className='md:text-base sm:text-sm mini1:text-[7px]  mini:text-[7px] '>{third?.title}</h6>
                </Link>
                <Link to={`/List/${fourth?.title}`}>
                    <img className='w-30 h-30 cursor-pointer' src={fourth?.img} alt='' />
                    <h6 className='md:text-base sm:text-sm mini1:text-[7px]  mini:text-[7px] '>{fourth?.title}</h6>
                </Link>
            </div>
            
        </div>
    )
}

export default Categorie