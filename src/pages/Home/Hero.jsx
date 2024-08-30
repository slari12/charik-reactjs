import React from "react";
import CompanyLogo from "../../assets/charik-logo-transparent.webp";

const Home = () => {
  return (
    <div className="lg:flex items-center justify-between container ">
      <img src={CompanyLogo} alt="" className="hidden_pc" />
      <div className="lg:w-[562px] content_section">
        <h1 className="lg:text-[55px] font-bold section_title">
          Discover the power of Charik
        </h1>
        <p className="section_text mb-[24px]">
          Dive into our list of features and see how Charik can transform your
          sales strategy, making every interaction more impactful and every
          decision more informed. Prepare to redefine what you thought was
          possible with HubSpot CRM.
        </p>
        <button className="default_btn">Live Demo</button>
      </div>
      <div className="hidden_h5">
        <img src={CompanyLogo} alt="" />
      </div>
    </div>
  );
};

export default Home;
