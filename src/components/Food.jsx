import React from 'react'

const foodList =[
    {
        image: "./food-1.png",
        desc: "Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China",
        tag: "#Lifestyle",
    },
    {
        image: "./food-2.png",
        desc: "Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China",
        tag: "#Lifestyle",
    },
    {
        image: "./food-3.png",
        desc: "Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China",
        tag: "#Lifestyle",
    },
    {
        image: "./food-4.png",
        desc: "Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China",
        tag: "#Lifestyle",
    },
    {
        image: "./food-5.png",
        desc: "Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China",
        tag: "#Lifestyle",
    },
]

const Food = () => {
  return (
    <div className='px-12 pb-5'>
      <h1 className="font-400 text-[20px]">Food & Beverage</h1>
      <div className="border-2 border-red-500 w-[20px]"></div>


      <div className='flex space-x-6 p-2 mt-5'>
        {
            foodList.map((item)=>(
                <div>
                   <img src={item.image} className='rounded-tr-lg rounded-tl-lg' alt="" />
                   <div className='border px-1 text-[#666666] space-y-3 text-sm py-3'>
                      <p className='w-[230px]'>{item.desc}</p>
                      <div className='mt-3 font-normal text-xs'>
                        <span className=''>{item.tag}</span>
                      </div>
                      </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Food
