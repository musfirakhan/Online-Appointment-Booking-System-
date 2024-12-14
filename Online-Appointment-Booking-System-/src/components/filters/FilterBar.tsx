import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { PriceRangeFilter } from './PriceRangeFilter';
import { StatusFilter } from './StatusFilter';

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusFilterChange: (value: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  isFilterExpanded: boolean;
  onFilterExpandToggle: () => void;
}

export function FilterBar({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  priceRange,
  onPriceRangeChange,
  isFilterExpanded,
  onFilterExpandToggle
}: FilterBarProps) {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search vehicles..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          onClick={onFilterExpandToggle}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
        >
          <SlidersHorizontal className="w-5 h-5" />
          Filters
        </button>
      </div>

      {isFilterExpanded && (
        <div className="bg-white p-4 rounded-lg shadow-md space-y-6">
          <StatusFilter value={statusFilter} onChange={onStatusFilterChange} />
          <PriceRangeFilter value={priceRange} onChange={onPriceRangeChange} />
        </div>
      )}
    </div>
  );
}