import React from 'react'
import CountUp from 'react-countup';

function PartofAbout() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 xsm:mx-4 xsm:my-10 xl:mx-auto xl:my-[40px] xl:max-w-container">
        <h2 className='text-center font-bold text-[rgba(144,0,0)] text-2xl xsm:text-3xl lg:text-4xl'>
            Biz kimik?
        </h2>

        <p className="text-center text-[#282B2C] mx-4 max-w-full text-[20px] leading-[1.4] md:text-[44px] lg:mx-auto lg:max-w-[1000px] lg:leading-[64px] py-2">
            İnsanlara avtomobil seçməkdə, onlara qulluq etməkdə və almaqda kömək edirik.
        </p>

        <div className="mx-auto h-[400px] max-w-container overflow-hidden xsm:mb-16 xsm:rounded-none xl:rounded-2xl py-4">
            <div className="relative h-full w-full object-cover">
            <img
                src="./public/img/about-header-BMXlw3Ud.webp"
                alt="Image"
                className="h-full w-full object-cover transition-opacity duration-500 opacity-100"
            />
            </div>
        </div>

        <p className="text-center text-[#282B2C] mx-4 max-w-full text-[16px] md:text-[20px] lg:mx-auto lg:max-w-[1000px] py-2">
            <b>Carify LLC </b> Cənubi Koreyadan Cənubi Amerika, Çin, Dubay, Albaniya, Kamboca, Rusiya, Qazaxstan və s. ölkələrə avtomobil ixrac edən və 4 ildən artıq təcrübəyə malik olan qlobal bir şirkətdir. Biz avtomobil sektorunda beynəlxalq ticarət sahəsində müştərilərimizə yüksək keyfiyyətli və peşəkar xidmətlər təklif edirik.
        </p>

        <hr className="mt-12 border-gray-400 max-w-[1400px] mx-auto" />

        <div className="flex flex-col md:flex-row items-stretch justify-center md:justify-between gap-6 md:gap-8 lg:gap-12 py-10 px-10">
            <div className="flex-1 min-w-[260px] max-w-[320px] p-6 flex flex-col mx-auto h-full">
                <h2 className="text-[48px] md:text-[56px] lg:text-[64px] font-bold text-center py-2">
                <CountUp start={1} end={4} duration={2} />+
                </h2>
                <p className="text-lg md:text-xl font-semibold mb-4 text-gray-800 text-center">Təcrübəmiz</p>
                <p className="text-sm md:text-base text-gray-600 text-center">
                Bu sahədə dörd ildən artıq təcrübəyə malikik və müştəri məmnuniyyəti bizim əsas prioritetimizdir.
                </p>
            </div>

            <div className="flex-1 min-w-[260px] max-w-[320px] p-6 flex flex-col mx-auto h-full">
                <h2 className="text-[48px] md:text-[56px] lg:text-[64px] font-bold text-center py-2">
                <CountUp start={1} end={5} duration={2} />
                </h2>
                <p className="text-lg md:text-xl font-semibold mb-4 text-gray-800 text-center">Ofislərimiz</p>
                <p className="text-sm md:text-base text-gray-600 text-center">
                Dörd ildən artıqdır ki, müştəri məmnuniyyəti naminə fəaliyyət göstəririk və beş şəhərdə ofislərimiz mövcuddur.
                </p>
            </div>

            <div className="flex-1 min-w-[260px] max-w-[320px] p-6 flex flex-col mx-auto h-full">
                <h2 className="text-[48px] md:text-[56px] lg:text-[64px] font-bold text-center py-2">
                <CountUp start={100} end={1500} duration={3} />+
                </h2>
                <p className="text-lg md:text-xl font-semibold mb-4 text-gray-800 text-center">Müştərilərimiz</p>
                <p className="text-sm md:text-base text-gray-600 text-center">
                1500-dən artıq məmnun müştərimizlə, müştəri yönümlü xidmət anlayışımız sayəsində daim böyüyürük.
                </p>
            </div>
        </div>

        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="w-full md:w-1/2">
                <img 
                    src="https://carify.az/assets/info-1-BIlqkRFO.webp" 
                    alt="Carify fəaliyyəti"
                    className="w-full h-auto rounded-lg shadow-md"
                />
                </div>
                
                <div className="w-full md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Bizim Fəaliyyətimiz</h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Yaranışımızdan bəri, Carify müştəri məmnuniyyətini və operativ xidməti təmin etmək üçün dünyanın ən yaxşı şirkətləri ilə tərəfdaşlıq qurmuşdur. Biz, avtomobillərin daha sürətli və təhlükəsiz çatdırılmasını təmin etmək üçün bölgənin ən böyük liman şəhərlərindən biri olan Gürcüstanın Poti şəhərində logistika mərkəzi yaratmışıq.
                </p>
                </div>
            </div>


            <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Carify Logistics LLC</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Carify Logistics LLC Gürcüstan Respublikasında fəaliyyət göstərərək, etibarlı və müştəriyönümlü nəqliyyat xidmətləri göstərir. Həm avtomobillər, həm də motokar vasitələri istifadə edərək, avtomobillərin hamar və səmərəli çatdırılmasını təmin edirik. Şirkətimiz Gürcüstana daxil olan avtomobillərlə bağlı potensial problemləri həll etmək və avtomobilləri müştərilərə mümkün qədər tez çatdırmaq üçün yaradılmışdır.
                </p>
                </div>
                
                <div className="w-full md:w-1/2 order-1 md:order-2">
                <img 
                    src="https://carify.az/assets/info-2-DSbS4ive.webp" 
                    alt="Carify Logistics"
                    className="w-full h-auto rounded-lg shadow-md"
                />
                </div>
            </div>
        </div>
    </section>
  )
}

export default PartofAbout;
