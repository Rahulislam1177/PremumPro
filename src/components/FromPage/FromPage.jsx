import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaAngleRight, FaLock } from "react-icons/fa6";
import { MdAccountBox } from "react-icons/md";
import { Link } from "react-router-dom";

const FromPage = () => {
  const [isChack, setIsChack] = useState(false);
  function hendleBoxChack() {
    setIsChack(!isChack);
  }
  return (
    <div className="mx-auto">
      <div>
        <h1 className="lg:text-7xl text-4xl text-center font-semibold  pt-5">
          My account
        </h1>
      </div>
      <div className="flex justify-center pt-10 pb-20">
        <Link to="/" className="text-lg pr-2">
          Home{" "}
        </Link>
        <FaAngleRight className="w-3 mt-2 mr-2 h-auto" />
        <h5 className="text-lx pt-1">My account</h5>
      </div>
      <form>
        <div className="flex flex-col lg:flex-row items-center lg:justify-around">
          <div className="w-[500px] px-10 lg:mb-0 mb-10">
            <h1 className="lg:text-4xl text-xl font-bold pb-5">Anmelden</h1>
            <label className="">
              <h5 className="text-lg text-[#9fb1bb] ">
                {" "}
                Benutzername oder E-Mail- Addres*
              </h5>
              <div className="flex  bg-[#eec78c]  rounded-lg  mt-4">
                <input
                  required
                  type="email"
                  className=" h-10 w-full border-0 rounded-lg text-md border-0  text-white bg-[#eec78c] border-transparent border-none outline-none "
                />
              </div>
              <h5 className="text-lg text-[#9fb1bb] pt-2 "> Passwort*</h5>
              <div className="flex bg-[#eec78c] rounded-lg  mt-4">
                <input
                  required
                  placeholder=""
                  type="email"
                  className=" h-10 border-0 rounded-lg text-md border-0  text-white bg-[#eec78c] border-transparent border-none outline-none "
                />
                <AiOutlineEye className="w-5 h-auto ml-[45%] mr-5" />
              </div>
              <div className="mt-5 flex">
                <label className=" pr-5">
                  <input
                    type="checkbox"
                    name="todo[1]"
                    onChange={hendleBoxChack}
                  />
                </label>{" "}
                <h3 className="text-lg "> Angemeldet bleiben</h3>
              </div>
            </label>
            <button className="bg-[#ffb128] mt-10  rounded-full text-white w-full h-12 hover:bg-sky-900 mx-auto">
              Anmelden
            </button>

            <Link className="mx-auto" to="#">
              {" "}
              <h5 className=" pt-3 text-cente ml-[30%] text-[#ffb128] ">
                Passwort vergessen?
              </h5>
            </Link>
          </div>

          <div className="">
            <p className="w-[1px] h-full  bg-black"></p>
          </div>

          <div className="w-[500px] px-10">
            <h1 className="lg:text-4xl text-xl font-bold pb-5">
              Neues Kundenkonto anlegen
            </h1>
            <label className="">
              <h5 className="text-lg text-[#9fb1bb] "> E-Mail- Addres*</h5>
              <div className="flex  bg-[#eec78c]  rounded-lg  mt-4">
                <input
                  required
                  type="email"
                  className=" h-10 w-full border-0 rounded-lg text-md border-0  text-white bg-[#eec78c] border-transparent border-none outline-none "
                />
              </div>
              <h5 className="text-lg text-[#9fb1bb] pt-5 ">
                {" "}
                Ein Link zum Erstellen eines neuen Passwort wird an Ihre
                E-Mail-Adresse gesendet.
              </h5>
            </label>
            <button className="bg-[#ffb128] mt-10  rounded-full text-white w-full h-12 hover:bg-sky-900 mx-auto">
              Neues Kundenkonto anlegen
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FromPage;
