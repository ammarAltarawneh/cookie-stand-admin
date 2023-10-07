
import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { hours } from '../data'; 

function CookieStandAdmin() {
  const [reports, setReports] = useState([]);
 

  const onCreate = (newCookieStand) => {
    // Calculate and update the reports with the new cookie stand
    const updatedReports = [...reports, newCookieStand];
    setReports(updatedReports);
  };

  return (
    <div>
         <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <Main onCreate={onCreate} hours={hours} reports={reports} /> 
      <Footer reports={reports} />
    </div>
  );
}

export default CookieStandAdmin;