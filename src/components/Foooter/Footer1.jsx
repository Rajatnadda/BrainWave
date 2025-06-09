import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer1 = () => {
  const Logos = [
    FaFacebookF,
    BsTwitterX,
    FaPinterestP,
    LuInstagram,
    IoLogoYoutube,
    FaTiktok,
  ];
  const Text = [
    "Help Center",
    "Privacy and Cookies Statement",
    "About Viator",
    "Careers",
    "SiteMap",
    "Supplier Sign Up",
    "Travel Agents",
    "Become an Affilate",
    "News",
    "Viator blog",
  ];

  return (
    <div className="min-h-max bg-black px-4 md:px-10  lg:px-20 text-white">
      <div className="flex flex-wrap   items-center justify-center gap-6 py-6">
        {Logos.map((Icon, index) => (
          <Icon key={index} size={24} className="cursor-pointer" />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mt-2 text-sm text-center sm:flex-row">
        <p>
          ⭐⭐⭐⭐⭐ <span>4.4 rating | 2,64,326 reviews</span>
          <span>⭐ Trustpilot</span>
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-6  mt-10 mb-8 text-sm">
        {Text.map((Text, i) => (
          <div key={i} className="cursor-pointer ">
            {Text}
          </div>
        ))}
      </div>
      <hr />
      <div className="flex  flex-col  lg:flex-row justify-between gap-6 mt-10 mb-10 ">
        <div className="flex flex-col sm:flex-row  gap-4 items-center justify-center  ">
          <div className="border cursor-pointer flex items-center justify-center w-40  rounded-md">
            <a>
              <img src="https://cache.vtrcdn.com/orion/images/buttons/google-play-store/en/get-on-google-play.svg" />
            </a>
          </div>
          <div className="border cursor-pointer  flex items-center justify-center w-40 p-2 rounded-md">
            <a>
              <img src="https://cache.vtrcdn.com/orion/images/buttons/apple-app-store/en/download-on-app-store.svg" />
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center text-center sm:text-left">
          <p className="flex gap-0.5 items-center">
            <FaRegCopyright />
            <span> 1997-2025Viator,Inc.</span>
          </p>
          <p>Terms & Conditions</p>
          <p>How Viators Works</p>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
