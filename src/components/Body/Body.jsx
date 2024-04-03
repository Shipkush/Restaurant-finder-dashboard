import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { FaPizzaSlice } from "react-icons/fa6";
import { GiChopsticks } from "react-icons/gi";
import { BsArrowRightShort } from "react-icons/bs";
import { GiDeathJuice } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { BsFillCupHotFill } from "react-icons/bs";
import { IoMdBeer } from "react-icons/io";
import { FaCarrot } from "react-icons/fa";
import { FaFishFins } from "react-icons/fa6";
import { BiSolidSushi } from "react-icons/bi";
import { GiBarbecue } from "react-icons/gi";
import { FaHotdog } from "react-icons/fa";


import pastaImg from '../../assets/pasta-img.jpg';
import saladImg from '../../assets/salads-img.jpg';
import pizzaImg from '../../assets/pizza-img.jpg';
import juiceImg from '../../assets/juice-img.jpg';

import { AiFillStar } from "react-icons/ai";
import { MdMonetizationOn } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";

export const Body = () => {
  return (
    <div className='bg-bodyBg h-[100%] basis-80 p-8'>
      {/* Top section*/}
      <div className='flex items-center justify-between'>
        <div className='flex items-center border-b-2 pb-2 basis-1/2 gap-2'>
         <AiOutlineSearch className='text-hoverColor text-[20px] cursor-pointer'/>
         <input type='text' placeholder='Search your favourite' className='border-none 
         outline-none placeholder:text-sm focus:outline-none' />

        </div>

        <div className='flex gap-4 items-center'>
        <AiOutlineAppstoreAdd className='text-hoverColor cursor-pointer text-[25px]
        hover:text-[20px] transition-all'/>
        <button className='bg-sideMenuBg cursor-pointer text-bodyBg font-semibold py-2 
        px-4 rounded-[5px] hover:bg-[#55545e] transition-all'>Go Premium</button>

        </div>
      </div>

      {/* Title Div */}

      <div className='flex items-center justify-between mt-8'>
         <div className='title'>
            <h1 className='text-[35px] text-titleColor tracking-[1px] font-black'>
                Find the best place
            </h1>
            <span className='text-[16px] opacity-70'><strong>249 Restaurants,</strong> choose yours</span>
         </div>

         <div className='flex items-center justify-between'>
            <div className='specials px-4 text-center border-r-2'>
                <h3 className='text-[20px] font-bold text-titleColor'>95</h3>
                <small className='text-[16px] opacity-70'>Specials</small>
            </div>

            <div className='deliveries px-4 text-center '>
                <h3 className='text-[20px] font-bold text-titleColor'>90</h3>
                <small className='text-[16px] opacity-70'>Deliveries</small>
            </div>

         </div>
      </div>

      {/* categories div */}
      <div className='flex mt-8 items-center gap-10'>
        <div className='singleCategory grid items-center justify-between text-center'>
            <div className="imgDiv h-[40px] w-[40px] bg-[#e9cb8e] rounded-full flex
            items-center justify-center m-auto p-1">
            <FaPizzaSlice className='w-[70%] flex justify-center m-auto'/>
            </div>
            <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>Italian</span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
            <div className="imgDiv h-[40px] w-[40px] bg-[#c2b1bd] rounded-full flex
            items-center justify-center m-auto p-1">
            <GiChopsticks className='w-[70%] flex justify-center m-auto'/>
            </div>
            <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>Asian</span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
            <div className="imgDiv h-[40px] w-[40px] bg-[#d0dddf] rounded-full flex
            items-center justify-center m-auto p-1">
            <GiDeathJuice className='w-[70%] flex justify-center m-auto'/>
            </div>
            <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>Bars</span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
            <div className="imgDiv h-[40px] w-[40px] bg-[#ebcfcd] rounded-full flex
            items-center justify-center m-auto p-1">
            <GiHamburger className='w-[70%] flex justify-center m-auto'/>
            </div>
            <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>Burgers</span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
            <div className="imgDiv h-[40px] w-[40px] bg-[#ece0fa] rounded-full flex
            items-center justify-center m-auto p-1">
           <BsFillCupHotFill className='w-[70%] flex justify-center m-auto'/>
            </div>
            <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>Cafe</span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
            <div className="imgDiv h-[40px] w-[40px] bg-[#d2d4d2] rounded-full flex
            items-center justify-center m-auto p-1">
           <IoMdBeer className='w-[70%] flex justify-center m-auto'/>
            </div>
            <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>pubs</span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
            <div className="imgDiv h-[40px] w-[40px] bg-[#eccece] rounded-full flex
            items-center justify-center m-auto p-1">
           <FaCarrot className='w-[70%] flex justify-center m-auto'/>
            </div>
            <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>vegan</span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
            <div className="imgDiv h-[40px] w-[40px] bg-[#eddfd2] rounded-full flex
            items-center justify-center m-auto p-1">
           <FaFishFins className='w-[70%] flex justify-center m-auto'/>
            </div>
            <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>sea</span>
        </div>


        <div className='singleCategory grid items-center justify-between text-center'>
            <div className="imgDiv h-[40px] w-[40px] bg-[#efe3ee] rounded-full flex
            items-center justify-center m-auto p-1">
          <BiSolidSushi className='w-[70%] flex justify-center m-auto'/>
            </div>
            <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>sushi</span>
        </div>


        <div className='singleCategory grid items-center justify-between text-center'>
            <div className="imgDiv h-[40px] w-[40px] bg-[#eeefe0] rounded-full flex
            items-center justify-center m-auto p-1">
           <GiBarbecue className='w-[70%] flex justify-center m-auto'/>
            </div>
            <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>bbq</span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
            <div className="imgDiv h-[40px] w-[40px] bg-[#e2f4e2] rounded-full flex
            items-center justify-center m-auto p-1">
           <FaHotdog className='w-[70%] flex justify-center m-auto'/>
            </div>
            <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>hotdog</span>
        </div>

        <div className='singleCategory grid items-center justify-between text-center'>
            <div className="imgDiv h-[40px] w-[40px] bg-[#deecf0] rounded-full flex
            items-center justify-center m-auto p-1">
            <BsPlus className='text-center flex justify-center m-auto text-[25px] 
            hover:scale-[1.5] transition-all cursor-pointer'/>
            </div>
            <span className='uppercase text-[12px] font-medium opacity-50 pt-2'>more</span>
        </div>
    </div>

    {/* restaurant section */}

    <div className='restaurant mt-8'>
        <div className='flex items-center justify-between'>
            <div className='title'>
                <h1 className='text-[25px] text-titleColor font-bold'>
                    New Restaurants
                </h1>
                <span className='text-[16px] opacity-70'><strong>9 restaurants,</strong> have been opened up in town</span>
            </div>

            <button className=' flex align-center gap-2 cursor-pointer text-titleColor font-semibold py-2 
        px-4 rounded-[5px] hover:bg-[#55545e] hover:text-bodyBg transition-all'>
            View All
            <BsArrowRightShort className='text-[20px]'/></button>
        </div>

        <div className='restaurantContainer py-8 flex justify-between items-center'>

            <div className='singleRestaurant w-[220px] bg-colorOne p-3 rounded-[10px]'>
                <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
                    <img src={pastaImg} alt="food image" />
                </div>
                <h1 className='restName block text-center font-bold opacity-90 pt-4'>Pasta Zone</h1>
                <small className='block text-center text-[#606060] font-medium'>Italian Restaurant</small>

                <div className='info mt-5 flex justify-center items-center'>
                    <div className='singleInfo grid px-3'>
                    <AiFillStar className='flex mt-auto justify-center items-center' />
                    <h4 className='font-semibold text-[#4f4d58]'>3.7</h4>
                    </div>

                    <div className='singleInfo border-x-2 grid px-3'>
                    <MdMonetizationOn className='flex mt-auto justify-center items-center' />
                    <h4 className='font-semibold text-[#4f4d58]'>30</h4>
                    </div>

                    <div className='singleInfo grid px-3'>
                    <GiPathDistance className='flex mt-auto justify-center items-center' />
                    <h4 className='font-semibold text-[#4f4d58]'>0.7</h4>
                    </div>

                </div>
            </div>

            <div className='singleRestaurant w-[220px] bg-colorTwo p-3 rounded-[10px]'>
                <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
                    <img src={saladImg} alt="" />
                </div>
                <h1 className='restName block text-center font-bold opacity-90 pt-4'>Eat Healthy</h1>
                <small className='block text-center text-[#606060] font-medium'>Vegan Restaurant</small>

                <div className='info mt-5 flex justify-center items-center'>
                    <div className='singleInfo grid px-3'>
                    <AiFillStar className='flex mt-auto justify-center items-center' />
                    <h4 className='font-semibold text-[#4f4d58]'>4.1</h4>
                    </div>

                    <div className='singleInfo border-x-2 grid px-3'>
                    <MdMonetizationOn className='flex mt-auto justify-center items-center' />
                    <h4 className='font-semibold text-[#4f4d58]'>50</h4>
                    </div>

                    <div className='singleInfo grid px-3'>
                    <GiPathDistance className='flex mt-auto justify-center items-center' />
                    <h4 className='font-semibold text-[#4f4d58]'>1.7</h4>
                    </div>

                </div>
            </div>


           <div className='singleRestaurant w-[220px] bg-colorThree p-3 rounded-[10px]'>
                <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
                    <img src={pizzaImg} alt="" />
                </div>
                <h1 className='restName block text-center font-bold opacity-90 pt-4'>Pizzeriaa</h1>
                <small className='block text-center text-[#606060] font-medium'>FastFood Restaurant</small>

                <div className='info mt-5 flex justify-center items-center'>
                    <div className='singleInfo grid px-3'>
                    <AiFillStar className='flex mt-auto justify-center items-center' />
                    <h4 className='font-semibold text-[#4f4d58]'>4.5</h4>
                    </div>

                    <div className='singleInfo border-x-2 grid px-3'>
                    <MdMonetizationOn className='flex mt-auto justify-center items-center' />
                    <h4 className='font-semibold text-[#4f4d58]'>70</h4>
                    </div>

                    <div className='singleInfo grid px-3'>
                    <GiPathDistance className='flex mt-auto justify-center items-center' />
                    <h4 className='font-semibold text-[#4f4d58]'>2.7</h4>
                    </div>

                </div>
            </div>


            <div className='singleRestaurant w-[220px] bg-colorFour p-3 rounded-[10px]'>
                <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
                    <img src={juiceImg} alt="" />
                </div>
                <h1 className='restName block text-center font-bold opacity-90 pt-4'>Power House</h1>
                <small className='block text-center text-[#606060] font-medium'>Mocktail Bar</small>

                <div className='info mt-5 flex justify-center items-center'>
                    <div className='singleInfo grid px-3'>
                    <AiFillStar className='flex mt-auto justify-center items-center' />
                    <h4 className='font-semibold text-[#4f4d58]'>3.9</h4>
                    </div>

                    <div className='singleInfo border-x-2 grid px-3'>
                    <MdMonetizationOn className='flex mt-auto justify-center items-center' />
                    <h4 className='font-semibold text-[#4f4d58]'>50</h4>
                    </div>

                    <div className='singleInfo grid px-3'>
                    <GiPathDistance className='flex mt-auto justify-center items-center' />
                    <h4 className='font-semibold text-[#4f4d58]'>1.3</h4>
                    </div>

                </div>
            </div>

           
        
        </div>
     </div>
</div>
  )
}

export default Body
