import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../assets/TravactiveLogo.png";
import RightImage from "../assets/plane.jpg";
import GoogleIcon from "../assets/google.png";
import { Link } from "react-router-dom";

const inputWrapperClass = `
  w-[478px]
  h-[42px]
  flex items-center
  gap-[10px]
  bg-[#FFFFFF]
  rounded-[24px]
  px-[23px]
  py-[13px]
  opacity-100
  shadow-[0_2px_12px_0.5px_#031A0914]
`;

const inputFieldClass = `
  flex-1
  bg-transparent
  outline-none
  font-[Inter]
  font-normal
  text-[14px]
  leading-[16px]
  text-[#0E0E0E]
  placeholder:text-[#9CA3AF]
`;

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill all the fields before registering.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // If validation passes, show popup
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      {/* Main Layout Container */}
      <div className="relative w-[1488px] h-[958px] rounded-[20px] bg-[#F6F6F6] overflow-hidden flex flex-col lg:flex-row items-center justify-between px-12 lg:px-20 py-12 gap-12">
        {/* Left side */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Logo */}
          <Link to="/" className="absolute top-8 left-27 z-10">
            <img src={Logo} alt="Travactive Logo" className="w-32 h-auto cursor-pointer" />
          </Link>

          {/* Heading */}
          <h2 className="w-[478px] font-[Outfit] font-semibold text-[24px] leading-[36px] text-[#212322] ml-8">
            Your First Step to Smarter Travel
          </h2>

          {/* Subtext */}
          <p className="w-[478px] font-[Inter] text-[16px] text-[rgba(51,51,51,0.72)] ml-8">
            Sign up to access AI-powered updates, trusted insights, and tools designed to make every journey easier
          </p>

          {/* Google Button */}
          <button className="w-[478px] h-[44px] flex items-center justify-center gap-[10px] px-[108px] py-[10px] bg-white rounded-[24px] shadow-[0_4px_12px_0_#0000001A] font-[Inter] font-medium text-[#212322] hover:bg-gray-50 transition ml-8">
            <img src={GoogleIcon} alt="Google" className="w-[20px] h-[20px]" />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="w-[446px] h-[24px] flex items-center gap-[14px] opacity-100 ml-9">
            <hr className="flex-1 border-gray-300" />
            <span className="w-[16px] h-[24px] font-['Public_Sans'] font-bold text-[16px] leading-[24px] text-gray-500 opacity-100 text-center flex items-center justify-center">
              or
            </span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-[478px] h-[476.15px] flex flex-col gap-[18px] ml-8">
            {/* Full Name */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-[Inter] font-semibold text-[16px] leading-[16px] text-[#0E0E0E]">Full Name</label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className={inputFieldClass}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-[Inter] font-semibold text-[16px] leading-[16px] text-[#0E0E0E]">Email Address</label>
              <div className={inputWrapperClass}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={inputFieldClass}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-[Inter] font-semibold text-[16px] leading-[16px] text-[#0E0E0E]">Password</label>
              <div className={inputWrapperClass}>
                <input
                  type="password"
                  placeholder="Create a password"
                  className={inputFieldClass}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-[Inter] font-semibold text-[16px] leading-[16px] text-[#0E0E0E]">Confirm Password</label>
              <div className={inputWrapperClass}>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className={inputFieldClass}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 text-[#023436] bg-danger" required />
              <span className="font-[Inter] text-[9.42px] leading-[140%] tracking-[0%]">
                I agree to the{" "}
                <Link to="/terms" className="font-[Inter] font-bold text-[9.42px] leading-[140%] tracking-[0%]">
                  Terms & Conditions
                </Link>
              </span>
            </label>

            {/* Register Button */}
            <button
              type="submit"
              className="mt-4 w-full py-3 bg-[#023436] text-white rounded-[30px] font-semibold hover:bg-[#029e95] transition"
            >
              Register Now
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600 mt-2">
              Been here before?{" "}
              <Link to="/login" className="text-[#023436] font-medium hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>

        {/* Right side */}
        <div className="flex-1 flex justify-center items-center mr-[-46px]">
          <img src={RightImage} alt="Register Illustration" className="w-[730px] h-[918px] rounded-[18px] object-cover" />
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[1.5px] z-50">
          <div className="bg-white rounded-[16px] p-8 w-[400px] text-center shadow-lg">
            <h3 className="text-[#023436] font-bold text-xl mb-2">Registration Successful!</h3>
            <p className="text-gray-700 mb-4">Your account has been created successfully.</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-6 py-2 bg-[#023436] text-white rounded-[30px] font-semibold hover:bg-[#029e95] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
