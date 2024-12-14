export interface Treatment {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
  imageUrl: string;
  category: TreatmentCategory;
}

export type TreatmentCategory = 'hair' | 'facial' | 'makeup' | 'nails' | 'skincare';

export interface TimeSlot {
  id: string;
  time: string;
  isAvailable: boolean;
}

export interface Appointment {
  id: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  treatmentId: string;
  date: string;
  timeSlot: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}