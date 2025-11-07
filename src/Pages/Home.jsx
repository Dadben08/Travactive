import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import img1 from "../assets/Img1.png";
import img2 from "../assets/Img2.png";
import img3 from "../assets/Img3.png";
import img4 from "../assets/Img4.png";
import img5 from "../assets/Img5.png";
import img6 from "../assets/Img6.png";
import img7 from "../assets/Img7.png";
import img8 from "../assets/Image.png";
import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";
import MobileCarousel from "../Components/MobileCarousel";
import { travelCards, IconCard } from "../assets/travelCards.js";

const Home = () => {
  const text = " Smarter Travel Decisions, Powered by AI";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="min-h-screen -mt-6 bg-[#023436] text-white relative overflow-hidden">
      {/* Navbar */}
      <div className="sticky top-0 left-0 w-full z-50 bg-[#023436] px-4 sm:px-6 md:px-10 lg:px-16 py-4 sm:py-6">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative text-white px-8px sm:px-6 md:px-10 lg:px-16 pt-[120px] pb-12 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
        {/* Background Carousel for mobile & tablet only */}
        <MobileCarousel images={[img1, img2, img3, img4, img5, img6, img7]} />

        {/* Left side — Text content */}
        <div className="relative w-full lg:w-1/2 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start z-10">
          <h1 className="font-outfit text-[28px] sm:text-[36px] md:text-[44px] lg:text-[46px] leading-[38px] sm:leading-[50px] md:leading-[60px] font-bold tracking-[0.06em]">
            {displayedText}
            <span className="ml-1 text-[#FF4C29] animate-blink">|</span>
          </h1>

          <p className="w-full md:w-[571px] text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] tracking-[0.06em] text-gray-200 max-w-md text-center lg:text-left">
            An AI-powered hub for real-time travel updates, visa rules,
            study-abroad insights, and global advisories designed to guide both
            students and travelers toward smarter journeys.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <button className="border border-[#ffffff] px-6 py-3 rounded-full font-semibold text-sm sm:text-base transform transition duration-300 hover:-translate-y-1 hover:bg-[#FF4C29] hover:text-white">
              Unlock Travel Insights
            </button>
            <button className="border border-[#ffffff] bg-transparent px-6 py-3 rounded-full font-semibold text-sm sm:text-base transform transition duration-300 hover:-translate-y-1 hover:bg-[#FF4C29] hover:text-white">
              Get Started
            </button>
          </div>
        </div>

        {/* Right side — Image grid (visible only on large screens) */}
        <div className="hidden lg:grid lg:w-1/2 grid-cols-2 gap-6 mt-14">
          {/* Group 1 */}
          <div className="relative ml-10 transform transition-transform duration-300 hover:-translate-y-2">
            <img
              src={img1}
              alt="Travel 1"
              className="w-[240px] xl:w-[256px] h-[280px] xl:h-[300px] object-cover rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:brightness-110"
            />
            <img
              src={img2}
              alt="Travel 2"
              className="absolute top-16 -left-14 w-[180px] xl:w-[214px] h-[120px] xl:h-[140px] object-cover rounded-lg shadow-md transition-all duration-300 hover:scale-110 hover:brightness-110"
            />
          </div>

          {/* Group 2 */}
          <div className="relative mt-12 transform transition-transform duration-300 hover:-translate-y-2">
            <img
              src={img4}
              alt="Travel 4"
              className="w-[300px] xl:w-[363px] h-[270px] xl:h-[306px] object-cover rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:brightness-110"
            />
            <img
              src={img3}
              alt="Travel 3"
              className="absolute -top-10 left-6 w-[80px] xl:w-[90px] h-[120px] xl:h-[142px] object-cover rounded-lg shadow-md transition-all duration-300 hover:scale-110 hover:brightness-110"
            />
          </div>

          {/* Group 3 */}
          <div className="relative transform transition-transform duration-300 hover:-translate-y-2">
            <img
              src={img5}
              alt="Travel 5"
              className="w-[300px] xl:w-[354px] h-[260px] xl:h-[288px] object-cover rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:brightness-110"
            />
          </div>

          {/* Group 4 */}
          <div className="relative mt-12 transform transition-transform duration-300 hover:-translate-y-2">
            <img
              src={img6}
              alt="Travel 6"
              className="w-[240px] xl:w-[254px] h-[240px] xl:h-[262px] object-cover rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:brightness-110"
            />
            <img
              src={img7}
              alt="Travel 7"
              className="absolute top-12 left-28 w-[180px] xl:w-[214px] h-[120px] xl:h-[140px] object-cover rounded-xl shadow-md border border-yellow-400 transition-all duration-300 hover:scale-110 hover:brightness-110"
            />
          </div>
        </div>
      </section>

      {/* Divider Image */}
      <div>
        <img
          src={img8}
          alt="img8"
          className="hidden lg:block w-full h-[100px] xl:h-[55px] object-cover opacity-60 rounded-[12px]"
        />
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-slate-50 px-4 sm:px-8 md:px-10 lg:px-20 py-10 text-slate-900">
        <hr className="w-full mb-8" />

        {/* Intro Text */}
        <section className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6 mb-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug md:w-1/2">
            From Students to Explorers <br className="hidden md:block" /> We’ve
            Got You Covered
          </h3>
          <p className="text-slate-600 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed md:w-1/2">
            Whether you’re a student navigating study-abroad rules or a traveler
            seeking real-time updates, our AI-powered hub delivers the insights
            you need — anytime, anywhere.
          </p>
        </section>

        {/* Card Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-500 ease-in-out"
            >
              <div className="overflow-hidden rounded-[15px]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[480px] object-cover transition-transform duration-500 ease-in-out hover:scale-110 rounded-[15px]"
                />
              </div>
            </div>
          ))}
        </section>

        {/* Icon Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {IconCard.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center p-6"
            >
              {card.icon && <div className="text-4xl mb-3">{card.icon}</div>}
              {card.img && (
                <img
                  src={card.img}
                  alt={card.title || "Card image"}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-4"
                />
              )}
              {card.desc ? (
                <div
                  className="text-slate-600 text-sm sm:text-base flex-grow"
                  dangerouslySetInnerHTML={{ __html: card.desc }}
                />
              ) : (
                <>
                  <h4 className="text-lg font-semibold mb-2 mt-2">
                    {card.title}
                  </h4>
                  <p className="text-slate-600 text-sm flex-grow">
                    {card.text}
                  </p>
                </>
              )}
            </div>
          ))}
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-16 mt-16">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-[14px] font-medium text-[#023436]">
              Testimonials
            </h2>
            <div className="mt-2 mb-12">
              <h3 className="font-semibold text-2xl sm:text-3xl md:text-[40px] leading-[52px] text-[#023436] mb-3">
                A New Platform, A Growing Community
              </h3>
              <p className="font-normal text-[15px] sm:text-[16px] leading-[24px] text-gray-600 max-w-3xl mx-auto">
                We’re just getting started, but the excitement is real. Read
                what early users are saying as we reshape how travelers and
                students access the information they need.
              </p>
            </div>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[Frame2, Frame1, Frame2, Frame1].map((img, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition-all duration-300 relative"
                >
                  <h5 className="text-[#023436] font-semibold text-sm mb-3 absolute top-4 left-6">
                    SATISFACTION
                  </h5>
                  <p className="text-gray-700 italic mt-10 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium excepturi minima sapiente fugit deleniti.
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      src={img}
                      alt="user"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-[#023436]">
                        {["Sarah M.", "David K.", "Anita O.", "John P."][i]}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {
                          [
                            "International Student",
                            "Frequent Traveler",
                            "Graduate Student",
                            "Digital Nomad",
                          ][i]
                        }
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="bg-[#FF4C29] text-white text-center py-12 rounded-2xl shadow-md max-w-6xl mx-auto px-4 mt-10 sm:mt-16 md:mt-20">
              <h3 className="font-[Outfit] font-semibold text-2xl sm:text-3xl md:text-[40px] lg:text-[48px] leading-tight md:leading-[54px] lg:leading-[58px] max-w-[792px] mx-auto mb-4">
                Don’t Just Travel — Travel Informed
              </h3>

              <p className="text-sm sm:text-base md:text-[16px] leading-relaxed md:leading-[24px] font-normal max-w-2xl mx-auto mb-6">
                Get AI-powered insights, real-time advisories, and simplified
                updates that help you make smarter choices—whether you’re
                studying abroad or exploring the world.
              </p>

              <button className="bg-[#005A58] text-white text-[15px] sm:text-[16px] font-[Sora] font-semibold w-[180px] sm:w-[200px] md:w-[229px] px-6 py-3 rounded-full transition duration-300 hover:bg-[#007A76] hover:scale-105">
                Get Started Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
