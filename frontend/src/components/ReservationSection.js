import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { contactInfo } from '../data/mockData';
import { Button } from './ui/button';
import { Phone, MessageCircle, Clock, Star } from 'lucide-react';

const ReservationSection = () => {
  const { t } = useLanguage();

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Merhaba, taksi rezervasyonu yapmak istiyorum.`);
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\s/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section id="reservation" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {t('nav.reservation')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Rezervasyon yapmak için aşağıdaki numaralardan bizi arayın veya WhatsApp ile mesaj gönderin
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* North Cyprus */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-colors duration-300">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-black" />
              </div>
              
              <div>
                <p className="text-yellow-400 font-semibold mb-2">{t('contact.northCyprus')}</p>
                <p className="text-3xl font-bold mb-4">{contactInfo.phones.north}</p>
                <p className="text-gray-300 text-sm mb-6">
                  Ercan Havalimanı, Lefkoşa, Girne, Gazimağusa ve çevre bölgeler
                </p>
              </div>

              <Button 
                onClick={() => handleCall(contactInfo.phones.north)}
                size="lg"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </Button>
            </div>
          </div>

          {/* South Cyprus */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-colors duration-300">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-black" />
              </div>
              
              <div>
                <p className="text-yellow-400 font-semibold mb-2">{t('contact.southCyprus')}</p>
                <p className="text-3xl font-bold mb-4">{contactInfo.phones.south}</p>
                <p className="text-gray-300 text-sm mb-6">
                  Larnaka Havalimanı, Limasol, Baf, Lefkoşa ve çevre bölgeler
                </p>
              </div>

              <Button 
                onClick={() => handleCall(contactInfo.phones.south)}
                size="lg"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </Button>
            </div>
          </div>
        </div>

        {/* WhatsApp Section */}
        <div className="bg-green-600 p-8 rounded-2xl text-center space-y-6">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
            <MessageCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2">WhatsApp ile Hızlı İletişim</h3>
            <p className="text-green-100 text-lg mb-4">{contactInfo.whatsapp}</p>
            <p className="text-green-100 text-sm">
              Mesaj atın, konumunuzu gönderin, anında cevap alın!
            </p>
          </div>

          <Button 
            onClick={handleWhatsApp}
            size="lg"
            className="bg-white hover:bg-gray-100 text-green-600 font-semibold px-8 py-4"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp ile Mesaj Gönder
          </Button>
        </div>

        {/* Service Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
              <Clock className="w-6 h-6 text-black" />
            </div>
            <h4 className="text-lg font-semibold">24/7 Hizmet</h4>
            <p className="text-gray-300 text-sm">Gece gündüz her saatte ulaşabilirsiniz</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
              <Star className="w-6 h-6 text-black" />
            </div>
            <h4 className="text-lg font-semibold">Deneyimli Şoför</h4>
            <p className="text-gray-300 text-sm">Yılların deneyimi ile güvenli sürüş</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
              <div className="w-6 h-6 bg-black rounded-full"></div>
            </div>
            <h4 className="text-lg font-semibold">Konforlu Araç</h4>
            <p className="text-gray-300 text-sm">Mercedes E-Class ile rahat yolculuk</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;