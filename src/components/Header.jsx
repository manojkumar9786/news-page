import React from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src="./Group 34169.png" alt="" className="w-[970px] h-[250px]" />
      </div>

      <div className="px-12 flex justify-between items-center mt-10">
        <div className="flex justify-center items-center text-[#B0B0B0] gap-2 font-[Roboto] text-[14px]">
          <CiSearch size={20} />
          <input
            type="search"
            placeholder="Search here"
            className="border-none outline-none"
            name=""
            id=""
          />
        </div>
        <div>
          <img src="./indiaretail-logo-23 1.png" alt="" />
        </div>
        <div className="text-[10px] font-bold flex gap-2">
          <button className="bg-red-600 text-white px-3 py-2">SUBSCRIBE</button>
          <button className="border-gray-200 px-3 py-2 border">SIGN IN</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
