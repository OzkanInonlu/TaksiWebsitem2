import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Clock, Star } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: t('about.experience'),
      description: t('about.experienceDesc')
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: t('about.reliability'),
      description: t('about.reliabilityDesc')
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: t('about.comfort'),
      description: t('about.comfortDesc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                {t('about.title')}
              </h2>
              <h3 className="text-xl text-yellow-600 font-semibold">
                {t('about.subtitle')}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex-shrink-0 p-2 bg-yellow-100 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">10+</div>
                <div className="text-sm text-gray-600">Yıl Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">24/7</div>
                <div className="text-sm text-gray-600">Hizmet Saati</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">100%</div>
                <div className="text-sm text-gray-600">Güvenilir</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_erkan-taxi-1/artifacts/zgyg4j88_taksi2.jpg"
                alt="Erkan Özdemir - Profesyonel Taksi Şoförü"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Overlay card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-black rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Erkan Özdemir</p>
                    <p className="text-sm text-gray-600">Profesyonel Şoför</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gray-900 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;