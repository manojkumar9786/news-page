import React from 'react'

import Layout from '../layout/Layout';


const ecommerceList = [
  {
    image: "./e-1.png",
    heading: ["fashion", "Taylor Swift"],
    title: "Why retailers can’t afford to ignore composable",
    desc: "Composable commerce opens new avenues for brands to thrive...",
    tag: "#fashion",
  },
  {
    image: "./e-2.png",
    heading: ["siddhant", "Taylor Swift"],
    title: "ONDC has completely automated grievance ",
    desc: "ONDC is also enabling an online resolution mechanism apart...",
    tag: "#fashion",
  },
  {
    image: "./e-3.png",
    heading: ["siddhant", "Taylor Swift"],
    title: "Shiprocket seller app integrates with ONDC  ",
    desc: "Shiprocket plans to enable five key categories on ONDC...",
    tag: "#fashion",
  },
];



const peopelList = [
  {
    image: "./people-1.png",
    heading: ["fashion", "Taylor Swift"],
    title: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
    desc: "IndiaRetailing brings you a series in which we highlight...",
    tag: "#fashion",
  },
  {
    image: "./people-2.png",
    heading: ["siddhant", "Taylor Swift"],
    title: "Zouk marries heritage with functionality",
    desc: "IndiaRetailing brings you a series in which we highlight...",
    tag: "#fashion",
  },
  {
    image: "./people-3.png",
    heading: ["siddhant", "Taylor Swift"],
    title: "FNP (Ferns N Petals) appoints Ashish Goel as...",
    desc: "Goel will spearhead the company's technological..",
    tag: "#fashion",
  },
];



const d2cList = [
  {
    image: "./d-1.png",
    heading: ["fashion", "Taylor Swift"],
    title: "The D2C growth story",
    desc: "According to reports in Q2 2022, Indian D2C startups...",
    tag: "#fashion",
  },
  {
    image: "./d-2.png",
    heading: ["siddhant", "Taylor Swift"],
    title: "D2C brand Koparo onboards Mira Kapoor as brand ",
    desc: "The singer-songwriter has been spotted in the hybrid garment...",
    tag: "#fashion",
  },
  {
    image: "./d-3.png",
    heading: ["siddhant", "Taylor Swift"],
    title: "India D2C Summit & Awards 2023 Honours..",
    desc: "House of Chikankari, Plum Goodness, Accessorize London..",
    tag: "#fashion",
  },
];

const Ecommerce = () => {
  return (
    <div className='px-12 flex space-x-10 pb-10'>
    
      <Layout title={"E-Commerce"} data={ecommerceList} border />



      <Layout title={"People"} data={peopelList} border/>
      

      <Layout title={"D2C remove Buzz"} data={d2cList} border />

        
    </div>
  )
}

export default Ecommerce
