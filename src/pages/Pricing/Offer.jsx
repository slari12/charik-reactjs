import React from "react";
import MonthlySingle from "./components/MonthlySingle";
import TeamPrice from "./components/TeamPrice";
import PriceToggle from "./components/PriceToggle";

export default function Offer() {
  return (
    <div className=" lg:py-[100px] py-[28px]">
      <div className="lg:flex container justify-evenly items-center">
        <div className="lg:mt-0 mt-[48px]">
          <p className="text-center lg:text-[72px] text-[43px] lg:font-semibold lg:mb-[0px] mb-[30px]">
            Single user
          </p>
          <PriceToggle />
          <MonthlySingle />
          <h1 className="text-center mt-[24px] text-[#6a6d77]">
            * Billed yearly
          </h1>
        </div>
        <div className="lg:mt-0 mt-[48px]">
          <p className="text-center lg:text-[72px] text-[43px] lg:font-semibold lg:mb-[50px] mb-[30px]">
            Team
          </p>
          <TeamPrice />
          <h1 className="text-center mt-[24px]  text-[#6a6d77]">
            * Billed yearly
          </h1>
        </div>
      </div>
    </div>
  );
}
