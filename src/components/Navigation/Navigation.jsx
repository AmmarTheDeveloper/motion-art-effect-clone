import React from "react";
import MotionArtEffectLogo from "../../assets/images/MotionArtEffect-logo.png";

const Navigation = () => {
  return (
    <>
      <div className="flex justify-between items-center px-2 pb-[10px]">
        <a href="#">
          <img width={220} src={MotionArtEffectLogo} />
        </a>
        <a
          href="#"
          type="button"
          className="hidden lg:block outfit bg-white pointer rounded text-[18px] font-[400] text-[#0D051F] border border-white py-[12px] px-[35px] hover:bg-transparent hover:text-white transition"
        >
          Purchase Now
        </a>
      </div>
    </>
  );
};

export default Navigation;
