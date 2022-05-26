import React from "react";

const FeatureReview = ({ id_number }) => {
  return (
    <div className="flex flex-col space-y-3 lg:space-y-0 lg:space-x-6 lg:flex-row">
      <div className="rounded-l-full bg-brightRedSupLight lg:bg-transparent">
        <div className="flex items-center space-x-2">
          <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
            {id_number}
          </div>
          <h3 className="text-base font-bold lg:mb-4 lg:hidden">
            Track compony-wide progress
          </h3>
        </div>
      </div>

      <div>
        <h3 className="hidden mb-4 text-lg font-bold lg:block">
          Track compony-wide progress.
        </h3>
        <p className="text-darkGrayishBlue">
          See how you'r day-to-day tasks fit into the wider vision. Go from
          tracking progress at the milestone level all the way done to the
          smallest of detaiils. Never lose sight of the bigger picture again.
        </p>
      </div>
    </div>
  );
};

export default FeatureReview;
