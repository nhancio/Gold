import emailjs from '@emailjs/browser';

// EmailJS Configuration using environment variables
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Email template parameters
export const EMAIL_TEMPLATE_PARAMS = {
  from_name: 'Gold Calculator',
  to_name: 'OMV Gold Buyers',
  to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL || 'omvgoldchandanagar@gmail.com',
};

// Initialize EmailJS
export const initializeEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
};
