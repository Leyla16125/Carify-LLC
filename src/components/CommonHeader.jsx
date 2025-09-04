import React, { useState } from "react";
import { BsChevronDown, BsPersonFill, BsSuitHeartFill, BsList, BsX } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function CommonHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [language, setLanguage] = useState("Az");  

  return (
    <header className="relative z-10">
      <div className="w-full flex justify-between items-center px-4 sm:px-8 lg:px-20 py-10">
        <a
          className="flex items-center justify-center xsm:h-4 xsm:w-[196px] xl:h-10 xl:w-[220px] cursor-pointer z-10"
          href="/"
        >
          <img
            className="w-[80%] max-w-[160px] sm:max-w-[220px] object-contain"
            src="./img/logo-red-6xBktdhv.png"
            alt="logo"
          />
        </a>

        <nav className="min-w-[454px] hidden xl:block relative z-20">
          <ul className="flex sm:flex-row sm:items-center gap-4 sm:justify-between">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-[rgba(144,0,0)] font-bold"
                    : "text-black hover:text-[rgba(144,0,0)] transition-colors duration-300"
                }
              >
                Ana Səhifə
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cars"
                className={({ isActive }) =>
                  isActive
                    ? "text-[rgba(144,0,0)] font-bold"
                    : "text-black hover:text-[rgba(144,0,0)] transition-colors duration-300"
                }
              >
                Avtomobillər
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[rgba(144,0,0)] font-bold"
                    : "text-black hover:text-[rgba(144,0,0)] transition-colors duration-300"
                }
              >
                Haqqımızda
              </NavLink>
            </li>
            <li className="relative">
              <button
                onClick={() => setOpenServices(!openServices)}
                className="flex items-center gap-1 cursor-pointer hover:text-[rgba(144,0,0)] transition-colors"
              >
                Xidmətlər{" "}
                <BsChevronDown
                  className={`${openServices ? "rotate-180" : ""} transition-transform`}
                />
              </button>
              {openServices && (
                <ul className="absolute left-0 mt-2 w-50 bg-white border border-gray-200 rounded-lg shadow-lg z-50 flex flex-col">
                <li>
                 <NavLink
                   to="/services/vehicle-inspection"
                   className="block px-4 py-2 hover:bg-gray-100"
                   onClick={() => setOpenServices(false)}
                 >
                   Avtomobil Yoxlanış
                 </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/vehicle-search"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpenServices(false)}
                  >
                    Avtomobil Axtarışı
                  </NavLink>
                </li>
                <li>
                <NavLink
                  to="/services/logistics"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpenServices(false)}
                >
                  Daşınma
                </NavLink>
                </li>
                 </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/documents"
                className={({ isActive }) =>
                  isActive
                    ? "text-[rgba(144,0,0)] font-bold"
                    : "text-black hover:text-[rgba(144,0,0)] transition-colors duration-300"
                }
              >
                Sənədlər
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-[rgba(144,0,0)] font-bold"
                    : "text-black hover:text-[rgba(144,0,0)] transition-colors duration-300"
                }
              >
                Əlaqə
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="hidden xl:flex gap-3 relative z-10">
          <div className='relative'>
            <button 
              onClick={() => setOpenLang(!openLang)}
              className="cursor-pointer flex h-10 items-center gap-x-2 rounded-lg border border-[#B9BABB] px-3 py-2 text-[#B9BABB]">
              <span>{language}</span>
              <BsChevronDown className={`${openLang ? "rotate-180" : ""} transition-transform`} />
            </button>
          
            {openLang && (
              <ul className="cursor-pointer absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <li>
                  <button
                    onClick={() => {
                      setLanguage("Az");   
                      setOpenLang(false); 
                    }}
                    className="cursor-pointer block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    Az
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setLanguage("En");   
                      setOpenLang(false); 
                    }}
                    className="cursor-pointer block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    En
                  </button>
                </li>
              </ul>
              )}
          </div>

          <NavLink
            to="/login"
            className="flex h-10 cursor-pointer items-center justify-center rounded-lg border border-[#B9BABB] text-[#B9BABB] px-4 py-2"
          >
            <BsPersonFill />
          </NavLink>

          <NavLink
            to="/like"
            className="flex h-10 cursor-pointer items-center justify-center rounded-lg border border-[#B9BABB] text-[#B9BABB] px-4 py-2"
          >
            <BsSuitHeartFill />
          </NavLink>

          <a className="flex h-10 cursor-pointer items-center gap-x-2 rounded-lg bg-[rgba(144,0,0)] px-5 py-2">
            <span className="text-[#F9F9F9]">İzləmə</span>
          </a>
        </div>

        <div className="flex xl:hidden relative z-10">
          <button
            className="text-black text-2xl cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <BsList />
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col items-start px-4 py-6 gap-4 xl:hidden z-50
          transition-all duration-500 ease-in-out overflow-y-auto
          ${openMenu ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-10 invisible"}`}
        >
          <button
            onClick={() => setOpenMenu(false)}
            className="text-3xl self-end mb-4 cursor-pointer absolute top-4 right-4"
          >
            <BsX />
          </button>

          <img
            className="w-[80%] max-w-[160px] sm:max-w-[220px] object-contain mt-8"
            src="./img/logo-red-6xBktdhv.png"
            alt="logo"
          />

          <NavLink to="/home" onClick={() => setOpenMenu(false)} className="w-full py-2">
            Ana Səhifə
          </NavLink>
          <NavLink to="/cars" onClick={() => setOpenMenu(false)} className="w-full py-2">
            Avtomobillər
          </NavLink>
          <NavLink to="/about" onClick={() => setOpenMenu(false)} className="w-full py-2">
            Haqqımızda
          </NavLink>

          <div className="w-full">
            <button
              onClick={() => setOpenServices(!openServices)}
              className="flex items-center gap-2 w-full py-2 justify-between"
            >
              Xidmətlər
              <BsChevronDown
                className={`${openServices ? "rotate-180" : ""} transition-transform`}
              />
            </button>
            {openServices && (
              <div className="ml-4 flex flex-col gap-2 mt-2">
                <NavLink
                  to="/services/vehicle-inspection"
                  onClick={() => {
                    setOpenServices(false);
                    setOpenMenu(false);
                  }}
                  className="py-2"
                >
                  Avtomobil Yoxlanış
                </NavLink>
                <NavLink
                  to="/services/vehicle-search"
                  onClick={() => {
                    setOpenServices(false);
                    setOpenMenu(false);
                  }}
                  className="py-2"
                >
                  Avtomobil Axtarışı
                </NavLink>
                <NavLink
                  to="/services/logistics"
                  onClick={() => {
                    setOpenServices(false);
                    setOpenMenu(false);
                  }}
                  className="py-2"
                >
                  Daşınma
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/documents" onClick={() => setOpenMenu(false)} className="w-full py-2">
            Sənədlər
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpenMenu(false)} className="w-full py-2">
            Əlaqə
          </NavLink>
          
          <div className="flex gap-3 mt-4">
            <div className='relative'>
              <button 
                onClick={() => setOpenLang(!openLang)}
                className="cursor-pointer flex h-10 items-center gap-x-2 rounded-lg border border-[#B9BABB] px-3 py-2 text-[#B9BABB]">
               <span>{language}</span>
              <BsChevronDown className={`${openLang ? "rotate-180" : ""} transition-transform`} />
              </button>
            
              {openLang && (
                <ul className="cursor-pointer absolute left-0 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <li>
                    <button
                      onClick={() => {
                        setLanguage("Az");   
                        setOpenLang(false); 
                      }}
                      className="cursor-pointer block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Az
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setLanguage("En");   
                        setOpenLang(false); 
                      }}
                      className="cursor-pointer block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      En
                    </button>
                  </li>
                </ul>
                )}
            </div>
          <NavLink
            to="/like"
            className="flex h-10 cursor-pointer items-center justify-center rounded-lg border border-[#B9BABB] text-[#B9BABB] px-4 py-2"
          >
            <BsSuitHeartFill />
          </NavLink>
            <NavLink to="/login" className="flex h-10 cursor-pointer items-center justify-center rounded-lg border border-[#B9BABB] text-[#B9BABB] px-4 py-2">
              <BsPersonFill />
            </NavLink>
            <a className="flex h-10 cursor-pointer items-center gap-x-2 rounded-lg bg-[rgba(144,0,0)] px-5 py-2">
              <span className="text-[#F9F9F9]">İzləmə</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default CommonHeader;
