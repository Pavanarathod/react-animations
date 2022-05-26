import React from "react";
import FeatureReview from "./FeatureReview";

const Features = () => {
  return (
    <section>
      {/* flex container */}
      <div className="container mx-auto flex flex-col px-4 mt-10 space-y-12 lg:flex-row lg:space-y-0">
        <div className="flex flex-col space-y-12 lg:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center lg:text-left">
            Waht's different about Manage.
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue lg:text-left">
            Manage Provides all the functionality your team needs, whithout the
            complexity. Our software is tailor made for modren digital product
            teams.
          </p>
        </div>
        <div className="flex flex-col space-y-8 lg:w-1/2">
          <FeatureReview id_number={1} />
          <FeatureReview id_number={2} />
          <FeatureReview id_number={3} />
        </div>
      </div>
    </section>
  );
};

export default Features;
