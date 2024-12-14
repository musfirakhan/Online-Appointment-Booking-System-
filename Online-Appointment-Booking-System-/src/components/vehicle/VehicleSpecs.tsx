import React from 'react';
import { Vehicle } from '../../types';

interface VehicleSpecsProps {
  specs: Vehicle['specs'];
}

export function VehicleSpecs({ specs }: VehicleSpecsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h4 className="text-sm font-semibold text-gray-600">Engine</h4>
        <p className="text-gray-900">{specs.engine}</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-600">Transmission</h4>
        <p className="text-gray-900">{specs.transmission}</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-600">Fuel Type</h4>
        <p className="text-gray-900">{specs.fuelType}</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-600">Drivetrain</h4>
        <p className="text-gray-900">{specs.drivetrain}</p>
      </div>
    </div>
  );
}