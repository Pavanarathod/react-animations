import { ChevronRightIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";

const Animation = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  console.log(loading);

  return (
    <div className="flex flex-col space-y-16 items-center justify-center min-h-screen py-10">
      <div class="transition delay-300 cursor-pointer duration-700 hover:scale-110 ease-in-out bg-blue-500  hover:bg-indigo-500  px-10 py-2 text-white">
        Save Changes
      </div>

      <div className="group overflow-hidden relative">
        <img
          src="/images/CarOne.jpg"
          alt=""
          className="h-[300px] transition ease-in-out delay-300 cursor-pointer duration-[3000ms] hover:scale-150"
        />
        <h1 className="absolute top-20 left-24 text-6xl font-black transition-all duration-[3000ms] ease-in-out delay-300 transform group-hover:scale-90 text-gray-50 opacity-50">
          Ford
        </h1>
      </div>
      <div className="group overflow-hidden relative">
        <img
          src="/images/CarTwo.jpg"
          alt=""
          className="h-[300px] transition ease-in-out delay-100 cursor-pointer duration-1000 hover:scale-150"
        />
        <h1 className="absolute top-20 left-24 text-6xl font-black transition-all duration-700 ease-in-out delay-100 transform group-hover:scale-90 text-gray-50 opacity-50">
          Benz
        </h1>
      </div>

      {/* input box */}
      <div className="">
        <input
          type="text"
          className="border ease-in-out border-gray-700 transition delay-100 duration-700"
        />
      </div>

      {/* ICON button */}
      <div className="space-y-5 py-5">
        <div className=" w-36 hover:w-44 cursor-pointer flex items-center justify-between bg-orange-400 rounded-md p-3 text-white transition-all duration-500 hover:bg-indigo-500 delay-200 ease-in-out">
          <p>Hello world</p>
          <ChevronRightIcon className="h-7" />
        </div>
        <div className=" w-36 hover:w-44 cursor-pointer flex items-center justify-between bg-orange-400 rounded-md p-3 text-white transition-all duration-500 hover:bg-indigo-500 delay-200 ease-in-out">
          <p>Hello world</p>
          <ChevronRightIcon className="h-7" />
        </div>
        <div className=" w-36 hover:w-44 cursor-pointer flex items-center justify-between bg-orange-400 rounded-md p-3 text-white transition-all duration-500 hover:bg-indigo-500 delay-200 ease-in-out">
          <p>Hello world</p>
          <ChevronRightIcon className="h-7" />
        </div>
        <div className=" w-36 hover:w-44 cursor-pointer flex items-center justify-between bg-orange-400 rounded-md p-3 text-white transition-all duration-500 hover:bg-indigo-500 delay-200 ease-in-out">
          <p>Hello world</p>
          <ChevronRightIcon className="h-7" />
        </div>
      </div>

      <div>
        <div
          className={`h-4 bg-indigo-600 transition-all delay-300 duration-500 hover:rotate-180 cursor-pointer ${
            loading ? "w-72 rotate-180" : "w-20"
          }`}
        ></div>
      </div>

      {/* LOADING CARD */}

      <div className="transition-all duration-700 delay-300 ease-in-out">
        {/* After data loading */}
        {!loading ? (
          <div className="animate-pulse bg-gray-200 text-white w-52 p-5 rounded-xl flex flex-col space-y-3 items-start">
            <div className="flex items-center space-x-3">
              <div className="px-6 py-4 bg-gray-100 text-white  rounded-full">
                <p></p>
              </div>
              <p className="h-5 bg-gray-100 w-28"></p>
            </div>
            <p className="h-5 bg-gray-100 w-32"></p>
          </div>
        ) : (
          <div className=" cursor-pointer bg-indigo-500 text-white w-52 p-5 rounded-xl flex flex-col space-y-3 items-start">
            <div className="flex items-center space-x-3">
              <div className=" px-4 py-2 bg-gray-100 text-black  rounded-full">
                <p>P</p>
              </div>
              <p>Pavan Kumar</p>
            </div>
            <p className="text-center">Software developer.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Animation;
