import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center border-t border-gray-800">
      <p>&copy; {new Date().getFullYear()} AGMPROD. All rights reserved.</p>
    </footer>
  );
}