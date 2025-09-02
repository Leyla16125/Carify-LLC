import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { LuPackageSearch } from "react-icons/lu";
import { GiThorHammer } from "react-icons/gi";
import { BiStoreAlt } from "react-icons/bi";

function VehicleSearch() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 xsm:mx-4 xsm:my-10 xl:mx-auto xl:my-[40px] xl:max-w-container">
      <h2 className='text-center font-bold text-[rgba(144,0,0)] text-2xl xsm:text-3xl lg:text-4xl'>
        Avtomobil Axtarışı
      </h2>
      <p className="text-center text-[#282B2C] mx-4 max-w-full text-[20px] leading-[1.4] md:text-[24px] lg:mx-auto lg:max-w-[1000px] lg:leading-[36px] py-2">
        Müştərilərə avtomobil seçimi, baxımı və alışı prosesində peşəkar dəstək göstəririk.
      </p>

      {/* Top Image */}
      <div className="my-10 mb-20 mx-auto h-[400px] max-w-container overflow-hidden xsm:mb-16 xsm:rounded-none xl:rounded-2xl py-4">
        <div className="relative h-full w-full object-cover">
          <img
            src="/img/services-header-BHlJXGQ0.png"
            alt="Image"
            className="h-full w-full object-cover transition-opacity duration-500 opacity-100 rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Video + Text */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Avtomobil Axtarışı</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Avtomobil axtarışı xidmətimizdən istifadə edərək istədiyiniz avtomobili seçə və sifariş edə bilərsiniz. Video materiala baxaraq öz avtomobilinizi peşəkarlıqla seçin!
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtu.be/jvLXfzlIsdE?si=v1NQ-QIYHdvzLSOW"
            className='flex items-center gap-2.5 self-start text-lg font-medium underline text-red-500 mt-4'
          >
            <FaYoutube className='text-red-500' />
            <p className='px-2 text-red-500'>Keçid edin</p>
          </a>
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative w-full pb-[56%] h-0 rounded-lg shadow-md overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/jvLXfzlIsdE?si=ay8FiwiRzY-t1LXE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col p-6 space-y-6 rounded-lg shadow-md bg-white h-full">
          <div className="flex space-x-4">
            <div className="w-12 h-12 rounded-full shadow bg-[rgba(144,0,0)] flex items-center justify-center">
              <LuPackageSearch className="text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Onlayn Platforma</a>
            </div>
          </div>
          <p className="text-md text-gray-600">
            Kbchachacha və Encar Koreyanın ən böyük ikinci əl avtomobil saytlarıdır. Əməkdaşlarımız avtomobil axtarışı zamanı bu saytları istifadə edərək avtomobil tarixçəsini nəzərdən keçirir və ilkin məlumat əldə etdikdən sonra avtomobilin yoxlanışını həyata keçirir. Bu platformalarda geniş avtomobil seçimləri və ətraflı məlumat təqdim edilir.
          </p>
        </div>

        <div className="flex flex-col p-6 space-y-6 rounded-lg shadow-md bg-white h-full">
          <div className="flex space-x-4">
            <div className="w-12 h-12 rounded-full shadow bg-[rgba(144,0,0)] flex items-center justify-center">
              <GiThorHammer className="text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Auksion</a>
            </div>
          </div>
          <p className="text-md text-gray-600">
            Əməkdaşlarımız Heydealer, Autobell, AutoPlus kimi məşhur auksion saytlarından avtomobil axtarışını həyata keçirir. Tapılan avtomobillər yoxlanıldıqdan sonra müştərilərə şəkil və video materiallar təqdim edilir. Müştərilər avtomobil üçün təklif etdikləri qiyməti bildirdikdən sonra, avtomobil auksionda oynanılır. Bu proses, nadir və unikal avtomobilləri əldə etmək üçün əla bir fürsət yaradır.
          </p>
        </div>

        <div className="flex flex-col p-6 space-y-6 rounded-lg shadow-md bg-white h-full">
          <div className="flex space-x-4">
            <div className="w-12 h-12 rounded-full shadow bg-[rgba(144,0,0)] flex items-center justify-center">
              <BiStoreAlt className="text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Daxili Bazar</a>
            </div>
          </div>
          <p className="text-md text-gray-600">
            Xarici ölkələrdən baxılmasına məhdudiyyətlər qoyulan platformalardan da avtomobilin axtarış və yoxlanışını təmin edirik. Koreya daxili bazarlarında müştərilərimizin tələblərinə uyğun avtomobilləri axtarır və detallı yoxlamalar aparırıq. Bu mənbələrdən istifadə edərək daha çox seçim və xüsusi təkliflər tapmaq mümkündür.
          </p>
        </div>
      </div>
    </section>
  )
}

export default VehicleSearch
