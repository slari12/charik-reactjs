import React from "react";
import MonthlySingle from "./components/MonthlySingle";
import TeamPrice from "./components/TeamPrice";

export default function Offer() {
  return (
    <div className="container lg:py-[130px] py-0">
      <div className="lg:flex justify-evenly items-center">
        <div>
          <p className="text-center lg:text-[72px] lg:font-semibold lg:mb-[50px] mb-0">
            Single User
          </p>
          <MonthlySingle />
          <h1 className="text-center mt-[24px] text-[#6a6d77]">
            * Billed yearly
          </h1>
        </div>
        <div>
          <p className="text-center lg:text-[72px] lg:font-semibold lg:mb-[50px] mb-0">
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
