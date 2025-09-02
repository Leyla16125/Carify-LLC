import React from 'react'
import { FaYoutube } from "react-icons/fa";

function VehicleInspection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 xsm:mx-4 xsm:my-10 xl:mx-auto xl:my-[40px] xl:max-w-container">
      <h2 className='text-center font-bold text-[rgba(144,0,0)] text-2xl xsm:text-3xl lg:text-4xl'>
        Avtomobilin Yoxlanış Prosesi
      </h2>
      <p className="text-center text-[#282B2C] mx-4 max-w-full text-[20px] leading-[1.4] md:text-[44px] lg:mx-auto lg:max-w-[1000px] lg:leading-[64px] py-2">
        Avtomobillər mütəxəssislər tərəfindən tam yoxlanır və müştərilər 5 video material, təqribən 60 fotoşəkillərlə təmin olunur.
      </p>
    
    <div className="my-10  mb-20 mx-auto h-[400px] max-w-container overflow-hidden xsm:mb-16 xsm:rounded-none xl:rounded-2xl py-4">
      <div className="relative h-full w-full object-cover">
        <img
          src="/img/engine-ChC79njs.webp"
          alt="Image"
          className="h-full w-full object-cover transition-opacity duration-500 opacity-100 rounded-lg shadow-md"
        />
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Yoxlanış Prosesi</h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Koreyanın müxtəlif ərazilərində yerləşən ofislərimiz sayəsində (Busan, Dequ, İnçon, Qvancu, Seul, İnçon və s.) istənilən ərazidəki avtomobili 1 iş günü ərzində yoxlamağa şərait yaradır. Yoxlama prosesi peşəkar əməkdaşlarımız tərəfindən qabaqcıl avadanlıqlardan istifadə edilərək həyata keçirilir.
        </p>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=klXf48dKmlU&list=PL7VqSTU6K70TpfAS5WiIwYS6CdDbqr1FK&ab_channel=CarifyLLC" className='flex items-center gap-2.5 self-start text-lg font-medium underline text-red-500'><FaYoutube className='text-red-500' /><p className='px-2 text-red-500' >Keçid edin</p></a>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="/img/check-process-CsqCUsw-.webp"
          alt="Carify fəaliyyəti"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>


  </section>
  )
}
