import React from 'react';

function ReportTable({ hours, reports }) {
  const renderTable = () => {
    // Calculate totals for each column
    const totals = new Array(hours.length).fill(0);

    // Create table header
    const tableHeader = (
      <thead className="bg-red-200">
        <tr>
          <th className="px-4 py-2">Location</th>
          {hours.map((hour, index) => (
            <th key={index} className="px-4 py-2">
              {hour}
            </th>
          ))}
          <th className="px-4 py-2">Total</th>
        </tr>
      </thead>
    );

    // Create table body rows
    const tableBody = (
      <tbody>
        {reports.map((report, index) => (
          <tr key={index}>
            <td className="px-4 py-2 border">{report.location}</td>
            {report.hourly_sales.map((sales, index) => {
              totals[index] += sales;
              return (
                <td key={index} className="px-4 py-2 border">
                  {sales}
                </td>
              );
            })}
            <td className="px-4 py-2 border">
              {report.hourly_sales.reduce((acc, val) => acc + val, 0)}
            </td>
          </tr>
        ))}
      </tbody>
    );

    // Create table footer
    const tableFooter = (
      <tfoot className="bg-blue-200">
        <tr>
          <td className="px-4 py-2 border">Total</td>
          {totals.map((total, index) => (
            <td key={index} className="px-4 py-2 border">
              {total}
            </td>
          ))}
          <td className="px-4 py-2 border">
            {totals.reduce((acc, val) => acc + val, 0)}
          </td>
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
      {reports.length === 0 ? (
        <h2 className="text-lg font-semibold text-center text-stone-600">No Cookie Stands Available</h2>
      ) : (
        renderTable()
      )}
    </div>
  );
}

export default ReportTable;