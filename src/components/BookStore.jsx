import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const imageList = [
  {
    image: "./img-1.png",
    title: "Unwrapping the Archies reinvention plan",
    desc: "The Middle East Retail Forum (MRF) is a powerful ",
    date: "Wed, 09 Aug 2023",
    location: "Barkha Dutt",
  },
  {
    image: "./img-2.png",
    title: "India Food Forum",
    desc: "The aisles are open at india's most powerfulfood b2b",
    date: "Wed, 09 Aug 2023",
    location: "Barkha Dutt",
  },
  {
    image: "./img-3.png",
    title: "Phygital Retail Convention",
    desc: "India's Largest Retail Intelligence Event",
    date: "Wed, 09 Aug 2023",
    location: "Barkha Dutt",
  },
  {
    image: "./img-4.png",
    title: "India Food Forum",
    desc: "Mobile commerce has become a worldwide phenomenon",
    date: "Wed, 09 Aug 2023",
    location: "Barkha Dutt",
  },
  {
    image: "./img-5.png",
    title: "India Fashion Forum",
    desc: "Launched in 2000, India Fashion Forum (IFF) is India's largest ",
    date: "Wed, 09 Aug 2023",
    location: "Barkha Dutt",
  },
  {
    image: "./img-6.png",
    title: "Shopping Centres Next",
    desc: "Shopping Centres Next is India's most differentiated",
    date: "Wed, 09 Aug 2023",
    location: "Barkha Dutt",
  },
];

const bookList = [
    {
        image: "./book-1.png",
        title: "Progressive Grocer - June 2023"
    },
    {
        image: "./book-2.png",
        title: "Images Business Of Fashion June 2023"
    },
    {
        image: "./book-3.png",
        title: "Shopping Centre News - May 2023"
    },
    {
        image: "./book-4.png",
        title: "Phygital May-June 2023"
    },
    {
        image: "./book-5.png",
        title: "Progressive Grocer - June 2023"
    },
]

const BookStore = () => {
  return (
    <div className="px-12 py-5 bg-[#FBFBFD]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-[500] text-[21px]">Images Group Events</h1>
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

      <div className="py-8 flex gap-8">
        <div>
          <img src="./image.png" alt="" />

          <div className="mt-5 w-[430px]">
            <span className="uppercase text-[#E21B22] font-semibold text-[13.5px]">
              Technology
            </span>
            <div className="flex items-center space-x-3">
              <h1 className="font-[500] font-[Inter] text-[20.4px]">
                D2C India
              </h1>
              <span className="flex items-center space-x-2 text-[#8B8B8B] mt-1 text-[10px] font-normal font-[Inter]">
                <FaCalendar className="mb-1" />
                <p>Wed, 09 Aug 2023</p>
                <span>|</span>
                <IoLocationSharp className="mb-1" />
                <p>Barkha Dutt</p>
              </span>
            </div>
            <p className="font-[Inter] font-normal text-[15px] text-[#666666]">
              Get inspired building brands for the next decade of consumption
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {imageList.map((item) => (
            <div className="bg-white border rounded-lg p-3 flex leading-5 space-x-6">
              <div className="bg-[#F8F8F8] p-5 w-[135px] flex justify-center items-center">
                <img src={item.image} alt="" />
              </div>
              <div>
                <h1 className="font-[Inter] font-medium text-[16px]">
                  {item.title}
                </h1>
                <p className="font-normal text-[13px] mt-2">{item.desc}</p>
                <span className="flex items-center space-x-2 text-[#8B8B8B] mt-1 text-[10px] font-normal font-[Inter]">
                  <FaCalendar />
                  <p>{item.date}</p>
                  <span>|</span>
                  <IoLocationSharp />
                  <p>{item.location}</p>
                </span>

                <p className="inline-flex items-center mt-3 text-[#E21B22] font-bold text-[10px]">
                  Registration Now <IoIosArrowForward />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Store */}

      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-[500] text-[21px]">Book Store</h1>
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


        <div className="flex gap-8 mt-5">
        {
            bookList.map((book)=>(
                <div className="border rounded-lg p-2 w-[258px]">
                   <img src={book.image} alt="" />
                   <p className="w-[235px] font-[Inter] font-normal mt-2 text-[17px]">{book.title}</p>
                </div>
            ))
           }
        </div>
      </div>
    </div>
  );
};

export default BookStore;
