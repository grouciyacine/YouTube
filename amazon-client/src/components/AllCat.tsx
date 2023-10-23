import React from 'react'
import OneCat from './OneCat'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../makeRequest'
import Categorie from './Categorie'



function AllCat() {
  const { data,isLoading,error } = useQuery(['AllProducts'], () =>
  makeRequest.get('/product/getItems').then((response) => response.data))
  
  const { data:one } = useQuery(['BH'], () =>
  makeRequest.get('/product/getItem/Baskets & hampers').then((response) => response.data))
  const { data:seconde } = useQuery(['hardware'], () =>
  makeRequest.get('/product/getItem/Hardware').then((response) => response.data))
  const { data:third } = useQuery(['Accent'], () =>
  makeRequest.get('/product/getItem/Accent furniture').then((response) => response.data))
  const { data:fourth } = useQuery(['Wallpaper'], () =>
  makeRequest.get('/product/getItem/Wallpaper & paint').then((response) => response.data))

  const { data:one2 } = useQuery(['Dresses'], () =>
  makeRequest.get('/product/getItem/Dresses').then((response) => response.data))
  const { data:seconde2 } = useQuery(['Knits'], () =>
  makeRequest.get('/product/getItem/Knits').then((response) => response.data))
  const { data:third2 } = useQuery(['jackets'], () =>
  makeRequest.get('/product/getItem/jackets').then((response) => response.data))
  const { data:fourth2 } = useQuery(['jewerly'], () =>
  makeRequest.get('/product/getItem/jewerly').then((response) => response.data))
  
  return (
    <div className='overflow-y-hidden  relative md:-bottom-0 sm:-bottom-24  -bottom-40 gap-5   grid grid-cols-4 lg:px-0 lg:p-0 px-3 p-3 mt-7  mini:grid-cols-3 mini:bottom-2 mini1:grid-cols-4   '>
{error?'error':
(isLoading?'loading':
(data?.map((product:any,key:number)=>(
  <OneCat first={product} title='' key={key}/>
)))
)}
<Categorie first={one} seconde={seconde} third={third} fourth={fourth} title='Easy updates for elevated spaces'/>
<Categorie first={one2} seconde={seconde2} third={third2} fourth={fourth2} title='Fashion trends you like'/>

</div>
  )
}

export default AllCat