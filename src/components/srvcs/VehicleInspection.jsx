import React, { useState } from 'react'
import { FaYoutube, FaPlay, FaTimes } from "react-icons/fa";

function VehicleInspection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const inspectionItems = [
    {
      title: "Yenidən Boyanan Detal",
      description:
        "Avtomobilin rəng qalınlığını müəyyən edən xüsusi aparatla avtomobilin yenidən rənglənən detal sayını müəyyən edir və müştəri bununla bağlı məlumatlandırılır.",
      image: "/img/detailed_1_1-yDIkGfWX.webp",
      youtubeLink:"https://www.youtube.com/embed/klXf48dKmlU"
    },
    {
      title: "Vizual Baxış",
      description:
        "Avtomobilin xarici və daxili görünüşü diqqətlə yoxlanılır və fotoşəkillər çəkilir.",
      image: "/img/detailed_2_2-B3AH6gR7.webp",
      youtubeLink:"https://www.youtube.com/embed/24eos81IHGc"
    },
    {
      title: "Çürük və Pas",
      description:
        "Avtomobilin inspeksiya zamanı alt və daim çürüməyə məruz qalan hissələri inspektor tərəfindən müəyyən edilir və müştəriyə məlumat verilir.",
      image: "/img/detailed_3_3-BkntHQzt.webp",
      youtubeLink:"https://www.youtube.com/embed/ztQnwo5EssY"
    },
    {
      title: "Opsiyaların Funksionallığı",
      description:
        "Avtomobilin daxilində olan bütün opsiyaların funksionallığı ətraflı şəkildə yoxlanılaraq müştəriyə bildirilir.",
      image: "/img/detailed_4_4-Cev3M_UL.webp",
      youtubeLink:"https://www.youtube.com/embed/DeORobvUhcw"
    },
    {
      title: "Mühərrik və Sürətlər Qutusu",
      description:
        "Mühərrik və sürətlər qutusu ətraflı yoxlanışdan keçirərək vəziyyəti barədə müştəriyə dəqiq məlumat verilir.",
      image: "/img/detailed_5_5-DPxHrrG0.webp",
      youtubeLink:"https://www.youtube.com/embed/vAZtG1i5G0o"
    },
    {
      title: "Kompyuterlə Yoxlanış",
      description:
        "Əlavə ödənişlə (20$), avtomobilin yerindəcə kompyuterlə texniki yoxlanışı da təmin olunur. Bu, avtomobilin tam funksional vəziyyətini təsdiq etməyə kömək edir.",
      image: "/img/detailed_6_6-DDtop9Ih.webp",
      youtubeLink:"https://www.youtube.com/embed/nUwml5n0REE"
    },
  ];

  const openModal = (link) => {
    setCurrentVideo(link);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentVideo("");
    setModalOpen(false);
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 xsm:mx-4 xsm:my-10 xl:mx-auto xl:my-[40px] xl:max-w-container">
      <h2 className='text-center font-bold text-[rgba(144,0,0)] text-2xl xsm:text-3xl lg:text-4xl'>
        Avtomobilin Yoxlanış Prosesi
      </h2>
      <p className="text-center text-[#282B2C] mx-4 max-w-full text-[20px] leading-[1.4] md:text-[24px] lg:mx-auto lg:max-w-[1000px] lg:leading-[36px] py-2">
        Avtomobillər mütəxəssislər tərəfindən tam yoxlanır və müştərilər 5 video material, təqribən 60 fotoşəkillərlə təmin olunur.
      </p>

      <div className="my-10 mb-20 mx-auto h-[400px] max-w-container overflow-hidden xsm:mb-16 xsm:rounded-none xl:rounded-2xl py-4">
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=klXf48dKmlU&list=PL7VqSTU6K70TpfAS5WiIwYS6CdDbqr1FK&ab_channel=CarifyLLC"
            className='flex items-center gap-2.5 self-start text-lg font-medium underline text-red-500 mt-4'
          >
            <FaYoutube className='text-red-500' />
            <p className='px-2 text-red-500'>Keçid edin</p>
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/img/check-process-CsqCUsw-.webp"
            alt="Carify fəaliyyəti"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Avtomobilin Detallı Yoxlanışı
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {inspectionItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <button
                onClick={() => openModal(item.youtubeLink)}
                className="cursor-pointer absolute bottom-3 right-3 flex items-center gap-2 rounded-md bg-[rgba(144,0,0)] px-3 py-1 text-white text-sm font-medium shadow-lg"
              >
                <FaPlay />
                Play
              </button>
            </div>
            <div className="p-4 flex flex-col">
              <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="cursor-pointer absolute top-2 right-2 text-white text-2xl z-50"
            >
              <FaTimes />
            </button>
            <iframe
              width="100%"
              height="400px"
              src={currentVideo}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}

export default VehicleInspection;
