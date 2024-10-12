import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineMenu,
  AiOutlineShopping,
} from "react-icons/ai";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
  MdAccountBox,
  MdAccountCircle,
  MdOutlineStarBorder,
} from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";
import { TbArrowLeftRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenu] = useState(false);
  function openSideMenu() {
    setIsSideMenu(true);
  }
  function closeSideMenu() {
    setIsSideMenu(false);
  }
  const [iscontactMenuOpen, setIsContactMenuOpen] = useState(false);
  function openContactMenu() {
    setIsContactMenuOpen(true);
  }
  function closeContactMenu() {
    setIsContactMenuOpen(false);
  }

  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  function openCartMenu() {
    setIsCartMenuOpen(true);
  }
  function closeCartMenu() {
    setIsCartMenuOpen(false);
  }
  // sarch Var
  const [isSarchBarOpen, setIsSarchBarMenu] = useState(false);
  function openSarchMenu() {
    setIsSarchBarMenu(true);
  }
  function closeSarchMenu() {
    setIsSarchBarMenu(false);
  }

  const [barIsActive, setBarIsActive] = useState(false);
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
      setBarIsActive(true);
    } else {
      setBarIsActive(false);
    }
  });
  return (
    <div className="bg-color-[#ffffff] container  mx-auto lg:px-20">
      <div>
        <div className="flex justify-around">
          {" "}
          <Link to="/">
            {" "}
            <img
              className="lg:w-[250px] w-[150px] pt-5 h-auto"
              src="../../../public/images/new.png"
              alt=""
            />
          </Link>
          <div className="pt-10 hidden md:block ">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <FaSearch />
              </span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-[#f5f5f5] w[300px] lg:w-[350px] 2xl:w-[500px] rounded border-none py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm"
                placeholder="Gib hire deine Suche ein..."
                type="text"
                name="search"
              />
            </label>
          </div>
          <div className="flex">
            <div className="flex mt-10 pr-5 hidden md:block">
              <Link to="#" onClick={openCartMenu} className="flex">
                <div className="flex ">
                  <RiShoppingBagLine className="h-8 w-auto" />
                  <span className=" rounded-full bg-black  text-white absolute ml-6  px-1 mt-[-6px]">
                    0
                  </span>
                </div>
                <div className="pl-5 font-bold flex">
                  <h5 className="">CHF 0.00</h5>
                </div>
              </Link>{" "}
            </div>
            <Link className="  hidden md:block" to="/Wishlist">
              <div className="flex pt-10">
                <FaRegHeart className="w-7 h-auto" />
                <span className=" rounded-full bg-black  text-white absolute ml-6  px-1 mt-[-10px]">
                  0
                </span>
              </div>
            </Link>

            <Link to="#" className="pt-9 pl-5 ">
              <MdAccountCircle
                onClick={openContactMenu}
                className=" w-8  hidden md:block h-auto"
              />
              {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
              {isSarchBarOpen && (
                <MobileSarchNav closeSarchMenu={closeSarchMenu} />
              )}
              {iscontactMenuOpen && (
                <Contact closeContactMenu={closeContactMenu} />
              )}
              {isCartMenuOpen && <Card closeCartMenu={closeCartMenu} />}
            </Link>
            <div className="flex">
              <div>
                <AiOutlineMenu
                  onClick={openSideMenu}
                  className="mt-9 ml-4 w-7 h-auto cursor-pointer	lg:hidden"
                />
              </div>
              <div>
                <HiMagnifyingGlass
                  onClick={openSarchMenu}
                  className="mt-9 ml-4 w-7 h-auto cursor-pointer	md:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bar */}
      {barIsActive ? (
        <header
          className={
            barIsActive ? "fixed top-0 left-0 z-40 bg-white w-full" : ""
          }
        >
          <div className="hidden lg:block container  mx-auto lg:px-20">
            <div className="flex  justify-between">
              <div className="flex justify-between">
                <Link to="/Spanischer">
                  {" "}
                  <h3 className="text-[#546970] pt-[30px] pr-10 hover:text-[#ffd58b] ">
                    SPANISCHER CAVIAR
                  </h3>
                </Link>{" "}
                <p className="w-[1px]  mt-[20px] mt-[20px] h-10 bg-[#546970]"></p>
              </div>
              <div className="flex justify-between ">
                <Link to="/SwissCaviar">
                  {" "}
                  <h3 className="text-[#546970] pt-[30px] pr-10 hover:text-[#ffd58b]">
                    SWISS CAVIAR
                  </h3>
                </Link>{" "}
                <p className="w-[1px] mt-[20px] h-10 bg-[#546970] "></p>
              </div>
              <div className="flex justify-between  ">
                <Link to="/WeisserCavilr">
                  {" "}
                  <h3 className="text-[#546970] pt-[30px] pr-10 hover:text-[#ffd58b]">
                    WEISSER CAVIAR
                  </h3>
                </Link>{" "}
                <p className="w-[1px] mt-[20px] h-10 bg-[#546970] "></p>
              </div>
              <div className="flex justify-between ">
                <Link to="/Kontakt">
                  {" "}
                  <h3 className="text-[#546970] pt-[30px] pr-4 hover:text-[#ffd58b] ">
                    KONTAKT
                  </h3>
                </Link>{" "}
              </div>

              <div className="flex justify-between px-10 bg-[#ffb128]  ">
                <Link to="#">
                  {" "}
                  <MdOutlineStarBorder className="text-white mt-4  mx-auto w-5 h-5" />
                  <h3 className="text-white text-center  ">SALES</h3>
                </Link>{" "}
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header
          className={barIsActive ? "fixed top-0 left-0 bg-white w-full" : ""}
        >
          <div className="hidden lg:block">
            <div className="flex  justify-between">
              <div className="flex justify-between mt-20">
                <Link to="/Spanischer">
                  {" "}
                  <h3 className="text-[#546970] pr-10 hover:text-[#ffd58b] ">
                    SPANISCHER CAVIAR
                  </h3>
                </Link>{" "}
                <p className="w-[1px] h-10 bg-[#546970]"></p>
              </div>
              <div className="flex justify-between  mt-20">
                <Link to="/SwissCaviar">
                  {" "}
                  <h3 className="text-[#546970] pr-10 hover:text-[#ffd58b]">
                    SWISS CAVIAR
                  </h3>
                </Link>{" "}
                <p className="w-[1px] h-10 bg-[#546970] "></p>
              </div>
              <div className="flex justify-between  mt-20">
                <Link to="/WeisserCavilr">
                  {" "}
                  <h3 className="text-[#546970] pr-10 hover:text-[#ffd58b]">
                    WEISSER CAVIAR
                  </h3>
                </Link>{" "}
                <p className="w-[1px] h-10 bg-[#546970] "></p>
              </div>
              <div className="flex justify-between mt-20">
                <Link to="/Kontakt">
                  {" "}
                  <h3 className="text-[#546970] pr-10 hover:text-[#ffd58b] ">
                    KONTAKT
                  </h3>
                </Link>{" "}
              </div>

              <div className="flex justify-between px-5 bg-[#ffd58b] hover:bg-slate-600 rounded-t-2xl ... ">
                <Link to="https://hammerstein1870.group/">
                  {" "}
                  <TbArrowLeftRight className="text-white mt-4  mx-auto w-10 h-10" />
                  <h3 className="text-white text-center  mb-4">
                    zuruck zu <br />
                    Hammerstein Group
                  </h3>
                </Link>{" "}
              </div>
            </div>
          </div>
        </header>
      )}
    </div>
  );
};
//  Manu bar
function MobileNav({ closeSideMenu }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60  lg:hidden">
      <div className="h-full  w-[45%] bg-white px-4 py-4 ">
        <section>
          <div className="flex justify-end">
            <AiOutlineClose
              onClick={closeSideMenu}
              className="cursor-pointer text-4xl"
            />
          </div>
          <div>
            <div className="">
              <Link to="/Spanischer">
                <h3 className="text-[#546970] hover:text-[#ffd58b]  sm:text-xl text-xs  sm:pl-10 pl-2 pb-5 pt-5">
                  SPANISCHER CAVIAR
                </h3>
              </Link>
              <Link to="/SwissCaviar">
                <h3 className="text-[#546970]  sm:text-xl text-xs  sm:pl-10 pl-2 pb-5  hover:text-[#ffd58b]">
                  SWISS CAVIAR
                </h3>
              </Link>{" "}
              <Link to="/WeisserCavilr">
                {" "}
                <h3 className="text-[#546970]  sm:text-xl text-xs  sm:pl-10 pl-2 pb-5  hover:text-[#ffd58b]">
                  WEISSER CAVIAR
                </h3>
              </Link>{" "}
              <Link to="/Kontakt">
                {" "}
                <h3 className="text-[#546970] hover:text-[#ffd58b] sm:text-xl text-xs  sm:pl-10 pl-2 pb-5  ">
                  KONTAKT
                </h3>
              </Link>{" "}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
//sarch Bar
function Contact({ closeContactMenu }) {
  const [isChack, setIsChack] = useState(false);
  function hendleBoxChack() {
    setIsChack(!isChack);
  }
  return (
    <div className="fixed left-0 top-0 flex h-[20%] min-h-screen w-full pt-20 pr-32 justify-end  ">
      <div className="h-[75%]  w-[30%] bg-white px-4 py-4 ">
        <section>
          <div className="flex justify-end">
            <AiOutlineClose
              onClick={closeContactMenu}
              className="cursor-pointer text-xl"
            />
          </div>
          <form>
            <label className="">
              <div className="flex bg-[#eec78c] rounded-lg  mt-4">
                <MdAccountBox className="w-8 ml-2 h-auto mr-2" />
                <input
                  required
                  placeholder="Benutzername oder E-Mail-  Addres*"
                  type="email"
                  className="w-full h-16 border-0 rounded-lg text-md border-0  text-white bg-[#eec78c] border-transparent border-none outline-none "
                />
              </div>
              <div className="flex bg-[#eec78c] rounded-lg  mt-4">
                <FaLock className="w-6 ml-2 h-auto mr-2" />
                <input
                  required
                  placeholder="Passwort*"
                  type="email"
                  className="w-full h-16 border-0 rounded-lg text-md border-0  text-white bg-[#eec78c] border-transparent border-none outline-none "
                />
                <AiOutlineEye className="w-8 h-auto my-auto mr-5" />
              </div>
              <div className="mt-10 flex">
                <label className=" pr-5">
                  <input
                    type="checkbox"
                    name="todo[1]"
                    onChange={hendleBoxChack}
                  />
                </label>{" "}
                <h3> Angemeldet bleiben</h3>
              </div>
            </label>
            <button className="bg-[#ffb128] mt-10 ml-[10%] rounded-full text-white w-[300px] h-12 hover:bg-sky-900 mx-auto">
              Anmelden
            </button>

            <Link to="#">
              {" "}
              <h5 className="pl-32 pt-3 ">Passwort vergessen?</h5>
            </Link>
            <Link to="/From">
              {" "}
              <h2 className="pl-20 pt-3 text-xl  font-semibold">
                Ein Kundenkonto eröffnen?
              </h2>
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
}
/* ldfdslfdsflsdlf */
function Card({ closeCartMenu }) {
  const [isChack, setIsChack] = useState(false);
  function hendleBoxChack() {
    setIsChack(!isChack);
  }
  return (
    <div className="fixed z-10 left-0 top-0 flex h-full min-h-screen w-full  justify-end  ">
      <div className="h-full  w-[30%] bg-white">
        <section>
          <div className="flex pt-5">
            <div>
              <AiOutlineClose
                onClick={closeCartMenu}
                className="cursor-pointer ml-5 mt-2  text-2xl"
              />
            </div>

            <div className="flex ml-[40%]">
              <AiOutlineShopping className="w-8 h-auto mr-5 " />
              <h3 className="text-4xl font-bold">Cart</h3>
            </div>
          </div>
          <p className="w-full mt-5 h-[1px] bg-[#e1e1e1] "></p>

          <div className="pt-[60%] ">
            <AiOutlineShopping className="w-16 text-[#e1e1e1]  mb-5 h-auto mx-auto  " />
            <h3 className="text-xl text-center text-[#e1e1e1]">
              Ihr Warenkorb ist gegenwärtig leer.
            </h3>
          </div>

          <div className=" bg-[#f7f7f7] ">
            <div className="flex justify-between mt-[20%]">
              <h3 className="text-2xl pl-8 text-[#758fa7] pt-5">
                Zwischensumme:
              </h3>
              <h4 className="text-2xl text-[#758fa7] pt-5">CHF 0.00</h4>
            </div>
            <p className="w-full mt-3 h-[1px] bg-[#e1e1e1] "></p>
            <div className="flex justify-between pb-20 ">
              <h3 className="text-2xl pl-8 text-[#758fa7] pt-5">
                Gesamtsumme:
              </h3>
              <h4 className="text-3xl text-[#758fa7] font-semibold pt-5">
                CHF 0.00
              </h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
//sarch Bar
function MobileSarchNav({ closeSarchMenu }) {
  return (
    <div className="fixed left-0 top-0 pt-[50%] flex h-auto min-h-screen w-full justify-center bg-black/60  lg:hidden">
      <div className="h-full  w-auto bg-white rounded-lg px-4 py-4 ">
        <section className="">
          <div className="flex ">
            {" "}
            <div className=" ">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <FaSearch />
                </span>
                <input
                  className="  block w[300px] lg:w-[350px] 2xl:w-[500px] rounded border-none py-2 pl-9 pr-3  focus:outline-none sm:text-sm"
                  type="text"
                  name="search"
                />
              </label>
            </div>{" "}
            <div className="flex justify-end pt-2 pl-5">
              <AiOutlineClose
                onClick={closeSarchMenu}
                className="cursor-pointer text-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Navbar;
