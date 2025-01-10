export default async function decorate(fieldDiv, fieldJson) {
  console.log('OTP FIELD DIV: ', fieldDiv);
  console.log('OTP JSON: ', fieldJson);

  const otpLength = fieldJson.properties?.otpLength || 6;

  // Create a wrapper for OTP input fields
  const otpWrapper = document.createElement('div');
  otpWrapper.className = 'otp-input-wrapper';

  // Create OTP input fields
  for (let i = 0; i < otpLength; i += 1) {
    const otpInput = document.createElement('input');
    otpInput.type = 'text';
    otpInput.maxLength = 1;
    otpInput.className = 'otp-input';
    otpWrapper.appendChild(otpInput);

    // Handle key navigation
    otpInput.addEventListener('keyup', (e) => {
      if (e.key === 'Backspace' || e.key === 'ArrowLeft') {
        const prev = otpInput.previousElementSibling;
        if (prev && prev.classList.contains('otp-input')) prev.focus();
      } else {
        const next = otpInput.nextElementSibling;
        if (next && next.classList.contains('otp-input')) next.focus();
      }
    });
  }

  // Append the OTP wrapper after the original fieldDiv
  fieldDiv.appendChild(otpWrapper);
  return fieldDiv;
}
