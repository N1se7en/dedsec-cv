import React from "react";


export default function Skill({ directionLeft }) {
  return (
    <div className="group relative flex cursor-pointer">
      <img

        src="data:image/png;base64,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"
        className="rounded-full border border-gray-200 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32
      xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">45%</p>
        </div>
      </div>
    </div>
  );
}
