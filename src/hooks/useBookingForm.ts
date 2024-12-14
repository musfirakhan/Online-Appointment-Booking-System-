import { useState } from 'react';
import { BookingFormData } from '../types';

const initialState: BookingFormData = {
  name: '',
  phone: '',
  service: '',
  date: '',
  time: '',
};

export function useBookingForm() {
  const [formData, setFormData] = useState<BookingFormData>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Booking request submitted! We will contact you shortly.');
    setFormData(initialState);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}