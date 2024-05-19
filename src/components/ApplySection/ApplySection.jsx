import React from "react";
import ApplyOnSection from "../../assets/images/motionarteffect-img11.png";
import ApplyOnPage from "../../assets/images/motionarteffect-img10.png";
import SectionCard from "./SectionCard";

const ApplySection = () => {
  return (
    <>
      <section className="pt-[80px] lg:py-[100px]">
        <div className="p-[10px]">
          <h2 className="text-[#EEE5FF] text-[25px] leading-[45px] md:text-[30px] md:leading-[50px] lg:text-[35px] lg:leading-[55px] mb-[10px]">
            Apply On Any Section Or Enable For Whole Page
          </h2>
          <div className="mt-[50px] flex flex-wrap md:flex-nowrap">
            <SectionCard
              data={{
                title: "Apply On Section",
                para: "Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.",
                image: ApplyOnSection,
                position: "start",
              }}
            />
            <SectionCard
              data={{
                title: "Apply On Page",
                para: "Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.",
                image: ApplyOnPage,
                position: "end",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplySection;
