import React from "react";
import { assets } from "../assets/assets";

const Startrating = ({rating = 4}) => {
  return (
    <>
      {Array(5)
        .fill('')
        .map((_, index) => {
          <img src={rating > index ? assets.starIconFilled : assets.starIconOutlined} alt="start-icon" className="h-4.5 w-4.5" />
        })}
    </>
  );
};

export default Startrating;
