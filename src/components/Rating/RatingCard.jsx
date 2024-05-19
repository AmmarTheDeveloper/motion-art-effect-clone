import React from "react";

const RatingCard = ({ data }) => {
  return (
    <>
      <div
        className={`col-span-12 ${
          data.position != "end" && "md:col-span-6"
        }  lg:col-span-4 flex justify-center ${
          data.position == "start"
            ? "lg:justify-start"
            : data.position == "end"
            ? "lg:justify-end"
            : ""
        } `}
      >
        <div className="flex flex-wrap items-center">
          <img src={data.image} alt="" width={88} />
          <div className="ml-[10px]">
            <img className="mb-[20px]" width={155} src={data.stars} alt="" />
            <p className="text-[#EEE5FFBD] text-[14px] font-[500]">
              <strong>{data.rating}</strong> {data.reviews}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingCard;
