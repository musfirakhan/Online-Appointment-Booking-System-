import React from 'react';
import { Car, DollarSign, Gauge } from 'lucide-react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <img
          src={vehicle.imageUrl}
          alt={`${vehicle.make} ${vehicle.model}`}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold
          ${vehicle.status === 'available' ? 'bg-green-500 text-white' :
            vehicle.status === 'reserved' ? 'bg-yellow-500 text-white' :
            'bg-red-500 text-white'}`}>
          {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700">{vehicle.price.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700">{vehicle.mileage.toLocaleString()} mi</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-gray-600">Features:</h4>
          <div className="flex flex-wrap gap-2">
            {vehicle.features.map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}