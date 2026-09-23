export type PageId = 'accueil' | 'apropos' | 'services' | 'contact';

export type Language = 'fr' | 'en';

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  subject?: string;
  serviceType: string;
  volumeEstimated?: string;
  message: string;
}
