import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const shoppingList = [
  {
    image: "./sc-1.png",
    heading: ["Select Citywalk", "Lifestyle"],
    title: "Select Citywalk opens 4 new stores in June",
    desc: "The new stores opened at Select Citywalk include Choko la, Raymond, Looks Salon and Home Stop",
    tag: "#reel stories podcast",
  },
  {
    image: "./sc-2.png",
    heading: ["Infiniti Mall", "news"],
    title:
      "Infiniti Mall collaborates with T-Series & PVR Inox to unveil Adipurush artwork",
    desc: "Constructed by Rubik's Cubes mosaic artist Selwyn Santmajor and Nikhil from Nikhil Artwork",
    tag: "#reel stories podcast",
  },
  {
    image: "./sc-3.png",
    heading: ["Multimedia", "news"],
    title:
      "DLF creating new retail space in Delhi for France's Galeries Lafayette",
    desc: "DLF is earmarking space for the luxury retailer between two of its top-end malls, Emporio and Promenade..",
    tag: "#reel stories podcast",
  },
];

const Shopping = () => {
  return (
    <div className="px-12 py-5 flex justify-between">
      <div className="w-[926px]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-[500] text-[20px]">Fashion & Lifestyle</h1>
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

        <div className="grid grid-cols-1 gap-8 py-6">
          {shoppingList.map((fashion, i) => (
            <div className="flex space-x-8 items-center shadow-sm" key={i}>
              <img src={fashion.image} alt="" />
              <div className="flex flex-col space-y-3">
                <h1 className="flex space-x-2 font-semibold uppercase text-[16px]">
                  <span className="text-[#E21B22]">{fashion.heading[0]} </span>{" "}
                  <span>|</span>
                  <span className="text-[#999999]">{fashion.heading[1]} </span>
                </h1>
                <div className="my-2">
                  <p className="font-[Inter] font-[500] text-[16px] my-2">
                    {fashion.title}
                  </p>
                  <p className="text-[#666666] text-[14.5px] font-normal">
                    {fashion.desc}
                  </p>
                </div>

                <span className="font-normal text-[12.7px] text-[#121212] mt-2">
                  {fashion.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[345px] flex flex-col gap-16 mr-5">
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-[500] text-[20px]">
                Privilege Members Corner
              </h1>
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

          <div className="mt-5">
            <img src="./pmc.png" alt="" />
            <h1 className="mt-2 font-[500] text-[16px] font-[Inter]">
              India D2C Summit & Awards 2023 Trailblazing Brands and
              Professionals
            </h1>
          </div>
        </div>

        <div className="border py-5 px-3 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-[500] text-[20px]">Podcast</h1>
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

          <div>
             <div className="my-5 flex space-x-3">
               <img src="./poad-1.png" alt="" />
               <div className="">
                 <h1 className="text-sm font-[500]">Simplifying Retai Industry Compliance Management</h1>
                 <p className="text-[#616161] mt-2 text-[13px] font-[Inter] font-normal">TV & Film:Film Interviews</p>
               </div>
             </div>
          </div>

          <hr />

          <div>
             <div className="mt-5 mb-3 flex space-x-3">
               <img src="./poad-2.png" alt="" />
               <div className="">
                 <h1 className="text-sm font-[500]">Simplifying Retai Industry Compliance Management</h1>
                 <p className="text-[#616161] mt-2 text-[13px] font-[Inter] font-normal">TV & Film:Film Interviews</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
