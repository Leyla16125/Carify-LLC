import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LuEqualApproximately } from "react-icons/lu";
import { FaLandmarkFlag, FaHeart } from "react-icons/fa6";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { IoInformationOutline } from "react-icons/io5";
import { PiSeat } from "react-icons/pi";
import { TbRoad } from "react-icons/tb";
import { LuFuel } from "react-icons/lu";
import { CiHeart } from "react-icons/ci"; 
import { useLike } from "./LikeContext";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const { likedCars, addLike, removeLike } = useLike(); 
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetch("https://car-data-alpha.vercel.app/avtomobiller")
      .then((res) => res.json())
      .then((data) => {
        const selectedCar = data.find((c) => c.id === Number(id));
        setCar(selectedCar || null);

        if (selectedCar) {
          // Əgər artıq like olunubsa state true olsun
          setLiked(likedCars.some((c) => c.id === selectedCar.id));
        }
      });
  }, [id, likedCars]);

  const toggleLike = () => {
    if (!car) return;
    if (liked) {
      removeLike(car.id);
    } else {
      addLike(car);
    }
    setLiked(!liked);
  };

  if (!car) return <p>Yüklənir...</p>;

  return (
    <section className="w-full px-2 sm:px-6 lg:px-10 xl:mx-auto xl:my-10 xl:max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2">
          {car.img && car.img.length > 0 && (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={car.img.length > 1}
            >
              {car.img.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative">
                    <img
                      src={src}
                      alt={`car-${index}`}
                      className="w-full h-[450px] object-contain rounded-2xl bg-black"
                    />
                    <button
                      onClick={toggleLike}
                      className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:scale-110 transition"
                    >
                      {liked ? (
                        <FaHeart className="text-red-500 text-xl" />
                      ) : (
                        <CiHeart className="text-red-500 text-xl" />
                      )}
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <div className="rounded-2xl border border-gray-300 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center text-2xl font-semibold">
              
              <p>{car.qiymet}$</p>
              <LuEqualApproximately className="mx-2 text-[#bcbcbc]" />
              <p className="text-[#bcbcbc]">
                {(car.qiymet * 1.7).toLocaleString()} ₼
              </p>
            </div>

            <hr className="my-4" />

            <div className="space-y-2 text-[#9e9e9e]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FaLandmarkFlag /> Moskva Çatdırılma
                </span>
                <span className="font-medium text-[#900000]">+1200$</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FaLandmarkFlag /> Bakı Çatdırılma
                </span>
                <span className="font-medium text-[#900000]">+800$</span>
              </div>
            </div>

            <hr className="my-4" />

            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center">
                <img
                  className="w-full h-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9nweScFiU4uFpK5d74iFGu9JL_iTdYayoQ&s"
                  alt="Carify"
                />
              </div>
              <div>
                <p className="font-semibold">Carify LLC</p>
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-6">
            <button className="cursor-pointer w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-[#900000] text-[#900000] hover:bg-red-50">
              <IoMdMail /> Bizə yazın
            </button>
            <button className="cursor-pointer w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-[#900000] text-white hover:bg-[#7c0101]">
              <IoIosCall /> Sifariş edin
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="my-10">
          <h2 className="text-2xl font-bold">{car.marka} {car.spesifik_model}</h2>
          <p>{car.model} model, {car.il}</p>

          <div className="sm:flex justify-between  my-5">

            <div className="flex items-center space-x-3 py-2">
              <div className="flex items-center justify-center w-14 h-14 border-2 border-black rounded-full">
                <LuFuel className="text-2xl" />
              </div>

              <div>
                <p className="font-bold text-[18px]">Yanacaq</p>
                <p className="text-gray-700 text-[16px]">{car.yanacaq}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 py-2">
              <div className="flex items-center justify-center w-14 h-14 border-2 border-black rounded-full">
                <TbRoad  className="text-2xl" />
              </div>

              <div>
                <p className="font-bold text-[18px]">Yürüş</p>
                <p className="text-gray-700 text-[16px]">{car.yuruyus} km</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 py-2">
              <div className="flex items-center justify-center w-14 h-14 border-2 border-black rounded-full">
                <PiSeat   className="text-2xl" />
              </div>

              <div>
                <p className="font-bold text-[18px]">Yerlərin sayı</p>
                <p className="text-gray-700 text-[16px]">{car.tutum}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 py-2">
              <div className="flex items-center justify-center w-14 h-14 border-2 border-black rounded-full">
                <HiOutlineColorSwatch    className="text-2xl" />
              </div>

              <div>
                <p className="font-bold text-[18px]">Rəng</p>
                <p className="text-gray-700 text-[16px]">{car.color}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 py-2">
              <div className="flex items-center justify-center w-14 h-14 border-2 border-black rounded-full">
                <IoInformationOutline  className="text-2xl" />
              </div>

              <div>
                <p className="font-bold text-[18px]">Maşının əziyyət</p>
                <p className="text-gray-700 text-[16px]">{car.veziyyet}</p>
              </div>
            </div>

          </div>

          <div>
            <div className="py-2">
              <h2 className="text-xl font-bold">Qəza tarixi</h2>
              <p>{car.qeza_tarixi}</p>
            </div>
            
            <div className="py-2">
              <h2 className="text-xl font-bold">Zəmanət</h2>
              <p>{car.zemanet}</p>
            </div>

            <div className="py-2">
              <h2 className="text-xl font-bold">Ümumi baxış</h2>
              <p>{car.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarDetails;
