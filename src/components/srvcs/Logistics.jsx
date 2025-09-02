import React from "react";

function Logistics() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 xsm:mx-4 xsm:my-10 xl:mx-auto xl:my-[40px] xl:max-w-container">
      <h2 className='text-center font-bold text-[rgba(144,0,0)] text-2xl xsm:text-3xl lg:text-4xl'>
        Avtomobil Çatdırılması
      </h2>
    <p className="text-center text-[#282B2C] mx-4 max-w-full text-[20px] leading-[1.4] md:text-[44px] lg:mx-auto lg:max-w-[1000px] lg:leading-[64px] py-2">
        Koreyadan dünyanın istənilən ölkəsinə avtomobilinizi sürətli, etibarlı və optimal şərtlərlə
        çatdırırıq.
    </p>

    <div className="my-10  mb-20 mx-auto h-[400px] max-w-container overflow-hidden xsm:mb-16 xsm:rounded-none xl:rounded-2xl py-4">
            <div className="relative h-full w-full object-cover">
            <img
                src="/img/logistics-CYWHwn8Q.webp"
                alt="Image"
                className="h-full w-full object-cover transition-opacity duration-500 opacity-100 rounded-lg shadow-md"
            />
            </div>
    </div>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Daşınma</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Carify Logistics LLC, Gürcüstan Respublikasında təsis edilmiş peşəkar logistika şirkətidir.
            Sürətli xidmət, sərfəli qiymət və təhlükəsiz daşınmanı təmin edirik. Avtomobilin yüklənməsindən
            təhvil verilməsinə qədər olan bütün prosesləri diqqətlə idarə edirik və müştəri məmnuniyyətini
            ən yüksək səviyyədə saxlamağı hədəfləyirik.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/img/carify-logistic-B922bPPk.webp"
            alt="Carify fəaliyyəti"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/img/container-BhA2-oz1.webp"
            alt="Konteynerlə Daşınma"
            className="w-full h-72 object-cover object-center"
          />
          <div className="p-6 space-y-4">
            <h3 className="text-3xl font-semibold tracking-wide">Konteynerlə Daşınma</h3>
            <p className="text-gray-700">
              Konteyner daşınması zamanı avtomobillər 5 iş günü ərzində müştərilərə təhvil verilir.
              Bu daşıma növündə konteyner, müştərinin iştirakı ilə Bakıda (Meyvəli Gömrük Məntəqəsi)
              açılır. Bu xidmət üçün əlavə 100 ABŞ dolları ödəniş tələb olunur.
            </p>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/img/cars-logistics-BFJjBBL2.webp"
            alt="Avtovozla Daşınma"
            className="w-full h-72 object-cover object-center"
          />
          <div className="p-6 space-y-4">
            <h3 className="text-3xl font-semibold tracking-wide">Avtovozla Daşınma</h3>
            <p className="text-gray-700">
              Avtovozlar qiymət baxımından daha sərfəli olduğu üçün tez-tez seçilir. Lakin, bu daşıma
              növündə avtomobillərin Bakıda təhvili 5-10 iş günü ərzində mümkündür.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-full md:w-1/2">
          <img
            src="/img/ship-D2x5yN88.webp"
            alt="Sığorta Xidməti"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sığorta Xidməti</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hər iki daşıma növündə, müştərilərin avtomobillərini sığortalamaq imkanı mövcuddur.
            Avtomobilin sığortalanması üçün əlavə 100 ABŞ dolları ödəməklə bu xidmətdən yararlana bilərsiniz.
            Sığorta xidməti, daşınma zamanı meydana gələ biləcək potensial zədələrə qarşı müştəriləri yaranacaq
            əlavə xərclərdən tamamilə azad edir.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Şoring və Forvarding</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Koreya Respublikasında avtomobillərin saxlanc yerindən yükləmə məntəqəsinə qədər olan bütün
            proseslər əməkdaşlarımızın nəzarəti altında həyata keçirilir. Operativ xidmət göstərmək məqsədilə,
            hər həftə yükləmə prosesi aparılır və müştərilərimiz yükləmə materialları ilə təmin olunur. Bu
            prosesin şəffaflığını təmin etmək üçün, müştərilərimiz həftəlik yükləmə şəraitini izləmək üçün
            rəsmi Instagram səhifəmizə müraciət edə bilərlər.
          </p>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img
            src="/img/insurance-YFvcYySY.webp"
            alt="Şoring və Forvarding"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Logistics;
