import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Curve() {
  return (
    <div className="curve relative">
      <div className=" container compact_card lg:gap-[200px]">
        <h1 className="text-white md:mb-0 md:text-[43px] lg:font-semibold text-[28px] mb-[24px]">
          Need a Demo?
        </h1>
        <div className=" flex card_avatar">
          <div className="flex">
            <div className="avatar">
              <img
                src="https://i.pravatar.cc/70?img=58"
                alt=""
                className="rounded-full lg:mr-[20px]"
              />
            </div>
            <div className="flex self-center flex-col">
              <p className="text-[#262626] ">Have you seen Jimmy?</p>
              <p className="text-[#666e75]">See his agenda...</p>
            </div>
          </div>
          <div className="flex self-center">
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#666e75" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
