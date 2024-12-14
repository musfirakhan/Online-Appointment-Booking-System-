import React from 'react';
import { Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  
  return (
    <header className="bg-pink-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-pink-600" />
            <h1 className="text-2xl font-serif font-bold text-pink-900">Noor Beauty Salon</h1>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/treatments" active={location.pathname === '/treatments'}>Treatments</NavLink>
            <NavLink to="/book" active={location.pathname === '/book'}>Book Appointment</NavLink>
            <NavLink to="/admin" active={location.pathname === '/admin'}>Admin</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      to={to}
      className={`${
        active ? 'text-pink-600 font-semibold' : 'text-gray-600 hover:text-pink-600'
      } transition-colors`}
    >
      {children}
    </Link>
  );
}