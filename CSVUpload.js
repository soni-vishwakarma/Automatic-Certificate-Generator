import React from 'react';
import CsvReader from 'react-csv-reader';
import { useNavigate } from 'react-router-dom';

const CSVUpload = ({ setData }) => {
  const navigate = useNavigate();

  const handleCsvData = (data) => {
    // Remove header if it exists
    const filteredData = data.filter((row, index) => index !== 0 && row.length > 1);
    setData(filteredData);
    navigate('/certificates');
  };

  return (
    <div className="upload-container">
      <h2>Upload CSV File</h2>
      <CsvReader onFileLoaded={handleCsvData} />
    </div>
  );
};

export default CSVUpload;
