import React, { useState } from 'react';
import axios from 'axios';

function CreateForm({ onCreate }) {
  const [location, setLocation] = useState('');
  const [minCustomers, setMinCustomers] = useState('0'); // Cast to string
  const [maxCustomers, setMaxCustomers] = useState('0'); // Cast to string
  const [avgCookies, setAvgCookies] = useState('0.0'); // Cast to string

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCookieStand = {
      location,
      minimumCustomersPerHour: parseInt(minCustomers), // Parse as integer
      maximumCustomersPerHour: parseInt(maxCustomers), // Parse as integer
      averageCookiesPerSale: parseFloat(avgCookies), // Parse as float
      description: 'string', // Set description as needed
      owner: 'string', // Set owner as needed
    };
    onCreate(newCookieStand);
    // Clear form fields
    setLocation('');
    setMinCustomers('0'); // Cast to string
    setMaxCustomers('0'); // Cast to string
    setAvgCookies('0.0'); // Cast to string green
  };

  return (
    <div className="flex items-center justify-center pt-12">
      <form
        className="flex flex-col items-center w-4/6 p-5 bg-green-300 rounded-lg content-box"
        onSubmit={handleSubmit}
      >
        <p className="text-2xl font-bold text-stone-600">Create Cookie stand</p>
        <div className="flex flex-wrap w-full mb-6 -mx-3">
          <div className="w-full">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-stone-600"
              htmlFor="grid-password"
            >
              Location
            </label>
            <input
              required
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Location"
            ></input>
          </div>
        </div>

        <div className="flex flex-wrap mb-2 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-stone-600"
              htmlFor="grid-city"
            >
              Min Customer per Hour
            </label>
            <input
              required
              onChange={(e) => setMinCustomers(e.target.value)}
              value={minCustomers}
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="number"
              placeholder="0"
              min={0}
            ></input>
          </div>

          <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-stone-600"
              htmlFor="grid-zip"
            >
              Max Customer per Hour
            </label>
            <input
              required
              onChange={(e) => setMaxCustomers(e.target.value)}
              value={maxCustomers}
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="number"
              placeholder="0"
              min={0}
            ></input>
          </div>
          <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-stone-600"
              htmlFor="grid-zip"
            >
              Avg Cookie per Sale
            </label>
            <input
              required
              onChange={(e) => setAvgCookies(e.target.value)}
              value={avgCookies}
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              step="0.1"
              type="number"
              placeholder="0.0"
              min={0}
            ></input>
          </div>
          <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
            <button
              className="min-w-full min-h-full text-2xl font-bold rounded-lg bg-green -400 text-stone-600"
              type="submit"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;