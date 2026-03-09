import React, { useContext } from "react";
import { SavedContext } from "../../Components/SavedContext.jsx";
import Calender from "../../Components/MyCalender.jsx";
import NewsCard from "../../Components/NewsCard.jsx";
import Img1 from "../../assets/TopCountriesImg.jpg";
import Img2 from "../../assets/ScholarshipImg.jpg";


const researchLinks = [
  {
    id: 1,
    title: "Top Countries for Affordable Education",
    desc: "Explore budget-friendly study destinations with quality universities.",
    img: Img1,
  },
  {
    id: 2,
    title: "Scholarships & Financial Aid",
    desc: "Find available scholarships and how to apply for them.",
    img: Img2,
  },
  {
    id: 3,
    title: "Easy Visa Countries for Students",
    desc: "Discover nations with smoother visa application processes.",
    img: Img1,
  },
  {
    id: 4,
    title: "Work & Study Opportunities",
    desc: "Learn where you can work while studying abroad..",
    img: Img1,
  },
  {
    id: 5,
    title: "Student Lifestyle & Living Costs",
    desc: "Get insights into daily expenses, accommodation, and quality of life for international students.",
    img: Img1,
  },
  {
    id: 6,
    title: "Post-Study Residency & Migration Options",
    desc: "See which countries offer post-study work permits or PR paths.",
    img: Img1,
  },
];

const Saved = () => {
  const { savedItems, removeSavedItem } = useContext(SavedContext);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Saved Scholarships</h1>

      {savedItems.length > 0 ? (
        <div className="flex gap-4 flex-wrap">
          {savedItems.map((item) => (
            <div
              key={item.id}
              className="w-[230px] h-[320px] p-4 bg-white shadow rounded-lg flex flex-col gap-2 relative"
            >
              <button
                onClick={() => removeSavedItem(item.id)}
                className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded"
              >
                Remove
              </button>

              <img
                src={item.image}
                alt={item.title}
                className="w-[230px] h-[160px] object-cover rounded-lg"
              />

              <h4 className="font-medium text-[14px]">{item.title}</h4>
              <p className="text-[10px] text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No Location saved yet.</p>
      )}

      {/* ================= Research Links Card ================= */}

      <div className="w-[754px] bg-white rounded-[12px] p-[20px] shadow mt-8 flex flex-col gap-[10px]">
        <h3 className="text-[20px] font-semibold text-[#212322]">
          Carefully Researched Links For You
        </h3>

        <p className="text-[14px] text-gray-600">
          Explore countries with low tuition, scholarships, and easy visa access
          perfect for your study journey.
        </p>

        {researchLinks.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={item.img}
                alt={item.title}
                className="w-[50px] h-[50px] rounded-md object-cover"
              />

              <div>
                <h5 className="text-[15px] font-medium">{item.title}</h5>
                <p className="text-[12px] text-gray-500">{item.desc}</p>
              </div>
            </div>

            <button
  className="w-[111px] h-[24px] rounded-[100px] border border-[#400097] 
  px-[12px] py-[5.5px] text-[10px] font-semibold text-[#212322] 
  flex items-center justify-center"
  style={{ fontFamily: "Sora", letterSpacing: "0.6%" }}
>
              Browse Now
            </button>
          </div>
        ))}
      </div>

      {/* ================= Right Side Widgets ================= */}

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
    </div>
  );
};

export default Saved;
