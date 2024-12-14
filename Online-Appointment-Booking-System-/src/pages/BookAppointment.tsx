import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { treatments } from '../data/treatments';
import { Treatment } from '../types';

export function BookAppointment() {
  const [searchParams] = useSearchParams();
  const selectedTreatmentId = searchParams.get('treatment');
  const [selectedDate, setSelectedDate] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle appointment submission
    console.log('Appointment booked:', { ...formData, treatment: selectedTreatmentId, date: selectedDate });
  };

  return (
    <div className="min-h-screen bg-pink-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-pink-900 mb-8">Book an Appointment</h1>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Treatment
              </label>
              <select
                defaultValue={selectedTreatmentId || ''}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
              >
                <option value="">Choose a treatment</option>
                {treatments.map((treatment) => (
                  <option key={treatment.id} value={treatment.id}>
                    {treatment.name} - Rs. {treatment.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}