import React from "react";
import BannerSideImage from "../../assets/amico.png"; // image flex left
import BannerBackground from "../../assets/DashboardBanner.png"; // background image
import { ArrowRight } from "lucide-react";
import MyCalendar from "../../Components/MyCalender";

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
  <div className="flex-1 z-10 p-6 flex flex-col justify-center text-black">
   <h2
  className="
    w-[438px]
    h-[40px]
    text-[32px]
    leading-[32px]
    font-semibold
    font-outfit
    opacity-100
    align-middle
    whitespace-nowrap
    wieght-600
  "
  style={{ color: "var(--GoInt-Text, #212322)" }}
>
  Hey Samuel, ready to explore?
</h2>


    <p className="mt-2 w-[396px] h-[42px] text-[14px] leading-[21px] font-normal text-black opacity-90 font-inter">
      Dive into fresh travel insights, trending opportunities, visa updates, and country-specific guides, all in one place.
    </p>
  </div>

  {/* IMAGE LEFT */}
  <div className="flex-none w-[120px] h-full z-10">
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
  Upcoming Deadlines
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
    mt-4
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
    bottom: "-10px",
    
    
    
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

            {/* CARD 2 */}
            <div className=" h-[184px] w-[366px] bg-white rounded-[12px] shadow p-6">
             <h3
  className="w-[186px] h-[25px] font-outfit font-semibold text-[20px] leading-[20px] tracking-[0px] opacity-100 whitespace-nowrap">
  Your Saved Opportunities
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
    mt-4
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
    bottom: "-10px",
    
    
    
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
    </div>
  );
};

export default Overview;
