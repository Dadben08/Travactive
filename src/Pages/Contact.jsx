import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="bg-white text-[#023436] px-6 sm:px-10 lg:px-20 py-16 space-y-16">
  {/* Behind Travactiv */}
  <div className="max-w-5xl mx-auto text-center md:text-left">
    <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Behind Travactiv</h2>
    <p className="text-gray-700 leading-relaxed mb-4">
      At Travactiv, we believe travel decisions should be guided by clarity, not confusion. 
      Built with the modern traveler in mind, our platform blends trusted global sources with 
      AI-powered insights—so you get accurate, timely, and practical information without the noise.
    </p>
    <p className="text-gray-700 leading-relaxed">
      We’re not just another travel platform; we’re your partner in navigating visas, rules, 
      advisories, and opportunities. Whether you’re a student chasing dreams abroad or a traveler 
      seeking safe, confident journeys, Travactiv was designed to put trustworthy information at your fingertips.
    </p>
  </div>

  {/* Why Choose Travactiv */}
  <div className="max-w-5xl mx-auto text-center md:text-left">
    <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Why Choose Travactiv</h2>
    <p className="text-gray-700 leading-relaxed">
      At Travactiv, we go beyond ordinary travel updates. Every piece of information you see is AI-verified, 
      sourced from credible global channels, and tailored to your journey. No noise, no guesswork—just the 
      clarity you need to make informed decisions. Whether you’re navigating visa requirements, checking 
      safety advisories, or planning your next adventure, Travactiv ensures you stay one step ahead.
    </p>
  </div>

  {/* CTA Section */}
  <div className="bg-[#FF4C29] text-white text-center py-12 rounded-2xl shadow-md max-w-6xl mx-auto">
    <h3 className="text-3xl sm:text-4xl font-semibold mb-4">
      Don’t Just Travel — Travel Informed
    </h3>
    <p className="text-base sm:text-lg max-w-2xl mx-auto mb-6">
      Get AI-powered insights, real-time advisories, and simplified updates that help you make 
      smarter choices—whether you’re studying abroad or exploring the world.
    </p>
    <button className="bg-white text-[#FF4C29] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
      Get Started Now
    </button>
  </div>

  {/* Footer */}
  <footer className="bg-[#023436] text-white pt-12 pb-8 mt-12 rounded-t-2xl">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Travactiv Info */}
      <div>
        <h4 className="text-2xl font-semibold mb-3">Travactiv</h4>
        <p className="text-sm text-gray-300">
          An AI-powered hub for real-time travel updates, visa rules, study-abroad insights, 
          and global advisories — designed to guide both students and travelers toward smarter journeys.
        </p>
      </div>

      {/* Sitemap */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Sitemap</h4>
        <ul className="space-y-2 text-gray-300">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Our Newsletter</h4>
        <p className="text-sm text-gray-300 mb-3">
          Enter your email address, and we’ll send you more information.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded-md text-black outline-none"
          />
          <button className="bg-[#FF4C29] px-4 py-2 rounded-md hover:bg-opacity-90 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Contact</h4>
        <ul className="space-y-2 text-gray-300">
          <li>help@travactiv.com</li>
          <li>info@travactiv.com</li>
        </ul>
      </div>
    </div>

    <hr className="border-gray-600 my-8" />
    <p className="text-center text-gray-400 text-sm">
      © 2025, All Rights Reserved. Travactiv
    </p>
  </footer>
</section>

    </div>
  )
}

export default Contact