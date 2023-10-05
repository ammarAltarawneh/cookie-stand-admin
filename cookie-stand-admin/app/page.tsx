"use client"
import React, { useState } from 'react';

export default function Home() {
  const [cookieStandData, setCookieStandData] = useState<{
    Location: string;
    'Minimum Customers Per Hour': number;
    'Maximum Customers Per Hour': number;
    'Average Cookies Per Sale': number;
  } | null>(null);

  function CookieStandForm() {
    const [location, setLocation] = useState('');
    const [minCustomers, setMinCustomers] = useState<number | ''>('');
    const [maxCustomers, setMaxCustomers] = useState<number | ''>('');
    const [avgCookies, setAvgCookies] = useState<number | ''>('');

    const handleCreateClick = () => {
      if (location && !isNaN(parseFloat(minCustomers as string)) && !isNaN(parseFloat(maxCustomers as string)) && !isNaN(parseFloat(avgCookies as string))) {
        const newCookieStandData = {
          Location: location,
          'Minimum Customers Per Hour': parseFloat(minCustomers as string),
          'Maximum Customers Per Hour': parseFloat(maxCustomers as string),
          'Average Cookies Per Sale': parseFloat(avgCookies as string),
        };

        setCookieStandData(newCookieStandData);
      }
    };

    return (
      <div className="flex items-center justify-center h-screen">
        <form className="bg-green-200 p-8 rounded-lg shadow-md w-90">
          <h1 className="text-2xl font-semibold mb-4">Create Cookie Stand</h1>

          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700"
            />
          </div>

          <div className="flex mb-4">
            <div className="w-1/4 mr-2">
              <label htmlFor="minCustomers" className="block text-gray-700">Minimum Customers Per Hour</label>
              <input
                type="number"
                id="minCustomers"
                value={minCustomers}
                onChange={(e) => setMinCustomers(e.target.value)}
                className="w-full border rounded-md py-2 px-3 text-gray-700"
              />
            </div>

            <div className="w-1/4 mx-2">
              <label htmlFor="maxCustomers" className="block text-gray-700">Maximum Customers Per Hour</label>
              <input
                type="number"
                id="maxCustomers"
                value={maxCustomers}
                onChange={(e) => setMaxCustomers(e.target.value)}
                className="w-full border rounded-md py-2 px-3 text-gray-700"
              />
            </div>

            <div className="w-1/4 ml-2">
              <label htmlFor="avgCookies" className="block text-gray-700">Average Cookies Per Sale</label>
              <input
                type="number"
                step="0.1"
                id="avgCookies"
                value={avgCookies}
                onChange={(e) => setAvgCookies(e.target.value)}
                className="w-full border rounded-md py-2 px-3 text-gray-700"
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleCreateClick}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <CookieStandForm />
      {cookieStandData && (
        <div className="mt-4 text-center">
          <p className="font-semibold">Report Table Coming Soon...</p>
          <pre className="inline-block p-2 border border-gray-300 rounded-md">
            {`{"Location": "${cookieStandData.Location}", "Minimum Customers Per Hour": ${cookieStandData['Minimum Customers Per Hour']}, "Maximum Customers Per Hour": ${cookieStandData['Maximum Customers Per Hour']}, "Average Cookies Per Sale": ${cookieStandData['Average Cookies Per Sale']}}`}
          </pre>
        </div>
      )}
    </div>
  );
}
