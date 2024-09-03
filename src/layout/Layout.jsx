import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Layout = ({title, data, border}) => {
  return (
    <div>
    <div className={`w-[445px] ${border && 'border'} rounded-xl px-3 py-2`}>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-[500] text-[18px]">{title}</h1>
              <div className="border-2 border-red-500 w-[20px]"></div>
            </div>
            <div>
              <p className="flex items-center text-[14px] text-[#666666] cursor-pointer font-[400]">
                See more
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 py-6">
            {data.map((fashion, i) => (
              <div className="flex space-x-4 w-[432px]" key={i}>
                <img src={fashion.image} alt="" />
                <div className='flex flex-col'>
                  <h1 className="flex space-x-2 font-semibold uppercase text-sm">
                    <span className="text-[#E21B22]">
                      {fashion.heading[0]}{" "}
                    </span>{" "}
                    <span>|</span>
                    <span className="text-[#999999]">
                      {fashion.heading[1]}{" "}
                    </span>
                  </h1>
                  <div className="w-[245px] flex flex-col my-2">
                    <p className="font-[Inter] font-[500] text-sm my-2">
                      {fashion.title}
                    </p>
                    <p className="text-[#666666] w-[225px] text-[13px] font-normal">
                      {fashion.desc}
                    </p>
                  </div>
                  <span className="font-normal text-xs mt-2 relative">
                    {fashion.tag}
                  </span>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Layout
