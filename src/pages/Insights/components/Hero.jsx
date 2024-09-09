import React from "react";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
  return (
    <div className="container">
      <div className="lg:flex lg:my-[50px] justify-center items-center gap-[90px]">
        <img
          src="https://www.charik.fr/hs-fs/hubfs/hubspot%20crm%20gratuit%20version%20charik%20%20400x400-min.png?width=800&name=hubspot%20crm%20gratuit%20version%20charik%20%20400x400-min.png"
          alt=""
          className="rounded-[20px] lg:mt-0 mt-[30px]"
        />
        <div className="text-center py-10 lg:py-0">
          <div className="white_icon icon mx-auto outer_header">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              size="xl"
              style={{ color: "#f65c5c" }}
            />
          </div>
          <p className="text-[#6a6d77] py-[30px] lg:text-[32px] text-[18px] font-light w:full lg:max-w-[802px]">
            <blockquote className="xlarge-text important-text">
              "Our goal is to position your sales team for success quarter after
              quarter by enabling them to focus on high-value tasks and
              supporting their mental health to ensure they thrive both
              professionally and personally."
            </blockquote>
          </p>
          <div className="bg-white outer_header rounded-full py-[13.86px] text-center max-w-[260px] mx-auto">
            Jimmy, CEO @ Charik
          </div>
        </div>
      </div>
    </div>
  );
}
