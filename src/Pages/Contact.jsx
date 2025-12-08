import React from 'react'
import CTA from "../Components/CTA.jsx"
import Navbar from '../Components/Navbar.jsx'
import BackgroundImage from "../assets/ContactHeroImg1.jpg";
import CardImage1 from "../assets/Frame1.png";
import PhoneIcon from "../assets/CardBag.png";
import EmailIcon from "../assets/CardBag.png";

const Contact = () => {
  return (
    <>  
    <section className="relative w-full -mt-12 mb-10 flex justify-center">
  <div
    className="relative bg-center bg-cover flex flex-col justify-start overflow-hidden rounded-[16px]"
    style={{
      backgroundImage:  `linear-gradient(rgba(2, 52, 54, 0.85), rgba(2, 52, 54, 0.85)),url(${BackgroundImage})`,
      width: "1600px",
      height: "982px",
      //backgroundColor: '#023436D1',
      opacity: "1",
      top: "20px",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/20 z-0 rounded-2xl"></div>

    {/* Navbar */}
    <div className="relative z-20 mt-8 sticky">
      <Navbar />
    </div>

    {/* Text + Form + Cards Container */}
    <div className="relative z-10 mt-12 flex-grow flex flex-col items-center text-center text-white px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl space-y-12">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Every Great Journey Starts with a Conversation
        </h3>
      </div>

      {/* Contact Content Section */}
      <div className="w-full max-w-6xl mt-16 flex flex-col lg:flex-row gap-12 items-start">

        {/* Form */}
        <form
  className="bg-white rounded-2xl p-8 flex flex-col gap-8 shadow-lg flex-1 text-gray-800 w-[824px] h-[425px] opacity-100 rotate-0"
>
  <div className="flex flex-col sm:flex-row gap-4">
    <div className="flex-1 flex flex-col">
      <label className="font-medium mb-2 flex start">Full Name</label>
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF4C29]"
        placeholder="Enter your full name"
      />
    </div>

    <div className="flex-1 flex flex-col">
      <label className="font-medium mb-2 flex start">Email Address</label>
      <input
        type="email"
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF4C29]"
        placeholder="Enter your email"
      />
    </div>
  </div>

  <div className="flex flex-col">
    <label className="font-medium mb-2 flex start">Message</label>
    <textarea
      className="border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-[#FF4C29]"
      placeholder="Write your message"
    ></textarea>
  </div>

  <button
    type="submit"
  className="w-[488px] h-[52px] mx-auto  rounded-[30px] rotate-0 opacity-100 gap-2 pt-[14px] pr-[20px] pb-[14px] pl-[20px] bg-[#023436] text-white font-semibold hover:bg-[#03504C] transition"
>
  
    Submit
  </button>
</form>


        {/* Cards */}
        <div className="flex flex-col gap-6 items-start">
          <div className="w-64 h-64 bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={CardImage1} alt="card1" className="w-full h-full object-cover" />
          </div>

          <div className="w-64 h-40 bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-evenly text-gray-700">
            <div className="flex items-center gap-3">
              <img src={PhoneIcon} alt="phone" className="w-5 h-5" />
              <p>+234 708 478 0390</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={EmailIcon} alt="email" className="w-5 h-5" />
              <p>Dadben08@gmail.com</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>



<CTA />
</>

 

    
  )
}

export default Contact