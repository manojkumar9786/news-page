import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const foodList =[
    {
        image: "./cs-1.png",
        desc: "Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China",
        tag: "#Fashion",
    },
    {
        image: "./cs-2.png",
        desc: "‘Simplifying Compliance Management for the Retail...",
        tag: "#Fashion",
    },
    {
        image: "./cs-3.png",
        desc: "‘Doubling Retailers’ Incomes Through Focus On...",
        tag: "#Lifestyle",
    },
]


const photo = [
    {
      title: "Human touchpoint is extremely important for us,",
      tag: "#Lifestyle",
      image: "./ps-1.png",
    },
    {
      title: "US denim brand Lee opens outlets in Sikar, Patna..",
      tag: "#Lifestyle",
      image: "./ps-2.png",
    },
    {
      title: "Human touchpoint is extremely important for us,",
      tag: "#Lifestyle",
      image: "./ps-1.png",
    },
    {
      title: "US denim brand Lee opens outlets in Sikar, Patna..",
      tag: "#Lifestyle",
      image: "./ps-2.png",
    },
    {
      title: "Human touchpoint is extremely important for us,",
      tag: "#Lifestyle",
      image: "./ps-1.png",
    },
    {
      title: "US denim brand Lee opens outlets in Sikar, Patna..",
      tag: "#Lifestyle",
      image: "./ps-2.png",
    },
  ];



const CaseStudy = () => {
    const [photoIndex, setPhotoIndex] = useState(0);


    const photoSlides = Math.ceil(photo.length / 2);

  return (
    <div className="px-12 py-5 flex space-x-10">
      <div className="w-[795px]">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-[500] text-[21px]">Case Studies</h1>
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
          {foodList.map((item) => (
            <div>
              <img
                src={item.image}
                className="rounded-tr-lg rounded-tl-lg"
                alt=""
              />
              <div className="border px-1 text-[#666666] space-y-3 text-sm py-3">
                <p className="w-[230px]">{item.desc}</p>
                <div className="mt-3 font-normal text-xs">
                  <span className="">{item.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[580px]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-[500] text-[21px]">Photo Essays</h1>
            <div className="border-2 border-red-500 w-[20px]"></div>
          </div>
          <div>
            <p className="flex items-center text-[#666666] text-[14px] cursor-pointer font-[400]">
              See more
              <span>
                <IoIosArrowForward />
              </span>
            </p>
          </div>
        </div>
        <div className="">
          <div className="w-full max-w-full overflow-hidden rounded-lg">
            <div
              className="flex space-x-3 transition-transform duration-500 pt-6"
              style={{ transform: `translateX(-${photoIndex * 100}%)` }}
            >
              {photo.map((article, index) => (
                <div style={{ flex: "0 0 48%" }} key={index}>
              <img
                src={article.image}
                className="rounded-tr-lg rounded-tl-lg"
                alt=""
              />
              <div className="border px-1 w-[252px] text-[#666666] space-y-3 text-sm py-3">
                <p className="w-[230px]">{article.title}</p>
                <div className="mt-3 font-normal text-xs">
                  <span className="">{article.tag}</span>
                </div>
              </div>
            </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            {Array.from({ length: photoSlides }).map((_, index) => (
              <div
                key={index}
                onClick={() => setPhotoIndex(index)}
                className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                  index === photoIndex ? "bg-red-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
