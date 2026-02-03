import React, { useState } from "react";
import Calender from "../../Components/MyCalender.jsx";
import Arrow from "../../assets/VectorArrow.png"; // import your logo image
import Circle from "../../assets/CircleLine.png"; // import your logo image

const flags = [
  { id: 1, country: "United Kingdom", flag: "https://flagcdn.com/w20/gb.png" },
  { id: 2, country: "Nigeria", flag: "https://flagcdn.com/w20/ng.png", },
  { id: 3, country: "United States", flag: "https://flagcdn.com/w20/us.png" },
  { id: 4, country: "Ukraine", flag: "https://flagcdn.com/w20/ua.png", },
  { id: 5, country: "Canada", flag: "https://flagcdn.com/w20/ca.png" },
];

export default function Explore() {
  const [selectedCountry, setSelectedCountry] = useState(flags[0]);

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
  <div
    className="
      w-[752px]
      h-[44px]
      opacity-100
      flex
      items-center
      gap-[22px]
    "
    style={{
      position: "absolute",
      top: "128px",
      left: "274px",
    }}
  >
    {/* FIRST BUTTON: Country + Flag */}
    <button className={buttonStyle}>
      <span className="font-medium text-[#212322]">
        {selectedCountry.country}
      </span>

      <img
        src={selectedCountry.flag}
        alt={selectedCountry.country}
        className="w-[20px] h-[14px] object-cover"
      />
    </button>

    {/* SECOND BUTTON */}
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

    {/* THIRD BUTTON */}
    <button
      className={`
        w-[236px]
        h-[44px]
        opacity-100
        flex
        items-center
        justify-center
        gap-[10px]
        rounded-[100px]
        px-[12px]
        py-[13px]
        bg-[#005A58]
        text-white
        font-semibold
        border-none
      `}
    >
      Apply
    </button>
  </div>

  {/* ===== NEW CONTAINER AFTER BUTTONS ===== */}
  <div className="mt-[100px] ">
    <h3
  className="
    w-[752px]
    h-[25px]
    opacity-100
    font-[Outfit]
    font-semibold
    text-[20px]
    tracking-[0px]
    text-[#212322]
  "
  style={{ lineHeight: "100%" }}
>
  Scholarships
</h3>


    <div className="
    w-[752px]
    h-[200px]
    opacity-100
    flex
    gap-[22px]
  ">
      {/* CARD 1 */}
      <div  className="
      w-[236px]
      h-[200px]
      opacity-100
      flex
      flex-col
      gap-[10px]
      rounded-[12px]
      p-[20px]
      bg-white
      shadow
    ">
        <div className="flex items-center justify-between">
  <h4 style={{width:"196px",height:"38px",opacity:1,transform:"rotate(0deg)",fontFamily:"Inter",fontWeight:500,fontStyle:"Medium",fontSize:"14px",lineHeight:"19px",letterSpacing:"0px"}}>Royal Society Wolfson Visiting Fellowship 2025</h4>

  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="var(--Goint-newpp, #400097)"  strokeWidth="2" strokeLinecap="round" back
    strokeLinejoin="round" className="cursor-pointer">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
</div>
        <p style={{width:"196px",height:"80px",opacity:0.78,transform:"rotate(0deg)",fontFamily:"Inter",fontWeight:400,fontStyle:"Regular",fontSize:"10px",lineHeight:"16px",letterSpacing:"0px",color:"#333333"}}>
          This is a prestigious and fully funded opportunity for established international researchers to spend up to 12 months conducting collaborative research at a leading Uk university or research instit.... 
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <img src={"https://flagcdn.com/w20/gb.png"} alt="UK" className="w-[14px] h-[14px] rounded-full object-cover"/>
            <span style={{width:"65px",height:"12px",opacity:1,transform:"rotate(0deg)",fontFamily:"Inter",fontWeight:400,fontStyle:"Regular",fontSize:"10px",lineHeight:"12px",letterSpacing:"0px",color:"#008000",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"2px"}}>
              Fully Funded
              </span>
              </div>
              <div className="flex items-center gap-[40px]">
                <img src={Arrow} alt="UK" className="w-[9.75px] top-[4.18px]  h-[5.63px] object-cover"/>
                <div className="w-[20px] h-[20px] rounded-full ">
                  <img src={Circle} alt="" />
                  </div>
                  </div>
                  </div>

      </div>

      {/* CARD 2 */}
      <div  className="
      w-[236px]
      h-[200px]
      opacity-100
      flex
      flex-col
      gap-[10px]
      rounded-[12px]
      p-[20px]
      bg-white
      shadow
    ">
        <div className="flex items-center justify-between">
  <h4 style={{width:"196px",height:"38px",opacity:1,transform:"rotate(0deg)",fontFamily:"Inter",fontWeight:500,fontStyle:"Medium",fontSize:"14px",lineHeight:"19px",letterSpacing:"0px"}}>Royal Society Wolfson Visiting Fellowship 2025</h4>

  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="#212322" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" className="cursor-pointer">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
</div>
        <p style={{width:"196px",height:"80px",opacity:0.78,transform:"rotate(0deg)",fontFamily:"Inter",fontWeight:400,fontStyle:"Regular",fontSize:"10px",lineHeight:"16px",letterSpacing:"0px",color:"#333333"}}>
          This is a prestigious and fully funded opportunity for established international researchers to spend up to 12 months conducting collaborative research at a leading Uk university or research instit.... 
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <img src={"https://flagcdn.com/w20/gb.png"} alt="UK" className="w-[14px] h-[14px] rounded-full object-cover"/>
            <span style={{width:"65px",height:"12px",opacity:1,transform:"rotate(0deg)",fontFamily:"Inter",fontWeight:400,fontStyle:"Regular",fontSize:"10px",lineHeight:"12px",letterSpacing:"0px",color:"#008000",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"2px"}}>
              $20,000
              </span>
              </div>
              <div className="flex items-center gap-[40px]">
                <img src={Arrow} alt="UK" className="w-[9.75px] top-[4.18px]  h-[5.63px] object-cover"/>
                <div className="w-[20px] h-[20px] rounded-full ">
                  <img src={Circle} alt="" />
                  </div>
                  </div>
                  </div>
      </div>

      {/* CARD 3 */}
      <div  className="
      w-[236px]
      h-[200px]
      opacity-100
      flex
      flex-col
      gap-[10px]
      rounded-[12px]
      p-[20px]
      bg-white
      shadow
    ">
        <div className="flex items-center justify-between">
  <h4 style={{width:"196px",height:"38px",opacity:1,transform:"rotate(0deg)",fontFamily:"Inter",fontWeight:500,fontStyle:"Medium",fontSize:"14px",lineHeight:"19px",letterSpacing:"0px"}}>Royal Society Wolfson Visiting Fellowship 2025</h4>

  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="#212322" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" className="cursor-pointer">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
</div>
        <p style={{width:"196px",height:"80px",opacity:0.78,transform:"rotate(0deg)",fontFamily:"Inter",fontWeight:400,fontStyle:"Regular",fontSize:"10px",lineHeight:"16px",letterSpacing:"0px",color:"#333333"}}>
          This is a prestigious and fully funded opportunity for established international researchers to spend up to 12 months conducting collaborative research at a leading Uk university or research instit.... 
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <img src={"https://flagcdn.com/w20/gb.png"} alt="UK" className="w-[14px] h-[14px] rounded-full object-cover"/>
            <span style={{width:"65px",height:"12px",opacity:1,transform:"rotate(0deg)",fontFamily:"Inter",fontWeight:400,fontStyle:"Regular",fontSize:"10px",lineHeight:"12px",letterSpacing:"0px",color:"#008000",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"2px"}}>
              $10,000
              </span>
              </div>
              <div className="flex items-center gap-[40px]">
                <img src={Arrow} alt="UK" className="w-[9.75px] top-[4.18px]  h-[5.63px] object-cover"/>
                <div className="w-[20px] h-[20px] rounded-full ">
                  <img src={Circle} alt="" />
                  </div>
                  </div>
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
    </>
  );
}
