import React from "react";

const Hero = () => {
  return (
    <>
      <section className="w-[100%] flex flex-wrap py-[80px]">
        <div className="pl-[15px]  w-[100%] md:w-[25%] py-[10px] md:py-0">
          <h2 className="max-w-[205px] md:max-w-[156px] flex flex-col md:mx-0 mx-auto md:py-0 py-[10px]">
            <span className="pb-[10px] gradient-text text-[18px]">
              <span className="inline md:block">Transform</span> Your Website
            </span>
            <span className="outfit text-[#EEE5FF] text-[18px]">
              With Motion <span className="inline md:block">Art Effect</span>
            </span>
          </h2>
        </div>
        <div className="md:w-[60%] w-[100%]">
          <h1 className="mr-[10px] mb-[15px] font-[500] text-[#EEE5FF] text-[35px] leading-[55px] md:text-[40px] lg:text-[55px] lg:leading-[75px] md:leading-[60px]">
            <span className="inline md:block">
              Attract Your Visitors Attention With Colorful
            </span>
            <span className="gradient-text pb-[10px] ">Motion Art Effect</span>
          </h1>
          <p className="outfit text-[#EEE5FFBD] font-[300] text-[16px] md:text-[18px] leading-[26px]">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
