import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { taxiImages, contactInfo } from '../data/mockData';
import { Button } from './ui/button';
import { Phone, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === taxiImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleCall = () => {
    window.location.href = `tel:${contactInfo.phones.north}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Merhaba, taksi hizmeti almak istiyorum.`);
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\s/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                {t('contact.available')}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex items-center space-x-3 text-xl font-semibold text-gray-800">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-black rounded-full"></div>
                </div>
                <span>{t('hero.driver')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleCall}
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('hero.ctaText')}
              </Button>
              
              <Button 
                onClick={handleWhatsApp}
                variant="outline" 
                size="lg"
                className="border-2 border-yellow-400 text-gray-900 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('hero.whatsappText')}
              </Button>
            </div>

            {/* Contact Numbers */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="text-sm text-gray-500 mb-1">{t('contact.northCyprus')}</div>
                <div className="text-lg font-semibold text-gray-900">{contactInfo.phones.north}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="text-sm text-gray-500 mb-1">{t('contact.southCyprus')}</div>
                <div className="text-lg font-semibold text-gray-900">{contactInfo.phones.south}</div>
              </div>
            </div>
          </div>

          {/* Taxi Images */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={taxiImages[currentImageIndex]}
                alt={`${contactInfo.driver} Taxi ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-1000"
              />
              
              {/* Overlay with driver info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white">
                  <p className="text-sm opacity-90">Profesyonel Şoför</p>
                  <p className="text-xl font-bold">{contactInfo.driver}</p>
                </div>
              </div>
            </div>

            {/* Image indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {taxiImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-yellow-400 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-black rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;