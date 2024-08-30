import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
  return (
    <div className="container">
      <h1 className="lg:text-[55px] font-bold section_title text-center">
        Discover Charik Email Finder
      </h1>
      <div className="lg:flex lg:mt-[50px] justify-center items-center gap-[30px]">
        <img
          src="https://www.charik.fr/hs-fs/hubfs/email%20finder-min.png?width=920&name=email%20finder-min.png"
          alt=""
        />
        <div className="text-center lg:w-full lg:max-w-[653.83px]">
          <h1 className="lg:text-[43px] mb-[24px] text-[28px] font-semibold leading-[32px] lg:leading-[52px] lg:font-900">
            Discover your contacts professional emails with just a few clicks
          </h1>
          <p className="text-[#6a6d77] text-[18px] font-light">
            Easily find your contacts' professional emails by simply inputting
            their first name, last name, and company.
          </p>
          <br />
          <p className="text-[#6a6d77] text-[18px] leading-[24px] font-light">
            Stop wasting time searching for your contacts' emails.
          </p>
          <br />
          <p className="text-[#6a6d77] text-[18px] leading-[24px] font-light">
            Try <b className="font-bold">Charik Email Finder</b> and see how our
            tool can revolutionize the way you work.
          </p>
          <div className="flex card_gradient justify-between items-center p-[20px] rounded-[10px] lg:my-[40px] my-[30px]">
            <div className="flex text-left item-center flex-col">
              <p className="font-bold text-[20px]">Try Charik</p>
              <p className="font-light text-[14px]">14-day Free Trial</p>
            </div>
            <div className="flex self-center">
              <FontAwesomeIcon icon={faArrowRight} style={{ color: "#fff" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
