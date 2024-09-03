import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGooglenews } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="border-t-2 px-14 py-10">
      <div className="flex space-x-16">
      <div className="text-[#77808B]">
        <img
          src="./indiaretail-logo-23 1.png"
          className="w-[200px] h-[66px]"
          alt=""
        />
        <div className="font-normal text-[14.5px]">
          <h2 className="font-bold">New delhi</h2>
          <p>
            Images Multimedia Ltd. <br /> S-61 A, Pocket S, Okhla Phase II,
            Okhla Industrial <br /> Estate, New Delhi, Delhi 110020 <br />
            Images Multimedia Ltd.
          </p>
        </div>
        <div className="mt-2 text-[14.5px]">
          <h2 className="font-bold">Mumbai</h2>
          <p>
            E 519, Floral Deck Plaza <br />
            Central MIDC Road, Opp. SEEPZ. <br />
            Andheri (East) <br />
            Mumbai 400093
          </p>
        </div>

        <div className="text-[16px] text-[#77808B] my-4">
          <h2 className="text-[#3B4857] font-bold font-[Raleway]">content us</h2>

          <div className="mt-1">
             <p className="flex items-center space-x-2"><span><HiOutlinePhone className="mr-2" /></span>+91-9867355551</p>
             <p className="flex items-center space-x-2"><span><CiMail className="mr-1" /></span>editor@indiaretailing.com</p>
          </div>

          <div className="my-3">
             <h2 className="font-bold font-[Raleway] text-[16px] text-[#3B4857]">Our Social Media</h2>
             <div className="flex mt-6 gap-3">
               <div className="border-2 border-[#DAE1EA] p-2 text-[#E21B22] rounded-full">
                  <FaFacebookF />
               </div>
               <div className="border-2 border-[#DAE1EA] p-2 text-[#E21B22] rounded-full">
                  <FaLinkedinIn />
               </div>
               <div className="border-2 border-[#DAE1EA] p-2 text-[#E21B22] rounded-full">
                  <FaYoutube />
               </div>
               <div className="border-2 border-[#DAE1EA] p-2 text-[#E21B22] rounded-full">
                  <FaInstagram />
               </div>
               <div className="border-2 border-[#DAE1EA] p-2 text-[#E21B22] rounded-full">
                  <SiGooglenews />
               </div>
             </div>
          </div>

          <div className="font-[Raleway] text-[16px] font-bold text-[#3B4857] my-5">
             <h2>Download Indiaretailing App</h2>

             <div className="mt-5 flex gap-3">
               <img src="./pay.png" alt="" />
               <img src="./apple.png" alt="" />
             </div>
          </div>
        </div>
      </div>

      <div className="my-6 w-full flex flex-col space-y-12">
          <div className="text-[#77808B] font-[500] text-[16px] flex justify-between">
              <div className="w-[181px]">
                <h2 className="text-[#3B4857] font-bold">About us</h2>
                <ul className="mt-8 space-y-5">
                  <li>IndiaRetailing.com</li>
                  <li>Meet the team</li>
                  <li>Advertise with us</li>
                  <li>Contact us</li>
                </ul>
              </div>

              <div className="w-[183px]">
                <h2 className="text-[#3B4857] font-bold">Categories</h2>
                <ul className="mt-8 space-y-5">
                  <li>Fashion & Lifestyle</li>
                  <li>Beauty & Wellness</li>
                  <li>Food & Beverage</li>
                  <li>Consumer Durables & IT</li>
                  <li>Entertainment</li>
                  <li>Home Décor & Furnishing</li>
                  <li>Specialty Retail</li>
                </ul>
              </div>

              <div className="w-[189px]">
                <h2 className="text-[#3B4857] font-bold">Features</h2>
                <ul className="mt-8 space-y-4">
                  <li>Leaders Ink</li>
                  <li>People</li>
                  <li>Finance & Funding </li>
                  <li>D2C</li>
                  <li>Shopping Centers</li>
                  <li>Results</li>
                  <li>Research</li>
                  <li>Case Studies</li>
                </ul>
              </div>

              <div className="w-[201px]">
                <h2 className="text-[#3B4857] font-bold">Events</h2>
                <ul className="mt-8 space-y-5">
                  <li>India Food Forum</li>
                  <li>Shopping Centre Next</li>
                  <li>Phygital Retail Convention</li>
                  <li>India D2C Summit & Awards</li>
                  <li>Internet Commerce Summit</li>
                </ul>
              </div>
          </div>

          <div className="text-[#77808B] font-[500] text-[16px] flex justify-between">
              <div className="w-[181px]">
                <h2 className="text-[#3B4857] font-bold">Bookstore</h2>
                <ul className="mt-8 space-y-5">
                  <li>Magazines</li>
                  <li>Yearbooks</li>
                  <li>Other publications</li>
                </ul>
              </div>

              <div className="w-[183px]">
                <h2 className="text-[#3B4857] font-bold">Videos</h2>
                <ul className="mt-8 space-y-5">
                  <li>Retail with Rasul Bailay</li>
                  <li>The Store</li>
                  <li>IR Studio</li>
                </ul>
              </div>

              <div className="w-[189px]">
                <h2 className="text-[#3B4857] font-bold">IR Prime Subscription Box</h2>
                <ul className="mt-8 space-y-5">
                   <li>Lorem ipsum </li>
                   <li>Lorem ipsum </li>
                   <li>Lorem ipsum </li>
                   <li>Lorem ipsum </li>
                </ul>
              </div>

              <div className="w-[201px]">
                <h2 className="text-[#3B4857] font-bold">Retail Functions</h2>
                <ul className="mt-8 space-y-5">
                  <li>Marketing</li>
                  <li>Technology</li>
                  <li>Operations</li>
                  <li>HR</li>
                  <li>Supply Chain</li>
                </ul>
              </div>
          </div>
      </div>
      </div>
      
      <div className="px-10">
        <hr className="h-[2px] border bg-[#CFD3D7]" />
      </div>

      <div className="text-center pt-4 font-[Inter] font-normal text-[17px] text-[#747E98]">
        <p>Copyright © 2023 Indiaretailing.com. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
