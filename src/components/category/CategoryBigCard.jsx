import React from "react";
import CommonBigCard from "../common/card/CommonBigCard";
import { ratingStars } from "../../utils/CommonFunction";

const CategoryBigCard = () => {
  return (
    <>
      <div className="pb-20 sm:py-20 px-6">
        <CommonBigCard
          title="There’s even more to watch."
          rating={ratingStars(4)}
          description="Vitae congue aliquam malesuada nec malesuada faucibus elit netus. Donec vestibulum velit laoreet ornare fermentum et. Aliquet ut adipiscing volutpat fermentum nisl massa. Cras cras amet nisl id adipiscing vel vitae euismod nunc. Platea tincidunt vulputate etiam massa porta at ipsum maecenas. Convallis sed ac egestas non odio. Mus pellentesque."
        />
      </div>
    </>
  );
};

export default CategoryBigCard;
