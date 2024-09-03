import React from 'react'
import Layout from '../layout/Layout';
import { IoIosArrowForward } from "react-icons/io";

const supplyChainList = [
  {
    image: "./s-1.png",
    heading: ["fashion", "Taylor Swift"],
    title: "Ecom Express appoints Ajay Chitkara as...",
    desc: "Chitkara, who is at present serving as...",
    tag: "#fashion",
  },
  {
    image: "./s-2.png",
    heading: ["siddhant", "Taylor Swift"],
    title: "DTDC sets up super hub in...",
    desc: "Spread over 1,75,000 square feet of space...",
    tag: "#fashion",
  },
  {
    image: "./s-3.png",
    heading: ["Lifestyle", "BTS"],
    title: "KSH Distriparks bolsters its fleet with...",
    desc: "With the addition of new vehicles, the...",
    tag: "#fashion",
  },
];


const marketingChainList = [
  {
    image: "./m-1.png",
    heading: ["fashion", "Taylor Swift"],
    title: "Voyage Eyewear collaborates with actor...",
    desc: "During the 3-month partnership, both parties will...",
    tag: "#fashion",
  },
  {
    image: "./m-2.png",
    heading: ["siddhant", "Taylor Swift"],
    title: "From Yogathons to special offers, here's a quick...",
    desc: "The singer-songwriter has been spotted in the hybrid garment...",
    tag: "#fashion",
  },
  {
    image: "./m-3.png",
    heading: ["siddhant", "Taylor Swift"],
    title: "Malabar Gold & Diamonds ropes...",
    desc: "Signing NTR Jr, who starred in RRR,...",
    tag: "#fashion",
  },
];


const technologyList = [
  {
    heading:["finance", "news"],
    image: "./tech-1.png",
    desc: "PE firm Carlyle offloads entire, Carlyle through its special-purpose "
  },
  {
    heading:["funding", "news"],
    image: "./tech-2.png",
    desc: "B2B managed marketplace The Yarn, The investment was.."
  },
  {
    heading:["funding", "news"],
    image: "./tech-3.png",
    desc: "Sequoia Capital exits Go Fashion, US-based Sequoia Capital."
  },
  {
    heading:["funding", "news"],
    image: "./tech-4.png",
    desc: "Shilpa Shetty Kundra invests, Kisankonnect is at Rs 120 crore"
  },
  
]

const SupplyChain = () => {
  return (
    <div className='px-12 pt-4'>
    <div className="flex items-center justify-center">
        <img src="./supply-chain.png" alt="" />
      </div>



      <div className='my-8 flex space-x-10 justify-center'>
         <Layout title={"Supply Chain"} data={supplyChainList} />
         <Layout  title={"Marketing"} data={marketingChainList}/>

         <div className="w-[400px] py-2">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-[500] text-[18px]">Technology</h1>
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

          <div className="mt-4 border border-t-0 rounded-lg">
            {
              technologyList.map((tech)=>(
                <div className="border-t p-1 px-2">
                <h1 className="flex space-x-2 font-semibold uppercase text-[13px]">
                    <span className="text-[#E21B22]">
                      {tech.heading[0]}{" "}
                    </span>{" "}
                    <span>|</span>
                    <span className="text-[#999999]">
                      {tech.heading[1]}{" "}
                    </span>
                  </h1>

                  <div className="flex space-x-5">
                     <img src={tech.image} className="my-2" alt="" />
                     <p className="font-[500] text-sm w-[178px]">{tech.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplyChain
