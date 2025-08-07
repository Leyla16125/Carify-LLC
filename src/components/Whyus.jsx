import React from 'react';
import { FaLaptopCode, FaGlobe, FaSmile, FaMoneyBillWave, FaShieldAlt, FaShippingFast } from 'react-icons/fa';

function WhyUs() {
  const features = [
    {
      id: 1,
      icon: <FaLaptopCode className="w-6 h-6 text-white" />,
      title: "Təcrübə və Peşəkarlıq",
      description: "4 ildən artıq təcrübə və mütəxəssis heyəti ilə ən yaxşı xidmətləri təqdim edirik."
    },
    {
      id: 2,
      icon: <FaMoneyBillWave className="w-6 h-6 text-white" />,
      title: "Sərfəli Qiymətlər",
      description: "Avtomobillərin idxalı və ixrac sahəsində ən rəqabətli qiymətləri təklif edirik."
    },
    {
      id: 3,
      icon: <FaGlobe className="w-6 h-6 text-white" />,
      title: "Global Şəbəkə",
      description: "Dünyanın müxtəlif ölkələrində tərəfdaşlar və geniş əlaqələr."
    },
    {
      id: 4,
      icon: <FaShippingFast className="w-6 h-6 text-white" />,
      title: "Sərfəli Daşınma",
      description: "Güvən və keyfiyyəti qoruyaraq sərfəli qiymətlərlə daşınmanı təmin edirik."
    },
    {
      id: 5,
      icon: <FaSmile className="w-6 h-6 text-white" />,
      title: "Müştəri Məmnuniyyəti",
      description: "1500+ məmnun müştəri ilə hər zaman yüksək keyfiyyətli xidmət göstəririk."
    },
    {
      id: 6,
      icon: <FaShieldAlt className="w-6 h-6 text-white" />,
      title: "Sığortalı Daşınma",
      description: "Avtomobillər daşınma zamanı baş verəcək hadisəyə qarşı 5000 $ sığorta ilə təmin olunur."
    }
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 xsm:mx-4 xsm:my-10 xl:mx-auto xl:my-[120px] xl:max-w-container">
        <div>
            <h2 className="text-[36px] leading-[40px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[56px] lg:leading-[64px] font-bold text-[#3c0000] mb-6 md:mb-8 max-w-full lg:max-w-[900px] mx-auto lg:mx-0 pt-10">Niyə Biz?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
                {features.map((f) => (
                <div key={f.id} className="bg-white rounded-2xl p-6 shadow-md space-y-6">
                    <div className="bg-[#600000] p-3 rounded-full inline-block">
                    {f.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                    <p className="text-gray-600 text-md">{f.description}</p>
                </div>
                ))}
            </div>
        </div>
    </section>
    
  );
}

export default WhyUs;
