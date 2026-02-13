import React, { useState } from "react";
import Calender from "../../Components/MyCalender.jsx";
import VisitCan from "../../assets/VisitCan.png";
import NewsCard from "../../Components/NewsCard.jsx";
import Checked from "../../assets/VectorMark.png";
import { Search, Bell, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const overviewData = [
  {
    id: 1,
    img: VisitCan,
    heading: "Visit Santorini, Greece",
    description: (
      <>
        Surrounded by turquoise water, the Island is cluttered with
        multi-colored cliffs, hot-headed volcanoes, and acres of sun-toasted
        sand. Adding to the marvels of nature are the ancient relics, delectable
        cuisine and{" "}
        <span className="text-red-500 italic cursor-pointer">read more</span>
      </>
    ),
    status: "Actively Open",
  },
  {
    id: 2,
    img: VisitCan,
    heading: "Visit Santorini, Greece",
    description: (
      <>
        Surrounded by turquoise water, the Island is cluttered with
        multi-colored cliffs, hot-headed volcanoes, and acres of sun-toasted
        sand. Adding to the marvels of nature are the ancient relics, delectable
        cuisine and{" "}
        <span className="text-red-500 italic cursor-pointer">read more</span>
      </>
    ),
    status: "Actively Open",
  },
  {
    id: 3,
    img: VisitCan,
    heading: "Visit Santorini, Greece",
    description: (
      <>
        Surrounded by turquoise water, the Island is cluttered with
        multi-colored cliffs, hot-headed volcanoes, and acres of sun-toasted
        sand. Adding to the marvels of nature are the ancient relics, delectable
        cuisine and{" "}
        <span className="text-red-500 italic cursor-pointer">read more</span>
      </>
    ),
    status: "Actively Open",
  },
];

export default function TravExplore() {
  const buttonStyle = `
    w-[236px]
    h-[44px]
    opacity-100
    flex
    items-center
    justify-between
    rounded-[12px]
    px-[20px]
    py-[13.5px]
    border border-gray-200
    bg-white
    text-[12px]
  `;

  return (
    <>
      <div>
        <div className="w-[752px] h-[132px] flex gap-[22px]">
          {/* ===== FIRST CONTAINER ===== */}
          <div className="flex flex-1 h-full">
            {/* Left Small Div (Yellow) */}
            <div
              className="
      w-[52px]
      h-full
      pt-[20px] pr-[4px] pb-[20px] pl-[4px]
      rounded-tl-[12px] rounded-bl-[12px]
      bg-[#FFDE59]
      flex flex-col items-center justify-center
      text-[12px] font-semibold
    "
            >
              <span
                className="
    w-[43px]
    h-[19px]
    font-semibold
    text-[16px]
    leading-[100%]
    tracking-[0px]
    text-center
    flex items-center justify-center
  "
              >
                2025
              </span>
              <hr className="w-full border-black my-1" />
              <span
                className="
    w-[43px]
    h-[17px]
    font-semibold
    text-[14px]
    leading-[100%]
    tracking-[0px]
    text-center
    flex items-center justify-center
  "
              >
                Aug
              </span>
              <span>30</span>
            </div>

            {/* Right Content Div */}
            <div
              className="
      flex-1
      h-full
      bg-white
      rounded-tr-[12px] rounded-br-[12px]
      flex flex-col justify-center
      px-6
      shadow
    "
            >
              <h3
                className="w-[92px] h-[12px] 
  font-inter font-semibold text-[10px] leading-[100%] tracking-[0px] 
  text-[#005A58] opacity-100"
              >
                Upcoming Seminar
              </h3>

              <p
                className="w-[281px] h-[63px]
  font-inter font-normal text-[14px] leading-[21px] tracking-[0px]
  align-middle
  text-[#333333B8] opacity-100"
              >
                International Conference on Latest Advancements in Science,
                Management, Commerce & Educational Research
              </p>

              <div className="flex items-center gap-2 mt-3 text-sm text-[#005A58]">
                <MapPin size={12} />
                <span
                  className="w-[79px] h-[12px]
  font-inter font-normal text-[10px] leading-[100%] tracking-[0px]
  align-middle
  text-[#005A58] opacity-100"
                >
                  Toronto, Canada
                </span>
              </div>
            </div>
          </div>

          {/* ===== SECOND CONTAINER ===== */}
          <div className="flex flex-1 h-full">
            {/* Left Small Div (Green) */}
            <div
              className="
      w-[52px]
      h-full
      pt-[20px] pr-[4px] pb-[20px] pl-[4px]
      rounded-tl-[12px] rounded-bl-[12px]
      bg-[#03B5AA]
      flex flex-col items-center justify-center
      text-[12px] font-semibold
      text-white
    "
            >
              <span
                className="
    w-[43px]
    h-[19px]
    font-semibold
    text-[16px]
    leading-[100%]
    tracking-[0px]
    text-center
    flex items-center justify-center
  "
              >
                2025
              </span>
              <hr className="w-full border-white my-1" />
              <span
                className="
    w-[43px]
    h-[17px]
    font-semibold
    text-[14px]
    leading-[100%]
    tracking-[0px]
    text-center
    flex items-center justify-center
  "
              >
                Aug
              </span>
              <span>30</span>
            </div>

            {/* Right Content Div */}
            <div
              className="
      flex-1
      h-full
      bg-white
      rounded-tr-[12px] rounded-br-[12px]
      flex flex-col justify-center
      px-6
      shadow
    "
            >
              <h3
                className="w-[92px] h-[12px] 
  font-inter font-semibold text-[10px] leading-[100%] tracking-[0px] 
  text-[#005A58] opacity-100"
              >
                Explore Downtown
              </h3>

              <p
                className="w-[281px] h-[63px]
  font-inter font-normal text-[14px] leading-[21px] tracking-[0px]
  align-middle
  text-[#333333B8] opacity-100"
              >
                International Conference on Latest Advancements in Science,
                Management, Commerce & Educational Research
              </p>

              <div className="flex items-center gap-2 mt-3 text-sm text-[#005A58]">
                <MapPin size={12} />
                <span
                  className="w-[79px] h-[12px]
  font-inter font-normal text-[10px] leading-[100%] tracking-[0px]
  align-middle
  text-[#005A58] opacity-100"
                >
                  Toronto, Canada
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            w-[752px] 
            h-[352px] 
            bg-white 
            rounded-[12px] 
            border
            mt-[40px]
            p-4 
            flex 
            flex-col
            gap-[20px]
            opacity-100
          "
          style={{ borderWidth: "0.4px", borderColor: "#E5E5E5", top: "256px" }}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center">
            <h3
              style={{
                fontFamily: "Outfit",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "25px",
                color: "#212322",
              }}
            >
              Destinations
            </h3>

            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "19px",
                color: "#005A58",
                cursor: "pointer",
              }}
            >
              See All
            </p>
          </div>

          {/* CARDS ROW */}
          <div className="flex gap-[20px] flex-wrap">
            {overviewData.map((item) => (
              <div
                key={item.id}
                className="
                w-[226px] 
                h-[267px] 
                bg-white 
                rounded-[16px] 
                border 
                p-[12px] 
                flex 
                flex-col 
                gap-[10px] 
                shadow
              "
                style={{ borderWidth: "0.24px", borderColor: "#E5E5E5" }}
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.heading}
                  className="w-[202px] h-[193px] object-cover rounded-[12px]"
                />

                {/* DESCRIPTION */}
                <div className="w-[202px] flex flex-col gap-[6px]">
                  <h3 className="font-inter font-medium text-[12px] leading-none text-[#2D2D2D]">
                    {item.heading}
                  </h3>

                  <p className="font-inter font-normal text-[10px] leading-[14px] text-[#2D2D2DD6]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col gap-[16px]"
          style={{
            width: "752px",
            height: "185px",
            position: "absolute",
            top: "670px",
            left: "274px",
            background: "#FFFFFF",
            boxShadow: "0px 5px 12px 0px #1212120A",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          {/* Heading Row */}
          <div className="flex justify-between items-center">
            <h3
              style={{
                fontFamily: "Outfit",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "25px",
                color: "#212322",
              }}
            >
              Easy Visa Destination
            </h3>

            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "19px",
                color: "#005A58",
                cursor: "pointer",
              }}
            >
              See All
            </p>
          </div>

          {/* Sub Cards */}
          <div className="grid grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="relative w-[224px] h-[100px] rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
                alt="London"
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/70"></div>

              {/* Text */}
              <h4
                className="absolute top-[30px] left-[24px] w-[108px] h-[40px] 
               font-['Outfit'] font-semibold text-[32px] 
               leading-[100%] tracking-[0px] text-white"
              >
                DUBAI
              </h4>
            </div>

            {/* Card 2 */}
            <div className="relative w-[224px] h-[100px] rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
                alt="Canada"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70"></div>
              <h4
                className="absolute top-[30px] left-[24px] w-[108px] h-[40px] 
               font-['Outfit'] font-semibold text-[32px] 
               leading-[100%] tracking-[0px] text-white"
              >
                CHINA
              </h4>
            </div>

            {/* Card 3 */}
            <div className="relative w-[224px] h-[100px] rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9"
                alt="Australia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70"></div>
              <h4
                className="absolute top-[30px] left-[24px] w-[108px] h-[40px] 
               font-['Outfit'] font-semibold text-[32px] 
               leading-[100%] tracking-[0px] text-white"
              >
                BRAZIL
              </h4>
            </div>
          </div>
        </div>
      </div>
            
            <div className="absolute 
                top-[900px] left-[273px] 
                w-[752px] h-[155px] 
                rounded-[12px] 
                bg-white shadow-md p-6">

  {/* Header */}
  <div className="flex justify-between items-center mb-6">
    <h2 className="font-['Outfit'] font-semibold text-[20px] text-[#212322]">
      Health Tip Advisory
    </h2>

    <span className="text-sm text-[#005A58] font-medium cursor-pointer hover:underline">
      See All
    </span>
  </div>

  {/* Cards Container */}
  <div className="flex gap-4">

    {/* Card 1 */}
    <div className="absolute 
                top-[65px] left-[20px] 
                w-[346px] h-[78px] 
                rounded-[8px] 
                flex gap-[10px] 
                pt-[7px] pr-[8px] pb-[7px] pl-[8px]
                border border-[#E3E3E3] border-[0.4px]">
      <img
        src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
        alt="Health Tip"
        className="w-[98px] h-[64px] rounded-lg object-cover"
      />

      <div>
        <h4 className="font-semibold text-[14px] text-[#212322]">
          Beat Jet Lag Like a Pro
        </h4>
        <p className="text-[12px] text-gray-500">
          Crossing time zones? Discover proven way read more
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="absolute 
                top-[65px] right-[20px] 
                w-[346px] h-[78px] 
                rounded-[8px] 
                flex gap-[10px] 
                pt-[7px] pr-[8px] pb-[7px] pl-[8px]
                 border-[#E3E3E3] border-[0.4px]">
      <img
        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
        alt="Health Tip"
        className="w-[98px] h-[64px] rounded-lg object-cover"
      />

      <div>
        <h4 className="font-semibold text-[14px] text-[#212322]">
          Beat Jet Lag Like a Pro
        </h4>
        <p className="text-[12px] text-gray-500">
           Crossing time zones? Discover proven way read more
        </p>
      </div>
    </div>

  </div>

</div>

      <div
        className="w-[360px] bg-white rounded-[12px] shadow p-6 flex flex-col justify-between"
        style={{ position: "absolute", top: "130px", left: "1090px" }}
      >
        <div className="flex-1 flex items-center justify-center text-gray-400">
          <Calender />
        </div>
      </div>
      <div style={{ position: "absolute", top: "-9px", left: "-10px" }}>
        <NewsCard />
      </div>
    </>
  );
}
