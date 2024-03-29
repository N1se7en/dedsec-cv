import React from "react";


export default function Skill({ directionLeft }) {
  return (
    <div className="group relative flex cursor-pointer">
      <img
       
        src="https://cdn-icons-png.flaticon.com/512/380/380005.png?w=740&t=st=1679378554~exp=1679379154~hmac=879c8ccb627a3ae54b5751cc7aa37101f9898f7a75aac5aedc3e29394af3a8ba"
        className="rounded-full border border-gray-200 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32
      xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">75%</p>
        </div>
      </div>
    </div>
  );
}
