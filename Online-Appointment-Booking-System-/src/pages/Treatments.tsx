import React, { useState } from 'react';
import { treatments } from '../data/treatments';
import { TreatmentCard } from '../components/treatments/TreatmentCard';
import { TreatmentFilter } from '../components/treatments/TreatmentFilter';
import { TreatmentCategory } from '../types';

export function Treatments() {
  const [selectedCategory, setSelectedCategory] = useState<TreatmentCategory | 'all'>('all');

  const filteredTreatments = treatments.filter(
    (treatment) => selectedCategory === 'all' || treatment.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-pink-900 mb-8">Our Treatments</h1>
        
        <TreatmentFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>

        {filteredTreatments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No treatments found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}