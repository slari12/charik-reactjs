import React from "react";

export default function TeamPrice() {
  return (
    <div class="w-full lg:max-w-[557px] lg:px-[36px] lg:pt-[70px] pt-8 pb-4 px-5 bg-white border border-gray-200 rounded-[24px] shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex items-baseline text-gray-900 lg:mb-[28.8px] mb-0">
        <span class="text-3xl lg:text-[72px] font-semibold">$</span>
        <span class="text-5xl lg:text-[72px] font-extrabold tracking-tight">
          490
        </span>
        <span class="ms-1 text-[13px] font-normal text-gray-500 lg:text-[16px]">
          / Month + unlimited users *
        </span>
      </div>
      <div class="mt-[20px] text-[13px] font-normal text-gray-500 lg:text-[18px] lg:mb-[40px] mb-0">
        For teams looking to grow their sales and increase their productivity
        with HubSpot CRM.
      </div>
      <ul role="list" class="space-y-2 my-7">
        <li class="flex">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#f65954"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span class="lg:text-[18px] text-[15px] leading-tight text-gray-500 dark:text-gray-400 ms-3">
            10000 B2B email finder to share
          </span>
        </li>
        <li class="flex">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#f65954"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span class="lg:text-[18px] text-[15px] leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Unlimited company searches
          </span>
        </li>
        <li class="flex">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#f65954"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span class="lg:text-[18px] text-[15px] leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Unlimited contact searches
          </span>
        </li>
        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#f65954"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span class="lg:text-[18px] text-[15px] leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Unlimited users
          </span>
        </li>
      </ul>
      <button
        type="button"
        class="text-white lg:text-[18px] focus:ring-4 lg:mt-[20px] mt-0 focus:outline-none lg:py-[20px] gradient_border font-medium rounded-[12px] text-sm px-5 py-2.5  w-full text-center"
      >
        <p className="lg:mb-[6px] mb-0">Start free trial (14 days)</p>
        <p>No Credit Card</p>
      </button>
    </div>
  );
}
