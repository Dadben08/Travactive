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
  { id: 1, img: OverviewImg, heading: "Conference in Singapore", description: "Find scholarships currently open across top universities in Europe & the Americas...", status: "Actively Open" },
  { id: 2, img: OverviewImg2, heading: "Visa Policy Updates", description: "Find scholarships currently open across top universities in Europe & the Americas...", status: "Actively Open" },
  { id: 3, img: OverviewImg3, heading: "Health Tourism Update", description: "Find scholarships currently open across top universities in Europe & the Americas...", status: "Actively Open" },
];

const News = ({ flag, title, source }) => (
  <div className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-2 py-1 rounded-lg transition w-full">
    <div className="w-10 h-10 flex items-center justify-center">{flag}</div>
    <div className="flex-1 min-w-0">
      <h5 className="text-sm font-bold truncate">{title}</h5>
      <p className="text-xs text-gray-500">
        Source: <span className="text-blue-600">{source}</span>
      </p>
    </div>
  </div>
);

const NewsCard = () => {
  const newsItems = [
    { code: "gb", title: "UK expands Business Visa deadline", source: "websites.com" },
    { code: "us", title: "USA Ease Entry Rule", source: "Indian Times" },
    { code: "ca", title: "Canada Tightens Work Permit", source: "ircc.org" },
    { code: "au", title: "Australia Ban Route", source: "minsha.gov.au" },
    { code: "fr", title: "France E-visa Africa", source: "france-visas" },
    { code: "de", title: "Germany Requires UV", source: "daad.de" },
    { code: "ie", title: "Ireland Visa Ban", source: "eban.com" },
    { code: "es", title: "Spain Visa Update", source: "sunrise.com" },
  ];

  return (
    <div className="w-full lg:w-[320px] xl:w-[360px] 2xl:w-[400px] bg-white p-4 rounded-xl border shadow flex flex-col">
      <div className="flex justify-between mb-4">
        <h4 className="font-bold text-lg">Alert and News</h4>
        <button className="text-xs">See All</button>
      </div>

      <div className="space-y-4 max-h-[400px] overflow-y-auto">
        {newsItems.map((item, i) => (
          <News
            key={i}
            flag={<img src={`https://flagcdn.com/${item.code}.svg`} className="w-6 h-4" />}
            title={item.title}
            source={item.source}
          />
        ))}
      </div>
    </div>
  );
};

const Overview = () => {
  return (
    <div className="w-full min-h-screen bg-[#F6F6F6] p-4 md:p-6">

      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-6">

          {/* BANNER */}
          <div
            className="w-full min-h-[160px] mt-6 sm:mt-8 md:mt-0 rounded-xl flex flex-col md:flex-row overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(3,181,170,0.65), rgba(3,181,170,0.65)), url(${BannerBackground})`,
            }}
          >
            <div className="flex-1 p-6 flex flex-col justify-center">
              <h2 className="text-sm">Your next adventure?</h2>
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold">Rome!</p>
            </div>

            <div className="w-full md:w-[200px] lg:w-[250px] xl:w-[300px]">
              <img src={BannerSideImage} className="w-full h-full object-contain" />
            </div>
          </div>

          {/* CARDS */}
          <div className="flex flex-col sm:flex-row gap-4">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="w-full sm:w-1/2 lg:flex-1 bg-white rounded-xl shadow p-4 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-lg">
                    {i === 0 ? "Upcoming Seminars" : "Important Visa Requirements"}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Stay ahead of deadlines and updates.
                  </p>
                </div>

                <div className="flex items-center mt-4 border border-[#81FD48] rounded-xl px-4 py-3 cursor-pointer">
                  <span className="text-sm font-semibold">
                    {i === 0 ? "Explore" : "Check Deadlines"}
                  </span>
                  <ArrowRight size={16} className="ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[320px] xl:w-[360px] 2xl:w-[400px] flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow p-4">
            <MyCalendar />
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="mt-8 flex flex-col lg:flex-row gap-6">

        {/* LEFT */}
        <div className="flex-1 bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Recommended Opportunities</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {overviewData.map((item) => (
              <div key={item.id} className="border rounded-xl p-3 flex flex-col">
                <img src={item.img} className="w-full h-[180px] object-cover rounded-lg" />

                <h3 className="text-sm font-medium mt-2">{item.heading}</h3>
                <p className="text-xs text-gray-600 mt-1">{item.description}</p>

                <div className="flex items-center gap-2 mt-2">
                  <img src={Checked} className="w-4 h-4" />
                  <span className="text-xs">{item.status}</span>
                </div>

                <button className="mt-auto border rounded-full py-2 text-sm mt-3">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[320px] xl:w-[360px] 2xl:w-[400px]">
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default Overview;
