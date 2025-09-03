import React from 'react'
import { FaTiktok, FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
        <footer className='bg-black mt-10'>
            <div className='md:flex justify-between px-4 sm:px-8 lg:px-20 py-10 '>
                <a className="md:flex items-center justify-center xsm:h-4 xsm:w-[200px] xl:h-10 xl:w-[260px] cursor-pointer">
                    <img className="w-[90%] max-w-[180px] sm:max-w-[260px] object-contain px-4 md:px-0" src="./img/logo-HD95psKb.webp" alt="logo" />
                </a>

                <nav className="w-full md:w-auto">
                <ul className='md:flex flex-wrap justify-center gap-4 md:gap-6'>
                    <li className='text-[rgb(249,249,249)] hover:text-[rgba(144,0,0)] transition-colors duration-300 py-2 px-4'>
                    <NavLink to="/home">Ana Səhifə</NavLink>
                    </li>
                    <li className='text-[rgb(249,249,249)] hover:text-[rgba(144,0,0)] transition-colors duration-300 py-2 px-4' >
                    <NavLink to="/cars">Avtomobillər</NavLink>
                    </li>
                    <li className='text-[rgb(249,249,249)] hover:text-[rgba(144,0,0)] transition-colors duration-300 py-2 px-4'>
                    <NavLink to="/about">Haqqımızda</NavLink>
                    </li>
                    <li className='text-[rgb(249,249,249)] hover:text-[rgba(144,0,0)] transition-colors duration-300 py-2 px-4'>
                    <NavLink to="/services/vehicle-inspection">Xidmətlər</NavLink>
                    </li>
                    <li className='text-[rgb(249,249,249)] hover:text-[rgba(144,0,0)] transition-colors duration-300 py-2 px-4'>
                    <NavLink to="/documents">Sənədlər</NavLink>
                    </li>
                    <li className='text-[rgb(249,249,249)] hover:text-[rgba(144,0,0)] transition-colors duration-300 py-2 px-4'>
                    <NavLink to="/contact">Əlaqə</NavLink>
                    </li>
                </ul>
                </nav>
            </div>

            <div className='flex justify-between px-4 sm:px-8 lg:px-20 py-10  items-center gap-10'>
                <div className='flex text-white  items-center ' >
                    <a href="https://www.instagram.com/carify.az" className="text-2xl px-4"><FaInstagram /></a>
                    <a href="https://www.facebook.com/carifyllc" className="text-2xl px-4"><FaFacebook /></a>
                    <a href="https://t.me/carifyllc" className="text-2xl px-4"><FaTelegram /></a>
                    <a href="https://www.tiktok.com/@carify.llc?_t=ZS-8tWQkmQaIiY&_r=1" className="text-2xl px-4"><FaTiktok /></a>
                    <a href="https://wa.me/+821072167665" className="text-2xl px-4"><FaWhatsapp /></a>
                </div>

                <form className="hidden md:grid grid-cols-3 gap-4 md:w-[654px] py-4">
                <input
                name="trackingId"
                placeholder="Konteyner nömrəsi"
                className="col-span-2 flex h-14 items-center rounded-lg px-4 text-black bg-white"
                />
                    <button type="submit" className="cursor pointer col-span-1 flex h-14 items-center justify-center rounded-lg text-[#F9F9F9] bg-[rgba(144,0,0)]">Axtar</button>
                </form>
            </div>

            <div className="h-[68px] flex items-center md:justify-center py-10 px-6 md:px-0 text-white">© Copyright 2025 Carify, All Rights Reserved.</div>
        </footer>
    </>
  )
}

export default Footer