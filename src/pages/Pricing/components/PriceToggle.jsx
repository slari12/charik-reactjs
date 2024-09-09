import React from "react";

function PriceToggle({ isToggled, setIsToggled }) {
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="flex flex-col space-evenly items-center ">
      <label className="inline-flex items-center cursor-pointer gap-5 lg:mt-[0px] mt-[-10px] mb-[25px]">
        <span className="text-[18px] text-gray-900 text-center">Monthly</span>
        <input
          type="checkbox"
          checked={isToggled}
          onChange={handleToggle}
          value=""
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-[#f65954] rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#f65954]"></div>
        <div className="lg:flex items-center lg:gap-[10px]">
          <p className="text-[18px] text-gray-900 text-center">Annual</p>
          <p className="text-[12px] text-[#f65954] font-bold text-center mt-[-5px]">
            25% OFF
          </p>
        </div>
      </label>
    </div>
  );
}
export default PriceToggle;
