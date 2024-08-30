import React from "react";
import Accordion from "../../../components/Accordion";

export default function Faq() {
  return (
    <div className="bg-[#FFF5F2] lg:pt-[50px] pt-[50px] pb-[50px]">
      <div className=" container">
        <div className=" content_section">
          <p className="section_text mb-[24px] text-center">
            If you still need more information
          </p>
          <h1 className="lg:text-[55px] font-bold section_title text-center">
            Frequently Asked Questions
          </h1>
          <div className="title_divider"></div>
        </div>
        <div className="bg-white w-full lg:max-w-[1138px] mx-auto rounded-[20px] py-[20px] px-[30px] lg:px-[60px]">
          <Accordion />
        </div>
      </div>
    </div>
  );
}
