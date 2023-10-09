
import React from 'react';


function ReportTable({ hours, reports, onDelete, loading }) {
  const renderTable = () => {
    // Create table header
    const tableHeader = (
      <thead className="bg-gray-200">
        <tr>
          <th className="px-4 py-2">Location</th>
          {hours.map((hour, index) => (
            <th key={index} className="px-4 py-2">
              {hour}
            </th>
          ))}
          <th className="px-4 py-2">Total</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
    );

    // Create table body rows
    const tableBody = (
      <tbody>
        {reports.map((report, index) => (
          <tr key={index}>
            <td className="px-4 py-2 border">{report.location}</td>
            {report.hourlySale.map((sales, index) => (
              <td key={index} className="px-4 py-2 border">
                {sales}
              </td>
            ))}
            <td className="px-4 py-2 border">
              {report.hourlySale.reduce((acc, val) => acc + val, 0)}
            </td>
            <td className="px-4 py-2 border">
              <button
                onClick={() => onDelete(report.id)} // Assuming 'id' is the unique identifier
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );

    // Create table footer
const tableFooter = (
  <tfoot className="bg-gray-200">
    <tr>
      <td className="px-4 py-2 border">Total</td>
      {hours.map((_, index) => {
        const total = reports.reduce(
          (acc, report) => acc + report.hourlySale[index],
          0
        );
        return (
          <td key={index} className="px-4 py-2 border">
            {total}
          </td>
        );
      })}
      <td className="px-4 py-2 border">
        {reports.reduce((acc, report) =>
          acc + report.hourlySale.reduce((acc, val) => acc + val, 0), 0)}
      </td>
      <td className="px-4 py-2 border"></td>
    </tr>
  </tfoot>
);

    return (
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          {tableHeader}
          {tableBody}
          {tableFooter}
        </table>
      </div>
    );
  };

  return (
    <div className="m-4">
      {loading ? (
        <div className="text-center">
          <i className="text-xl animate-spin text-stone-600 fas fa-spinner"></i>
        </div>
      ) : reports.length === 0 ? (
        <h2 className="text-lg font-semibold text-center text-stone-600">No Cookie Stands Available</h2>
      ) : (
        renderTable()
      )}
    </div>
  );
}

export default ReportTable;

