import React, { useState } from "react";
import Calender from "../../Components/MyCalender.jsx";
import Arrow from "../../assets/VectorArrow.png"; // import your logo image
import Circle from "../../assets/CircleLine.png"; // import your logo image
import Oxford from "../../assets/OxfordUniversity.jpg"; // import your logo image
import Oxford2 from "../../assets/CambridgeUniversity.jpg";
import Oxford3 from "../../assets/OxfordUniversity2.jpg";
import Oxford4 from "../../assets/OxfordUniversity3.jpg";
import Oxford5 from "../../assets/OxfordUniversity4.jpg";
import Oxford6 from "../../assets/OxfordUniversity5.jpg";
import Oxford7 from "../../assets/OxfordUniversity6.jpg";
import Oxford8 from "../../assets/OxfordUniversity7.jpg";
import NewsCard from "../../Components/NewsCard.jsx";
import { Search, Bell, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

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
  className="flex flex-col gap-[16px]"
  style={{
    width: "752px",
    height: "auto",
    position: "absolute",
    top: "270px",
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

  {/* Sub Cards */}
  <div className="grid grid-cols-3 gap-[16px]">

    {/* Sub Card 1 */}
    <div
      className="flex flex-col"
      style={{
        width: "224px",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#FFFFFF",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
        alt="London"
        style={{
          width: "100%",
          height: "140px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "12px" }}>
        <h4
          style={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "18px",
            color: "#212322",
            marginBottom: "6px",
          }}
        >
         Visit London
        </h4>

        <p
         className="w-[216px] h-[90px] font-inter font-normal text-[10px] leading-[15px] tracking-[0.16%] opacity-100"
        >
        Wrapped in royal heritage, London rises along the River Thames with historic landmarks and striking modern architecture. Adding to its charm are world-class museums, vibrant markets, diverse cultures, exquisite cuisine, and unforgettable experiences waiting to be discovered  <span>read more. </span>
        </p>
      </div>
    </div>

    {/* Sub Card 2 */}
    <div
    className="flex flex-col"
      style={{
        width: "224px",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#FFFFFF",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
        alt="Canada"
        style={{
          width: "100%",
          height: "140px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "12px" }}>
        <h4
          style={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "18px",
            color: "#212322",
            marginBottom: "6px",
          }}
        >
          Canada
        </h4>

        <p
         className="w-[216px] h-[90px] font-inter font-normal text-[10px] leading-[15px] tracking-[0.16%] opacity-100"
        >
          Framed by breathtaking mountains, Canada is filled with crystal-clear lakes, vibrant cities, and vast natural landscapes. Adding to its charm are world-class universities, multicultural communities, rich cuisine, and unforgettable outdoor adventures waiting to be explored and read more.
        </p>
      </div>
    </div>

    {/* Sub Card 3 */}
    <div
     className="flex flex-col"
      style={{
        width: "224px",
        
        borderRadius: "12px",
        overflow: "hidden",
        background: "#FFFFFF",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9"
        alt="Australia"
        style={{
          width: "100%",
          height: "140px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "12px" }}>
        <h4
          style={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "18px",
            color: "#212322",
            marginBottom: "6px",
          }}
        >
          Australia
        </h4>

        <p
          className="w-[216px] h-[90px] font-inter font-normal text-[10px] leading-[15px] tracking-[0.16%] opacity-100"
        >
          Encircled by golden beaches, Australia is filled with dramatic coastlines, vibrant cities, and vast sunlit landscapes. Adding to its natural beauty are world-class universities, diverse wildlife, rich culture, and unforgettable adventures waiting to be explored and read more.
        </p>
      </div>
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
