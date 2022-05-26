import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto mt-10 items-center px-6 space-y-0 flex flex-col-reverse lg:flex-row lg:space-y-0">
        <div className="flex flex-col mb-32 space-y-12 lg:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center lg:text-5xl md:text-left">
            Bring everyones together to build better produdct
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue lg:text-left">
            Mnage makes it simple for software teams to plan day-to-day tasks
            while keeping tthe larger team goals in view
          </p>

          <button className="p-3 px-6 text-white bg-brightRed rounded-full self-baseline hover:bg-brightRedLight">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2 lg:flex lg:justify-end lg:items-end">
          <img src="/images/illustration-intro.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
