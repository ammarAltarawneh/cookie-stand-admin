
import React from 'react';
import CreateForm from './CreateForm';
import ReportTable from './ReportTable';

function Main({ onCreate, hours, reports }) {
  return (
    <>
      <CreateForm onCreate={onCreate} />
      <ReportTable hours={hours} reports={reports} />
    </>
  );
}

export default Main;