import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-rose-50">
      {/* Hero Section */}
      <div 
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Noor Beauty Salon</h1>
            <p className="text-xl mb-8">Experience luxury beauty services in the heart of Bahawalpur</p>
            <Link 
              to="/book" 
              className="bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Star className="w-12 h-12 text-rose-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Services</h3>
            <p className="text-gray-600">Expert beauticians with years of experience</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="w-12 h-12 text-rose-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Timing</h3>
            <p className="text-gray-600">Open 7 days a week, 9 AM to 8 PM</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MapPin className="w-12 h-12 text-rose-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
            <p className="text-gray-600">Model Town B, Bahawalpur</p>
          </div>
        </div>
      </div>

      {/* Contact Strip */}
      <div className="bg-rose-800 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-center space-x-4">
          <Phone className="w-5 h-5" />
          <span>For quick appointments, call us at: +92 303 9219395</span>
        </div>
      </div>
    </div>
  );
}