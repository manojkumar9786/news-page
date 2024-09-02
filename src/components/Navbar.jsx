import React from 'react'
import { RiMenu5Fill } from "react-icons/ri";
import { WiDayCloudy } from "react-icons/wi";
import { LuDot } from "react-icons/lu";

const Navbar = () => {
  return (
    <div>
        <nav className='border-t border-gray-200 w-full mt-3 px-12 py-5'>
           <div className='flex justify-between items-center'>
              <RiMenu5Fill size={20} />
              <ul className='text-[15px] font-bold flex justify-between gap-8 cursor-pointer font-[Roboto]'>
                <li className='text-red-600'>Home</li>
                <li>Categories</li>
                <li>IR Proime</li>
                <li>Events</li>
                <li>Bookstore</li>
                <li>Newsletter</li>
                <li>Video</li>
              </ul>
              <div className='flex items-center gap-2 text-[#616161]'>
                 <WiDayCloudy size={20} className='mt-1' />
                 <p>Friday, 30 June 2023</p>
              </div>
           </div>

           <div className='mt-[25px] flex justify-center items-center'>
             <ul className='flex gap-3 text-[13px] font-[500] font-[inter] text-[#595959] leading-3 items-center'>
               <li>Fashion & Lifestyle</li>
               <li className='text-[#E21B22]'><LuDot /></li>
               <li>Beauty & Wellness</li>
               <li className='text-[#E21B22]'><LuDot /></li>
               <li>Food & Beverage</li>
               <li className='text-[#E21B22]'><LuDot /></li>
               <li>Consumer Durables & IT</li>
               <li className='text-[#E21B22]'><LuDot /></li>
               <li>Entertainment</li>
               <li className='text-[#E21B22]'><LuDot /></li>
               <li>Home Dector & Furnishing</li>
               <li className='text-[#E21B22]'><LuDot /></li>
               <li>Speciality Retail</li>
             </ul>
           </div>
        </nav>
    </div>
  )
}

export default Navbar
