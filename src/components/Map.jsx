import React, { useState } from 'react';

function Map() {
  const [activeTab, setActiveTab] = useState('azerbaijan');

  return (
    <section className='mt-20 sm:mt-10'>
      <div className="mb-11 flex h-12 justify-center gap-x-6 ">
        <button 
          className={`h-full rounded-lg border-2 px-5 transition-colors duration-200 focus:outline-none cursor-pointer ${
            activeTab === 'azerbaijan'
              ? 'border-[#141414] bg-white text-[#141414]'
              : 'border-[#E5E7EB] text-[#5B5D5F] hover:border-[#D1D5DB]'
          }`}
          onClick={() => setActiveTab('azerbaijan')}
        >
          Azərbaycan
        </button>
        <button 
          className={`h-full rounded-lg border-2 px-5 transition-colors duration-200 focus:outline-none cursor-pointer ${
            activeTab === 'korea'
              ? 'border-[#141414] bg-white text-[#141414]'
              : 'border-[#E5E7EB] text-[#5B5D5F] hover:border-[#D1D5DB]'
          }`}
          onClick={() => setActiveTab('korea')}
        >
          Cənubi Koreya
        </button>
      </div>

      {activeTab === 'azerbaijan' && (
        <div className="flex justify-center py-10 px-4 ">
          <div className="max-w-6xl w-full rounded-2xl overflow-hidden shadow-lg bg-white">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <img src="https://flagcdn.com/w80/az.png" alt="AZ Flag" className="w-8 h-8 rounded-full" />
                  <div>
                    <h2 className="text-xl font-semibold">Azerbaijan, Baku</h2>
                    <p className="text-gray-500">Rusel Plaza 5-ci mərtəbə</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm text-gray-500">Address</h4>
                  <p className="font-medium">Babək prospekti, 10E</p>
                  <a href="https://maps.app.goo.gl/KZ7JfZo5XEBcMZ4g8" target="_blank" rel="noopener noreferrer" className="text-red-600 text-sm underline">
                    Xəritədə göstər
                  </a>
                </div>

                <div>
                  <h4 className="text-sm text-gray-500">Telefon</h4>
                  <p>+994 (77) 766 5665</p>
                </div>

                <div>
                  <h4 className="text-sm text-gray-500">E-poçt</h4>
                  <p>info@carify.az</p>
                </div>
              </div>

              <div className="h-[400px] w-full">
                <iframe
                  title="Google Map Azerbaijan"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.9150065877952!2d49.871261!3d40.3885763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d17de5e3d1d%3A0x2da2edf637232eb3!2sRusel%20Plaza!5e0!3m2!1sru!2saz!4v1754428261828!5m2!1sru!2saz" 
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'korea' && (
        <div className="flex justify-center py-10 px-4 bg-gray-100">
          <div className="max-w-6xl w-full rounded-2xl overflow-hidden shadow-lg bg-white">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <img src="https://flagcdn.com/w80/kr.png" alt="KR Flag" className="w-8 h-8 rounded-full" />
                  <div>
                    <h2 className="text-xl font-semibold">Korea, Seo-gu</h2>
                    <p className="text-gray-500">Cheongna The Liv Tiamo 22770</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm text-gray-500">Address</h4>
                  <p className="font-medium">490 Jungbong-daero, Seo-gu, İnçeon</p>
                  <a href="https://maps.app.goo.gl/wQif45cRPjzj7SKp6" target="_blank" rel="noopener noreferrer" className="text-red-600 text-sm underline">
                    Xəritədə göstər
                  </a>
                </div>

                <div>
                  <h4 className="text-sm text-gray-500">Contact phone</h4>
                  <p>+82 10 7216 7665</p>
                </div>

                <div>
                  <h4 className="text-sm text-gray-500">E-poçt</h4>
                  <p>orkhan.h@carify.kr</p>
                </div>
              </div>

              <div className="h-[400px] w-full">
                <iframe
                  title="Google Map Korea"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101215.47380297289!2d126.64534475!3d37.55545119999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7f03cab6e1cb%3A0x167530d9a487535a!2zSnVuZ2JvbmctZGFlcm8sIFNlby1ndSwgSW5jaGVvbiwg0K7QttC90LDRjyDQmtC-0YDQtdGP!5e0!3m2!1sru!2saz!4v1754428958755!5m2!1sru!2saz"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Map;