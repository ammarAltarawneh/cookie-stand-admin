import React from 'react';
import ReportTable from './ReportTable';
import CreateForm from './CreateForm';

function Main({ onCreate, hours, reports, onDelete, loading }) {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-semibold text-center text-stone-900">
        Cookie Stand Admin
      </h1>
      <CreateForm onCreate={onCreate} />
      <ReportTable
        hours={hours}
        reports={reports}
        onDelete={onDelete}
        loading={loading}
      />
    </main>
  );
}

export default Main;