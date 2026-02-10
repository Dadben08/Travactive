
import { useState, useEffect } from "react";

const Toggle = ({ defaultChecked = false, onChange }) => {
  const [isOn, setIsOn] = useState(defaultChecked);

  useEffect(() => {
    setIsOn(defaultChecked);
  }, [defaultChecked]);

  const handleToggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isOn}
        onChange={handleToggle}
      />

      <div
        className={`
          w-14 h-7
          rounded-full
          relative
          transition-colors
          ${isOn ? "bg-[#023436]" : "bg-gray-300"}
        `}
      >
        <div
          className={`
            absolute
            top-[2px]
            w-6 h-6
            bg-white
            rounded-full
            transition-all duration-200
            ${isOn ? "left-[26px]" : "left-[2px]"}
          `}
        ></div>
      </div>
    </label>
  );
};

export default Toggle;
