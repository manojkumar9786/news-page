import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const trendingList = [
    {label: "Rahul Gandhi in Manipur"},
    {label: "Meta"},
    {label: "E-Commerce"},
    {label: "Fashion"},
    {label: "live cricket Score"},
    {label: "Adipurush"},
    {label: "Sushant Singh Rajputdeath case"},
    {label: "Myntra launches "},
    {label: "E-commerce"},
    {label: "E-commerce"}
]

const Trending = () => {
  return (
    <div className="px-12 my-3">
      <h1 className="font-400 text-[20px]">Trending</h1>
      <div className="border-2 border-red-500 w-[20px]"></div>

      <div className="flex space-x-2 mt-3">
      <div className="flex space-x-2">
        {
            trendingList.map((item,i)=>(
                <div key={i} className="border rounded-md px-2 py-1 font-[Inter] font-[500] text-[13px]">
                  {item.label}
                </div>
            ))
        }
      </div>

      <div className="flex space-x-2 text-[11px]">
        <div className="border rounded-md px-2 py-2 cursor-pointer">
          <IoIosArrowBack />
        </div>
        <div className="border rounded-md px-2 py-2 cursor-pointer">
          <IoIosArrowForward />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Trending;
