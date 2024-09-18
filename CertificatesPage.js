import React from 'react';
import Certificate from './Certificate';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CertificatesPage = ({ data }) => {
  const generatePdf = () => {
    const doc = new jsPDF('p', 'mm', 'a4');

    const generatePromises = data.map((student, index) => {
      return new Promise((resolve) => {
        const element = document.getElementById(`certificate-${index}`);
        html2canvas(element).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const imgWidth = doc.internal.pageSize.getWidth();
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
          if (index < data.length - 1) {
            doc.addPage();
          }
          resolve();
        });
      });
    });

    Promise.all(generatePromises).then(() => {
      doc.save('certificates.pdf');
    });
  };

  return (
    <div className="certificates-container">
      {data.map((student, index) => (
        <Certificate key={index} student={student} index={index} />
      ))}
      <button onClick={generatePdf}>Download All Certificates</button>
    </div>
  );
};

export default CertificatesPage;
