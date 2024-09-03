import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const fashionList = [
  {
    image: "./fs-1.png",
    heading: ["fashion", "food"],
    title: "What makes Fila unique is its attitude and...",
    desc: "The singer-songwriter has been spotted in the hybrid garment...",
    tag: "#Fashion",
  },
  {
    image: "./fs-2.png",
    heading: ["siddhant", "fashion"],
    title: "What makes Fila unique is its attitude and...",
    desc: "The singer-songwriter has been spotted in the hybrid garment...",
    tag: "#Fashion",
  },
  {
    image: "./fs-3.png",
    heading: ["siddhant", "fashion"],
    title: "What makes Fila unique is its attitude and...",
    desc: "The singer-songwriter has been spotted in the hybrid garment...",
    tag: "#Fashion",
  },
  {
    image: "./fs-4.png",
    heading: ["fashion", "food"],
    title: "What makes Fila unique is its attitude and...",
    desc: "The singer-songwriter has been spotted in the hybrid garment...",
    tag: "#Fashion",
  },
  {
    image: "./fs-5.png",
    heading: ["fashion", "food"],
    title: "What makes Fila unique is its attitude and...",
    desc: "The singer-songwriter has been spotted in the hybrid garment...",
    tag: "#Fashion",
  },
  {
    image: "./fs-6.png",
    heading: ["fashion", "food"],
    title: "What makes Fila unique is its attitude and...",
    desc: "The singer-songwriter has been spotted in the hybrid garment...",
    tag: "#fashion",
  },
];

const beautyList = [
  {
    heading:["beauty", "news"],
    image: "./b-1.png",
    desc: "Sugar Cosmetics unveils its 200th brand-owned store"
  },
  {
    heading:["beauty", "news"],
    image: "./b-2.png",
    desc: "Sugar Cosmetics unveils its 200th brand-owned store"
  },
  {
    heading:["beauty", "news"],
    image: "./b-3.png",
    desc: "Sugar Cosmetics unveils its 200th brand-owned store"
  },
  {
    heading:["beauty", "news"],
    image: "./b-4.png",
    desc: "Sugar Cosmetics unveils its 200th brand-owned store"
  },
  {
    heading:["beauty", "news"],
    image: "./b-5.png",
    desc: "Sugar Cosmetics unveils its 200th brand-owned store"
  }
]

const Fashion = () => {
  return (
    <div className="px-12 pt-10">
      <div className="flex items-center justify-center">
        <img src="./fashion.png" alt="" />
      </div>

      <div className="py-10 flex space-x-8">
        <div className="w-[1010px]">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-[500] text-[18px]">Fashion & Lifestyle</h1>
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

          <div className="grid grid-cols-2 gap-12 py-6">
            {fashionList.map((fashion, i) => (
              <div className="flex space-x-4 shadow-sm" key={i}>
                <img src={fashion.image} alt="" />
                <div>
                  <h1 className="flex space-x-2 font-semibold uppercase text-sm">
                    <span className="text-[#E21B22]">
                      {fashion.heading[0]}{" "}
                    </span>{" "}
                    <span>|</span>
                    <span className="text-[#999999]">
                      {fashion.heading[1]}{" "}
                    </span>
                  </h1>
                  <div className="w-[257px] my-2">
                    <p className="font-[Inter] font-[500] text-sm my-2">
                      {fashion.title}
                    </p>
                    <p className="text-[#666666] text-[13px] font-normal">
                      {fashion.desc}
                    </p>
                  </div>

                  <span className="font-normal text-[12px] mt-2">
                    {fashion.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[320px]">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-[500] text-[18px]">Beauty & Wellness</h1>
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
              beautyList.map((beauty)=>(
                <div className="border-t p-1 px-2">
                <h1 className="flex space-x-2 font-semibold uppercase text-[13px]">
                    <span className="text-[#E21B22]">
                      {beauty.heading[0]}{" "}
                    </span>{" "}
                    <span>|</span>
                    <span className="text-[#999999]">
                      {beauty.heading[1]}{" "}
                    </span>
                  </h1>

                  <div className="flex space-x-5">
                     <img src={beauty.image} className="my-2" alt="" />
                     <p className="font-[500] text-sm w-[178px]">{beauty.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
