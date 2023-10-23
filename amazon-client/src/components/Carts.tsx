import React from 'react'
import { makeRequest } from '../makeRequest'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'
import { useSelector } from 'react-redux'
type Props={
    id:string,
    listId:string|any
}
function Carts({id,listId}:Props) {
    const user=useSelector((state:any)=>state.user)
    const headers:AxiosRequestConfig['headers']={
        'authorization':'Bearer ' +user?.token
    }
    const { data } = useQuery(['OneCart', id], () =>
    makeRequest.get(`/product/getProduct/${id}`).then((response) => response.data))
    console.log(data)
    const client=useQueryClient()
    const mutation=useMutation(async()=>{
        return await makeRequest.delete(`/user/removeList/${listId}`,{data:{_id:id},headers:headers})
    },{
        onSuccess:()=>client.invalidateQueries(['OneCart'])
    })
    const handler=async()=>{
        await mutation.mutate()
    }
    return (
<div className='border-b-[1px] border-gray-400 p-2'>
        <div className='flex flex-row items-center p-3 justify-start'>
        <img src={data?.img} alt='pro' className='w-40 h-40 object-contain'/>
        <h4 className='flex-1 text-start p-2'>{data?.title}</h4> 
        </div>
        <button onClick={handler} className='outline-none rounded-full bg-yellow-400 w-1/6 mx-5 p-2 mt-4 hover:bg-yellow-500'>Remove</button>
</div>
    )
}

export default Carts