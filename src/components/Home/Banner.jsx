import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="">
        <img
          className="w-full h-auto "
          src="../../../public/images/images.png"
          alt=""
        />
      </div>
      <div className="flex lg:mt-28 mt-16 container  mx-auto lg:px-20 ">
        <div>
          <p className="w-6 h-3 bg-[#ffb128] rounded-full mt-5 mr-10 "></p>
        </div>
        <div>
          <h2 className="lg:text-2xl text-md font-bold">
            Caviar is not the same as caviar
          </h2>
          <h5 className="text-[#5c708f] lg:text-sm text-xs">
            Caviar – the secret fitness booster! Caviar is actually a healthy
            delicacy.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
