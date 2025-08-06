import React, { useState, useRef } from 'react';

function ProcedureSection() {
  const [activeStage, setActiveStage] = useState(1);
  const scrollContainerRef = useRef(null);

  const stages = [
    {
      id: 1,
      title: "Ofisə Gəliş və Kontraktın İmzalanması",
      description: "Müştəri ofisimizə gəldikdən sonra, aparacağımız xidmətlər haqqında ətraflı məlumat verilir. Müştəri, müqavilə şərtləri ilə tanış olur və razılaşıldıqdan sonra hər iki tərəf müqaviləni imzalayır.",
      videoUrl: "https://youtu.be/5WiXI5d0RUk"
    },
    {
      id: 2,
      title: "Xidmət Haqqının Ödənilməsi və Avtomobil Axtarışı",
      description: "Müştəri təyin olunmuş xidmət haqqını ödədikdən sonra, tələblərinə uyğun avtomobil axtarışına başlanılır. Müştərinin tələblərinə uyğun avtomobil tapıldıqda, müştəriyə ətraflı məlumat təqdim edir.",
      videoUrl: "https://youtu.be/2MM6WchHdKs"
    },
    {
      id: 3,
      title: "Avtomobilin Yoxlanışı və Təqdimatı",
      description: "Koreyada fəaliyyət göstərən Carify LLC komandamız, avtomobilin tam yoxlanışını həyata keçirir. Müştəriyə avtomobilin vəziyyəti haqqında 5 video və 50-dən çox fotoşəkil təqdim edilir.",
      videoUrl: "https://youtu.be/xW63gS7KZFE"
    },
    {
      id: 4,
      title: "Avtomobilin Rezervasiyası və Ödənişi",
      description: "Yoxlanış nəticəsində əldə olunan materiallar və rəsmi sənədlər müştəriyə təqdim edilir. Müştəri avtomobili bəyəndiyi halda, avtomobil alıcının adına rezerv olunur.",
      videoUrl: "https://youtu.be/5oWxkSTntfY"
    },
    {
      id: 5,
      title: "Avtomobilin Saxlanc Mərkəzinə Çatdırılması",
      description: "Köçürülən məbləğ qarşı tərəfin bank hesabına çatdıqda, 7 gün ərzində avtomobil xaricdəki saxlanc mərkəzinə çatdırılır.",
      videoUrl: "https://youtu.be/SG4JRImKhYw"
    },
    {
      id: 6,
      title: "Avtomobilin Eksporta Hazırlanması",
      description: "Avtomobil alındığı gündən etibarən, 14 iş günü ərzində göndərilməyə hazırlanır. Bu müddətdə avtomobil konteyner və ya RoRo (Roll on, Roll off) vasitəsilə yüklənir və göndərilir.",
      videoUrl: "https://youtu.be/lppx7okBHzE"
    },
    {
      id: 7,
      title: "Avtomobilin Təhvil Verilməsi",
      description: "Avtomobil təyinat ölkəsinə çatdığı zaman, təhvil verilmədən 1-3 gün öncə müştəriyə məlumat verilir. Dəqiq təhvilvermə günü və yeri barədə məlumat təqdim edilir.",
      videoUrl: "https://youtu.be/V41J0yqpY-U"
    },
    {
      id: 8,
      title: "Gömrük Rəsmiləşdirilməsi",
      description: "Müştəri şəxsiyyətini təsdiq edən sənədlə gömrük rəsmiləşdirilməsi məntəqəsinə yaxınlaşaraq, əməkdaşlarımızdan avtomobili təhvil alır və gömrük rəsmiləşdirilməsinə başlaya bilər.",
      videoUrl: "https://youtu.be/Ktw2k7SQdn0"
    }

  ];

  const scrollToStage = (id) => {
    setActiveStage(id);
    const element = document.getElementById(`stage-${id}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 xsm:mx-4 xsm:my-16 xl:mx-auto xl:my-[120px] xl:max-w-container">
      <h2 className="text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[56px] lg:leading-[64px] font-bold text-[#3c0000] mb-6 md:mb-8 max-w-full lg:max-w-[900px] mx-auto lg:mx-0 pt-20">
        Avtomobil alışı ilə bağlı prosedur
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
        <div 
          ref={scrollContainerRef}
          className="lg:w-1/2 h-[380px] overflow-y-auto snap-y snap-mandatory scrollbar-hide border border-gray-200 rounded-lg"
        >
          <div className="space-y-4 p-4">
            {stages.map((stage) => (
              <div 
                key={stage.id}
                id={`stage-${stage.id}`}
                className={`p-6 rounded-lg snap-start min-h-[200px] cursor-pointer ${
                  activeStage === stage.id 
                    ? 'bg-red-50 border-l-4 border-[#3c0000]' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => scrollToStage(stage.id)}
              >
                <h3 className="text-xl font-semibold mb-2">
                  Mərhələ - {stage.id}: {stage.title}
                </h3>
                <p className="text-gray-700">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 sticky top-4 h-fit">
          <div className="bg-black rounded-lg overflow-hidden aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${stages[activeStage-1].videoUrl.split('/').pop()}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Prosedur video"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcedureSection;