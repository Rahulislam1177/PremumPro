import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div className="md:flex md:justify-between  container  mx-auto lg:px-20  mt-10 mb-10">
        <div className="pb-20 text-center	">
          <Link to="#">
            {" "}
            <img
              className="w-[200px] pb-10 mx-auto"
              src="../../../public/images/new.png"
              alt=""
            />
          </Link>
          <h3 className="font-semibold">
            Das Leben ist zu wertvoll, um <br /> sich mit weniger als dem Besten{" "}
            <br />
            zufrieden zu geben.
          </h3>
          <ul className="hover:underline-offset-2  hover:underline hover:text-[#ffb128] ">
            <li className="pt-10 font-semibold hover:text-[#ffb128] ">
              <Link to="#">Impressum/ Datenschutz</Link>
            </li>
          </ul>
        </div>

        <div className="pb-20 text-center">
          <h3 className="pb-5">Sortiment</h3>
          <ul>
            <li className="pb-2">
              <Link
                to="/Spanischer"
                className="pb-5  font-semibold hover:text-[#ffb128]  text-[#626972] "
              >
                SPANISCHER CAVIAR
              </Link>
            </li>
            <li className="pb-2">
              <Link
                className="pb-5  font-semibold hover:text-[#ffb128]  text-[#626972] "
                to="/SwissCaviar"
              >
                SWISS CAVIAR
              </Link>
            </li>
            <li className="pb-2">
              <Link
                className="pb-5  font-semibold hover:text-[#ffb128] text-[#626972]  "
                to="/WeisserCavilr"
              >
                WEISSER CAVIAR
              </Link>
            </li>
            <li>
              <Link
                className="  font-semibold hover:text-[#ffb128] text-[#626972] "
                to="/Kontakt"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div className=" pb-10 text-center">
          <h3 className="pb-5 ">Kontakt</h3>
          <ul>
            <li className="text-[#ffb128] font-bold">
              <Link to="#">+41 79 329 44 44</Link>
            </li>
          </ul>
          <h4 className="pt-2">
            MONTAG-FREITAG <br />
            08:00 Uhr-17:00 Uhr
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Footer;
