import React from 'react';
// import logo from './images/Soni-logo.png';
import sign from './images/soni-sign.png';
import principal from './images/principal.png';
import award from './images/award-ribbon.png';
import './Certificate.css';

const Certificate = ({ student, index }) => {
  return (
    <div id={`certificate-${index}`} className="pm-certificate-container">
      <div className="inner-border"></div>
      <div className="inner2-border"></div>
      <div className="pm-certificate-border col-xs-18">
        <div className="row pm-certificate-header">
          <div className="pm-certificate-title cursive col-xs-12 text-center">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h2 className="App-header">CERTIFICATE</h2>
            <div className="certificate-title">
              <span className="line"></span>
              <h4 className="pm-certificate-header">OF ACHIEVEMENT</h4>
              <span className="line"></span>
            </div>
            <div className="pm-certificate-body">
              <span className="pm-name-text bold">This is to certify that</span>
            </div>
            <div className="certificate-title margin-0 col-xs-8 text-center">
              <h3 className="pm-certificate-name underline">{student[0]}</h3>
            </div>
            <div className="pm-certificate-p margin-0 col-xs-8 text-center">
              <p className="pm-name-p">
                has successfully completed a Value-Added Course in "{student[1]}" from {student[2]} to {student[3]}, organised by the Department of Computer Engineering, {student[4]}.
              </p>
            </div>
            <div className="certificate-footer">
              <div className="left-section">
                <p className="pm-certificate-name underline"><img src={sign} alt="Principal Signature" /></p>
                <p><strong>Principal of college</strong></p>
              </div>
              <div className="middle-section">
                <p ><img src={award}  /></p>
              </div>
              <div className="right-section">
                <p className="pm-certificate-name underline"><img src={principal} alt="Course Coordinator Signature" /></p>
                <p><strong>Course Co-ordinator</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
