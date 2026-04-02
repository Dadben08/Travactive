import React from "react";
import BannerSideImage from "../../assets/amico.png";
import BannerBackground from "../../assets/DashboardBanner.png";
import { ArrowRight } from "lucide-react";
import MyCalendar from "../../Components/MyCalender";
import OverviewImg from "../../assets/cardImg.png";
import OverviewImg2 from "../../assets/CardImg1.png";
import OverviewImg3 from "../../assets/CardImg2.png";
import Checked from "../../assets/VectorMark.png";

/* ================= NEWS ================= */
const News = ({ flag, title, source }) => (
  <div className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-2 py-1 rounded-lg">
    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
      {flag}
    </div>

    <div className="flex-1 min-w-0">
      <h5 className="text-sm font-bold truncate">{title}</h5>
      <p className="text-[11px] text-gray-500">
        Source: <span className="text-blue-600">{source}</span>
      </p>
    </div>
  </div>
);

/* ================= NEWS CARD ================= */
const NewsCard = () => {
  const newsItems = [
    { code: "gb", title: "UK expands Business Visa deadline", source: "websites.com" },
    { code: "us", title: "USA Ease Entry Rule", source: "Indian Times" },
    { code: "ca", title: "Canada Tightens Work Permit", source: "ircc.org" },
    { code: "au", title: "Australia Ban Route", source: "gov.au" },
  ];

  return (
    <div className="bg-white p-4 md:p-6 border border-gray-100 w-full lg:w-[368px] rounded-xl">
      <div className="flex justify-between mb-4">
        <h4 className="font-bold text-base md:text-lg">Alert and News</h4>
        <button className="text-xs text-gray-500">See All</button>
      </div>

      <div className="space-y-3 max-h-[350px] overflow-y-auto">
        {newsItems.map((item, i) => (
          <News
            key={i}
            flag={
              <img
                src={`https://flagcdn.com/${item.code}.svg`}
                className="w-6 h-4"
              />
            }
            title={item.title}
            source={item.source}
          />
        ))}
      </div>
    </div>
  );
};

/* ================= MAIN ================= */
const Overview = () => {
  return (
    <div className="w-full min-h-screen bg-[#F6F6F6] px-3 sm:px-4 md:px-6 py-6 mt-[60px] md:mt-0 overflow-x-hidden">


      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">

        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-6">

          {/* BANNER */}
          <div
            className="w-full min-h-[160px] md:h-[184px] rounded-[12px] flex overflow-hidden relative"
            style={{
              backgroundImage: `
                linear-gradient(rgba(3,181,170,0.65), rgba(3,181,170,0.65)),
                url(${BannerBackground})
              `,
            }}
          >
            <div className="absolute inset-0 bg-[#03B5AA]/60"></div>

            <div className="flex-1 z-10 p-4 md:p-6 flex flex-col justify-center text-black">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-semibold">
                Hey Samuel, ready to explore?
              </h2>

              <p className="mt-2 text-xs sm:text-sm md:text-[14px] leading-[20px]">
                Dive into fresh travel insights, trending opportunities, visa updates, and country-specific guides.
              </p>
            </div>

            <div className="flex-none w-[80px] sm:w-[100px] md:w-[120px] z-10">
              <img src={BannerSideImage} className="w-full h-full object-contain" />
            </div>
          </div>

          {/* CARDS */}
          <div className="flex flex-col sm:flex-row gap-4">
            {["Upcoming Deadlines", "Your Saved Opportunities"].map((title, i) => (
              <div key={i} className="w-full sm:w-1/2 bg-white rounded-[12px] shadow p-4 md:p-6 flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold">{title}</h3>

                <p className="text-sm text-gray-600 mt-3">
                  Stay ahead of deadlines and manage your opportunities easily.
                </p>

                <div className="flex items-center mt-4 border border-green-300 rounded-lg px-3 py-2 cursor-pointer">
                  <p className="text-sm font-semibold">Check Deadlines</p>
                  <ArrowRight size={16} className="ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - CALENDAR (HIDDEN ON SMALL & TABLET) */}
        <div className="hidden lg:flex w-[360px] bg-white rounded-[12px] shadow p-6">
          <MyCalendar />
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-8 flex flex-col lg:flex-row gap-4 md:gap-6">

        {/* LEFT */}
        <div className="w-full bg-white rounded-[12px] border p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Recommended Opportunities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {[OverviewImg, OverviewImg2, OverviewImg3].map((img, i) => (
              <div key={i} className="w-full bg-white rounded-[16px] border p-3 shadow flex flex-col">

                <img src={img} className="w-full h-[180px] object-cover rounded-[12px]" />

                <h3 className="text-sm mt-2 font-medium">
                  Scholarship Opportunities
                </h3>

                <p className="text-xs text-gray-600 mt-1">
                  Find scholarships across top universities worldwide.
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <img src={Checked} className="w-4 h-4" />
                  <span className="text-xs">Actively Open</span>
                </div>

                <button className="mt-auto border border-purple-700 rounded-full py-2 text-sm font-semibold">
                  Browse Scholarships
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[368px]">
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default Overview;
