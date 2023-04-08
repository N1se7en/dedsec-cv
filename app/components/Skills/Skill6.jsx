import React from "react";


export default function Skill({ directionLeft }) {
  return (
    <div className="group relative flex cursor-pointer">
      <img

        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDmtXxQAqHBMn5_ftyUxdqqJgoaZNWiW56Og2trsiNspGfrT8ny-_j-LDBdDtO4bAUlgs&usqp=CAU"
        className="rounded-full border border-gray-200 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32
      xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">70%</p>
        </div>
      </div>
    </div>
  );
}
