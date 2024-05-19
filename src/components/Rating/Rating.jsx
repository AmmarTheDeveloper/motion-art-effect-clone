import React from "react";
import img1 from "../../assets/images/motionarteffect-img1.png";
import img2 from "../../assets/images/motionarteffect-img2.png";
import img3 from "../../assets/images/motionarteffect-img3.png";
import stars from "../../assets/images/motionarteffect-img4.png";
import RatingCard from "./RatingCard";

const Rating = () => {
  return (
    <>
      <section id="rating" className="p-[10px] pt-[20px]">
        <h2 className="outfit text-[22px] text-center mb-[20px] text-[#EEE5FF]">
          Trusted by thousands of users around the world
        </h2>
        <div className="flex justify-center grid grid-cols-12 pt-[20px] gap-y-[50px]">
          <RatingCard
            data={{
              position: "start",
              image: img2,
              stars: stars,
              rating: "4.5",
              reviews: "Score, 9 Reviews",
            }}
          />
          <RatingCard
            data={{
              position: "middle",
              image: img1,
              stars: stars,
              rating: "4.5",
              reviews: "Score, 9 Reviews",
            }}
          />
          <RatingCard
            data={{
              position: "end",
              image: img3,
              stars: stars,
              rating: "4.5",
              reviews: "Score, 9 Reviews",
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Rating;
