import React from 'react';
import { TreatmentCategory } from '../../types';

interface TreatmentFilterProps {
  selectedCategory: TreatmentCategory | 'all';
  onCategoryChange: (category: TreatmentCategory | 'all') => void;
}

export function TreatmentFilter({ selectedCategory, onCategoryChange }: TreatmentFilterProps) {
  const categories: (TreatmentCategory | 'all')[] = ['all', 'makeup', 'hair', 'facial', 'nails', 'skincare'];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full transition-colors ${
            category === selectedCategory
              ? 'bg-pink-600 text-white'
              : 'bg-white text-gray-700 hover:bg-pink-50'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}