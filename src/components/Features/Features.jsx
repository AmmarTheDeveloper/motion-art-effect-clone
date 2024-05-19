import React from "react";
import FeatureCard from "./FeatureCard";
import LightWeightImg from "../../assets/images/motionarteffect-img9.png";
import ResponsiveImg from "../../assets/images/motionarteffect-img6.png";
import UserFriendImg from "../../assets/images/motionarteffect-img7.png";

const Features = () => {
  return (
    <>
      <section id="Features" className="md:py-[100px] py-[30px]">
        <div className="p-[10px]">
          <div className="flex justify-center ">
            <div className="md:max-w-[55%] w-[100%]">
              <h2 className="text-[#EEE5FF] text-[25px] leading-[45px] md:text-[30px] md:leading-[50px] lg:text-[35px] lg:leading-[55px] mb-[10px] text-center">
                An All-Round Plugin With Powerful Features
              </h2>
              <p className="outfit font-[300] text-[16px] md:text-[18px] leading-[30px] text-[#EEE5FFBD] mx-[30px] text-center">
                Whether you're a seasoned web designer or just starting out,
                Motion Art for Elementor seamlessly integrates with the
                Elementor platform, providing you with a seamless and intuitive
                experience.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 pt-[50px]">
            <FeatureCard
              data={{
                title: "Light Weight",
                para: "Motion Art for Elementor is designed to be lightweight.",
                image: LightWeightImg,
                position: "start",
              }}
            />
            <FeatureCard
              data={{
                title: "100% Responsive",
                para: "Create a consistent visual experience across all devices.",
                image: ResponsiveImg,
                position: "middle",
              }}
            />
            <FeatureCard
              data={{
                title: "User Friendly Interface",
                para: "Ensure a smooth experience for both applicants and administrators.",
                image: UserFriendImg,
                position: "end",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
