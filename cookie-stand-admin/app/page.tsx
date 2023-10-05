export default function Home() {
  function CookieStandForm() {
    return (
      <div className="flex items-center justify-center h-screen">
        <form className="bg-green-200 p-7 rounded-lg shadow-md w-90">
          <h1 className="text-2xl font-semibold mb-4">Create Cookie Stand</h1>

          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              placeholder="Enter Location"
              className="w-full border rounded-md py-2 px-3 text-gray-700"
            />
          </div>

          <div className="flex mb-4">
            <div className="w-1/4 mr-2">
              <label htmlFor="minCustomers" className="block text-gray-700">Minimum Customers Per Hour</label>
              <input
                type="number"
                id="minCustomers"
                className="w-full border rounded-md py-2 px-3 text-gray-700"
              />
            </div>

            <div className="w-1/4 mx-2">
              <label htmlFor="maxCustomers" className="block text-gray-700">Maximum Customers Per Hour</label>
              <input
                type="number"
                id="maxCustomers"
                className="w-full border rounded-md py-2 px-3 text-gray-700"
              />
            </div>

            <div className="w-1/4 ml-2">
              <label htmlFor="avgCookies" className="block text-gray-700">Average Cookies Per Sale</label>
              <input
                type="number"
                step="0.1"
                id="avgCookies"
                className="w-full border rounded-md py-2 px-3 text-gray-700"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Create</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <CookieStandForm />
    </div>
  );
}