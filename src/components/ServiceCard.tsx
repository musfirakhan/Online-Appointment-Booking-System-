import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';
import { Button } from './ui/Button';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={service.image} 
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-rose-600 font-bold">{service.price}</span>
          <Link to="/book">
            <Button>Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}