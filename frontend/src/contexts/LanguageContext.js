import React, { createContext, useContext, useState } from 'react';
import { translations } from '../data/mockData';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('tr'); // Default to Turkish

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[currentLanguage];
    
    for (const key of keys) {
      value = value?.[key];
    }
    
    return value || path;
  };

  const switchLanguage = (lang) => {
    if (translations[lang]) {
      setCurrentLanguage(lang);
    }
  };

  const value = {
    currentLanguage,
    switchLanguage,
    t,
    availableLanguages: [
      { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
      { code: 'en', name: 'English', flag: '🇬🇧' },
      { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' }
    ]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};