import React from "react";

export default function Orange() {
  return (
    <div className="bg-[#FE7C57] text-white">
      <div className="container lg:flex justify-between items-center">
        <div>
          <h1 className="lg:text-5xl text-3xl font-bold mb-[20px]">
            Want to see Charik live?
          </h1>
          <p className="lg:mb-0 mb-[20px]">
            The optimal approach is to request a demo!
          </p>
        </div>
        <div className="orange_btn text-center lg:py-[20px] py-[10px] lg:px-[40px] px-[20px] lg:mx-0 mx-auto w-full max-w-[200px] ">
          Demo
        </div>
      </div>
    </div>
  );
}
