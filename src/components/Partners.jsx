import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules';

const partners = [
  { 
    url: 'http://www.encar.com/index.do', 
    img: 'https://admin.carify.az/uploads/Encar_29cad9f19f.webp' 
  },
  { 
    url: 'https://www.kbchachacha.com/', 
    img: 'https://admin.carify.az/uploads/KB_0fe9ef59bd.webp' 
  },
  { 
    url: 'https://www.heydealer.com/', 
    img: 'https://admin.carify.az/uploads/Heydealer_18f126b884.webp' 
  },
  { 
    url: 'https://www.instagram.com/nanolube.express/', 
    img: 'https://admin.carify.az/uploads/NANOLUBE_LAST_LOGO_lassst_9d613f1a16.webp' 
  },
  { 
    url: 'https://www.msc.com/', 
    img: 'https://admin.carify.az/uploads/MSC_c3c9efeb45.png' 
  },
  { 
    url: 'https://www.one-line.com/', 
    img: 'https://admin.carify.az/uploads/ONE_80da093f57.png' 
  },
  { 
    url: 'https://www.maersk.com/', 
    img: 'https://admin.carify.az/uploads/Maersk_0e2a7ca3b8.png' 
  },
  { 
    url: 'https://www.evergreen-marine.com/', 
    img: 'https://admin.carify.az/uploads/Evergreen_70aa6e5acb.webp' 
  },
  { 
    url: 'https://www.hapag-lloyd.com/', 
    img: 'https://admin.carify.az/uploads/Hapag_Lloyd_d46f87046e.webp' 
  },
  { 
    url: 'https://carify.az/services/logistics', 
    img: 'https://admin.carify.az/uploads/Carify_Logistics_Main_Logo_3e604cafe2.webp' 
  },
  { 
    url: 'https://voltacontainerline.com/', 
    img: 'https://admin.carify.az/uploads/Volta_d9b1d9d2d6.webp' 
  },
];

function Partners() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 xsm:mx-4 xsm:my-10 xl:mx-auto xl:my-[120px] xl:max-w-container">
      <h2 className="text-[36px] leading-[40px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[56px] lg:leading-[64px] font-bold text-[#3c0000] mb-6 md:mb-8 max-w-full lg:max-w-[900px] mx-auto lg:mx-0 pt-10">
        Tərəfdaşlar
      </h2>

      <div className="h-20 w-full">
        <Swiper
          ref={swiperRef}
          modules={[FreeMode, Autoplay]}
          spaceBetween={60}
          slidesPerView="auto"
          freeMode={true}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          grabCursor={true}
          onInit={(swiper) => {
            swiper.autoplay.start();
          }}
        >
          {partners.map((partner, index) => (
            <SwiperSlide
              key={index}
              className="!w-max flex items-center justify-center"
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-16"
              >
                <img
                  src={partner.img}
                  alt={`partner-${index}`}
                  className="h-full object-contain"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Partners;