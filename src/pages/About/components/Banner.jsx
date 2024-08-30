import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:h-[60vh] bg-gradient-to-r from-orange-400 to-pink-500 text-white text-center p-8">
      <div className="container">
        <p className="uppercase font-medium tracking-wider mb-2">About us</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Make Sales Intelligence available for every HubSpot Users
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4">
          Empower every HubSpot user with Sales Intelligence to revolutionize
          sales strategy and drive success.
        </p>
        <p className="text-sm md:text-base lg:text-lg">
          Gain valuable insights, identify key opportunities, and make informed
          decisions for increased sales and growth.
        </p>
      </div>
    </div>
  );
};

export default Banner;
