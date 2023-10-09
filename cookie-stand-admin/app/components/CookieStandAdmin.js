import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { hours } from '../data';
import axios from 'axios';

function CookieStandAdmin() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);

 
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://salmoncookiesapi20231004145021.azurewebsites.net/api/CookieStands');
      setReports(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetchData();
  }, []);


  const onCreate = async (newCookieStand) => {
    try {
      setLoading(true);
      const response = await axios.post('https://salmoncookiesapi20231004145021.azurewebsites.net/api/CookieStands', newCookieStand);
      console.log('Create Response:', response); // Log the response
      setReports([...reports, response.data]);
    } catch (error) {
      console.error('Error creating new cookie stand:', error);
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async (id) => {
    try {
      setLoading(true);
      // Send the delete request to the API
        const response = await axios.delete(`https://salmoncookiesapi20231004145021.azurewebsites.net/api/CookieStands/${id}`);
    
    // Log the response
    console.log('Delete Response:', response);
      
      // Remove the deleted record from the state
      setReports((prevReports) => prevReports.filter((report) => report.id !== id));
    } catch (error) {
      console.error('Error deleting cookie stand:', error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <Main onCreate={onCreate} hours={hours} reports={reports} onDelete={onDelete} loading={loading}/>
      <Footer reports={reports} />
    </div>
  );
}

export default CookieStandAdmin;