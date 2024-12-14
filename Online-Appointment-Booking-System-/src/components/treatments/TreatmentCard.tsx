import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign } from 'lucide-react';
import { Treatment } from '../../types';

interface TreatmentCardProps {
  treatment: Treatment;
}

export function TreatmentCard({ treatment }: TreatmentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={treatment.imageUrl}
          alt={treatment.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-pink-600 text-white rounded-full text-sm">
          {treatment.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{treatment.name}</h3>
        <p className="text-gray-600 mb-4">{treatment.description}</p>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4 text-pink-600" />
            <span className="text-gray-700">Rs. {treatment.price.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-pink-600" />
            <span className="text-gray-700">{treatment.duration} min</span>
          </div>
        </div>

        <Link
          to={`/book?treatment=${treatment.id}`}
          className="block w-full text-center bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}