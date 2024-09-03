import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const reconnectList =[
    {
        image: "./r-1.png",
        title: "Arvind Fashions’ data-driven digital transformation",
        desc: "In 2018, Uniqlo sent Tomohiko Sei to India to spearhead its entry..",
        tag: "#Lifestyle",
    },
    {
        image: "./r-2.png",
        title: "US denim brand Lee opens outlets in Sikar, Patna..",
        desc: "So far Ace Turtle has opened 80 Lee and Wrangler franchisee-stores ",
        tag: "#Lifestyle",
    },
    {
        image: "./r-3.png",
        title: "Arvind Fashions' data-driven digital transformation",
        desc: "In 2018, Uniqlo sent Tomohiko Sei to India to spearhead its entry..",
        tag: "#Lifestyle",
    },
    {
        image: "./r-4.png",
        title: "US denim brand Lee opens outlets in Sikar, Patna..",
        desc: "So far Ace Turtle has opened 80 Lee and Wrangler franchisee-stores ",
        tag: "#Lifestyle",
    },
]

const Reconnect = () => {
  return (
    <div className='px-12 py-4'>
         <div className='flex justify-between'>
         <div className="w-[1040px]">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-[500] text-[21px]">Reconnect</h1>
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

        <div className="flex space-x-6 p-2 mt-5">
          {reconnectList.map((item) => (
            <div>
              <img
                src={item.image}
                className="rounded-tr-lg rounded-tl-lg"
                alt=""
              />
              <div className="border px-1 text-[#666666] space-y-3 text-sm py-3">
                <h1 className='font-[Inter] font-normal text-[16px]'>{item.title}</h1>
                <p className="w-[230px] font-[Inter] font-normal text-[13px] text-[#666666]">{item.desc}</p>
                <div className="mt-3 font-normal text-xs">
                  <span className="">{item.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
         </div>

         <div className='mt-10'>
            <img src="./reco.png" alt="" />
         </div>
         </div>


         <div className='flex flex-col justify-center items-center my-16'>
           <p className='font-medium text-xs text-[#222222]'>- Advertisement -</p>
           <img src="./supply-chain.png" alt="" />
         </div>
    </div>
  )
}

export default Reconnect
