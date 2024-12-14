import React from 'react';
import { GalleryImage } from '../types';

interface GalleryItemProps {
  image: GalleryImage;
}

export function GalleryItem({ image }: GalleryItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md">
      <img
        src={image.url}
        alt={image.caption}
        className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
        <p className="text-white text-xl font-semibold">{image.caption}</p>
      </div>
    </div>
  );
}