import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Documents() {
  const contractImages = [
    "/img/contract_page_1-CJqfi2Jb.jpeg",
    "/img/contract_page_2-DjpZdOjD.jpeg",
    "/img/contract_page_3-Cfze2mV7.jpeg",
    "/img/contract_page_4-CVuOiiU9.jpeg",
    "/img/contract_page_5-lgScBarL.jpeg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // refs for custom nav
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Swiper needs refs attached after render
  const [navigationReady, setNavigationReady] = useState(false);
  useEffect(() => setNavigationReady(true), []);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % contractImages.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + contractImages.length) % contractImages.length);
  };

  return (
    <section className="w-full px-3 sm:px-6 lg:px-12 my-8 lg:my-12 max-w-[1280px] mx-auto">
      {/* Inline styles for custom nav buttons */}
      <style>{`
        .custom-nav-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.92);
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);
          transition: transform .12s ease, box-shadow .12s ease;
          border: none;
          cursor: pointer;
        }
        .custom-nav-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0,0,0,0.14); }
        .custom-nav-btn svg { width: 16px; height: 16px; }
        /* arrow color = rgba(144,0,0) */
        .custom-nav-btn svg path { stroke: rgba(144,0,0); stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; fill: none; }
        /* position adjustments for smaller screens */
        @media (max-width: 640px) {
          .custom-prev { left: 6px; }
          .custom-next { right: 6px; }
        }
      `}</style>

      {/* Başlıq */}
      <h2 className="text-center font-bold text-[#3c0000] text-2xl sm:text-3xl lg:text-4xl">
        Rəsmi Sənədlər
      </h2>

      {/* Mətn */}
      <p className="text-center text-[#282B2C] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mt-3 leading-relaxed">
        Avtomobil alışı zamanı rəsmi sənədlər, o cümlədən invoys və alıcı ilə
        şirkətimiz arasında bağlanan müqavilə formaları tam şəkildə təqdim
        edilir və bütün proses qanunvericiliyə uyğun şəkildə həyata keçirilir.
      </p>

      {/* Qalereya və məlumat bloku */}
      <div className="mt-10 flex flex-col lg:flex-row gap-10 items-start">
        {/* Mətn bloku */}
        <div className="lg:w-2/5 flex flex-col gap-6">
          <h3 className="text-center lg:text-left text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Müqavilə
          </h3>
          <p className="text-center lg:text-left text-sm sm:text-base lg:text-lg text-gray-700">
            Müştəri ilə aramızda bağlanılan müqavilə, iş prosesini rəsmiləşdirən
            ilk addımdır. Bu müqavilə əsasında avtomobilin axtarışı, yoxlanışı
            və müştəri istəyinə əsasən alışı həyata keçirilir. Müqavilənin
            şərtləri ilə tanış olmaq üçün nümunə şəkillərə nəzər yetirə
            bilərsiniz və ya “Nümunəni Yüklə” düyməsinə klik edərək yükləyə
            bilərsiniz.
          </p>
        </div>

        {/* Slider qalereya */}
        <div className="lg:w-3/5 relative">
          {/* Custom prev button */}
          <button
            ref={prevRef}
            className="custom-nav-btn custom-prev absolute left-3 top-1/2 -translate-y-1/2 z-20"
            aria-label="Əvvəlki"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          {/* Custom next button */}
          <button
            ref={nextRef}
            className="custom-nav-btn custom-next absolute right-3 top-1/2 -translate-y-1/2 z-20"
            aria-label="Növbəti"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {navigationReady && (
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              spaceBetween={16}
              slidesPerView={2} // mobil
              breakpoints={{
                640: { slidesPerView: 3 }, // tablet
                1024: { slidesPerView: 4 }, // desktop
              }}
              onInit={(swiper) => {
                // connect navigation refs (needed because refs are null on first render)
                // eslint-disable-next-line no-param-reassign
                swiper.params.navigation.prevEl = prevRef.current;
                // eslint-disable-next-line no-param-reassign
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {contractImages.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <button
                    type="button"
                    onClick={() => openLightbox(idx)}
                    className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm"
                  >
                    <img
                      src={src}
                      alt={`Müqavilə səhifə ${idx + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                    />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-3"
          aria-modal="true"
          role="dialog"
        >
          {/* Bağla */}
          <button
            className="absolute right-4 top-4 rounded-full bg-white/90 p-3 shadow hover:bg-white"
            aria-label="Bağla"
            onClick={closeLightbox}
          >
            ✕
          </button>

          {/* Əvvəlki (lightbox) */}
          <button
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow hover:bg-white"
            aria-label="Əvvəlki"
            onClick={prevImage}
          >
            ‹
          </button>

          {/* Şəkil */}
          <figure className="w-full max-w-4xl">
            <img
              src={contractImages[activeIndex]}
              alt={`Müqavilə səhifə ${activeIndex + 1}`}
              className="mx-auto max-h-[80vh] w-auto rounded-lg bg-white object-contain shadow-xl"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              Müqavilə — {activeIndex + 1} / {contractImages.length}
            </figcaption>
          </figure>

          {/* Növbəti (lightbox) */}
          <button
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow hover:bg-white"
            aria-label="Növbəti"
            onClick={nextImage}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

export default Documents;
