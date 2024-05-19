import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MagicStick from "../../assets/images/motionarteffect-img5.png";
const Purchase = () => {
  return (
    <>
      <section id="purchase" className="pt-[100px]">
        <div className="flex flex-wrap">
          <div className="p-[10px] md:w-[60%] w-[100%] ">
            <h2 className="text-[#EEE5FF] text-[25px] leading-[45px] md:text-[30px] md:leading-[50px] lg:text-[35px] lg:leading-[55px] mb-[10px]">
              Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
            </h2>
            <p className="outfit font-[300] text-[16px] md:text-[18px] leading-[30px] text-[#EEE5FFBD] mt-[5px]">
              Motion Art for Elementor is a groundbreaking plugin that empowers
              you to effortlessly infuse your website with visually stunning
              motion art elements.
            </p>
            <div className="mt-[20px] md:text-start text-center">
              <a
                href="#"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #5E11FF 30%, #F87516 100%)",
                }}
                className="inline-block text-[white] text-[20px] bg-transparent font-[300] rounded-[25px] py-[16px] px-[35px]"
              >
                Purchase From Envato
                <FontAwesomeIcon className="ml-4" icon={faArrowRight} />
              </a>
            </div>
          </div>
          <div className="w-[100%] md:w-[40%] p-[10px] justify-center flex md:justify-end items-center">
            <img src={MagicStick} width={248} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchase;
