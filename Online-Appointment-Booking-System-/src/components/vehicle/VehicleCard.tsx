import React, { useState } from 'react';
import { Car, DollarSign, Gauge, ChevronDown, ChevronUp } from 'lucide-react';
import { Vehicle } from '../../types';
import { VehicleSpecs } from './VehicleSpecs';
import { StatusBadge } from '../ui/StatusBadge';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <img
          src={vehicle.imageUrl}
          alt={`${vehicle.make} ${vehicle.model}`}
          className="w-full h-full object-cover"
        />
        <StatusBadge status={vehicle.status} className="absolute top-4 right-4" />
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

        <p className="text-gray-600 mb-4">{vehicle.description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-gray-600 mb-2">Features:</h4>
            <div className="flex flex-wrap gap-2">
              {vehicle.features.slice(0, isExpanded ? undefined : 3).map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {isExpanded && (
            <>
              <div>
                <h4 className="font-semibold text-sm text-gray-600 mb-2">Colors:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-600">Exterior:</span>
                    <p className="text-gray-900">{vehicle.color.exterior}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Interior:</span>
                    <p className="text-gray-900">{vehicle.color.interior}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-gray-600 mb-2">Specifications:</h4>
                <VehicleSpecs specs={vehicle.specs} />
              </div>
            </>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show More
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}