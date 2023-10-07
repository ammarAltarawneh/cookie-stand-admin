import React from 'react';

function Footer({ reports }) {
  const numLocations = reports.length;
  const locationsText = numLocations === 0 ? '0 Locations World Wide' : `${numLocations} Locations World Wide`;

  return (
    <footer className="py-4 bg-green-400 text-stone-600">
      <div className="container flex items-center justify-between mx-auto">
        <p className="text-sm font-bold">{locationsText}</p>
        <p className="text-sm font-bold">&copy; {new Date().getFullYear()} Cookie Stand Admin</p>
      </div>
    </footer>
  );
}

export default Footer;