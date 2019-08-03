import React, { useState } from 'react';

const OTP = (props) => {
  const [error, setError] = useState();

  const { setShowOtpUi, mobile, verifyOtpApi } = props;

  async function submit(e) {
    e.preventDefault();

    let otp = e.target.otp.value.trim().toString();
    if (otp.length !== 6) { setError('otp must have 6 digits.'); return; }
    if (isNaN(otp)) { setError('otp must be in numeric.'); return; }

    // let mobile = document.getElementById('otpInput').value.trim().toString();
    if (mobile.length !== 10) { setError('Enter valid mobile number of 10 digits to enter otp.'); return; }
    if (isNaN(mobile)) { setError('Enter valid number to enter otp.'); return; }
    const res = await verifyOtpApi(mobile, otp);
    if (res.status) {
      alert('Congrats you are verified user now.')
    } else {
      setError(res.error)
    }
  }

  function enterOtp(e) {
    e.preventDefault();
    setShowOtpUi(true);
  }

  return (
    <div className="mobile-root">
      <div className="mobile-form-container">
        <form className="mobile-form" onSubmit={(e) => submit(e)}>
          <div className="mobile-form-control">
            <p className="mobile-heading">Enter your otp</p>
          </div>
          <div className="mobile-form-control">
            <p className="error">{error}</p>
          </div>
          <div className="mobile-form-control">
            <input type="text" placeholder="otp" id="otpInput" onFocus={() => setError("")} className="mobile-form-input" autoFocus name="otp" />
          </div>
          <div className="mobile-form-control">
            <div className="form-actions">
              <button className="mobile-form-btn" type="button" onClick={(e) => enterOtp(e)}>Back</button>
              <button className="mobile-form-submit" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OTP;