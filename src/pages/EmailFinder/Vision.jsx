import React from "react";
import LogoSlider from "./components/LogoSlider";

export default function Vision() {
  return (
    <div className="container">
      <div className="lg:flex gap-6">
        <div className="lg:text-left text-center lg:pb-0 pb-[72px]">
          <h1 className="text-[63px] lg:mb-[70px] mb-[36px] text-[#f65954]">
            Trust
          </h1>
          <div className="mb-4 text-[#6a6d77] text-[18px]">
            <b>Verified Emails:</b> Every email we provide undergoes thorough
            verification and validation. You can be absolutely certain that each
            email is accurate and fully operational.
          </div>
          <div className="text-[#6a6d77] text-[18px]">
            <b>High Success Rate:</b> Our sophisticated algorithms ensure a high
            success rate, enabling you to locate the emails you need with
            unmatched precision.
          </div>
        </div>
        <div className="lg:text-left text-center lg:pb-0 pb-[72px]">
          <h1 className="text-[63px] lg:mb-[70px] mb-[36px] text-[#f65954]">
            Speed
          </h1>
          <div className="mb-4 text-[#6a6d77] text-[18px]">
            <b>Speed:</b> Say goodbye to the endless hours spent searching for
            contacts. Charik Email Finder delivers swift and reliable results,
            freeing you up to focus on what truly matters.
          </div>
          <div className="text-[#6a6d77] text-[18px]">
            <b>Efficiency:</b> By automating the email search process, our tool
            saves you valuable time, thereby speeding up your outreach and
            communication efforts.
          </div>
        </div>
        <div className="lg:text-left text-center lg:pb-0 pb-[72px]">
          <h1 className="text-[63px] lg:mb-[70px] text-[#f65954] mb-[36px]">
            Accuracy
          </h1>
          <div className="mb-4 text-[18px] text-[#6a6d77]">
            <b>Secure Data:</b> Your data protection is our top concern. Every
            inquiry and outcome is handled with the utmost level of
            confidentiality.
          </div>
          <div className="text-[#6a6d77] text-[18px]">
            <b>Guaranteed Results:</b> When we provide you with an email, we
            assure its accuracy and functionality, safeguarding you from the
            inconvenience of bounced or undelivered emails.
          </div>
        </div>
      </div>
      <div>
        <LogoSlider />
      </div>
    </div>
  );
}
