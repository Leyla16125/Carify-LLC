import React, { createContext, useContext, useState, useEffect } from "react";

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likedCars, setLikedCars] = useState([]);

  useEffect(() => {
    const storedLikedCars = localStorage.getItem("likedCars");
    if (storedLikedCars) {
      try {
        setLikedCars(JSON.parse(storedLikedCars));
      } catch (error) {
        console.error("LocalStorage məlumatları oxuyarkən xəta baş verdi:", error);
        localStorage.removeItem("likedCars");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likedCars", JSON.stringify(likedCars));
  }, [likedCars]);

  const addLike = (car) => {
    setLikedCars((prev) => {
      if (prev.find((c) => c.id === car.id)) return prev;
      return [...prev, car];
    });
  };

  const removeLike = (id) => {
    setLikedCars((prev) => prev.filter((car) => car.id !== id));
  };

  const isLiked = (id) => {
    return likedCars.some(car => car.id === id);
  };

  return (
    <LikeContext.Provider value={{ likedCars, addLike, removeLike, isLiked }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLike = () => {
  const context = useContext(LikeContext);
  if (!context) {
    throw new Error("useLike must be used within a LikeProvider");
  }
  return context;
};