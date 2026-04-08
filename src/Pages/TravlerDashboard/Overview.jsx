import React from "react";
import BannerSideImage from "../../assets/Colosium.png";
import BannerBackground from "../../assets/DashboardBanner.png";
import { ArrowRight } from "lucide-react";
import MyCalendar from "../../Components/MyCalender";
import OverviewImg from "../../assets/Singerpore.jpg";
import OverviewImg2 from "../../assets/Visa.jpg";
import OverviewImg3 from "../../assets/Medic.jpg";
import Checked from "../../assets/VectorMark.png";

const overviewData = [
  { id: 1, img: OverviewImg, heading: "Conference in Singapore", description: "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities from international organizations, covering tuition, living expenses, travel costs, et.c", status: "Actively Open" },
  { id: 2, img: OverviewImg2, heading: "Visa Policy Updates", description: "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities from international organizations, covering tuition, living expenses, travel costs, et.c", status: "Actively Open" },
  { id: 3, img: OverviewImg3, heading: "Health Tourism Update", description: "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities from international organizations, covering tuition, living expenses, travel costs, et.c", status: "Actively Open" },
];

const News = ({ flag, title, source }) => (
  <div className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 group hover:bg-gray-50 px-2 py-1 rounded-lg transition-colors w-full">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">{flag}</div>
    <div className="flex-1 min-w-0">
      <h5 className="text-sm sm:text-[14px] font-bold leading-snug mb-1 truncate">{title}</h5>
      <p className="text-[10px] sm:text-[11px] text-gray-500">Source: <span className="text-blue-600 hover:underline">{source}</span></p>
    </div>
  </div>
);

const NewsCard = () => {
  const newsItems = [
    { code: "gb", title: "UK expands Business Visa deadline", source: "https://www.websites.com/2019/01/06/USAFaseEnews" },
    { code: "us", title: "USA Ease Entry Rule for Health Tourists", source: "The Indian Times" },
    { code: "ca", title: "Canada Tightens Work Permit Rules", source: "https://ircc.org/" },
    { code: "au", title: "Australia Ban Multiple Access Route", source: "https://minsha.gov.au" },
    { code: "fr", title: "France Introduction E-visa Regime in Africa", source: "https://france-visas.gouv.fr/student" },
    { code: "de", title: "Germany Now Requires Compulsory UV", source: "https://www.daad.de/" },
    { code: "ie", title: "Ireland Ban Visa on Arrival for Africans", source: "https://www.eban.com/" },
    { code: "es", title: "Spain Launch New Visa Regime for NG", source: "https://www.sunrise.com/" },
  ];

  return (
    <div className="w-full bg-white p-4 rounded-xl border border-gray-200 shadow flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-lg text-gray-800">Alert and News</h4>
        <button className="text-xs text-gray-500 hover:underline font-medium">See All</button>
      </div>
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {newsItems.map((item, index) => (
          <News key={index} flag={<img src={`https://flagcdn.com/${item.code}.svg`} alt={`${item.code} flag`} className="w-6 h-4 object-cover rounded-sm shadow-sm" />} title={item.title} source={item.source} />
        ))}
      </div>
    </div>
  );
};

const Overview = () => {
  return (
    <div className="w-full min-h-screen bg-[#F6F6F6] p-4 md:p-6">

      {/* 🔥 TOP SECTION */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* LEFT */}
        <div className="w-full flex flex-col gap-6">

          {/* BANNER */}
          <div className="w-full min-h-[160px] rounded-[12px] shadow flex flex-col md:flex-row overflow-hidden relative" style={{ backgroundImage: `linear-gradient(rgba(3,181,170,0.65), rgba(3,181,170,0.65)), url(${BannerBackground})` }}>
            <div className="flex-1 z-10 p-6 flex flex-col justify-center text-black">
              <h2 className="text-sm font-medium">Your next adventure?</h2>
              <p className="text-3xl md:text-5xl font-bold">Rome!</p>
            </div>
            <div className="w-full md:w-[250px]">
              <img src={BannerSideImage} alt="" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* CARDS */}
          <div className="flex flex-col md:flex-row gap-4">
            {[1, 2].map((_, i) => (
              <div key={i} className="w-full md:w-1/2 bg-white rounded-[12px] shadow p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{i === 0 ? "Upcoming Seminars" : "Important Visa Requirements"}</h3>
                  <p className="text-sm text-gray-600 mt-2">Stay ahead of deadlines and important updates across your saved countries.</p>
                </div>
                <div className="flex items-center mt-4 border border-[#81FD48] rounded-b-xl px-4 py-3 cursor-pointer">
                  <span className="font-semibold text-sm">{i === 0 ? "Explore" : "Check Deadlines"}</span>
                  <ArrowRight size={16} className="ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Calendar + News */}
        <div className="w-full lg:w-[360px]  flex flex-col gap-6 shrink-0">
          <div className="bg-white rounded-[12px] shadow p-4">
            <MyCalendar />
          </div>
          
        </div>
      </div>

      {/* 🔥 SECOND SECTION */}
      <div className="mt-8 flex flex-col lg:flex-row gap-6">

        {/* LEFT — Recommended Opportunities */}
        <div className="w-full lg:flex-1 bg-white rounded-[12px] shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Recommended Opportunities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {overviewData.map((item) => (
              <div key={item.id} className="bg-white rounded-[16px] border p-3 shadow flex flex-col">
                <img src={item.img} alt={item.heading} className="w-full h-[180px] object-cover rounded-[12px]" />
                <h3 className="text-sm font-medium mt-2">{item.heading}</h3>
                <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <img src={Checked} className="w-4 h-4" />
                  <span className="text-xs">{item.status}</span>
                </div>
                <button className="mt-auto border rounded-full py-2 text-sm font-semibold mt-3">Explore</button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Calendar + NewsCard repeated if needed */}
        <div className="w-full lg:w-[360px] flex flex-col gap-6 shrink-0">
          
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default Overview;
