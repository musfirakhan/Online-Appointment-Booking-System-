export interface Service {
  name: string;
  price: string;
  description: string;
  image: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}