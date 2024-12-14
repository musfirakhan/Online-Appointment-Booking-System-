import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 text-rose-600 mt-1" />
        <div>
          <h3 className="font-semibold">Address</h3>
          <p className="text-gray-600">123 Model Town B,<br />Bahawalpur, Punjab,<br />Pakistan</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 text-rose-600 mt-1" />
        <div>
          <h3 className="font-semibold">Phone</h3>
          <p className="text-gray-600">+92 300 1234567</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 text-rose-600 mt-1" />
        <div>
          <h3 className="font-semibold">Email</h3>
          <p className="text-gray-600">info@noorbeautysalon.pk</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Clock className="w-6 h-6 text-rose-600 mt-1" />
        <div>
          <h3 className="font-semibold">Working Hours</h3>
          <p className="text-gray-600">
            Monday - Sunday<br />
            9:00 AM - 8:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}