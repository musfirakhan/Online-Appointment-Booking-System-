import React from 'react';

interface StatusFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function StatusFilter({ value, onChange }: StatusFilterProps) {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-3">Status</h3>
      <div className="flex flex-wrap gap-2">
        {['all', 'available', 'reserved', 'sold'].map((status) => (
          <button
            key={status}
            onClick={() => onChange(status === 'all' ? '' : status)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              (status === 'all' && !value) || status === value
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}