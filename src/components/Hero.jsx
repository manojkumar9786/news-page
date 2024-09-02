import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const listItem = [
  {
    id: 0,
    title: "HOTSPOTS",
    desc: "Luxury hotspots: 5 most expensive high streets in the..",
    img: "./1.png",
  },
  {
    id: 1,
    title: "AI",
    desc: "5 ways to leverage the power of ChatGPT in retail",
    img: "./2.png",
  },
  {
    id: 2,
    title: "SHIPPING",
    desc: "Reliance to open 250 Azorte stores in 2-3 years",
    img: "./3.png",
  },
];

const Hero = () => {
  return (
    <div>
      <div className="bg-[#F8F9FA] px-16 py-4 flex items-center gap-4">
        {listItem.map((item) => (
          <div className="bg-white p-3 rounded-md flex items-center gap-3 w-[450px]">
            <img src={item.img} alt="" />
            <div>
              <h2 className="text-[#E21B22] text-[15px] font-semibold">
                {item.title}
              </h2>
              <p className="text-[16px] font-[400] font-[Inter]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="bg-white px-12 py-10 flex space-x-10">
          <div className="left-side">
            <div className="relative">
              <img src="./hero-img.png" alt="" />
              <div className="absolute bottom-2 px-3 text-white flex flex-col justify-center">
                <div className="bg-[#E21B22] w-[74px] px-1 py-1 font-bold text-[11px] text-center font-[Roboto]">
                  IN FOCUS
                </div>
                <h1 className="font-bold font-[Inter] text-[20px] w-[560px]">
                  Rahul Gandhi In Manipur: Chopper Ride After Women Protesters
                  Surround Car
                </h1>
                <span className="font-[400] text-[14px] font-[Droid Sans] text-gray-200">
                  Rahul Gandhi
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <div className="shadow-md py-5 w-[587px] flex gap-5 px-2">
                <img src="./image 34.png" alt="" className="rounded-lg" />
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[#E21B22] font-semibold text-[12px] uppercase">
                      Select Citywalk
                    </p>
                    <p className="text-[17px] mt-3 font-[400]">
                      Wow! Momo Foods enters Bhopal with Wow!
                    </p>
                    <div className="flex mt-3 gap-8">
                      <p className="text-[14px] font-[400]"># Citywalk</p>
                      <p className="text-[14px] font-[400] text-[#504E4E]">
                        #reel stories podcast
                      </p>
                    </div>
                  </div>
                  <div className="ml-12">
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>

              <div className="shadow-md py-5 w-[587px] flex gap-5 px-2">
                <img src="./Group 18897.png" alt="" className="rounded-lg" />
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[#E21B22] font-semibold text-[12px] uppercase">
                      Food & Beverage
                    </p>
                    <p className="text-[17px] mt-3 font-[400]">
                      KFC opens another outlet in Punjab KFC opens another
                      outlet in Punjab
                    </p>
                    <div className="flex mt-3 gap-8">
                      <p className="text-[14px] font-[400]"># Beverage</p>
                      <p className="text-[14px] font-[400] text-[#504E4E]">
                      #reel stories podcast
                      </p>
                    </div>
                  </div>
                  <div className="ml-12">
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>

              <div className="shadow-md py-5 w-[587px] flex gap-5 px-2">
                <img src="./image 34 (1).png" alt="" className="rounded-lg" />
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[#E21B22] font-semibold text-[12px] uppercase">
                      Select Citywalk
                    </p>
                    <p className="text-[17px] mt-3 font-[400]">
                    FNP (Ferns N Petals) appoints Ashish Goel
                    </p>
                    <div className="flex mt-3 gap-8">
                      <p className="text-[14px] font-[400]"># Citywalk</p>
                      <p className="text-[14px] font-[400] text-[#504E4E]">
                        #reel stories podcast
                      </p>
                    </div>
                  </div>
                  <div className="ml-12">
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side">
             <h1 className="font-500 text-[20px]">
               Latest News
             </h1>
             <div className="border-2 border-red-500 w-[20px]">
             </div>

             <div>
               <img src="./Group 34615.png" className="mt-3" alt="" />
               <img src="./Group 34601.png" className="mt-3" alt="" />
             </div>

             <div className="mt-5">
               <hr />

               <div className="font-[400] text-[15px] w-[304px] font-[Inter] mt-5">
                 <h1 className="mb-3">Croma opens 58 outlets in 6, Croma retails more than 16,000</h1>
                 <p className="text-[#666666] text-[13px]">These companies created a lot of hype when they listed on the...</p>
               </div>

               <hr className="mt-5" />

               <div className="font-[400] text-[15px] w-[304px] font-[Inter] mt-5">
                 <h1 className="mb-3">Select Citywalk opens 4 new stores in June</h1>
                 <p className="text-[#666666] text-[13px]">These companies created a lot of hype when they listed on the...</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
