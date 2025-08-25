import React, { createContext, useContext, useState } from "react";

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likedCars, setLikedCars] = useState([]);

  // Maşını bəyənilmişlərə əlavə edir
  const addLike = (car) => {
    // Əgər artıq əlavə olunubsa, təkrar etmə
    setLikedCars((prev) => {
      if (prev.find((c) => c.id === car.id)) return prev;
      return [...prev, car];
    });
  };

  // Maşını bəyənilmişlərdən silir
  const removeLike = (id) => {
    setLikedCars((prev) => prev.filter((car) => car.id !== id));
  };

  return (
    <LikeContext.Provider value={{ likedCars, addLike, removeLike }}>
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
