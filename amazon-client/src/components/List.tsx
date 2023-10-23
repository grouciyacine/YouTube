import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { makeRequest } from '../makeRequest'
import { useSelector } from 'react-redux'
import { AxiosRequestConfig } from 'axios'
import { useNavigate } from 'react-router-dom'
import { ListAltOutlined } from '@mui/icons-material'

type Props = {
    id:string,
    productId:string,
    name:string,
    setListId:any,
    AllProducts:any,
    setOpen:any,
    imgURL:any,
    img:string
}

function List({id,productId,name,setListId,AllProducts,setOpen,imgURL,img}: Props) {
    const user=useSelector((state:any)=>state.user)
    const headers:AxiosRequestConfig['headers']={
        'Authorization': 'Bearer ' + user.token,
    }
    const client=useQueryClient()
    const mutation=useMutation((product:string)=>{
        if(product) return makeRequest.delete(`/user/removeList/${id}`,{data:{_id:productId},headers:headers})
        return makeRequest.post(`/user/addList/${id}`,{_id:productId,imgURL:img},{headers:headers})
    },
    {onSuccess:()=>{client.invalidateQueries(['OneList'])}}
    )
    console.log(AllProducts)
    const handleList=async()=>{
            await mutation.mutate(AllProducts?.includes(productId))
            await setListId(id)
            setOpen(false)
    }
    const navigate=useNavigate()
  return (
    <div  className=' hover:bg-gray-200 rounded-md flex flex-row justify-between items-center border-b-[1px] p-3 border-gray-400'>
        <div className='flex flex-row items-center space-x-4'>
        <ListAltOutlined fontSize='large' className='w-12 h-12 object-contain'/>
        <h3 className='cursor-pointer'>{name}</h3>            
        </div>
        <div className='flex flex-col space-y-4'>
            <button onClick={handleList} className='bg-yellow-400 rounded-md p-2'>{AllProducts?.includes(productId)?"Remove":"Add"}</button>
            <button className='bg-orange-400 rounded-md p-2' onClick={()=>navigate(`/OneList/${id}`)}>View List</button>
        </div>
    </div>
  )
}

export default List