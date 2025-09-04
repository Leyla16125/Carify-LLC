import React, { useState } from "react";

function PartofContact() {
  const [formData, setFormData] = useState({
    fullName: "",
    userEmail: "",
    content: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });

    setSuccess(false); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Zəhmət olmasa bu sahəni doldurun";
    if (!formData.userEmail.trim()) newErrors.userEmail = "Zəhmət olmasa bu sahəni doldurun";
    if (!formData.content.trim()) newErrors.content = "Zəhmət olmasa bu sahəni doldurun";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


    setSuccess(true);

    setFormData({ fullName: "", userEmail: "", content: "" });
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 xsm:mx-4 xsm:my-10 xl:mx-auto xl:my-[40px] xl:max-w-container">
      <h2 className='text-center font-bold text-[rgba(144,0,0)] text-2xl xsm:text-3xl lg:text-4xl'>
        Bizimlə Əlaqə
      </h2>

      <p className="text-center text-[#282B2C] mx-4 max-w-full text-[20px] leading-[1.4] md:text-[44px] lg:mx-auto lg:max-w-[1000px] lg:leading-[64px] py-2">
        Biz həmişə sizə kömək etməyə hazırıq. Hər hansı sualınız varsa, bizimlə əlaqə saxlamaqdan çəkinməyin.
      </p>

      <div className='flex flex-col lg:flex-row justify-between my-40 gap-10'>
        <div className='lg:max-w-[392px]'>
          <p className='font-bold text-xl xsm:text-2xl lg:text-3xl py-4'>
            Bizimlə Əlaqə saxlayın
          </p>    
          <p className="text-[18px] leading-[32px] text-[#727476]">
            Carify LLC 4 ildən çox təcrübəsi olan qlobala avtomobil ixrac edən şirkətidir. Şirkətimizin əsası müştəri məmnuniyyəti üzərində qurulmuş və güvənə dayanmaqdadır!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative grid grid-cols-2 gap-6 rounded-lg bg-[#F3F3F3] px-6 py-10 lg:w-[600px]"
        >
          <div className="flex flex-col gap-2 xsm:col-span-2 md:col-span-1">
            <label htmlFor="fullname">Tam ad</label>
            <input
              name="fullName"
              id="fullname"
              type="text"
              placeholder="Ad və Soyad"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-lg border-[#D0D1D1] bg-white px-4 py-2 outline-none placeholder:text-[#B9BABB] focus:border-[#898A8C]"
            />
            {errors.fullName && <div className="text-sm text-red-500">{errors.fullName}</div>}
          </div>

          <div className="flex flex-col gap-2 xsm:col-span-2 md:col-span-1">
            <label htmlFor="email">E-poçt</label>
            <input
              name="userEmail"
              id="email"
              type="text"
              placeholder="Enter email"
              value={formData.userEmail}
              onChange={handleChange}
              className="w-full rounded-lg border-[#D0D1D1] bg-white px-4 py-2 outline-none placeholder:text-[#B9BABB] focus:border-[#898A8C]"
            />
            {errors.userEmail && <div className="text-sm text-red-500">{errors.userEmail}</div>}
          </div>

          <div className="col-span-2 flex w-full flex-col gap-2">
            <label htmlFor="message">Mətn</label>
            <textarea
              name="content"
              id="message"
              placeholder="Mətn"
              value={formData.content}
              onChange={handleChange}
              className="h-[92px] w-full resize-none rounded-lg border-[#D0D1D1] bg-white px-4 py-2 outline-none placeholder:text-[#B9BABB] focus:border-[#898A8C]"
            ></textarea>
            {errors.content && <div className="text-sm text-red-500">{errors.content}</div>}
          </div>

          <button
            type="submit"
            className=" cursor-pointer flex h-12 items-center justify-center rounded-lg bg-[#900000] text-[#F9F9F9] transition-all xsm:col-span-2 lg:col-span-1"
          >
            Göndər
          </button>

          {success && (
            <div className="col-span-2 mt-4 text-green-600 font-semibold text-center">
              Mesajınız uğurla göndərildi. Sizinlə mail üzərindən əlaqə saxlanılacaq.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default PartofContact;
