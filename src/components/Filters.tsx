import React from 'react';
import { Search } from 'lucide-react';

interface FiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusFilterChange: (value: string) => void;
}

export function Filters({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange
}: FiltersProps) {
  return (
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
      
      <select
        value={statusFilter}
        onChange={(e) => onStatusFilterChange(e.target.value)}
        className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Status</option>
        <option value="available">Available</option>
        <option value="reserved">Reserved</option>
        <option value="sold">Sold</option>
      </select>
    </div>
  );
}