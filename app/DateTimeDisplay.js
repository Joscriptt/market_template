"use client";

import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div
      className={` flex flex-col items-center  lg:mx-6  mx-16 pl-0   ml-0 mt-6 lg:mt-0 ${
        isDanger ? "text-red-500   " : "dark:text-white "
      }`}
    >
      <p className="text-xl font-InterBold">{value}</p>
      <span className="text-xs font-InterMedium">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
