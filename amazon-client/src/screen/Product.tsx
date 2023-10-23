import React, {  useState } from 'react'
import Navbar from '../components/Navbar'
import { PlaceOutlined } from '@mui/icons-material'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Footer from '../components/Footer'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from '../makeRequest'
import { useNavigate, useParams } from 'react-router-dom'
import RatingStars from '../components/Rating'
import { useSelector } from 'react-redux'
import { AxiosRequestConfig } from 'axios'
import Lists from '../components/Lists'




const Product = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    const user=useSelector((state:any)=>state.user)
    const headers: AxiosRequestConfig['headers'] = {
        'authorization': 'Bearer ' + user?.token,
        // Other headers...
    };
    const [image, setImg] = useState<String | any>("")
    const [listId,setListID]=useState<String | any>(null)
    const [open,setOpen]=useState<boolean|any>(false)
    const { name, title } = useParams()
    const navigate = useNavigate()
    const { data } = useQuery(['One', name], () =>
        makeRequest.get(`/product/getProduct/${name}`).then((response) => response.data))
    const { data:cart } = useQuery(['cart', user?.others?._id], () =>
        makeRequest.get(`/user/getCard`,{headers:headers}).then((response) => response.data))
    const { data: render} = useQuery(['Render', title], () =>
        makeRequest.get(`/product/render/${title}`).then((response) => response.data))
    const { data:OneList } = useQuery(['OneList', listId], () =>
    listId?makeRequest.get(`/user/getList/${listId}`,{headers:headers}).then((response) => response.data):makeRequest.get(`/user/getList/649a26cf8e4de8b1c07cda55`,{headers:headers}).then((response) => response.data))
    const client=useQueryClient()
    const mutation=useMutation((ID:string)=>{
        if(ID) return makeRequest.delete(`/user/removeCard/${data?._id}`,{headers:headers})
        return makeRequest.post(`/user/addCard/${data?._id}`,{},{headers:headers})
    },{
        onSuccess:()=>client.invalidateQueries(['cart'])
    })
    const toggleCard=()=>{
        mutation.mutate(cart?.includes(data?._id))
    }
    console.log(cart?.includes(data?._id),cart)
    const toggleAuth=()=>{
        if(!user){
            navigate('/auth')
        }else{
            toggleCard()
        }
    }
    if (data) {
        return (
            <div className='bg-white'>
                <Navbar />
                <h6 className='flex justify-start items-start text-sm text-gray-500 p-3'>Back to result</h6>
                <header className='flex sm:flex-row flex-col sm:justify-start sm:items-start p-2 w-full '>
                    <div className='flex sm:flex-row mini:flex-col-reverse sm:sticky top-0'>
                        <div className='flex sm:flex-col mini:flex-row mini:items-center mini:justify-center sm:space-x-0 mini:space-x-4 sm:space-y-6 justify-center  items-center mt-2 '>
                            {data?.imgsURLS?.map((img: any, key: number) => (
                                <img onClick={() =>setImg(img)} className='w-12 h-12 object-contain border-[1px] border-blue-400 rounded-lg cursor-pointer ' src={img} alt='pro' />
                            ))}
                        </div>
                        <img className='w-72 object-contain h-[450px] rounded-sm p-3 ' src={image ? image : data?.img} alt='pro' />
                    </div>
                    <div className='sm:w-2/6 w-full  flex-col justify-start items-start '>
                        <h1 className=' sm:text-2xl text-sm mt-2 w-fit'>{data?.title}</h1>
                        <h6 className='text-[#007185] hover:text-red-400 hover:border-b-[1px] duration-75 cursor-pointer border-b-red-400 w-fit'>Visit the SteelSeries Store</h6>
                        <div className='flex flex-row w-fit justify-center items-center'>
                            <h6>{data?.rating}</h6>
                            <div className=' flex flex-row '>
                                <RatingStars rating={data?.rating} />
                            </div>
                        </div>
                        <div className='border-b-2 border-gray-400' />
                        <h2 className='w-fit text-3xl font-semibold'>{data?.price}</h2>
                        <h2 className='w-fit'>Colors:</h2>
                        <div className='flex flex-row justify-center items-center w-fit p-2 space-x-4'>
                            <div className='w-7 h-7 bg-black rounded-md' />
                            <div className='w-7 h-7 bg-blue-950 rounded-md' />
                            <div className='w-7 h-7 bg-red-950 rounded-md' />
                        </div>
                        <div className='flex flex-row'>
                            <h4 className='font-semibold'>Brand</h4>:<h4 className='mx-11'>{data?.brand}</h4>
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <h1 className='font-semibold text-xl w-fit'>About this item</h1>
                            <ul className='flex flex-col justify-start items-start'>
                                {data?.about?.map((ab: any, key: number) => (
                                    <li className='text-start items-start'>{'\u2022'} {ab}</li>
                                ))}

                            </ul>
                        </div>
                    </div>

                    <div className=' sm:border-gray-300 sm:border-[1px] sm:rounded-md p-2 mt-4 sm:mx-5 border-t-[1px] border-gray-300 flex flex-col justify-start items-start sm:w-1/3 w-full'>
                        <h2 className='w-fit text-3xl font-semibold'>${data?.price}</h2>
                        <h6 className='text-gray-400 w-fit'>${data?.price + 2} Shipping & Import Fees Deposit to USA Details
                            Delivery July 12 - 17</h6>
                        <div className='flex flex-row justify-start items-center'>
                            <PlaceOutlined fontSize='small' />
                            <h6 className='text-sm text-gray-500'>Deliver to USA</h6>
                        </div>
                        <h1 className='text-green-700 text-xl '>In Stock</h1>
                        <button className='outline-none rounded-full bg-yellow-400 w-10/12 mx-5 p-2 mt-4 hover:bg-yellow-500' onClick={toggleAuth}>{!cart?.includes(data._id)?'Add to Cart':'Remove from Cart'}</button>
                        <button className='outline-none rounded-full flex-1 w-10/12 mx-5 bg-orange-400 p-2 mt-2 hover:bg-orange-500'>Buy Now</button>
                        <h6>Payment:secure transition</h6>
                        <h6>Amazon.com</h6>
                        <button className='rounded-md bg-transparent border-black border-[1px] p-2 hover:bg-gray-200 w-full ' onClick={()=>{!user?navigate('/auth'): setOpen(!open)}}>{!OneList?.AllProducts?.includes(data._id)?"Add to List":"remove from list"}</button>
                    </div>
                    {open && <div className=''>
                        <Lists  productId={data?._id} img={data?.img} setListId={setListID} setOpen={setOpen}/>
                        </div>}
                </header>

                <div className='border-t-[1px] border-gray-300'>
                    <div className='flex flex-row justify-between items-center p-4'>
                        <h1 className='text-2xl'>Products related to this item</h1>
                        <h6 className='text-sm '>Page 1 of {render?.length}</h6>
                    </div>
                    <Slider {...settings} className='bg-white w-[96%]'>
                        {render?.map((pro: any, key: number) => (
                            <div key={key} className=''>
                                <img className='w-72 h-72 object-contain cursor-pointer' onClick={() => navigate(`/Product/${pro?._id}/${title}`)} src={pro.img} alt='swi' />
                                <div className='w-1/3 flex flex-col justify-start items-start mx-2  bg-white'>
                                    <h5 className=''>{pro.title.substring(0, 50)}</h5>
                                    <div className=' flex sm:flex-row  mini:hidden'>
                                        <RatingStars rating={pro.rating} />
                                    </div>
                                    <h3 className='text-xl font-bold mx-3'>${pro.price}</h3>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <Footer />
            </div>
        )
    } else {
        return (null)
    }

}

export default Product