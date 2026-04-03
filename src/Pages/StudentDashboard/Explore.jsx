import React, { useState, useContext } from "react";
import Calender from "../../Components/MyCalender.jsx";

import Oxford from "../../assets/OxfordUniversity.jpg";
import Oxford2 from "../../assets/CambridgeUniversity.jpg";
import Oxford3 from "../../assets/OxfordUniversity2.jpg";
import Oxford4 from "../../assets/OxfordUniversity3.jpg";
import Oxford5 from "../../assets/OxfordUniversity4.jpg";
import Oxford6 from "../../assets/OxfordUniversity5.jpg";
import Oxford7 from "../../assets/OxfordUniversity6.jpg";
import Oxford8 from "../../assets/OxfordUniversity7.jpg";
import FlashImg from "../../assets/TravactiveBanner1.svg"; // ✅ ADD THIS

import NewsCard from "../../Components/NewsCard.jsx";
import { scholarships } from "../../assets/scholarshipData";
import { SavedContext } from "../../Components/SavedContext.jsx";

const flags = [
  { id: 1, country: "United Kingdom", flag: "https://flagcdn.com/w20/gb.png" },
  { id: 2, country: "Nigeria", flag: "https://flagcdn.com/w20/ng.png" },
  { id: 3, country: "United States", flag: "https://flagcdn.com/w20/us.png" },
  { id: 4, country: "Ukraine", flag: "https://flagcdn.com/w20/ua.png" },
  { id: 5, country: "Canada", flag: "https://flagcdn.com/w20/ca.png" },
];

export default function Explore() {
  const [selectedCountry, setSelectedCountry] = useState(flags[0]);
  const [showAll, setShowAll] = useState(false);
  const { savedItems, addSavedItem, removeSavedItem } =
    useContext(SavedContext);

  const buttonStyle = `
    w-full sm:w-[200px] md:w-[220px] lg:w-[236px]
    h-[44px]
    flex items-center justify-between
    rounded-[12px]
    px-[16px]
    border border-gray-200
    bg-white text-[12px]
  `;

  return (
    <div className="w-full px-4 lg:px-8 py-6">

      {/* ===== TOP FILTERS ===== */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10 mb-8 max-w-[900px]">
        
        <button className={buttonStyle}>
          <span className="font-medium">{selectedCountry.country}</span>
          <img src={selectedCountry.flag} alt="" className="w-[20px] h-[14px]" />
        </button>

        <select
          className={`${buttonStyle} outline-none`}
          value={selectedCountry.id}
          onChange={(e) =>
            setSelectedCountry(
              flags.find((f) => f.id === parseInt(e.target.value))
            )
          }
        >
          {flags.map((item) => (
            <option key={item.id} value={item.id}>
              {item.country}
            </option>
          ))}
        </select>

        <button className="w-full sm:w-[200px] md:w-[220px] lg:w-[236px] h-[44px] bg-[#005A58] text-white rounded-[100px]">
          Apply
        </button>
      </div>

      {/* ===== MAIN GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-8">

          {/* SCHOLARSHIPS */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Scholarships
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {(showAll ? scholarships : scholarships.slice(0, 3)).map(
                (item) => {
                  const isSaved = savedItems.find((i) => i.id === item.id);

                  return (
                    <div
                      key={item.id}
                      className="bg-white p-4 rounded-[12px] shadow-sm hover:shadow-md transition flex flex-col gap-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-[13px] sm:text-[14px] font-medium leading-tight">
                          {item.title}
                        </h4>

                        <svg
                          onClick={() =>
                            isSaved
                              ? removeSavedItem(item.id)
                              : addSavedItem(item)
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill={isSaved ? "#400097" : "none"}
                          stroke={isSaved ? "white" : "#400097"}
                          className="cursor-pointer flex-shrink-0"
                        >
                          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                        </svg>
                      </div>

                      <p className="text-[11px] text-gray-600 line-clamp-3">
                        {item.description}
                      </p>

                      <div className="flex justify-between items-center text-[10px]">
                        <div className="flex items-center gap-1">
                          <img
                            src={item.flag}
                            className="w-[14px] h-[14px] rounded-full"
                          />
                          <span className="text-green-600 whitespace-nowrap">
                            {item.funding}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3">
                          <img src={item.arrow} className="w-[10px]" />
                          <img src={item.circle} className="w-[18px]" />
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-[#400097] text-sm sm:text-[14px]"
              >
                {showAll ? "Show Less" : "View All"}
              </button>
            </div>
          </div>

          {/* UNIVERSITIES */}
          <div className="bg-white p-4 sm:p-5 rounded-[12px] shadow w-full">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Top Universities
            </h3>

            <p className="text-[13px] sm:text-[14px] text-gray-600 mb-4">
              Discover highly ranked universities across key study destinations.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {[Oxford, Oxford2, Oxford3, Oxford4, Oxford5, Oxford6, Oxford7, Oxford8].map(
                (img, index) => (
                  <div
                    key={index}
                    className="relative h-[100px] sm:h-[120px] md:h-[110px] rounded-[12px] overflow-hidden"
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover opacity-70"
                    />

                    <div className="absolute bottom-2 left-2 text-white">
                      <p className="text-[10px] sm:text-[12px] font-medium">
                        Oxford University
                      </p>
                      <p className="text-[8px] hidden sm:block">
                        Dominus illuminatio
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* NEWS */}
          <div className="bg-white p-4 sm:p-5 rounded-[12px] shadow w-full">
            <NewsCard />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:block space-y-6">

          {/* Calendar */}
          <div className="bg-white rounded-[12px] shadow p-4 w-full max-w-[320px] mx-auto  lg:top-4">
            <Calender />
          </div>

          {/* Flash Image */}
          <div className=" h-[720px] rounded-[12px]  p-2 w-full max-w-[320px] mx-auto">
  
  <div className="overflow-hidden rounded-[10px] group cursor-pointer">
    <img
      src={FlashImg}
      alt="Promo"
      className="w-full h-[720px] object-fit transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
  </div>

 

</div>


        </div>
      </div>
    </div>
  );
}
