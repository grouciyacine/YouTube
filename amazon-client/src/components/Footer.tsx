import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#232f3e] w-full h-fit  mt-7 flex-col justify-start text-white items-start md:translate-y-0 mini:translate-y-20'>
        <h3 className='text-white p-3 w-full bg-[#3f546f]'>Back to Top</h3>
        <div className='hidden grid-cols-4 gap-7 p-5  border-b-[1px] border-gray-300 sm:grid '>
                <ul className='flex flex-col justify-start items-start translate-x-3 text-gray-400'>
                    <h2 className='font-semibold text-white'> Get to Know us</h2> 
                    <li>Careers</li>
                    <li>Blogs</li>
                    <li>About Amazon</li>
                    <li>Investor relation</li>
                    <li>Amazon Device</li>
                    <li>Amazon Science</li>
                </ul>
                <ul className='flex flex-col justify-start items-start text-gray-400'>
                    <h2 className='font-semibold text-white'> Make Money with Us</h2> 
                    <li>Sell products on Amazon</li>
                    <li>Sell on Amazon Business</li>
                    <li>Sell apps on Amazon</li>
                    <li>Become an Affiliate</li>
                    <li>Advertise Your Products</li>
                    <li>Self-Publish with Us</li>
                    <li>Host an Amazon Hub</li>
                </ul>
                <ul className='flex flex-col justify-start text-gray-400 items-start'>
                    <h2 className='font-semibold text-white'> Amazon Payment Products</h2> 
                    <li>Amazon Business Card</li>
                    <li>Shop with Points</li>
                    <li>Reload Your Balance</li>
                    <li>Amazon Currency Converter</li>
                </ul>
                <ul className='flex flex-col justify-start items-start text-gray-400'>
                    <h2 className='font-semibold text-white'>Let Us Help You</h2> 
                    <li>Amazon and COVID-19</li>
                    <li>Your Account</li>
                    <li>Your Orders</li>
                    <li>Shipping Rates & Policies</li>
                    <li>Returns & Replacements</li>
                    <li>Manage Your Content and Devices</li>
                    <li>Amazon Assistant</li>
                    <li>Help</li>
                </ul>
        </div>
        <div className='sm:hidden grid  grid-cols-2 gap-7 p-5  border-b-[1px] border-gray-300'>
        <ul className='flex flex-col justify-start text-gray-400 items-start space-y-5'>
                    <h2 className='font-semibold text-white'>Amazon.com</h2>
                    <h2 className='font-semibold text-white'>Your List</h2>
                    <h2 className='font-semibold text-white'>Find a Gift</h2>
                    <h2 className='font-semibold text-white'>Browsing History</h2>
                    <h2 className='font-semibold text-white'>Returns</h2>
                </ul>
                <ul className='flex flex-col justify-start text-gray-400 items-start text-start  space-y-5'>
                    <h2 className='font-semibold text-white'>Your Orders</h2>
                    <h2 className='font-semibold text-white'>Gift CArd & Registry</h2>
                    <h2 className='font-semibold text-white'>Your account</h2>
                    <h2 className='font-semibold text-white'>Sell Product in Amazon</h2>
                    <h2 className='font-semibold text-white text-start justify-start'>Your Recalls and Product Safety Alerts</h2>
                    <h2 className='font-semibold text-white'>Customer Service</h2>
                </ul>
        </div>
        <div className='p-5 flex flex-row justify-center items-center'>
            <img className='w-20 h-7 object-cover' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='ww'/>
            
        </div>
    </footer>
  )
}

export default Footer