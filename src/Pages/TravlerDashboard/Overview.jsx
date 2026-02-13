import React from "react";
import BannerSideImage from "../../assets/Colosium.png"; // image flex left
import BannerBackground from "../../assets/DashboardBanner.png"; // background image
import { ArrowRight } from "lucide-react";
import MyCalendar from "../../Components/MyCalender";
import OverviewImg from "../../assets/Singerpore.jpg";
import OverviewImg2 from "../../assets/Visa.jpg";
import OverviewImg3 from "../../assets/Medic.jpg";
import Checked from "../../assets/VectorMark.png";




const overviewData = [
  {
    id: 1,
    img: OverviewImg,
    heading: "Conference in Singapore",
    description:
      "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities from international organizations, covering tuition, living expenses, travel costs, et.c",
    status: "Actively Open",
  },
  {
    id: 2,
    img: OverviewImg2,
    heading: "Visa Policy Updates",
    description:
      "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities from international organizations, covering tuition, living expenses, travel costs, et.c",
    status: "Actively Open",
  },
  {
    id: 3,
    img: OverviewImg3,
    heading: "Health Tourism Update",
    description:
      "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities from international organizations, covering tuition, living expenses, travel costs, et.c",
    status: "Actively Open",
  },
];


const News = ({ flag, title, source }) => (
  <div className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 group hover:bg-gray-50 -mx-2 px-2 py-1 rounded-lg transition-colors">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
      {flag}
    </div>
    <div className="flex-1 min-w-0">
      <h5 className="text-sm font-bold leading-snug mb-1 truncate">{title}</h5>
      <p className="text-[11px] text-gray-500">Source: <span className="text-blue-600 hover:underline">{source}</span></p>
    </div>
  </div>
);
const NewsCard = () => {
  const newsItems = [
    { 
      code: "gb", 
      title: "UK expands Business Visa deadline", 
      source: "https://www.websites.com/2019/01/06/USAFaseEnews",
      
    },
    { 
      code: "us", 
      title: "USA Ease Entry Rule for Health Tourists", 
      source: "The Indian Times",
      
    },
    { 
      code: "ca", 
      title: "Canada Tightens Work Permit Rules", 
      source: "https://ircc.org/"
    },
    { 
      code: "au", 
      title: "Australia Ban Multiple Access Route", 
      source: "https://minsha.gov.au"
    },
    { 
      code: "fr", 
      title: "France Introduction E-visa Regime in Africa", 
      source: "https://france-visas.gouv.fr/student"
    },
    { 
      code: "de", 
      title: "Germany Now Requires Compulsory UV", 
      source: "https://www.daad.de/"
    },
    { 
      code: "ie", 
      title: "Ireland Ban Visa on Arrival for Africans", 
      source: "https://www.eban.com/"
    },
    { 
      code: "es", 
      title: "Spain Launch New Visa Regime for NG", 
      source: "https://www.sunrise.com/"
    },
  ];

  return (
    <div 
  className="
  bg-white p-6 border-[0.4px] border-gray-100 
  w-[368px] h-[496px] rounded-xl opacity-100
  "
  style={{
    position: "absolute",
    top: "550px",
    left: "1105px",
  }}
>

      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold text-lg text-gray-800">Alert and News</h4>
        <button className="text-xs text-gray-500 hover:underline font-medium">See All</button>
      </div>
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {newsItems.map((item, index) => (
          <News 
            key={index}
            // Generates a URL for a high-quality SVG flag
            flag={
              <img 
                src={`https://flagcdn.com/${item.code}.svg`} 
                alt={`${item.code} flag`}
                className="w-6 h-4 object-cover rounded-sm shadow-sm" 
              />
            }
            title={item.title}
            source={item.source}
            sourceLabel={item.sourceLabel}
          />
        ))}
      </div>
    </div>
  );
};
const Overview = () => {
  return (
    <div className="w-full min-h-screen bg-[#F6F6F6] p-6">
      <div className="flex gap-6">
        {/* LEFT SECTION */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* BANNER */}
          <div
  className="
    w-[752px]
    h-[184px]
    rounded-[12px]
    shadow
    flex
    overflow-hidden
    relative
    opacity-100
   box-shadow: 0px 1px 4px 0px #00000005;

  "
  style={{
    
    backgroundImage: `
      linear-gradient(
        rgba(3, 181, 170, 0.65),
        rgba(3, 181, 170, 0.65)
      ),
      url(${BannerBackground})
    `,
  }}
>
  <div className="absolute inset-0 bg-[#03B5AA]/60"></div>

  {/* TEXT RIGHT */}
  <div className="flex-1 z-10 p-6 flex flex-col justify-center ml-8 text-black">
   <h2
  className="
    w-[143px]
    h-[21px]
    text-[14px]
    leading-0
    font-medium
    font-inter
    opacity-90
    align-middle
    whitespace-nowrap
    weight-500
  "
  style={{ color: "var(--GoInt-Text, #212322)" }}
>
  Your next adventure?
</h2>


    <p className="w-[184px] h-[72px] 
               font-['Outfit'] font-semibold 
               text-[64px] leading-[72px] 
               align-middle 
               text-[#212322] opacity-100">
      Rome!
    </p>
  </div>

  {/* IMAGE LEFT */}
  <div className="flex-none w-[276px] h-[180px] z-10">
    <img
      src={BannerSideImage}
      alt="Side"
      className="w-full h-full object-contain"
    />
  </div>
</div>


          {/* CARDS ROW */}
          <div className="flex gap-[20px]">
            {/* CARD 1 */}
            <div className=" h-[184px] w-[366px] bg-white rounded-[12px] shadow p-6">
             <h3
  className="w-[186px] h-[25px] font-outfit font-semibold text-[20px] leading-[20px] tracking-[0px] opacity-100 whitespace-nowrap">
  Upcoming Seminars
</h3>

              <p
  className="
    w-[326px]
    h-[63px]
    font-inter
    font-normal
    text-[14px]
    leading-[21px]
    tracking-[0px]
    opacity-100
    mt-2
  "
  style={{ color: "#2D2D2DD6" }}
>
  Stay ahead of closing dates for scholarships, conferences, and visa applications in your saved countries.
</p>
<div
  className="flex items-center gap-2 cursor-pointer"
  style={{
    width: "366px",
    height: "46px",
    padding: "14px 12px",
    gap: "10px",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    border: "0.4px solid #81FD48",
    boxShadow: "0px 1px 4px 0px #00000005",
    opacity: 1,
    position: "relative",
    marginTop: "auto",
    marginLeft: "-24px",
    marginRight: "-12px",
    bottom: "-18px",
    
    
    
  }}
>
  <p
  className="w-[123px] h-[18px] font-[Sora] font-semibold text-[14px] leading-[18px] tracking-[0.8%] opacity-100"
  style={{ color: "var(--GoInt-Text, #212322)" }}
>
  Explore
</p>

   <ArrowRight size={16} className="ml-auto" />
</div>
 </div>

            {/* CARD 2 */}
            <div className=" h-[184px] w-[366px] bg-white rounded-[12px] shadow p-6">
             <h3
  className="w-[186px] h-[25px] font-outfit font-semibold text-[20px] leading-[20px] tracking-[0px] opacity-100 whitespace-nowrap">
  Important Visa Requirements
</h3>

              <p
  className="
    w-[326px]
    h-[63px]
    font-inter
    font-normal
    text-[14px]
    leading-[21px]
    tracking-[0px]
    opacity-100
    mt-2
  "
  style={{ color: "#2D2D2DD6" }}
>
  Access your saved scholarships, grants, travel updates, and important resources anytime in one convenient place.
</p>
<div
  className="flex items-center gap-2 cursor-pointer"
  style={{
    width: "366px",
    height: "46px",
    padding: "14px 12px",
    gap: "10px",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    border: "0.4px solid #81FD48",
    boxShadow: "0px 1px 4px 0px #00000005",
    opacity: 1,
    position: "relative",
    marginTop: "auto",
    marginLeft: "-24px",
    marginRight: "-12px",
    bottom: "-18px",
    
    
    
  }}
>
  <p
  className="w-[123px] h-[18px] font-[Sora] font-semibold text-[14px] leading-[18px] tracking-[0.8%] opacity-100"
  style={{ color: "var(--GoInt-Text, #212322)" }}
>
  Check Deadlines
</p>

   <ArrowRight size={16} className="ml-auto" />
</div>
 </div>
          </div>
        </div>

        {/* RIGHT SECTION – CALENDAR */}
        <div className="w-[360px] bg-white rounded-[12px] shadow p-6 flex flex-col justify-between">
          {/* Placeholder calendar */}
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <MyCalendar />
            
          </div>
        </div>
      </div>
      {/* CARDS + EXPLORE ROW */}
<div className="mt-8 flex gap-6">

  {/* LEFT — CARD CONTAINER */}
{/* LEFT — CARD CONTAINER */}
<div
  className="
    w-[762px] 
    h-[480px] 
    bg-white 
    rounded-[12px] 
    border 
    p-4 
    flex 
    flex-col
    gap-[20px]
    opacity-100
  "
  style={{ borderWidth: "0.4px", borderColor: "#E5E5E5" }}  
>
  {/* HEADER */}
  <h2 className="text-[20px] font-outfit font-semibold text-[#212322]">
    Recommended Opportunities
  </h2>

  {/* CARDS ROW */}
  <div className="flex gap-[20px] flex-wrap">
  {overviewData.map((item) => (
    <div
      key={item.id}
      className="
        w-[226px] 
        h-[391px] 
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

      {/* STATUS */}
      <div className="flex items-center gap-2">
        <span className="w-[18px] h-[18px] flex items-center justify-center">
          <img
            src={Checked}
            alt="checked"
            className="w-[9.17px] h-[9.17px] object-contain"
          />
        </span>

        <p className="font-inter font-medium text-[8px]">
          {item.status}
        </p>
      </div>

      {/* BUTTON */}
      <button
        className="
          w-[202px] 
          h-[38px] 
          rounded-[100px] 
          border 
          px-[10px] 
          py-[10px]
          flex 
          items-center 
          justify-center
        "
        style={{
          borderWidth: "1px",
          borderColor: "#400097",
          boxShadow: "0px 1px 4px 0px #00000005",
        }}
      >
        <span className="font-sora font-semibold text-[14px] whitespace-nowrap text-[#212322]">
          Explore
        </span>
      </button>
    </div>
  ))}
</div>


</div>
  


  {/* RIGHT — EXPLORE CONTAINER */}
  <div>
    
   <NewsCard />  
    </div>
  </div>

</div>

    
  );
};

export default Overview;
