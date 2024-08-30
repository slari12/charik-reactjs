import React, { useState } from "react";

export default function Accordion() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div id="accordion-flush">
      <h2 id="accordion-flush-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
          onClick={() => toggleSection("accordion-flush-body-1")}
          aria-expanded={openSection === "accordion-flush-body-1"}
          aria-controls="accordion-flush-body-1"
        >
          <span className="lg:text-[21px] text-left">
            Which version of Hubspot license is required?
          </span>
          <svg
            className={`w-3 h-3 shrink-0 ${
              openSection === "accordion-flush-body-1" ? "" : "rotate-180"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-1"
        className={`transition-all duration-500 ${
          openSection === "accordion-flush-body-1" ? "block" : "hidden"
        }`}
        aria-labelledby="accordion-flush-heading-1"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="lg:text-[18px] mb-2 text-gray-500 dark:text-gray-400">
            Charik offers the most immersive integration in the market for
            Hubspot CRM. Our application is compatible with all versions of
            HubSpot, including Free, Starter, Pro, and Enterprise.
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
          onClick={() => toggleSection("accordion-flush-body-2")}
          aria-expanded={openSection === "accordion-flush-body-2"}
          aria-controls="accordion-flush-body-2"
        >
          <span className="lg:text-[21px] text-left">
            What is the minimum commitment to subscribe to Charik?
          </span>
          <svg
            className={`w-3 h-3 shrink-0 ${
              openSection === "accordion-flush-body-2" ? "" : "rotate-180"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-2"
        className={`transition-all duration-500 ${
          openSection === "accordion-flush-body-2" ? "block" : "hidden"
        }`}
        aria-labelledby="accordion-flush-heading-2"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="lg:-text-[18px] mb-2 text-gray-500 dark:text-gray-400">
            You have the flexibility to choose the Single user version with or
            without a commitment.
          </p>
          <p className="lg:-text-[18px] text-gray-500 dark:text-gray-400">
            Meanwhile, the Team version is exclusively available with an annual
            commitment.
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
          onClick={() => toggleSection("accordion-flush-body-3")}
          aria-expanded={openSection === "accordion-flush-body-3"}
          aria-controls="accordion-flush-body-3"
        >
          <span className="lg:text-[21px] text-left">
            I use a solution to reveal phone Numbers, are you compatible ?
          </span>
          <svg
            className={`w-3 h-3 shrink-0 ${
              openSection === "accordion-flush-body-3" ? "" : "rotate-180"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-3"
        className={`transition-all duration-500 ${
          openSection === "accordion-flush-body-3" ? "block" : "hidden"
        }`}
        aria-labelledby="accordion-flush-heading-3"
      >
        <div className="py-5 dark:border-gray-700">
          <p className="lg:text-[18px] mb-2 text-gray-500 dark:text-gray-400">
            Absolutely, we are fully compatible!
          </p>
          <p className="lg:text-[18px] mb-2 text-gray-500 dark:text-gray-400">
            At Charik, we understand the significance of GDPR compliance, which
            is why safeguarding your data while providing the essential features
            you need is our top priority. By partnering with suppliers such as
            Kaspr or Apollo, we act as a central hub, seamlessly integrating
            their services into Hubspot through Charik.
          </p>
        </div>
      </div>
    </div>
  );
}
