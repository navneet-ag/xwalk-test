function createOtpInput() {
  const container = document.createElement('div');
  container.className = 'otp-input-container';

  for (let i = 0; i < 6; i += 1) {
    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 1;
    input.className = 'otp-input';
    container.appendChild(input);

    if (i < 5) {
      const dash = document.createElement('span');
      dash.className = 'otp-dash';
      dash.innerText = '-';
      container.appendChild(dash);
    }
  }

  return container;
}

export default async function decorate(fieldDiv, fieldJson) {
  console.log('OTP DIV: ', fieldDiv);
  console.log('OTP JSON: ', fieldJson);

  const otpContainer = createOtpInput();
  fieldDiv.appendChild(otpContainer);

  const inputs = otpContainer.querySelectorAll('.otp-input');
  inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      if (e.target.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });
  });

  return fieldDiv;
}
