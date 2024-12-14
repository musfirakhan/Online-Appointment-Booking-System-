import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    name: "Bridal Makeup",
    price: "Rs. 15,000",
    description: "Complete bridal makeup with traditional and modern styles",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Mehndi Application",
    price: "Rs. 3,000",
    description: "Traditional and modern mehndi designs",
    image: "https://images.unsplash.com/photo-1684813910513-11e6b30adc22?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Hair Treatment",
    price: "Rs. 5,000",
    description: "Premium hair care and styling services",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Facial Treatment",
    price: "Rs. 2,500",
    description: "Luxury facials with premium products",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-rose-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-rose-600 font-bold">{service.price}</span>
                  <Link 
                    to="/book" 
                    className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}