import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <div>
      <div>
        <h1 className="lg:text-7xl text-4xl text-center font-semibold  pt-5">
          Wishlist
        </h1>
      </div>
      <div className="flex justify-center pt-10 pb-20">
        <Link to="/" className="text-lg pr-2">
          Home{" "}
        </Link>
        <FaAngleRight className="w-3 mt-2 mr-2 h-auto" />
        <h5 className="text-lx pt-1">Wishlist</h5>
      </div>
      <div>
        <h4 className="text-3xl text-center font-bold pt-5">
          Your wishlist is empty
        </h4>
      </div>
      <div>
        <Link
          type="button"
          to="/shop"
          className="bg-[#ffb128] mt-10 pt-3 font-bold   rounded-full text-white w-44 flex justify-center h-12 hover:text-black mx-auto"
        >
          Zum Shop
        </Link>
      </div>
    </div>
  );
};

export default Wishlist;
