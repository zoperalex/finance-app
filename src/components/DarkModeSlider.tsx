import React, { useState } from "react";

const DarkModeSlider = () => {
  const [toggled, setToggled] = useState(false);

  const onToggle = () => {
    setToggled(!toggled);
  };

  return (
    <div className="flex items-center space-x-2 m-2">
      <input type="checkbox" id="toggle" className="hidden" />
      <label
        htmlFor="toggle"
        className={` w-12 h-6 rounded-full p-1 duration-300 ease-in-out flex items-center cursor-pointer ${
          toggled ? "bg-gray-500" : "bg-gray-300"
        }`}
        onClick={onToggle}
      >
        <div
          className={`w-5 h-5  rounded-full shadow-md transform duration-300 ease-in-out toggle-button ${
            toggled ? "translate-x-full bg-[#303746]" : "translate-x-0 bg-white"
          }`}
        ></div>
      </label>
    </div>
  );
};

export default DarkModeSlider;
