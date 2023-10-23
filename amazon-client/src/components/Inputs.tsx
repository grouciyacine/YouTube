import React from 'react'

type Props = {
    type: string,
    value: any,
    placeholder: string,
    onChange:any,
    name:string,
    id:string,
    
}

function Inputs({type,value,placeholder,onChange,name,id}: Props) {
  return (
    <>
    <h3 className='text-base font-bold text-start'>{name}:</h3>
    <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} className='border-[1px] border-black rounded-sm w-11/12 outline-none'/>
    </>
    

  )
}

export default Inputs