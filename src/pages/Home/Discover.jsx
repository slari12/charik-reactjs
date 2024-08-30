import React from "react";
import PriceGrid from "../../components/PriceGrid";

const Discover = () => {
  return (
    <div className=" container">
      <div className=" content_section">
        <h1 className="lg:text-[55px] font-bold section_title text-center">
          Discover our key features
        </h1>
        <p className="section_text mb-[24px] text-center">
          Our clients save an average of 8 hours per month by connecting Charik
          to HubSpot, thanks to our advanced features, which are often unique at
          this level of integration with your favorite CRM.
        </p>
        <div className="title_divider"></div>
      </div>
      <PriceGrid />
    </div>
  );
};

export default Discover;
