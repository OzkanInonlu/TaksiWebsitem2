import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { contactInfo } from '../data/mockData';
import { Button } from './ui/button';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Merhaba, taksi hizmeti almak istiyorum.`);
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\s/g, '')}?text=${message}`, '_blank');
  };

  const handleLocation = () => {
    // This would normally open Google Maps with the driver's location
    window.open('https://maps.google.com', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">{t('contact.contactInfo')}</h3>
              
              {/* Phone Numbers */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{t('contact.northCyprus')}</p>
                      <p className="text-2xl font-bold text-gray-900">{contactInfo.phones.north}</p>
                    </div>
                    <Button 
                      onClick={() => handleCall(contactInfo.phones.north)}
                      className="bg-black hover:bg-gray-800 text-white"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {t('contact.call')}
                    </Button>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{t('contact.southCyprus')}</p>
                      <p className="text-2xl font-bold text-gray-900">{contactInfo.phones.south}</p>
                    </div>
                    <Button 
                      onClick={() => handleCall(contactInfo.phones.south)}
                      className="bg-black hover:bg-gray-800 text-white"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {t('contact.call')}
                    </Button>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600 mb-1">{t('contact.whatsapp')}</p>
                    <p className="text-2xl font-bold text-green-800">{contactInfo.whatsapp}</p>
                  </div>
                  <Button 
                    onClick={handleWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{t('contact.available')}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>{t('contact.serviceArea')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions & Map */}
          <div className="space-y-8">
            <div className="bg-yellow-50 p-8 rounded-2xl border-2 border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {t('contact.quickReservation')}
              </h3>
              
              <div className="space-y-4">
                <Button 
                  onClick={() => handleCall(contactInfo.phones.north)}
                  size="lg"
                  className="w-full bg-black hover:bg-gray-800 text-white py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Şimdi Ara - Kuzey Kıbrıs
                </Button>
                
                <Button 
                  onClick={() => handleCall(contactInfo.phones.south)}
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Şimdi Ara - Güney Kıbrıs
                </Button>
                
                <Button 
                  onClick={handleWhatsApp}
                  size="lg"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  WhatsApp ile Mesaj Gönder
                </Button>
              </div>
            </div>

            {/* Taxi Image */}
            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_erkan-taxi-1/artifacts/efmscw26_taksi3.jpg"
                alt="Taksi Hizmeti"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-xl font-bold mb-2">Mercedes E-Class</p>
                  <p className="text-sm opacity-90">Konforlu ve Güvenli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;