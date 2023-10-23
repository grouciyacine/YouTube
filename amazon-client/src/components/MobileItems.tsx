import { AccountCircleOutlined, HomeOutlined } from '@mui/icons-material'
import React from 'react'

type Props = {
    visible: boolean
    name:string
}

const MobileItems = ({visible,name}: Props) => {
  if(visible===false){
    return null
  }
    return (
    <div className='flex z-20 flex-col w-[200px] absolute rounded-md translate-y-4 bg-[#232f3e]'>
        <div className='flex z-20 flex-row justify-end px-2 cursor-pointer'>
            <h6>{!name?'Sign in':name} </h6>
            <AccountCircleOutlined fontSize='large'/>
        </div>
        <div className='flex flex-row justify-end px-2 cursor-pointer'>
            <h6>Amazon Home </h6>
            <HomeOutlined fontSize='large'/>
        </div>
        <div className='flex flex-col border-t-2 border-b-2 space-y-3 border-gray-300 justify-start items-start px-2 cursor-pointer'>
            <h4 className='font-bold '>Trending</h4>
            <h6>Movers & shakers</h6>
        </div>
        <div className='flex flex-col  space-y-3 border-gray-300 justify-start items-start px-2 cursor-pointer'>
            <h4 className='font-bold '>Top Departments</h4>
            <h6>Home</h6>
            <h6>Health & Household</h6>
            <h6>Books</h6>
            <h6>PC</h6>
        </div>
    </div>
  )
}

export default MobileItems