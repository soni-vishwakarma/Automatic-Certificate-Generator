import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CSVUpload from './CSVUpload';
import CertificatesPage from './CertificatesPage';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CSVUpload setData={setData} />} />
        <Route path="/certificates" element={<CertificatesPage data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
