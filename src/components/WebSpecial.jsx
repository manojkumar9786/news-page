import React from "react";
import { FaCircleDot } from "react-icons/fa6";

const WebSpecial = () => {
  return (
    <div className="border-t-4 py-5 border-gray-300 px-12">
      <h1 className="font-400 text-[20px]">Web Specials</h1>
      <div className="border-2 border-red-500 w-[20px]"></div>

      <div className="flex space-x-3">
        <div className="w-[996px]">
          <div className="mt-5 flex space-x-8">
            <div className="relative">
              <img src="./web.png" className="" alt="" />
            </div>

            <div className="border-l border-r">
              <ul>
                <li className="flex items-center font-[Inter] font-[400] text-[16px] space-x-3 border-b px-4 py-3">
                  <FaCircleDot size={8} className="text-red-700" />
                  <p>Cinema industry welcomes lowering GST rates</p>
                </li>
                <li className="flex items-center font-[Inter] font-[400] text-[16px] space-x-3 border-b px-4 py-3">
                  <FaCircleDot size={8} className="text-red-700" />
                  <p>Patanjali Ayurved to sell 7% stake in Patanjali</p>
                </li>
                <li className="flex items-center font-[Inter] font-[400] text-[16px] space-x-3 border-b px-4 py-3">
                  <FaCircleDot size={8} className="text-red-700" />
                  <p>Select Citywalk opens 4 new stores in June</p>
                </li>
                <li className="flex items-center font-[Inter] font-[400] text-[16px] space-x-3 border-b px-4 py-3">
                  <FaCircleDot size={8} className="text-red-700" />
                  <p>Govt imposes import restrictions on certain gold </p>
                </li>
                <li className="flex items-center font-[Inter] font-[400] text-[16px] space-x-3 border-b px-4 py-2">
                  <FaCircleDot size={8} className="text-red-700" />
                  <p>Joom Marketplace offers a global window for sellers</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 py-3 mt-5">
             <ul className="flex items-center space-x-3">
             <li className="flex font-[Inter] font-[400] border-r-2 text-[16px] space-x-3 p-2">
                  <FaCircleDot size={8} className="text-red-700 mt-2" />
                  <p>B2B managed marketplace The Yarn</p>
                </li>
                <li className="flex font-[Inter] font-[400] border-r-2 text-[16px] space-x-3 p-2">
                  <FaCircleDot size={8} className="text-red-700 mt-2" />
                  <p>Sequoia Capital exits Go Fashion</p>
                </li>
                <li className="flex font-[Inter] font-[400] border-r-2 text-[16px] space-x-3 p-2">
                  <FaCircleDot size={8} className="text-red-700 mt-2" />
                  <p>B2B managed marketplace The Yarn</p>
                </li>
                <li className="flex font-[Inter] font-[400] border-r-2 text-[16px] space-x-3 p-2">
                  <FaCircleDot size={8} className="text-red-700 mt-2" />
                  <p>Sequoia Capital exits Go Fashion</p>
                </li>
             </ul>
          </div>
        </div>

        <div>
           <img src="./Group 34385.png" alt="" />
        </div>
      </div>


      <div className="mt-5 flex space-x-6 px-3">
         <div>
            <img src="./web-1.png" alt="" />
            <p className="w-[245px] font-[500] text-[14px] mt-3 font-[Inter]">Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
         </div>
         <div>
            <img src="./web-2.png" alt="" />
            <p className="w-[245px] font-[500] text-[14px] mt-3 font-[Inter]">Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
         </div>
         <div>
            <img src="./web-3.png" alt="" />
            <p className="w-[245px] font-[500] text-[14px] mt-3 font-[Inter]">Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
         </div>
         <div>
            <img src="./web-4.png" alt="" />
            <p className="w-[245px] font-[500] text-[14px] mt-3 font-[Inter]">Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
         </div>
         <div>
            <img src="./web-5.png" alt="" />
            <p className="w-[245px] font-[500] text-[14px] mt-3 font-[Inter]">Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
         </div>
      </div>
    </div>
  );
};

export default WebSpecial;
