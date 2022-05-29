import React from "react";

const Animation = () => {
  return (
    <div className="">
      <div class="transition delay-300 cursor-pointer duration-700 hover:scale-110 ease-in-out bg-blue-500  hover:bg-indigo-500  px-10 py-2 text-white">
        Save Changes
      </div>

      <div className="mt-10 flex items-center justify-center">
        <div className="group overflow-hidden relative">
          <img
            src="/images/CarOne.jpg"
            alt=""
            className="h-[300px] transition ease-in-out delay-100 cursor-pointer duration-1000 hover:scale-150"
          />
          <h1 className="absolute top-20 left-24 text-6xl font-black transition-all duration-700 ease-in-out delay-100 transform group-hover:scale-90 text-gray-50 opacity-80 group-hover:opacity-50">
            Ford
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Animation;
