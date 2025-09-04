import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { services } from '../data/mockData';
import { Plane, Map, Route, User } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useLanguage();

  const iconMap = {
    plane: <Plane className="w-8 h-8" />,
    map: <Map className="w-8 h-8" />,
    route: <Route className="w-8 h-8" />,
    user: <User className="w-8 h-8" />
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto text-black">
                  {iconMap[service.icon]}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900">
                  {t(`services.${service.id}.title`)}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {t(`services.${service.id}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Neden Bizi Seçmelisiniz?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-black font-bold">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900">Güvenli Sürüş</h4>
                <p className="text-gray-600 text-sm">Yılların deneyimi ile güvenli ve konforlu yolculuk</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-black font-bold">₺</span>
                </div>
                <h4 className="font-semibold text-gray-900">Uygun Fiyat</h4>
                <p className="text-gray-600 text-sm">Rekabetçi ve şeffaf fiyatlandırma politikası</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-black font-bold">⏰</span>
                </div>
                <h4 className="font-semibold text-gray-900">Zamanında</h4>
                <p className="text-gray-600 text-sm">Her zaman zamanında ve güvenilir hizmet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;