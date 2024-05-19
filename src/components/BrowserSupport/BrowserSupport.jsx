import React from "react";
import Browsers from "../../assets/images/motionarteffect-img8.png";

const BrowserSupport = () => {
  return (
    <>
      <section id="BrowserSupport">
        <div className="flex">
          <div
            style={{
              backgroundImage:
                "linear-gradient(180deg, #0D061F 0%, #251E35 100%)",
            }}
            className={`rounded-[20px] border-2 border-[#FFFFFF10] py-[50px] px-[30px] w-[100%] m-[20px]
        }`}
          >
            <h2 className="mb-[10px] text-center font-[500] leading-[40px] text-[20px] md:leading-[45px] md:text-[25px] text-[#EEE5FF]">
              Supported by All Popular Browsers
            </h2>
            <p className="outfit font-[300] text-[16px] md:text-[18px] leading-[30px] text-[#EEE5FFBD] mt-[5px] text-center">
              Rest assured, Motion Art is designed to be compatible with all
              major web browsers.
            </p>
            <div className="mt-[30px] flex justify-center">
              <img src={Browsers} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrowserSupport;
