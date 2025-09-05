import React, { useState, useEffect } from "react";
import { IoMdArrowBack, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";

export default function AuthPage() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [error, setError] = useState("");

  const images = [
    "/img/28803_1_upscayl_2x_upscayl_standard_4x_2_df2eead425.webp",
    "/img/Bugatti_Unveils_the_V16_Powered_Tourbillon_Hypercar_6_upscayl_2x_upscayl_standard_4x_cd046f1b9c.webp",
    "/img/landing_bg_1_51ee4b0daf.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleAuth = () => {
    if (isLogin) {
      const storedUser = localStorage.getItem("username");
      const storedPass = localStorage.getItem("password");
      if (username === storedUser && password === storedPass) {
        setError("");
        navigate("/home");
      } else {
        setError("İstifadəçi adı və ya şifrə səhvdir!");
      }
    } else {
      if (!username || !email || !password || !confirmPassword) {
        setError("Bütün sahələri doldurun!");
        return;
      }
      if (password !== confirmPassword) {
        setError("Şifrələr uyğun gəlmir!");
        return;
      }
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("email", email);
      setError("");
      setIsLogin(true);
      setPassword("");
      setConfirmPassword("");
      alert("Qeydiyyat tamamlandı. İndi daxil olun!");
    }
  };

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
          <h2 className="text-2xl font-bold mb-4 text-center">
            {isLogin ? "Giriş" : "Qeydiyyatdan keç"}
          </h2>

          {error && <p className="text-[rgba(144,0,0)] text-sm mb-2">{error}</p>}

          {!isLogin && (
            <input
              type="email"
              placeholder="E-poçt"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full mb-3 rounded"
            />
          )}

          <input
            type="text"
            placeholder="İstifadəçi adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full mb-3 rounded"
          />

          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Şifrə"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full rounded"
            />
            <span
              className="absolute right-2 top-2 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </div>

          {!isLogin && (
            <div className="relative mb-3">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Şifrəni təsdiqlə"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border p-2 w-full rounded"
              />
              <span
                className="absolute right-2 top-2 cursor-pointer text-gray-600"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>
          )}

          <button
            onClick={handleAuth}
            className="cursor-pointer w-full bg-[rgba(144,0,0)] text-white p-2 rounded hover:bg-[#7e0101]"
          >
            {isLogin ? "Daxil ol" : "Qeydiyyatdan keç"}
          </button>

          <div className="mt-4 flex justify-center gap-2 text-sm text-gray-700">
            <span>{isLogin ? "Hesabınız yoxdur?" : "Hesabınız var?"}</span>
            <span
              className="cursor-pointer font-bold text-[rgba(144,0,0)] hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Qeydiyyatdan keç" : "Daxil olun"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
