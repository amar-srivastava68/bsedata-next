// pages/index.js
import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Table from './cards.js'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  const [excelData, setExcelData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/bsedata');
      const responseData = response.data;
      setExcelData(responseData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  return (
    <div  style={{
      backgroundImage: `url(https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?auto=compress&cs=tinysrgb&w=600)`, 
      color : 'white'
     
      
    }}>
      <h1 className="text-center mb-6">Latest BSE Data</h1>

      {loading ? (
        <ProgressBar animated now={100} label="Loading data .." />
      ) : (
        <Table data={excelData} />
      )}
    </div>
  );
}

export default Home;
