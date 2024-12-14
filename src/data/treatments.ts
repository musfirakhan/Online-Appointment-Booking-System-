import { Treatment } from '../types';

export const treatments: Treatment[] = [
  {
    id: '1',
    name: 'Bridal Makeup',
    description: 'Complete bridal makeup package including hair styling and draping',
    duration: 180,
    price: 15000,
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e',
    category: 'makeup'
  },
  {
    id: '2',
    name: 'Hair Treatment & Spa',
    description: 'Deep conditioning treatment with scalp massage and hair spa',
    duration: 90,
    price: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803',
    category: 'hair'
  },
  {
    id: '3',
    name: 'Facial with Gold Mask',
    description: 'Luxury facial treatment with 24k gold mask for glowing skin',
    duration: 60,
    price: 5000,
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881',
    category: 'facial'
  }
];