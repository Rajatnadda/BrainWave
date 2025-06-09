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
    <div className="min-h-max bg-black px-20 ">
      <div className="flex  items-center justify-center gap-15 p-10">
        {Logos.map((Icon, index) => (
          <Icon key={index} size={24} className="cursor-pointer" />
        ))}
      </div>
      <div className="flex items-center justify-center gap-1 mt-2">
        <p>
          ⭐⭐⭐⭐⭐ <span>4.4 rating | 2,64,326 reviews</span>
          <span>⭐ Trustpilot</span>
        </p>
      </div>
      <div className="grid grid-cols-4 gap-12  mt-10 mb-8">
        {Text.map((Text, i) => (
          <div key={i} className="cursor-pointer ">
            {Text}
          </div>
        ))}
      </div>
      <hr />
      <div className="flex justify-between mt-10">
        <div className="flex flex-row gap-4 justify-center  ">
          <div className="border-2 cursor-pointer flex items-center justify-center w-40">
            <a>
              <img src="https://cache.vtrcdn.com/orion/images/buttons/google-play-store/en/get-on-google-play.svg" />
            </a>
          </div>
          <div className="border-2 cursor-pointer  flex items-center justify-center w-40 ">
            <a>
              <img src="https://cache.vtrcdn.com/orion/images/buttons/apple-app-store/en/download-on-app-store.svg" />
            </a>
          </div>
        </div>
        <div className="flex gap-4 items-center">
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
