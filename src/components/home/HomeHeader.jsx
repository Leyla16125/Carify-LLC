import React, { useState, useEffect } from 'react';
import { BsChevronDown, BsPersonFill,BsSuitHeartFill,BsList,BsX } from "react-icons/bs";
import { NavLink } from "react-router-dom";


function HomeHeader() {
  const images = [
    '/img/28803_1_upscayl_2x_upscayl_standard_4x_2_df2eead425.webp',
    '/img/Bugatti_Unveils_the_V16_Powered_Tourbillon_Hypercar_6_upscayl_2x_upscayl_standard_4x_cd046f1b9c.webp',
    '/img/landing_bg_1_51ee4b0daf.webp'
  ];

  const [currentImg, setCurrentImg] = useState(0);
  const [openMenu, setOpenMenu] =useState(false);

  useEffect(() => {
    images.forEach(image => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className='relative h-screen overflow-hidden'>
      <div className="absolute inset-0" loading="lazy">
        {images.map((image, index) => (
          <div
            key={image} 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImg ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{ 
              backgroundImage: `url(${image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            aria-hidden={index !== currentImg}
          />
        ))}
      </div>

      <div className='absolute w-full flex justify-between items-center px-4 sm:px-8 lg:px-20 py-10'>

        <a className="flex items-center justify-center xsm:h-4 xsm:w-[200px] xl:h-10 xl:w-[224px] cursor-pointer">
            <img className="w-[80%] max-w-[160px] sm:max-w-[220px] object-contain" src="./img/logo-HD95psKb.webp" alt="logo" />
        </a>

        <nav className="min-w-[454px] hidden xl:block">
  <ul className='flex sm:flex-row sm:items-center gap-4 sm:justify-between'>
    <li>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? "text-[rgba(144,0,0)] font-bold"
            : "text-[rgb(249,249,249)] hover:text-[rgba(144,0,0)] transition-colors duration-300"
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
            : "text-[rgb(249,249,249)] hover:text-[rgba(144,0,0)] transition-colors duration-300"
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
            : "text-[rgb(249,249,249)] hover:text-[rgba(144,0,0)] transition-colors duration-300"
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
            : "text-[rgb(249,249,249)] hover:text-[rgba(144,0,0)] transition-colors duration-300"
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
            : "text-[rgb(249,249,249)] hover:text-[rgba(144,0,0)] transition-colors duration-300"
        }
      >
        Əlaqə
      </NavLink>
    </li>
  </ul>
        </nav>


        <div className='hidden xl:flex gap-3 '> 
          <button className="flex h-10 items-center gap-x-2 rounded-lg border border-[#B9BABB] px-3 py-2 text-[#B9BABB]">
            <span>Az</span>
             <BsChevronDown />
          </button>

          <a className="flex h-10 cursor-pointer items-center justify-center rounded-lg border border-[#B9BABB] text-[#B9BABB] px-4 py-2">
          <BsPersonFill />
          </a>

          <a className="flex h-10 cursor-pointer items-center justify-center rounded-lg border border-[#B9BABB] text-[#B9BABB] px-4 py-2">
          <BsSuitHeartFill />
          </a>

          <a className="flex h-10 cursor-pointer items-center gap-x-2 rounded-lg bg-[rgba(144,0,0)] px-5 py-2">
            <span className="text-[#F9F9F9]">İzləmə</span>
          </a>
        </div>
    
        <div className="flex xl:hidden">

        <button 
          className="text-white text-2xl cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <BsList />
        </button>
        </div>

        <div
          className={`absolute top-0 left-0 w-full h-screen bg-white text-black flex flex-col items-start px-4 py-6 gap-4 xl:hidden z-50
          transition-all duration-500 ease-in-out
          ${openMenu ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible'}`}
        >
          <button
            onClick={() => setOpenMenu(false)}
            className="text-3xl self-end mb-4 cursor-pointer"
          >
            <BsX />
          </button>

          <img className='w-[80%] max-w-[160px] sm:max-w-[220px] object-contain' src="./img/logo-red-6xBktdhv.png" alt="logo" />
          <NavLink to="/cars" onClick={() => setOpenMenu(false)}>Avtomobillər</NavLink>
          <NavLink to="/about" onClick={() => setOpenMenu(false)}>Haqqımızda</NavLink>
          <NavLink to="/documents" onClick={() => setOpenMenu(false)}>Sənədlər</NavLink>
          <NavLink to="/contact" onClick={() => setOpenMenu(false)}>Əlaqə</NavLink>

          <a className="flex h-10 cursor-pointer items-center justify-center rounded-lg border border-[#B9BABB] text-[#B9BABB] px-4 py-2">
            <BsPersonFill />
          </a>

        </div>

      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 sm:px-8 lg:px-20 text-center lg:text-left">
        <h2 className="font-normal text-white text-[24px] leading-[32px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[64px] max-w-[900px] mx-auto lg:mx-0">
          Konteynerinizin Yerini <br className="block sm:hidden" />
          <span className="font-bold">Bir Kliklə İzləyin</span> – <br />
          Carify ilə Hər Zaman Güvəndə!
        </h2>
        <form className="grid grid-cols-3 gap-4 md:w-[654px] py-4">
        <input
          defaultValue=""
          name="trackingId"
          placeholder="Konteyner nömrəsi"
          className="col-span-2 flex h-14 items-center rounded-lg px-4 text-black bg-white"
        />
          <button type="submit" className="cursor pointer col-span-1 flex h-14 items-center justify-center rounded-lg text-[#F9F9F9] bg-[rgba(144,0,0)]">Axtar</button>
        </form>
      </div>

    </header>
  );
}

export default HomeHeader;