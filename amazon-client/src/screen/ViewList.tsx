import React from 'react'
import Navbar from '../components/Navbar'
import { useQuery } from '@tanstack/react-query'
import {AxiosRequestConfig} from 'axios'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { makeRequest } from '../makeRequest'
import Carts from '../components/Carts'



function ViewList() {
  const user=useSelector((state:any)=>state.user)
const headers:AxiosRequestConfig['headers']={
'authorization':'Bearer ' +user?.token
}
const {id}=useParams()
const { data, error, isLoading } = useQuery(['lists',id], () =>
makeRequest.get(`/user/getList/${id}`,{headers:headers}).then((response) => response.data))
console.log(data)
  return (
    <div>
      <Navbar/>
      <div>
        <h1 className='text-3xl p-3'>{data?.title}</h1>
        {error?'error':(isLoading?'loading':data?.AllProducts?.map((data:any,key:number)=>(
          <Carts key={key} id={data} listId={id}/>
        )))}
      </div>
    </div>
  )
}

export default ViewList