import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Leaders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [researchIndex, setResearchIndex] = useState(0);

  const articles = [
    {
      title: "Top 5 iconic Apple stores across the world by design",
      description: "From a total of around 522 Apple stores across the world..",
      author: "Arundhati Roy",
      image: "./leader-1.png",
      avatar: "./avatar-1.png",
    },
    {
      title: "Rollercoaster ride of four retail industry IPOs",
      description:
        "These companies created a lot of hype when they listed on the...",
      author: "Vikram Seth",
      image: "./leader-2.png",
      avatar: "./avatar-2.png",
    },
    {
      title: "Uniqlo India’s Success Mantra: Making headway...",
      description:
        "Uniqlo, Asia’s largest fashion retailer has managed to hit..",
      author: "Jhumpa Lahiri",
      image: "./leader-3.png", // Replace with actual image URL
      avatar: "./avatar-3.png",
    },
    {
      title: "Top 5 iconic Apple stores across the world by design",
      description: "From a total of around 522 Apple stores across the world..",
      author: "Arundhati Roy",
      image: "./leader-1.png",
      avatar: "./avatar-1.png",
    },
    {
      title: "Rollercoaster ride of four retail industry IPOs",
      description:
        "These companies created a lot of hype when they listed on the...",
      author: "Vikram Seth",
      image: "./leader-2.png",
      avatar: "./avatar-2.png",
    },
    {
      title: "Uniqlo India’s Success Mantra: Making headway...",
      description:
        "Uniqlo, Asia’s largest fashion retailer has managed to hit..",
      author: "Jhumpa Lahiri",
      image: "./leader-3.png", // Replace with actual image URL
      avatar: "./avatar-3.png",
    },
    {
      title: "Top 5 iconic Apple stores across the world by design",
      description: "From a total of around 522 Apple stores across the world..",
      author: "Arundhati Roy",
      image: "./leader-1.png",
      avatar: "./avatar-1.png",
    },
    {
      title: "Rollercoaster ride of four retail industry IPOs",
      description:
        "These companies created a lot of hype when they listed on the...",
      author: "Vikram Seth",
      image: "./leader-2.png",
      avatar: "./avatar-2.png",
    },
    {
      title: "Uniqlo India’s Success Mantra: Making headway...",
      description:
        "Uniqlo, Asia’s largest fashion retailer has managed to hit..",
      author: "Jhumpa Lahiri",
      image: "./leader-3.png", // Replace with actual image URL
      avatar: "./avatar-3.png",
    },
  ];

  const research = [
    {
      title: "Human touchpoint is extremely important for us,",
      category: "Fashion",
      image: "./research-1.png",
    },
    {
      title: "US denim brand Lee opens outlets in Sikar, Patna..",
      category: "Beauty",
      image: "./research-2.png",
    },
    {
      title: "Human touchpoint is extremely important for us,",
      category: "Fashion",
      image: "./research-2.png",
    },
    {
      title: "US denim brand Lee opens outlets in Sikar, Patna..",
      category: "Beauty",
      image: "./research-1.png",
    },
    {
      title: "Human touchpoint is extremely important for us,",
      category: "Fashion",
      image: "./research-2.png",
    },
    {
      title: "US denim brand Lee opens outlets in Sikar, Patna..",
      category: "Beauty",
      image: "./research-1.png",
    },
  ];

  const totalSlides = Math.ceil(articles.length / 3);
  const researchSlides = Math.ceil(research.length / 2);
  return (
    <div className="px-12 py-6 font-[Roboto] flex space-x-5">
      <div className="w-[800px]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-400 text-[20px]">Leaders Ink</h1>
            <div className="border-2 border-red-500 w-[20px]"></div>
          </div>
          <div>
            <p className="flex items-center text-[#666666] cursor-pointer text-[14px] font-[400]">
              See more
              <span>
                <IoIosArrowForward />
              </span>
            </p>
          </div>
        </div>
        <div className="py-8">
          <div className="relative w-full max-w-full overflow-hidden rounded-lg">
            <div
              className="flex space-x-4 transition-transform duration-500 mb-5"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="w-[250px] bg-white flex-shrink-0 shadow-md rounded-lg"
                  style={{ flex: "0 0 31.53%" }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="py-3 px-2">
                    <div className="flex items-center space-x-2 text-[15px] font-[500]">
                      <img src={article.avatar} alt="" />
                      <h2 className="font-[Inter] min-w-[210px]">
                        {article.title}
                      </h2>
                    </div>
                    <p className="font-[Inter] text-[14px] text-[#666666] mt-2 min-w-[236px]">
                      {article.description}
                    </p>
                    <span className="font-[500] text-[13px] mt-2">
                      {article.author}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                  index === currentIndex ? "bg-red-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-[570px]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-400 text-[20px]">Research</h1>
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
        <div className="py-8">
          <div className="relative w-full max-w-full overflow-hidden rounded-lg">
            <div
              className="flex space-x-4 transition-transform duration-500 mb-5"
              style={{ transform: `translateX(-${researchIndex * 100}%)` }}
            >
              {research.map((article, index) => (
                <div
                  key={index}
                  className="w-[250px] bg-white flex-shrink-0 shadow-md rounded-lg"
                  style={{ flex: "0 0 48%" }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full object-cover rounded-lg"
                  />
                  <div className="p-3 py-4">
                    <div>
                      <h2 className="font-[Inter] text-[#666666] font-[400] text-[14px] w-[242px] min-w-[210px]">
                        {article.title}
                      </h2>
                    </div>
                    <div className="mt-3">
                      <span className="text-[#E21B22] font-[400] text-[14px] uppercase font-[Droid Sans]">
                        {article.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4">
            {Array.from({ length: researchSlides }).map((_, index) => (
              <div
                key={index}
                onClick={() => setResearchIndex(index)}
                className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                  index === researchIndex ? "bg-red-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
