import React from 'react';

interface PriceRangeFilterProps {
  value: [number, number];
  onChange: (range: [number, number]) => void;
}

export function PriceRangeFilter({ value, onChange }: PriceRangeFilterProps) {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-3">Price Range</h3>
      <div className="flex gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Min</label>
          <input
            type="number"
            value={value[0]}
            onChange={(e) => onChange([parseInt(e.target.value), value[1]])}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Max</label>
          <input
            type="number"
            value={value[1]}
            onChange={(e) => onChange([value[0], parseInt(e.target.value)])}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}