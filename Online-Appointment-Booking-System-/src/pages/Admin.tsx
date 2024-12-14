import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';

export function Admin() {
  const [appointments, setAppointments] = useState([
    {
      id: '1',
      clientName: 'Sarah Ahmed',
      treatmentName: 'Bridal Makeup',
      date: '2024-03-20',
      time: '14:00',
      status: 'pending'
    }
  ]);

  return (
    <div className="min-h-screen bg-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-pink-900 mb-8">Admin Dashboard</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Upcoming Appointments</h2>
            
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="border rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-pink-600" />
                      <span className="font-semibold">{appointment.clientName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-pink-600" />
                      <span>{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-pink-600" />
                      <span>{appointment.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        // Handle confirmation
                      }}
                      className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => {
                        // Handle cancellation
                      }}
                      className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}