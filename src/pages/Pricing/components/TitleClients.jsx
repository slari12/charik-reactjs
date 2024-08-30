import React from "react";

export default function TitleClients() {
  return (
    <div className="bg-[#FFF5F2] lg:pt-[100px] pt-[50px] pb-[50px]">
      <div className=" container">
        <div className=" content_section">
          <p className="section_text mb-[24px] text-center">Our Clients</p>
          <h1 className="lg:text-[55px] font-bold section_title text-center">
            They connected HubSpot with Charik
          </h1>

          <div className="title_divider"></div>
        </div>
        <div className="lg:flex col items-center justify-center gap-10 grid grid-cols-2 gap-4">
          <div>
            <img src="https://www.charik.fr/hubfs/ouest.svg" alt="" />
          </div>
          <div className="lg:w-[266px]">
            <img
              src="https://www.charik.fr/hs-fs/hubfs/Imported%20sitepage%20images/9g42l.png?width=1000&name=9g42l.png"
              alt=""
            />
          </div>
          <div>
            <img src="https://www.charik.fr/hubfs/numoo.svg" alt="" />
          </div>
          <div>
            <img
              src="https://143432284.fs1.hubspotusercontent-eu1.net/hub/143432284/hubfs/tikey-logo.jpeg?width=240&name=tikey-logo.jpeg"
              alt=""
              className="w-[150px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
