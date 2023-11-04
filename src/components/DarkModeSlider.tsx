import React, { useEffect, useState } from "react";

interface Props {
  toggleDarkMode: (value: boolean) => void;
  darkMode: boolean;
}

const DarkModeSlider = ({ toggleDarkMode, darkMode }: Props) => {
  const onToggle = () => {
    toggleDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center space-x-2 p-2">
      <input type="checkbox" id="toggle" className="hidden" />
      <label
        htmlFor="toggle"
        className={` w-12 h-6 rounded-full p-1 duration-300 ease-in-out flex items-center cursor-pointer ${
          darkMode ? "bg-slate-400" : "bg-slate-200"
        }`}
        onClick={onToggle}
      >
        <div
          className={`w-5 h-5  rounded-full shadow-md transform duration-300 ease-in-out toggle-button bg-white dark:bg-[#303746] ${
            darkMode ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
      </label>
    </div>
  );
};

export default DarkModeSlider;
