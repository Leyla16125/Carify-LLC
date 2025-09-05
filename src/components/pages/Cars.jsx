import React, { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { LuFuel } from "react-icons/lu";
import { MdArrowOutward, MdArrowBack, MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

function Cars() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [years, setYears] = useState([]);
  const [colors, setColors] = useState([]);
  const [models, setModels] = useState([]);
  const [fuels, setFuels] = useState([]);

  const [filters, setFilters] = useState({
    brand: "",
    year: "",
    color: "",
    model: "",
    fuel: "",
    minPrice: "",
    maxPrice: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    fetch("https://car-data-alpha.vercel.app/avtomobiller")
      .then((res) => res.json())
      .then((carsData) => {
        setCars(carsData);
        setFilteredCars(carsData);
        setBrands([...new Set(carsData.map((car) => car.marka))]);
        setYears([...new Set(carsData.map((car) => car.il))]);
        setColors([...new Set(carsData.map((car) => car.color))]);
        setModels([...new Set(carsData.map((car) => car.model))]);
        setFuels([...new Set(carsData.map((car) => car.yanacaq))]);
      });

    fetch("https://car-data-alpha.vercel.app/summary")
      .then((res) => res.json())
      .then((summaryData) => {
        setMinPrice(summaryData[0].qiymet_araligi.minimum);
        setMaxPrice(summaryData[0].qiymet_araligi.maksimum);
        setFilters((prev) => ({
          ...prev,
          minPrice: summaryData[0].qiymet_araligi.minimum,
          maxPrice: summaryData[0].qiymet_araligi.maksimum,
        }));
      });
  }, []);

  const applyFilters = () => {
    let filtered = cars.filter((car) => {
      return (
        (filters.brand ? car.marka === filters.brand : true) &&
        (filters.year ? car.il === Number(filters.year) : true) &&
        (filters.color ? car.color === filters.color : true) &&
        (filters.model ? car.model === filters.model : true) && 
        (filters.fuel ? car.yanacaq === filters.fuel : true) && 
        (filters.minPrice ? car.qiymet >= filters.minPrice : true) &&
        (filters.maxPrice ? car.qiymet <= filters.maxPrice : true)
      );
    });

    setFilteredCars(filtered);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({
      brand: "",
      year: "",
      color: "",
      model: "",
      fuel: "",
      minPrice,
      maxPrice,
    });
    setFilteredCars(cars);
    setCurrentPage(1);
  };

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  // Pagination funksiyaları
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; 
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let endPage = startPage + maxVisiblePages - 1;
      
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - maxVisiblePages + 1;
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }
    
    return pageNumbers;
  };

  return (
    <section className="w-full px-2 sm:px-6 lg:px-18 xsm:mx-2 xsm:my-8 xl:mx-auto xl:my-[38px] xl:max-w-container">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 p-4 mb-4 lg:mb-0 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-bold mb-4 text-[#900000]">Filtrlər</h2>
          
          <select
            className="w-full p-2 mb-2 rounded-lg border border-[#676767] text-[#676767] cursor-pointer"
            value={filters.brand}
            onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
          >
            <option value="">Bütün markalar</option>
            {brands.map((brand, idx) => (
              <option key={idx} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <select
            className="w-full p-2 mb-2 rounded-lg border border-[#676767] text-[#676767] cursor-pointer"
            value={filters.year}
            onChange={(e) => setFilters({ ...filters, year: e.target.value })}
          >
            <option value="">Bütün illər</option>
            {years.map((year, idx) => (
              <option key={idx} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            className="w-full p-2 mb-2 rounded-lg border border-[#676767] text-[#676767] cursor-pointer"
            value={filters.color}
            onChange={(e) => setFilters({ ...filters, color: e.target.value })}
          >
            <option value="">Bütün rənglər</option>
            {colors.map((color, idx) => (
              <option key={idx} value={color}>
                {color}
              </option>
            ))}
          </select>

          <select
            className="w-full p-2 mb-2 rounded-lg border border-[#676767] text-[#676767] cursor-pointer"
            value={filters.model}
            onChange={(e) => setFilters({ ...filters, model: e.target.value })}
          >
            <option value="">Bütün modellər</option>
            {models.map((model, idx) => (
              <option key={idx} value={model}>
                {model}
              </option>
            ))}
          </select>

          <select
            className="w-full p-2 mb-2 rounded-lg border border-[#676767] text-[#676767] cursor-pointer"
            value={filters.fuel}
            onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
          >
            <option value="">Bütün yanacaqlar</option>
            {fuels.map((fuel, idx) => (
              <option key={idx} value={fuel}>
                {fuel}
              </option>
            ))}
          </select>

          <div className="mb-2">
            <label className="block text-sm text-[#676767]">Qiymət aralığı:</label>
            <div className="flex gap-2">
              <input
                type="number"
                className="w-1/2 p-2 border border-[#676767] text-[#676767] rounded"
                value={filters.minPrice}
                min={minPrice}
                max={filters.maxPrice}
                onChange={(e) =>
                  setFilters({ ...filters, minPrice: Number(e.target.value) })
                }
              />
              <input
                type="number"
                className="w-1/2 p-2 border border-[#676767] text-[#676767] rounded"
                value={filters.maxPrice}
                min={filters.minPrice}
                max={maxPrice}
                onChange={(e) =>
                  setFilters({ ...filters, maxPrice: Number(e.target.value) })
                }
              />
            </div>
          </div>

          <button
            className="w-full bg-[#900000] text-white py-2 rounded mb-2 cursor-pointer hover:bg-[#700000] transition-colors"
            onClick={applyFilters}
          >
            Axtar
          </button>
          <button
            className="w-full bg-[#a1a1a1] text-white py-2 rounded cursor-pointer hover:bg-[#818181] transition-colors"
            onClick={clearFilters}
          >
            Filtrləri təmizlə
          </button>
        </div>

        <div className="w-full lg:w-3/4 p-4">
          {currentCars.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentCars.map((car) => (
                  <div key={car.id} className="border border-[#676767] cursor-pointer p-2 rounded shadow hover:shadow-md transition-shadow">
                    <img
                      src={
                        car.img?.[0] ||
                        "https://via.placeholder.com/300x200?text=No+Image"
                      }
                      alt={car.spesifik_model}
                      className="w-full h-40 object-cover rounded"
                    />
                    <h3 className="font-bold mt-2 text-sm md:text-base">
                      {car.marka} {car.spesifik_model} - {car.model}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <CiCalendar className="mr-1" />
                        {car.il}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <LuFuel className="mr-1" />
                        {car.yanacaq}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-[#900000] font-semibold text-sm md:text-base">{car.qiymet} $</p>
                      <Link 
                        to={`/cars/${car.id}`} 
                        className="flex justify-center items-center text-[#900000] hover:text-[#700000] transition-colors"
                      >
                        <span className="text-sm md:text-base font-semibold">Daha ətraflı</span>
                        <MdArrowOutward className="ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 py-10">Maşın tapılmadı 🚗</p>
          )}

          {filteredCars.length > carsPerPage && (
            <div className="flex justify-center mt-10 gap-1 md:gap-2 flex-wrap">
              <button
                className={`px-2 py-1 md:px-3 md:py-1 rounded cursor-pointer flex items-center ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={goToPrevPage}
                disabled={currentPage === 1}
              >
                <MdArrowBack className="mr-1" /> Əvvəlki
              </button>
              
              {getPageNumbers().map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={`px-2 py-1 md:px-3 md:py-1 rounded cursor-pointer ${
                    currentPage === pageNumber
                      ? "bg-[#900000] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
              
              <button
                className={`px-2 py-1 md:px-3 md:py-1 rounded cursor-pointer flex items-center ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                Növbəti <MdArrowForward className="ml-1" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Cars;