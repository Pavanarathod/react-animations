import React from "react";
import users from "../utils/users";

const Review = () => {
  return (
    <section className="mt-32">
      <div className="container mx-auto px-4 flex flex-col">
        <h1 className="text-center font-bold text-4xl">
          What's different about Manage?
        </h1>
        <div className="flex flex-col space-y-16 lg:space-y-0 lg:flex-row lg:space-x-6 mt-24">
          {users.map((item) => (
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 lg:w-1/3">
              <img src={item.image} alt="" className="w-16 -mt-14" />
              <h5 className="text-lg font-bold">{item.name}</h5>
              <p className="text-sm text-darkGrayishBlue text-center">
                "{item.comment}"
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center my-10">
          <button className="p-3 px-10 text-white bg-brightRed rounded-full self-baseline hover:bg-brightRedLight">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
