import React from 'react'
import Categorie from './Categorie'
import { makeRequest } from '../makeRequest'
import { useQuery } from '@tanstack/react-query'
import OneCat from './OneCat'



function Categories() {
  const { data } = useQuery(['ca'], () =>
  makeRequest.get('/product/getItem/Chairs').then((response) => response.data))
  const { data:seconde } = useQuery(['cat'], () =>
  makeRequest.get('/product/getItem/Headsets').then((response) => response.data))
  const { data:third } = useQuery(['cate'], () =>
  makeRequest.get('/product/getItem/keyboards').then((response) => response.data))
  const { data:fourth } = useQuery(['categ'], () =>
  makeRequest.get('/product/getItem/Computer mic').then((response) => response.data))

  const { data:first } = useQuery(['ca2'], () =>
  makeRequest.get('/product/getItem/Shoes under $50').then((response) => response.data))
  const { data:seconde2 } = useQuery(['cat2'], () =>
  makeRequest.get('/product/getItem/jeans under $50').then((response) => response.data))
  const { data:third2 } = useQuery(['cate2'], () =>
  makeRequest.get('/product/getItem/tops under $25').then((response) => response.data))
  const { data:fourth2 } = useQuery(['categ2'], () =>
  makeRequest.get('/product/getItem/Dresses under $30').then((response) => response.data))

  
  const { data:first3 } = useQuery(['ca3'], () =>
  makeRequest.get('/product/getItem/Beauty picks').then((response) => response.data))

  return (
    <div className='absolute   top-32 lg:top-52 md:top-52 sm:top-32  sm:gap-[75px] sm:grid sm:grid-cols-4  grid grid-cols-3 gap-[39px] lg:px-0 px-3 '>
        <Categorie first={data} seconde={seconde} third={third} fourth={fourth} title='Gaming accessories'/>
        <Categorie first={first} seconde={seconde2} third={third2} fourth={fourth2} title='Shop deals in Fashion'/>
        <OneCat first={first3}  title='Beauty picks' />
        
    </div>
  )
}

export default Categories