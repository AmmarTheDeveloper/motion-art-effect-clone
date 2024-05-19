import React from "react";

const FeatureCard = ({ data }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(180deg, #0D061F 0%, #251E35 100%)",
        }}
        className={`rounded-[20px] border-2 border-[#FFFFFF10] m-[10px] p-[30px] lg:col-span-4 col-span-12 ${
          data.position == "start" || data.position == "middle"
            ? "md:col-span-6"
            : ""
        }`}
      >
        <div className="mt-[-20px] mb-[20px] mr-[0] ml-[-40px]">
          <img src={data.image} alt="" />
        </div>
        <h2 className="mb-[10px] font-[500] leading-[40px] text-[20px] md:leading-[45px] md:text-[23px] text-[#EEE5FF]">
          {data.title}
        </h2>
        <p className="outfit font-[300] text-[16px] md:text-[18px] leading-[30px] text-[#EEE5FFBD] mt-[5px]">
          {data.para}
        </p>
      </div>
    </>
  );
};

export default FeatureCard;
