import React from "react";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const KontaktPage = () => {
  return (
    <div className="">
      <div
        style={{}}
        className="     mx-auto  pt-[100px] pt-[70px] mt-20 bg-[url('../../../public/images/commonBg.png')] sm:pt-[150px] lg:pt-[50px] pb-[150px]"
      >
        <div className="text-center">
          <div>
            <h1 className=" text-xl lg:text-6xl pt-10  text-white font-bold">
              WIR SIND GERNE FUR SIE DA...
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-[#f0f0f0] ">
        <div className="container 2xl:mx-auto flex  pb-[120px] justify-around   ">
          <div className="  ">
            <div>
              <div className=" lg:w-[500px] md:w-[300px] w-[200px] md:h-[300px] h-[250px] lg:h-[500px]  bg-white lg:mt-[-50px] mt-[-70px] rounded-lg  bg-white  ">
                <div className="flex ">
                  <div className="lg:pt-10 pt-2 pr-5">
                    <img
                      className="lg:w-32 md:w-20 w-10"
                      src="../../../public/images/hss.png"
                      alt="images"
                    />
                  </div>
                  <div className="lg:pt-20 lg:pt-12 pt-2 ">
                    <h3 className=" lg:text-xl text-md font-semibold">
                      Kontakt
                    </h3>
                    <h5 className="lg:text-lg text-sm">
                      Wir sind gerne für Sie da
                    </h5>
                  </div>
                </div>{" "}
                <div>
                  <p className="w-[80%] mx-auto h-[1px] bg-black mt-10"></p>
                </div>
                <div className="pt-8 pb-32">
                  <Link
                    className="lg:text-4xl mdtext-lg text-sm font-bold pl-10 pt-8 "
                    to="#"
                  >
                    +41793294444
                  </Link>{" "}
                  <br />
                  <div className="pt-4">
                    <Link
                      className="lg:text-xl md:text-md text-[10px] font-semibold pl-10 "
                      to="#"
                    >
                      info@hammerstein1870.group
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" lg:w-[500px] md:w-[300px] w-[200px] md:h-[300px] h-[250px] lg:h-[500px]  bg-[#f5f5f5] lg:mt-[-50px] mt-[-70px]  rounded-lg ">
              <div className="flex ">
                <div className="lg:pt-20 ">
                  <h3 className="lg:text-3xl pl-10 text-xls font-semibold">
                    Destination
                  </h3>
                </div>
              </div>{" "}
              <div></div>
              <div className="flex hover:bg-white mt-10 lg:pt-2 ml-5 mr-10 rounded-xl">
                <div className=" lg:pt-4 pr-5">
                  <div className=""></div>{" "}
                  <FaClock className="lg:w-20 lg:p-5 rounded-xl  bg-white h-auto md:w-8 w-5 lg:ml-10 ml-0" />
                </div>
                <div className=" lg:pt-2  ">
                  <h3 className=" lg:text-xl text-sm font-semibold">
                    Addresse
                  </h3>
                  <h5 className="lg:text-lg text-[10px] ">
                    Hammerstein Group GmbH <br /> Gewerbestrasse 5 <br /> 6330
                    Cham
                  </h5>
                </div>
              </div>
              <div className="flex hover:bg-white mt-10 lg:pt-2 ml-5  mr-10 rounded-xl">
                <div className=" pt-2 pr-5">
                  <div className=""></div>{" "}
                  <FaLocationDot className="lg:w-20 w-15 lg:p-5 rounded-xl  bg-white h-auto md:w-8 w-5 lg:ml-10 ml-0" />
                </div>
                <div className="lg:pt-2  ">
                  <h3 className=" lg:text-xl text-sm font-semibold">
                    Öffnungszeiten
                  </h3>
                  <h5 className="lg:text-lg text-[10px]">
                    Montag – Freitag: <br /> 08:00 – 17:00 Uhr
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktPage;
