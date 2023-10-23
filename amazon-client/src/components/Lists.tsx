import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { makeRequest } from '../makeRequest'
import {  useQuery } from '@tanstack/react-query'
import { AxiosRequestConfig,  } from 'axios'
import List from './List'
import NewList from './NewList'
import { CloseOutlined } from '@mui/icons-material'

type Props = {
    productId:string,
    setListId:any,
    setOpen:any,
    img:string
}

function Lists({productId,setListId,setOpen,img}: Props) {
    const user=useSelector((state:any)=>state.user)
    const [toggle,setToggle]=useState(false) 
    const headers:AxiosRequestConfig['headers']={
        'Authorization': 'Bearer ' + user.token,
    }
    const userID=user?.others?._id
    const { data, error, isLoading } = useQuery(['lists',userID], () =>
    makeRequest.get(`/user/getLists`,{headers:headers}).then((response) => response.data))

  return (
    <div className='absolute w-11/12 h-fit z-20 bg-gray-100 rounded-md sm:top-20 mini:top-20 sm:left-10'>
      <div className='flex flex-row justify-between items-center p-2'>
        <h3 className='text-start p-3'>Lists</h3>
        <span onClick={()=>setOpen(false)}>
          <CloseOutlined className='cursor-pointer' fontSize='medium' />
        </span>
        
      </div>
        {data?.map((list:any,key:number)=>(
            <List setOpen={setOpen} img={img} imgURL={list?.imgURL} setListId={setListId} AllProducts={list?.AllProducts} key={key} id={list._id}  productId={productId} name={list?.title}/>
        
    ))}
    <button className='hover:text-blue-500' onClick={()=>setToggle(!toggle)}>Create New List</button>
    {toggle && <NewList setToggle={setToggle}/>}
    </div>
  )
}

export default Lists