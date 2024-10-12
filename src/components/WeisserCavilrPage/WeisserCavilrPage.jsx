import React, { useState } from "react";

import { FaAngleDown, FaLink, FaRegHeart } from "react-icons/fa";

import { MdZoomOutMap } from "react-icons/md";
import { Link } from "react-router-dom";
const options = [
  "Standardsortieru",
  "Nach Beliebtheit sortiert",
  "Sortieren nach neuesten",
  "Nach Preis sortiert aufsteinged",
  "Nach Preis sortiert aufsteinged",
];
function WeisserCavilrPage() {
  const teamsData = [
    {
      id: 1,
      img: "../../../public/images/WISSERCAVAR.png",
      name: "Albino Premium Caviar",
      designation: "CHF 1'750.00 – CHF 35'000.00",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectOption, setSelectOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => () => {
    setSelectOption(value);
    setIsOpen(false);
  };
  return (
    <div>
      <div
        style={{}}
        className=" lg:w-[80%] w-[70%]  mx-auto rounded-xl pt-[100px] pt-[70px] mt-20 bg-[url('../../../public/images/commonBg.png')] sm:pt-[150px] lg:pt-[50px] pb-[150px]"
      >
        <div className="text-center">
          <div>
            <h1 className=" text-xl lg:text-6xl pt-10  text-white font-bold">
              WEISSER CAVIAR
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className=" py-[50px] ">
          <div className="container mx-auto px-[20px] tex-center ">
            {" "}
            <div className="flex justify-between px-10">
              <h3 className="pt-2">Einzelnes Ergebnis wird angezeigt</h3>

              {/* Start */}

              <div className="pb-10">
                <div className="inline-flex">
                  <div className="relative inline-flex main-w-[200-px] rounded-md bg-white ">
                    <button
                      onClick={toggling}
                      className="w-[100%] text-black rounded-l-md px-4 py-2  "
                    >
                      {selectOption || "Standardsortier.."}
                    </button>
                    <div className="relative">
                      <button
                        onClick={toggling}
                        type="button"
                        className={` button-${
                          isOpen ? "danger" : "success"
                        } hover:text-gray-700 inline-flex h-full items-center justify-center rounded-r-md border-1 border-gray-10 px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700`}
                      >
                        <FaAngleDown />
                      </button>
                    </div>
                    {isOpen && (
                      <div className="absolute  top-6 right-0 z-10 mt-4 min-w-[200px] min-w-[200px] origin-top-right rounded-md border border-gary-100 bg-white shadow-lg  ">
                        {options.map((option) => (
                          <div>
                            <button
                              type="button"
                              onClick={onOptionClicked(option)}
                              key={Math.random}
                            >
                              <button
                                type="button"
                                key={Math.random}
                                className="block rounded w-[250px] text-left px-4 py-2 text-sm text-gray-500 no-underline hover:text-white hover:bg-[#3387DC] "
                              >
                                {option}
                              </button>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex grid   xl:grid-rows-1 lg:grid-rows-3 grid-rows-5 grid-flow-col  gap-3 container mx-auto  ">
              {teamsData?.map((team, i) => (
                <div
                  key={i}
                  className="w-full   sm:w-[350px] bg-white rounded-lg overflow-hidden  relative team-card "
                >
                  <div className="p-5 bg-[#eeeeed] ">
                    <img
                      className="w-full object-cover  h-[200px]"
                      src={team?.img}
                      alt=""
                    />

                    <div className="bg-[#eeeeed]  w-full py-10 px-3">
                      <Link to="#">
                        <h4 className="text-xl text-slate-500 font-semibold tracking-wide">
                          {team?.name}
                        </h4>
                      </Link>
                      <p className="pt-1 text-slate-500">{team?.designation}</p>
                    </div>

                    <div className="flex flex-col   gap-3  hover:top-[16px] absolute left-[-100%] top-[16px] invisible  social-icons  top-[16px]   transition-all duration-300">
                      <Link
                        className=" bg-white transition-all duration-300 rounded-full size-[30px] flex justify-center items-center"
                        to="#"
                      >
                        <FaLink className="size-[16px]  hover:text-[#ffb128]  social-icon text-blue-900" />
                      </Link>
                      <Link
                        className=" bg-white transition-all duration-300  rounded-full size-[30px] flex justify-center items-center"
                        to="#"
                      >
                        <FaRegHeart className="size-[16px] hover:text-[#ffb128] social-icon text-blue-900" />
                      </Link>
                      <Link
                        className=" bg-white transition-all duration-300 rounded-full size-[30px]
                        0px] flex justify-center items-center"
                        to="#"
                      >
                        <MdZoomOutMap className="size-[16px]  text-black  hover:text-[#ffb128]  social-icon " />
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeisserCavilrPage;
