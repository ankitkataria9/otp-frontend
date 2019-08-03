import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { generateOtpApi, verifyOtpApi } from './api';

import './styles/main.css';

import Mobile from './Mobile';
import OTP from './Otp';

const App = () => {
  const [showOtpUi, setShowOtpUi] = useState(false);
  const [mobile, setMobile] = useState();

  return <div className="root">
    {
      !showOtpUi ?
        <Mobile setShowOtpUi={setShowOtpUi} generateOtpApi={generateOtpApi} setMobile={setMobile} />
        :
        <OTP setShowOtpUi={setShowOtpUi} verifyOtpApi={verifyOtpApi} mobile={mobile} />
    }
  </div>
}

ReactDOM.render(<App />, document.querySelector('#root'))