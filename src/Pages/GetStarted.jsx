import React from "react";
import Logo from "../assets/TravactiveLogo.png";
import RightImage from "../assets/GetStartedImg.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight, FaUser } from "react-icons/fa";

const GetStarted = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      {/* Main Layout Container */}
      <div
        className="
          relative
          w-[1488px] h-[958px]
          top-[12px] left-[12px]
          rounded-[20px]
          opacity-100
          bg-[#F6F6F6]
          overflow-hidden
          flex flex-col lg:flex-row
          items-center
          justify-between
          px-12 lg:px-20
          py-12
          gap-12
        "
      >
        
        {/* Left side */}
       <div className="flex-1 flex flex-col items-start text-left gap-6">

        <Link
  to="/"
  className="absolute top-6 left-6 z-10"
>
  <img
    src={Logo}
    alt="Travactive Logo"
    className="w-32 h-auto cursor-pointer"
  />
</Link>

  
  {/* Heading */}
  <h2
  className="
    w-[478px] h-[36px]
    font-[Outfit]
    font-semibold
    text-[24px]
    leading-[36px]
    tracking-normal
    text-[#212322]
    opacity-100
  "
>
  Let’s Personalize Your Travel Experience
</h2>


  {/* Paragraph */}
  <p
  className="text-[rgba(51,51,51,0.72)] w-[478px] h-[72px] font-[Inter] font-medium text-[16px] leading-[24px] tracking-normal"
>
  Choose the path that fits you—whether you’re a student seeking study-abroad
  insights or a traveler exploring global updates.
</p>


  {/* Buttons Container */}
  <div
  className="
    flex flex-col
    w-[478px] h-[248px]
    gap-[24px]
    mt-4
  "
>
  <a
    href="#"
    className="
      flex items-center justify-center gap-2
      flex-1
      px-6 py-3
      bg-[#FFFFFF]
      text-[#212322]
      rounded-[8px]
      font-semibold
      shadow-[0_4px_12px_0_#0000001A]
      hover:bg-[#03504C]
      transition
    "
  >
    <FaUser />
    Join as Traveler
  </a>

  <a
    href="#"
    className="
      flex items-center justify-center gap-2
      flex-1
      px-6 py-3
      bg-[#FFFFFF]
      text-[#212322]
      rounded-[8px]
      font-semibold
      shadow-[0_4px_12px_0_#0000001A]
      hover:bg-[#FF6A45]
      transition
    "
  >
    <FaArrowRight />
    Learn More
  </a>
</div>

</div>


        {/* Right side */}
        <div className="flex-1 flex justify-center items-center mr-[-46px]">
  <img
    src={RightImage}
    alt="Get Started Illustration"
    className="
      w-[730px] h-[918px]
      rounded-[18px]
      opacity-100
      object-cover
    "
  />
</div>


      </div>
    </div>
  );
};

export default GetStarted;
