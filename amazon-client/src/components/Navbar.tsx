import { PlaceOutlined, SearchOutlined, LocalGroceryStoreOutlined, MenuOutlined, AccountCircleOutlined } from '@mui/icons-material'
import React, { useCallback, useState } from 'react'
import MobileItems from './MobileItems'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'
import { makeRequest } from '../makeRequest'
import { logOut } from '../redux/user'


function Navbar() {
    const navigate=useNavigate()
    const user=useSelector((state:any)=>state.user)
    const dispatch=useDispatch()
    const headers:AxiosRequestConfig['headers']={
        'authorization': 'Bearer '+user?.token
    }
    const { data:cart } = useQuery(['cart', user?.others?._id], () =>
        makeRequest.get(`/user/getCard`,{headers:headers}).then((response) => response.data))
    const [mobile, setMobile] = useState(false)

    const toggleMobileMenu = useCallback(() => {
        setMobile((current) => !current)
    }, [])
    const navigation=()=>{
        if(user?.others?.name===undefined){
            navigate('/Auth')
        }
    }

    return (
        <>
            <nav className='px-3 pt-3 w-full hidden lg:flex  bg-[#232f3e]  justify-start items-start h-16 '>
                <img className='w-24 h-10 ' onClick={()=>navigate('/home')} src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />
                <PlaceOutlined className='text-white translate-x-7 ' />
                <div className='text-white flex-row ml-8 '>
                    <h6 className='text-gray-300 text-xs'>Deliver to</h6>
                    <h6 className='text-sm -translate-x-4'>USA</h6>
                </div>
                <div className='bg-white  ml-4 flex-row flex-1 flex h-10 rounded-md justify-center items-center'>
                    <select className='outline-none pl-4  rounded-md h-10 cursor-pointer  bg-gray-300' >
                        <option value="" className='text-sm'>All</option>
                        <option value="" >Art&craft</option>
                        <option value="" >PC</option>
                        <option value="" >Music</option>
                    </select>
                    <input type='text' placeholder='Search Amazon' className=' flex-1 pl-2  outline-none ' />
                    <div className='bg-[#FEBD69] h-10 pr-4 justify-center items-center pl-2 flex-row rounded-r-md '>
                        <SearchOutlined className='translate-x-2 translate-y-1 ' fontSize='medium' />
                    </div>
                </div>
                <div  className='flex-row  hover:border-white border-transparent pr-3 border-2  cursor-pointer transition-all flex justify-center items-center mt-4 pl-5'>
                    <img className='w-4 h-4' src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png' alt='flag' />
                    <h5 className='text-white ml-2'>EN</h5>
                </div>
                <div onClick={navigation} className='flex-row pl-5 cursor-pointer hover:border-white border-transparent border-2'>
                    {user?.others?.name===undefined?
                    <h5  className='text-xs text-gray-300 -translate-x-3'>Hello ,Sign  In</h5> :
                    <h5 className='text-xs text-gray-300 -translate-x-3'>Hello ,{user?.others?.name}</h5> 
                }
                <span className='text-white text-base'> account & Lists </span>
                </div>
                <div className='flex-row pl-5  hover:border-white border-transparent border-2 cursor-pointer'>
                    <h5 className='text-xs text-gray-300 -translate-x-3'>returns</h5> <span className='text-white text-base'> & Orders </span>
                </div>
                <div className='flex-row pl-3 text-white relative'>
                    <LocalGroceryStoreOutlined fontSize='large'  />
                    <h1 className='absolute -top-3 left-6  z-20 text-xl rounded-full bg-[#232f3e]  '>{cart?.length}</h1>

                </div>
                <h4 className='text-white translate-y-3'>Cart</h4>
            </nav>

            <nav className='lg:hidden  w-full text-white  pt-3 bg-[#232f3e] h-[130px] relative'>
                <div className='flex flex-row'>
                    <div className='flex-1 flex-row flex justify-start px-2'>
                        <div className='-translate-y-1 z-20' onClick={toggleMobileMenu}>
                            <MenuOutlined fontSize='medium' className='text-white cursor-pointer ' />
                            <MobileItems visible={mobile}  name={user?.others?.name}/>
                        </div>
                        <img className='w-24 h-10 translate-x-4' onClick={()=>navigate('/home')} src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />
                    </div>
                    <div className='flex flex-row justify-end'>
                        <h6 className='mt-3 text-xs' onClick={()=>{!user?navigate('/auth'):dispatch(logOut(user))}}>{!user?'Sign In':user?.others?.name} </h6>
                        <AccountCircleOutlined fontSize='large' className='cursor-pointer' />
                        <div className='flex-row mx-3 text-white relative'>
                    <LocalGroceryStoreOutlined fontSize='large'  />
                    <h1 className='absolute -top-3 left-3  z-20 text-xl rounded-full bg-[#232f3e]  '>{cart?.length}</h1>

                </div>
                    </div>
                </div>
                <div className='flex flex-row px-1'>
                    <input placeholder='Search Amazon' type='text' className='p-2  w-full text-black h-[35px] rounded-s-sm outline-none' />
                    <div className='cursor-pointer bg-[#FEBD69] text-black rounded-e-md'>
                        <SearchOutlined />
                    </div>
                </div>
                <div className='w-full px-2 h-[42px] pt-2  bg-[#37475a] flex flex-row justify-start'>
                    <PlaceOutlined />
                    <h6>Deliver to USA</h6>
                </div>
            </nav>
        </>

    )
}

export default Navbar