import React, { useState, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");
  const [error, setError] = useState("");
  const [currentImg, setCurrentImg] = useState(0);

  const images = [
    "/img/28803_1_upscayl_2x_upscayl_standard_4x_2_df2eead425.webp",
    "/img/Bugatti_Unveils_the_V16_Powered_Tourbillon_Hypercar_6_upscayl_2x_upscayl_standard_4x_cd046f1b9c.webp",
    "/img/landing_bg_1_51ee4b0daf.webp"
  ];

  const userDB = {
    username: "admin",
    password: "12345"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    if (username === userDB.username && password === userDB.password) {
      localStorage.setItem("loggedIn", "true");
      setLoggedIn(true);
      setError("");
    } else {
      setError("İstifadəçi adı və ya şifrə səhvdir!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>👋 Xoş gəldin, {userDB.username}!</h2>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            backgroundColor: "red",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          Çıxış et
        </button>
      </div>
    );
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImg ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
            aria-hidden={index !== currentImg}
          />
        ))}
      </div>

      <div className="absolute top-10 left-10 flex items-center gap-2 text-white cursor-pointer z-20">
        <NavLink to="/home" className="flex items-center gap-2">
          <IoMdArrowBack className="text-2xl" />
          <p className="font-medium">Back</p>
        </NavLink>
      </div>



      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-2xl font-bold mb-4 text-center">Qeydiyyatdan keç</h2>
          {error && <p className="text-[rgba(144,0,0)] text-sm mb-2">{error}</p>}
          <input
            type="email"
            placeholder="E-poçt"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full mb-3 rounded"
          />
          <input
            type="text"
            placeholder="İstifadəçi adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full mb-3 rounded"
          />
          <input
            type="password"
            placeholder="Şifrə"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full mb-3 rounded"
          />
          <button
            onClick={handleLogin}
            className="cursor-pointer w-full bg-[rgba(144,0,0)] text-white p-2 rounded hover:bg-[#7e0101]"
          >
            Daxil ol
          </button>

          <div className="mt-4 flex justify-center gap-2 text-sm text-gray-700">
            <span>Hesabınız var?</span>
            <span className="cursor-pointer font-bold text-[rgba(144,0,0)] hover:underline">
              Daxil olun
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
