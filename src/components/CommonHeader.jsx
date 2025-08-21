import React, { useState } from "react";
import { BsChevronDown, BsPersonFill, BsSuitHeartFill, BsList, BsX } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function CommonHeader() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="overflow-hidden">
      <div className="w-full flex justify-between items-center px-4 sm:px-8 lg:px-20 py-10">
        <a
          className="flex items-center justify-center xsm:h-4 xsm:w-[196px] xl:h-10 xl:w-[220px] cursor-pointer"
          href="/"
        >
          <img
            className="w-[80%] max-w-[160px] sm:max-w-[220px] object-contain"
            src="./img/logo-red-6xBktdhv.png"
            alt="logo"
          />
        </a>

        <nav className="min-w-[454px] hidden xl:block">
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

        <div className="hidden xl:flex gap-3">
          <button className="flex h-10 items-center gap-x-2 rounded-lg border border-[#B9BABB] px-3 py-2 text-[#B9BABB]">
            <span>Az</span>
            <BsChevronDown />
          </button>

          <NavLink 
            to="/login"
            className="flex h-10 cursor-pointer items-center justify-center rounded-lg border border-[#B9BABB] text-[#B9BABB] px-4 py-2"
          >
            <BsPersonFill />
          </NavLink>

          <a className="flex h-10 cursor-pointer items-center justify-center rounded-lg border border-[#B9BABB] text-[#B9BABB] px-4 py-2">
            <BsSuitHeartFill />
          </a>

          <a className="flex h-10 cursor-pointer items-center gap-x-2 rounded-lg bg-[rgba(144,0,0)] px-5 py-2">
            <span className="text-[#F9F9F9]">İzləmə</span>
          </a>
        </div>

        <div className="flex xl:hidden">
          <button
            className="text-black text-2xl cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <BsList />
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-black flex flex-col items-start px-4 py-6 gap-4 xl:hidden z-50
          transition-all duration-500 ease-in-out
          ${openMenu ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-10 invisible"}`}
        >
          <button
            onClick={() => setOpenMenu(false)}
            className="text-3xl self-end mb-4 cursor-pointer"
          >
            <BsX />
          </button>

          <img
            className="w-[80%] max-w-[160px] sm:max-w-[220px] object-contain"
            src="./img/logo-red-6xBktdhv.png"
            alt="logo"
          />
          <NavLink to="/home" onClick={() => setOpenMenu(false)}>
            Ana Səhifə
          </NavLink>
          <NavLink to="/cars" onClick={() => setOpenMenu(false)}>
            Avtomobillər
          </NavLink>
          <NavLink to="/about" onClick={() => setOpenMenu(false)}>
            Haqqımızda
          </NavLink>
          <NavLink to="/documents" onClick={() => setOpenMenu(false)}>
            Sənədlər
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpenMenu(false)}>
            Əlaqə
          </NavLink>
          <a className="flex h-10 cursor-pointer items-center justify-center rounded-lg border border-[#B9BABB] text-[#B9BABB] px-4 py-2">
            <BsPersonFill />
          </a>
        </div>
      </div>
    </header>
  );
}

export default CommonHeader;
