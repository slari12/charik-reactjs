import React from "react";
import {
  faLinkedinIn,
  faFacebookF,
  faXTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div>
      <div className="bg-white lg:pt-[96px] lg:pb-[60px]">
        <div className=" py-[18px] px-[24px]">
          <div className="flex justify-between items-flex-start header">
            <div className="links lg:px-18px">
              <p className="text-[#222326] lg:text-[21px] lg:font-light lg:mb-[19px]">
                About Charik
              </p>
              <p className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[16px] lg:mb-[24px]">
                We streamline data entry and information gathering for sales
                reps to focus on client engagement and closing deals.
              </p>
              <div className="lg:flex lg:gap-[30px] mt-[30px] ">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="2xl"
                  style={{ color: "#f65954" }}
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  size="2xl"
                  style={{ color: "#f65954" }}
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2xl"
                  style={{ color: "#f65954" }}
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="2xl"
                  style={{ color: "#f65954" }}
                />
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="2xl"
                  style={{ color: "#f65954" }}
                />
              </div>
            </div>
            <div className="links lg:px-18px">
              <p className="text-[#222326] lg:text-[21px] lg:font-light lg:mb-[19px]">
                Features
              </p>
              <p className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0">
                Email Finder
              </p>
              <p className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0">
                Company Finder
              </p>
              <p className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0">
                KeyPeople Search
              </p>
            </div>
            <div className="links lg:px-18px">
              <p className="text-[#222326] lg:text-[21px] lg:font-light lg:mb-[19px]">
                Resources
              </p>
              <p className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0">
                Read our blog
              </p>
              <p className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0">
                Partners
              </p>
              <p className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0">
                Ebook and Guides
              </p>
              <p className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0">
                Downloads
              </p>
              <p className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0">
                Knowledge based
              </p>
            </div>
            <div className="links lg:px-18px">
              <p className="text-[#222326] lg:text-[21px] lg:font-light lg:mb-[19px]">
                Company
              </p>
              <p className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0">
                Charik Software
              </p>
              <p className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0">
                About us
              </p>
              <p className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0">
                Contact us
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="flex justify-between header footer lg:text-[16px] text-[#222326]">
          <p>Copyright © 2024 Charik</p>
          <div className="lg:flex lg:gap-[40px]">
            <p>Terms and conditions</p>
            <p>Privacy policy</p>
            <p>Support@charik.app</p>
          </div>
        </div>
      </div>
    </div>
  );
}
