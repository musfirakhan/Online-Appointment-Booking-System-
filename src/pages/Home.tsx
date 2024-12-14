import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035"
          alt="Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/70 to-pink-900/50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl font-serif font-bold mb-4">Welcome to Noor Beauty Salon</h1>
            <p className="text-xl mb-8">Experience luxury beauty treatments in the heart of Bahawalpur</p>
            <Link
              to="/book"
              className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <MapPin className="w-8 h-8 text-pink-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <p className="text-gray-600">Model Town B, Bahawalpur</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="w-8 h-8 text-pink-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Working Hours</h2>
            <p className="text-gray-600">Mon - Sat: 10:00 AM - 8:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Phone className="w-8 h-8 text-pink-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p className="text-gray-600">+92 300 1234567</p>
          </div>
        </div>
      </div>
    </div>
  );
}