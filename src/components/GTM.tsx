import { useEffect } from 'react';

// Declaração global do dataLayer para TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface GTMEvent {
  event: string;
  [key: string]: any;
}

export const GTM = {
  // Inicializar o dataLayer se não existir
  init: () => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
    }
  },

  // Enviar evento personalizado
  push: (event: GTMEvent) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(event);
    }
  },

  // Eventos específicos para o site
  trackContact: (method: 'whatsapp' | 'phone', service?: string) => {
    GTM.push({
      event: 'contact_attempt',
      contact_method: method,
      service_type: service || 'general',
      page_location: window.location.href,
    });
  },

  trackServiceInterest: (service: string) => {
    GTM.push({
      event: 'service_interest',
      service_name: service,
      page_location: window.location.href,
    });
  },

  trackPageView: (pageName: string) => {
    GTM.push({
      event: 'page_view',
      page_name: pageName,
      page_location: window.location.href,
    });
  },

  trackButtonClick: (buttonName: string, location: string) => {
    GTM.push({
      event: 'button_click',
      button_name: buttonName,
      button_location: location,
      page_location: window.location.href,
    });
  }
};

// Hook para inicializar GTM
export const useGTM = () => {
  useEffect(() => {
    GTM.init();
  }, []);
};

export default GTM;

