import React from "react";

const SectionCard = ({ data }) => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #0D061F 0%, #251E35 100%)",
        }}
        className={`rounded-[20px] border-2 border-[#FFFFFF10] m-[10px] p-[30px] md:w-[50%] w-[100%] ${
          data.position == "start" ? "md:mb-[120px]" : "md:mt-[120px]"
        }`}
      >
        <h2 className="mb-[10px] font-[500] leading-[40px] text-[20px] md:leading-[45px] md:text-[25px] text-[#EEE5FF]">
          {data.title}
        </h2>
        <p className="outfit font-[300] text-[16px] md:text-[18px] leading-[30px] text-[#EEE5FFBD] mt-[5px]">
          {data.para}
        </p>
        <div className="mt-[30px] flex justify-center">
          <img src={data.image} alt="" />
        </div>
      </div>
    </>
  );
};

export default SectionCard;
