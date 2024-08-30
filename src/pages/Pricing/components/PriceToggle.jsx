import React from "react";

export default function PriceToggle() {
  return (
    <div className="flex flex-col space-evenly items-center ">
      <label class="inline-flex items-center cursor-pointer gap-5 lg:mt-[0px] mt-[-10px] mb-[25px]">
        <span class="text-[18px] text-gray-900 text-center">Monthly</span>
        <input type="checkbox" value="" class="sr-only peer" />
        <div class="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#f65954]"></div>
        <div className="lg:flex items-center lg:gap-[10px]">
          <p class="text-[18px] text-gray-900 text-center">Annual</p>
          <p class="text-[12px] text-[#f65954] font-bold text-center mt-[-5px]">
            25% OFF
          </p>
        </div>
      </label>
    </div>
  );
}
