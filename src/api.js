export async function generateOtpApi(mobile) {
  if (!mobile) return { status: 0, error: "Invalid mobile number." }
  let res = await fetch("http://localhost:9000/otp/generate", {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({ mobile })
  })

  if (res.ok && res.status === 200) {
    return await res.json()
  } else {
    console.error(res.text())
  }
}
export async function verifyOtpApi(mobile, otp) {
  if (!mobile) return { status: 0, error: "Invalid mobile number." }
  if (!otp) return { status: 0, error: "Invalid otp." }
  let res = await fetch("http://localhost:9000/otp/verify-otp", {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({ mobile, otp })
  })

  if (res.ok && res.status === 200) {
    return await res.json()
  } else {
    console.error(res.text())
  }
}