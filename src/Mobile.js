import React, { useState } from 'react';
import './styles/mobile.css';

const Mobile = (props) => {
  const [error, setError] = useState();

  const { setShowOtpUi, generateOtpApi, setMobile } = props;

  async function submit(e) {
    e.preventDefault();
    let mobile = e.target.mobile.value.trim().toString();
    if (mobile.length !== 10) { setError('mobile must have 10 digits.'); return; }
    if (isNaN(mobile)) { setError('mobile number must be in numeric.'); return; }
    const res = await generateOtpApi(mobile);
    if (res.status) {
      setMobile(mobile);
      setShowOtpUi(true)
    } else {
      setError(res.error)
    }
  }

  function enterOtp(e) {
    e.preventDefault();
    let mobile = document.getElementById('mobileInput').value.trim().toString();
    // alert(mobile)
    if (mobile.length !== 10) { setError('Enter valid number to enter otp.'); return; }
    if (isNaN(mobile)) { setError('Enter valid number to enter otp.'); return; }
    setShowOtpUi(true);
  }

  return (
    <div className="mobile-root">
      <div className="mobile-form-container">
        <form className="mobile-form" onSubmit={(e) => submit(e)}>
          <div className="mobile-form-control">
            <p className="mobile-heading">Enter mobile number to receive otp</p>
          </div>
          <div className="mobile-form-control">
            <p className="error">{error}</p>
          </div>
          <div className="mobile-form-control">
            <input type="text" placeholder="mobile" id="mobileInput" onFocus={() => setError("")} className="mobile-form-input" autoFocus name="mobile" />
          </div>
          <div className="mobile-form-control">
            <div className="form-actions">
              <button className="mobile-form-btn" type="button" onClick={(e) => enterOtp(e)}>Enter otp</button>
              <button className="mobile-form-submit" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Mobile;