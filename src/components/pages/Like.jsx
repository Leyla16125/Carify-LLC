// Like.js
import React from "react";
import { useLike } from "./LikeContext"; 
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Like() {
  const { likedCars, removeLike } = useLike();
  const navigate = useNavigate();

  if (likedCars.length === 0) {
    return (
      <section className="w-full px-2 sm:px-6 lg:px-10 xl:mx-auto xl:my-10 xl:max-w-7xl">
        <div className="text-center min-h-[400px] flex justify-center items-center flex-col gap-2">
          <img src="../img/car.webp" alt="Carify wishlist" className="max-w-[200px] opacity-70" />
          <h3 className="text-[24px] font-normal pb-[6px] mt-[-14px]">
            İstək siyahınız boşdur
          </h3>
          <a
            className="flex h-10 cursor-pointer items-center gap-x-2 rounded-lg bg-[#900000] px-5 py-2 hover:bg-[#700000] transition-colors"
            href="/cars"
          >
            <span className="text-[#F9F9F9]">Avtomobilləri kəşf et</span>
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-2 sm:px-6 lg:px-10 xl:mx-auto xl:my-10 xl:max-w-7xl">
      <h2 className="text-2xl font-bold mb-6">Bəyəndiyiniz Avtomobillər</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {likedCars.map((car) => (
          <div
            key={car.id}
            className="border rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer hover:shadow-lg transition relative"
          >
            <img
              src={car.img || "../img/car-placeholder.webp"}
              alt={car.name}
              className="w-full h-40 object-cover rounded"
              onClick={() => navigate(`/cars/${car.id}`)}
            />
            <div className="w-full text-center" onClick={() => navigate(`/cars/${car.id}`)}>
              <h4 className="font-semibold">
                {car.model} {car.spesifik_model} {car.il}
              </h4>
              <p className="text-gray-600">{car.qiymet ? `${car.qiymet} AZN` : "Qiymət məlumatı yoxdur"}</p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation(); 
                removeLike(car.id);
              }}
              className="mt-2 px-4 py-2 bg-[#900000] text-white rounded flex items-center gap-1 hover:bg-[#700000] transition-colors"
            >
              <MdDeleteOutline />
              <span className="cursor-pointer">Sil</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Like;