import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const IrVideo = () => {
  return (
    <div className="bg-[#282828] px-24 py-3 text-white">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-400 text-[20px]">IR Video Wall</h1>
          <div className="border-2 border-red-500 w-[20px]"></div>
        </div>
        <div>
          <p className="flex items-center text-[14px] cursor-pointer font-[400]">
            See more
            <span>
              <IoIosArrowForward />
            </span>
          </p>
        </div>
      </div>

      <div className="py-5 flex items-center space-x-8">
        <div>
          <img src="./video-1.png" className="rounded-md" alt="" />
        </div>

        <div className="flex space-x-10 items-center">
          <div>
            <div>
              <h1 className="font-400 text-[18px]">Retail With Rasul</h1>
              <div className="border-2 border-red-500 w-[20px]"></div>
            </div>

            <div className="pt-2 flex flex-col space-y-5">
               <div className="w-[205px] h-[146px]">
                 <img src="./ir-1.png" alt="" />
                 <p className="text-[10px] font-[500] mt-2">Senco Gold IPO subscribed 69% on first day of subscription</p>
               </div>
               <div className="w-[205px] h-[146px]">
                 <img src="./ir-2.png" alt="" />
                 <p className="text-[10px] font-[500] mt-2">India D2C Summit & Awards 2023  Trailblazing Brands and Professionals</p>
               </div>
            </div>
          </div>

          <div>
            <div>
              <h1 className="font-400 text-[18px]">The Store</h1>
              <div className="border-2 border-red-500 w-[20px]"></div>
            </div>

            <div className="pt-2 flex flex-col space-y-5">
               <div className="w-[205px] h-[146px]">
                 <img src="./ir-3.png" alt="" />
                 <p className="text-[10px] font-[500] mt-2">Fastrack Smart onboards Ranveer Singh as brand ambassador</p>
               </div>
               <div className="w-[205px] h-[146px]">
                 <img src="./ir-4.png" alt="" />
                 <p className="text-[10px] font-[500] mt-2">Planet Fashion by ABFRL opens 2 outlets in Mumbai</p>
               </div>
            </div>
          </div>


          <div>
            <div>
              <h1 className="font-400 text-[18px]">IR Studio</h1>
              <div className="border-2 border-red-500 w-[20px]"></div>
            </div>

            <div className="pt-2 flex flex-col space-y-5">
               <div className="w-[205px] h-[146px]">
                 <img src="./ir-5.png" alt="" />
                 <p className="text-[10px] font-[500] mt-2">Zoca Cafe launches outlet in Bengaluru</p>
               </div>
               <div className="w-[205px] h-[146px]">
                 <img src="./ir-6.png" alt="" />
                 <p className="text-[10px] font-[500] mt-2">Unwrapping the Archies’ reinvention plan</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrVideo;
