import React from 'react'
import { GiHamburger } from "react-icons/gi";
import adminImg from '../../assets/Admin-img.jpg'
import { AiFillHome } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import mapImg from '../../assets/map-img.webp'


export const Sidemenu = () => {
  return (
    <div className='bg-black relative h-[100%] basis-20 p-6'>
       {/* Logo Div */}
       <div className='logo mt-4 gap-2 text-[white] flex items-center justify-center m-auto'>
       <GiHamburger className='text-[20px]'/>
       <h1 className='text-[20px] align-center justify-center font-black'>Foodie</h1>
       </div>

       {/* user div */}
       <div className='flex items-center justify-center text-[white] flex-col mt-[3rem] admin'>
        <img src={adminImg} alt='Admin image'
        className='h-[80px] w-[80px] rounded-full border-red-200 border-[4px] object-cover  hover:-translate-y-1
        hover:transition duration-300'/>
        <span className='opacity-70 mt-2 text-gray-400'>Welcome,</span>
        <h3 className='font-bold text-[#e2e2e2] '>Anna</h3>
       </div>

       {/* simple menu */}
       <div className='m-auto grid justify-center mt-4'>
           <li className='flex pt-3 pb-3 pl-3 gap-2 opacity-60 hover:opacity-100 items-center'>
             <AiFillHome className='text-white'/>
            <span className='text-[#e2e2e2]'>Home</span>
           </li>

           <li className='flex pt-3 pb-3 pl-3 gap-2 opacity-60 hover:opacity-100 items-center'>
           <BiRestaurant className='text-white'/>
            <span className='text-[#e2e2e2]'>Categories</span>
           </li>

           <li className='flex pt-3 pb-3 pl-3 gap-2 opacity-60 hover:opacity-100 items-center'>
           <BsBookmarkCheckFill className='text-white'/>
            <span className='text-[#e2e2e2]'>Reservations</span>
           </li>

           <li className='flex pt-3 pb-3 pl-3 gap-2 opacity-60  hover:opacity-100 items-center'>
             <AiFillHeart className='text-white'/>
            <span className='text-[#e2e2e2]'>Favourites</span>
           </li>
       </div>

       {/* sidemenu map div*/}
       <div className='mt-5 h-[14rem] w-full rounded-xl overflow-hidden '>
          <img src={mapImg} alt='Map Image' className='object-cover h-[100%]' />
       </div>
    </div>
  )
}

export default Sidemenu
