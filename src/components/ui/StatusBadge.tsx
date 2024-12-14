import React from 'react';
import { Vehicle } from '../../types';

interface StatusBadgeProps {
  status: Vehicle['status'];
  className?: string;
}

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const baseClasses = 'px-3 py-1 rounded-full text-sm font-semibold';
  const statusClasses = {
    available: 'bg-green-500 text-white',
    reserved: 'bg-yellow-500 text-white',
    sold: 'bg-red-500 text-white'
  };

  return (
    <div className={`${baseClasses} ${statusClasses[status]} ${className}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );
}