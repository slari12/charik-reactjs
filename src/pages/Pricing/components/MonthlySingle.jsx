import React from "react";

function MonthlySingle({ isToggled }) {
  return (
    <div className="w-full lg:max-w-[557px] lg:px-[36px] lg:pt-[70px] pt-8 pb-4 px-5 bg-white border border-gray-200 rounded-[24px] shadow sm:p-8">
      <div className="flex items-baseline text-gray-900 dark:text-white lg:mb-[28.8px] mb-0">
        <span className="text-3xl lg:text-[72px] font-semibold">$</span>
        <span className="text-5xl lg:text-[72px] font-extrabold tracking-tight">
          {isToggled ? "59" : "79"}
        </span>
        <span className="ms-1 text-[13px] font-normal text-gray-500 lg:text-[16px]">
          / month / user *
        </span>
      </div>
      <div className="mt-[20px] text-[13px] font-normal text-gray-500 lg:text-[18px] lg:mb-[40px] mb-0">
        For teams looking to grow their sales and increase their productivity
        with HubSpot CRM.
      </div>
      <ul role="list" className="space-y-2 my-7">
        <li className="flex items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#f65954"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="lg:text-[18px] text-[15px] leading-tight text-gray-500 dark:text-gray-400 ms-3">
            100 B2B email finder / month
          </span>
        </li>
        <li className="flex">
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#f65954"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="lg:text-[18px] text-[15px] leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Unlimited companies searches
          </span>
        </li>
        <li className="flex">
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#f65954"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="lg:text-[18px] text-[15px] leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Unlimited contacts searches
          </span>
        </li>
        <li className="flex">
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#f65954"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="line-through lg:text-[18px] text-[15px] leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Unlimited users
          </span>
        </li>
      </ul>
      <button
        type="button"
        className="text-white lg:text-[18px] focus:ring-4 lg:mt-[20px] mt-0 focus:outline-none gradient_icon font-medium rounded-[12px] text-sm px-5 lg:py-[20px] py-2.5 w-full text-center"
      >
        <p className="lg:mb-[6px] mb-0">Start free trial (14 days)</p>
        <p>No Credit Card</p>
      </button>
    </div>
  );
}
export default MonthlySingle;
