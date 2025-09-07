import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { contactInfo } from '../data/mockData';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Merhaba, taksi hizmeti almak istiyorum.`);
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\s/g, '')}?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-black rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold">Erkan Özdemir</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              {t('footer.driver')}
            </p>
            
            <div className="flex items-center space-x-2 text-yellow-400">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">{t('footer.available')}</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">İletişim Bilgileri</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">KKTC</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{contactInfo.phones.north}</span>
                  <button 
                    onClick={() => handleCall(contactInfo.phones.north)}
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                    aria-label="KKTC numarasını ara"
                  >
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">Güney Kıbrıs</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{contactInfo.phones.south}</span>
                  <button 
                    onClick={() => handleCall(contactInfo.phones.south)}
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                    aria-label="Güney Kıbrıs numarasını ara"
                  >
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">WhatsApp</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{contactInfo.whatsapp}</span>
                  <button 
                    onClick={handleWhatsApp}
                    className="text-green-400 hover:text-green-300 transition-colors"
                    aria-label="WhatsApp ile mesaj gönder"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Hizmet Alanlarımız</h3>
            
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span>Havalimanı Transferi</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span>Şehir İçi Ulaşım</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span>Şehirler Arası</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span>Özel Şoför Hizmeti</span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                KKTC ve Güney Kıbrıs genelinde güvenilir taksi hizmeti
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © Erkan Özdemir KKTC Taksi. {t('footer.rights')}
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => handleCall(contactInfo.phones.north)}
                className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">Hemen Ara</span>
              </button>
              
              <button 
                onClick={handleWhatsApp}
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;