import React, { useState } from 'react';

const faqData = [
  {
    question: "Avtomobil yoxlanışa verildiyi gündən hansı müddət ərzində yoxlanılır?",
    answer:"Bir çox hallarda avtomobil müştəri tərəfindən bizə göndərildiyi gündən etibarən həmin gün ərzində, lakin bəzi hallarda məsafədən və ya avtomobil satıcısından asılı olan səbəblərdən növbəti gün komandamız tərəfindən yoxlanış həyata keçirilir."  },
  {
    question: "Avtomobil yoxlanışında nələrə diqqət yetirilir?",
    answer:"Avtomobil yoxlanışı peşəkar əməkdaşlarımız tərəfindən, avtomobilin satıldığı əraziyə birbaşa gedərək yerindəcə həyata keçirilir. Yoxlanış zamanı avtomobilin yenidən boyanan detalları, mühərrik, sürətlər qutusu, daxili opsiyaların və funksiyaların sazlığı və s. yoxlanılır və yoxlanış bitdiyi zaman müştəriyə 5 video və təqribi 60`a yaxın foto material təqdim olunur. ",
  },
  {
    question: "Avtomobil axtarışı necə həyata keçirilir?",
    answer:"Bu iki halda mümkündür: ilki müştəri ofisimizə yaxınlaşaraq arzuladığı avtomobili bizə bildirərək tərəfimizdən tapılıb müştəriyə təqdim olunması və tərəfimizdən yoxlanışın həyata keçirilməsi; ikinci halda isə müştəri avtomobil satılan auksion və saytlardan arzuladığı avtomobili özü tapıb linkini və ya auksiondadırsa lot nömrəsini bizə bildirməklə yoxlanışının tərəfimizdən həyata keçirilməsilə.",
  },
  {
    question: "Avtomobilin interiyerində və ya eksteriyerində hər hansısa dəyişiklik etdirmək mümkündürmü?",
    answer:"Bəli, bu mümkündür. Dəyişiklik zamanı hər bir əlavə xərc müştəriyə bildirilir və bu müştəri tərəfindən invoys əsasında şirkətimizə bank vasitəsilə transfer olunur.",
  },
  {
    question:"Avtomobilin göndərilməsi prosesi necə həyata keçirilir?",
    answer:"Avtomobil şirkətimiz tərəfindən satın alındıqdan sonra şoring və göndərmə prosesi başlayır. Əvvəlcə avtomobil parking ərazimizə gətirilir və yüklənmə üçün hazırlıqlara start verilir. Yüklənmə tarixi şirkətimiz tərəfindən müəyyən edilərək, avtomobilin gəmiyə yüklənəcəyi gün alıcıya bildirilir. Yükləmə həyata keçirildikdən sonra konteynerlər gəmi ilə Gürcüstanın Poti şəhərindəki limana göndərilir. Gəmi yola düşdükdən sonra, müştəri konteyner anlıq olaraq konteyner izləmə nömrəsilə təmin olunur və saytımızdan 24/7 pulsuz izləmə xidmətindən yararlana bilir. Gəmi port ərazisindən çatdıqdan sonra konteynerlər limana boşaldılır və boşaldılmış konteynerlər, partnyor şirkətimizin əməkdaşları tərəfindən qəbul edilib avtovoz və kontrovozlara yüklənərək son təhvil verilmə nöqtəsinə yola salınır. Son olaraq, avtomobillər təhvil verilmə məntəqəsində (Əgər müştəri Azərbaycandan sifariş verirsə Meyvəli Gömrük Məntəqəsində) sizə təhvil verilir.",
  },
  {
    question: "Avtomobilin daşınma zamanı baş vermiş zədələrin sığortası mümkündürmü?",
    answer:"Bəli, daşınma zamanı avtomobilinizi əlavə $100 ödəməklə $5000-a qədər olan daşınma zamanı yaranan bütün zədələrdən sığortalaya bilərsiniz. Bu halda avtomobilin daşınması zamanı baş vermiş zədələrə CARIFY MMC şirkəti məsuliyyət daşıyır, əks halda CARIFY MMC şirkəti heç bir məsuliyyət daşımır.",
  },
  {
    question: "Avtomobilin daşınma zamanı baş vermiş zədələrin sığortası mümkündürmü?",
    answer: "Avtomobilin daşınma sığortası müştəri tərəfindən ödəndiyi an etibarilə qüvvəyə minir və müştəriyə təhvil verilən an etibarilə qüvvədən düşür. Daşınma sığortası, daşınma zamanı avtomobildə baş verən əzik, sürtük, cızıq, deşilmə, rəngin zədəsi, avtomobilin hər hansı bir ehtiyyat hissəsinin zədəsi və hər hansısa bir detalın qırılıb qopması hallarını əhatə edir.",
  },
  {
    question: "Daşınma zamanı baş vermiş zədələrə nələr aiddir və sığorta nələri qarşılayır?",
    answer: "Avtomobilin daşınma sığortası müştəri tərəfindən ödəndiyi an etibarilə qüvvəyə minir və müştəriyə təhvil verilən an etibarilə qüvvədən düşür. Daşınma sığortası, daşınma zamanı avtomobildə baş verən əzik, sürtük, cızıq, deşilmə, rəngin zədəsi, avtomobilin hər hansı bir ehtiyyat hissəsinin zədəsi və hər hansısa bir detalın qırılıb qopması hallarını əhatə edir.",
  },
  {
    question: "Avtomobilin ödənişi necə həyata keçirilir?",
    answer: "Avtomobilin sizin adınıza rezervasiyası təsdiq edildikdən sonra 3 iş günü ərzində şəxsiyyətinizi təsdiq edən sənəd (Passport və ya Şəxsiyyət vəsiqəsi) əsasında avtomobilin alış məbləğini və məlumatlarını özündə əks etdirən invoys (Bu sözə invoys nümunəsini hyperlink edərik) hazırlanır və banka yaxınlaşaraq köçürməni həyata keçirə bilərsiniz."
  }
];

function Common() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 xsm:mx-4 xsm:my-10 xl:mx-auto xl:my-[120px] xl:max-w-container">
      <h2 className="text-[36px] leading-[40px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[56px] lg:leading-[64px] font-bold text-[#3c0000] mb-6 md:mb-8 max-w-full lg:max-w-[900px] mx-auto lg:mx-0 pt-10">
        Ümumi Suallar
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full cursor-pointer text-left p-4 font-medium text-lg text-[#3c0000] flex justify-between items-center"
            >
              {item.question}
              <span className="ml-4">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 pt-0 text-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Common;
