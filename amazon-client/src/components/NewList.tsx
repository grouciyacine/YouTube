import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { makeRequest } from '../makeRequest'
import { AxiosRequestConfig } from 'axios'
import { useSelector } from 'react-redux'

type Props = {
    setToggle:any
}

function NewList({setToggle}: Props) {
  const user=useSelector((state:any)=>state.user)
  const headers:AxiosRequestConfig['headers']={
    'authorization':'Bearer ' +user.token
  }
  const client=useQueryClient()
  const [name,setName]=useState<String|any>('')
  const mutation=useMutation((title:string)=>{
  return makeRequest.post(`/user/createList`,{title},{headers:headers})
},
{onSuccess:()=>client.invalidateQueries(['lists'])})
const createList=()=>{
  mutation.mutate(name)
  setToggle(false)
}
  return (
    <div className='bg-gray-100'>
        <div className='flex flex-row p-3 items-center '>
            <h4 className='p-3 text-xl'>title</h4>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='flex-1 h-10 rounded-lg outline-none border-none'/>
        </div>
        <button className='bg-white rounded-lg p-3 mb-3' onClick={createList}>Create</button>
    </div>
  )
}

export default NewList