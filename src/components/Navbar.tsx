import React from 'react';
import { Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-rose-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Scissors className="h-6 w-6" />
            <span className="font-bold text-xl">Noor Beauty Salon</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-rose-200 transition">Home</Link>
            <Link to="/services" className="hover:text-rose-200 transition">Services</Link>
            <Link to="/book" className="hover:text-rose-200 transition">Book Appointment</Link>
            <Link to="/gallery" className="hover:text-rose-200 transition">Gallery</Link>
            <Link to="/contact" className="hover:text-rose-200 transition">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}