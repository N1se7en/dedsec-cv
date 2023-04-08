import React from "react";
import { PhoneIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center h-screen">
        <h1 className="absolute top-14 uppercase tracking-[20px] text-2xl">
          Contact
        </h1>

        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
                Want to reach me? Use the below {" "} 
                <span className="decoration-sky-500 underline">INFO</span>
            </h4>
          <div className="flex items-center space-x-5 justify-center ">
            <PhoneIcon className="text-sky-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl">+8801630950868</p>
          </div>
          <div className="flex items-center space-x-5 justify-center ">
            <EnvelopeIcon className="text-lime-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl">nahianashfak@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center ">
            <MapIcon className="text-red-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl ">Mayakanon Cottage, Dhaka</p>
          </div>
        </div>
      </div>
    </>
  );
}
