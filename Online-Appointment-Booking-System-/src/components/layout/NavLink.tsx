import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`block ${
        isActive
          ? 'text-blue-600 font-semibold'
          : 'text-gray-600 hover:text-blue-600'
      } transition-colors`}
    >
      {children}
    </a>
  );
}