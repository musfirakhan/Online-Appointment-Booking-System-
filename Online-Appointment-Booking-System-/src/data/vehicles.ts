import { Vehicle } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: '1',
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2023,
    price: 110000,
    mileage: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1622194993516-0e8e8655f309',
    status: 'available',
    features: [
      'Leather Interior',
      'Navigation',
      'Premium Sound System',
      'Heated/Ventilated Seats',
      'Panoramic Roof',
      'Driver Assistance Package'
    ],
    description: 'Experience unparalleled luxury with the 2023 Mercedes-Benz S-Class. This flagship sedan combines cutting-edge technology with supreme comfort.',
    specs: {
      engine: '4.0L V8 Biturbo',
      transmission: '9-Speed Automatic',
      fuelType: 'Premium Unleaded',
      drivetrain: 'All-Wheel Drive'
    },
    color: {
      exterior: 'Obsidian Black',
      interior: 'Macchiato Beige'
    }
  },
  {
    id: '2',
    make: 'BMW',
    model: '7 Series',
    year: 2023,
    price: 95000,
    mileage: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
    status: 'reserved',
    features: [
      'Executive Lounge',
      'Bowers & Wilkins Sound',
      'Massage Seats',
      'Sky Lounge Roof',
      'Remote Parking',
      'Digital Key'
    ],
    description: 'The all-new BMW 7 Series redefines luxury with innovative technology and outstanding comfort features.',
    specs: {
      engine: '3.0L I6 Turbo',
      transmission: '8-Speed Sport Automatic',
      fuelType: 'Premium Unleaded',
      drivetrain: 'xDrive AWD'
    },
    color: {
      exterior: 'Mineral White',
      interior: 'Cognac'
    }
  },
  {
    id: '3',
    make: 'Audi',
    model: 'A8 L',
    year: 2023,
    price: 89000,
    mileage: 1000,
    imageUrl: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16',
    status: 'available',
    features: [
      'Bang & Olufsen 3D Audio',
      'Executive Package',
      'Night Vision',
      'Predictive Active Suspension',
      'HD Matrix LED Lights',
      'Rear Seat Entertainment'
    ],
    description: 'The Audi A8 L represents the pinnacle of luxury and technology, offering a first-class experience for both driver and passengers.',
    specs: {
      engine: '3.0L V6 TFSI',
      transmission: '8-Speed Tiptronic',
      fuelType: 'Premium Unleaded',
      drivetrain: 'quattro AWD'
    },
    color: {
      exterior: 'Florett Silver',
      interior: 'Black'
    }
  }
];