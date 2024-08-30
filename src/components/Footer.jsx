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
        <div className="lg:py-[18px] lg:px-[24px] py-[48px] px-[40px]">
          <div className="lg:flex justify-between items-flex-start header">
            <div className="links_footer px-18px">
              <p className="text-[#222326] lg:text-[21.96px] text-[21px] font-light lg:mb-[19px] mb-[19.98px]">
                About Charik
              </p>
              <p className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[16px] mb-[24px]">
                We streamline data entry and information gathering for sales
                reps to focus on client engagement and closing deals.
              </p>
              <div className="flex lg:mb-0 lg:justify-normal gap-[30px] mt-[30px] justify-center mb-[50px]">
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
            <div className="links_footer lg:px-18px lg:mt-0 mt-[50px]">
              <p className="text-[#222326] lg:text-[21.96px] text-[21px] lg:font-light lg:mb-[19px] mb-[19.98px]">
                Features
              </p>
              <div className="grid">
                <a
                  href="#"
                  className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0"
                >
                  Email Finder
                </a>
                <a
                  href="#"
                  className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0"
                >
                  Company Finder
                </a>
                <a
                  href="#"
                  className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0"
                >
                  KeyPeople Search
                </a>
              </div>
            </div>
            <div className="links_footer lg:px-18px lg:mt-0 mt-[50px]">
              <p className="text-[#222326] lg:text-[21.96px] text-[21px] lg:font-light lg:mb-[19px] mb-[19.98px]">
                Resources
              </p>
              <div className="grid">
                <a
                  href="#"
                  className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0"
                >
                  Read our blog
                </a>
                <a
                  href="#"
                  className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0"
                >
                  Partners
                </a>
                <a
                  href="#"
                  className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0"
                >
                  Ebook and Guides
                </a>
                <a
                  href="#"
                  className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0"
                >
                  Downloads
                </a>
                <a
                  href="#"
                  className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0"
                >
                  Knowledge based
                </a>
              </div>
            </div>
            <div className="links_footer lg:px-18px lg:mt-0 mt-[50px]">
              <p className="text-[#222326]lg:text-[21.96px] text-[21px] lg:font-light lg:mb-[19px] mb-[19.98px]">
                Company
              </p>
              <div className="grid">
                <a
                  href="#"
                  className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0"
                >
                  Charik Software
                </a>
                <a
                  href="#"
                  className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="text-[#6f6f6f] lg:max-w-[363px] lg:text-[18px] lg:mb-[10px] mb-0"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="text-[#222326] font-300 lg:flex justify-between header footer lg:text-[16px] text-[#222326]">
          <p className="text-[#6a6d77] mb-[30px] lg:mb-0">
            Copyright © 2024 Charik
          </p>
          <div className="lg:flex lg:gap-[40px]">
            <p className="lg:mb-0 mb-[5px]">Terms and conditions</p>
            <p className="lg:mb-0 mb-[5px]">Privacy policy</p>
            <p>Support@charik.app</p>
          </div>
        </div>
      </div>
    </div>
  );
}
