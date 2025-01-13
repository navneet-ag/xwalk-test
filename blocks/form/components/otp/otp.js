export default function decorate(fieldDiv, fieldJson) {
  console.log('OTP DIV: ', fieldDiv);
  console.log('OTP JSON: ', fieldJson);

  const inputWrapper = document.createElement('div');
  inputWrapper.className = 'otp-input-wrapper';

  for (let i = 0; i < 6; i += 1) {
    const input = document.createElement('input');
    input.type = 'number';
    input.maxLength = 1;
    input.className = 'otp-input';
    input.addEventListener('input', (e) => {
      if (e.target.value.length === 1) {
        const nextInput = e.target.nextElementSibling;
        if (nextInput) {
          nextInput.focus();
        }
      }
    });
    inputWrapper.appendChild(input);
  }

  fieldDiv.appendChild(inputWrapper);
  return fieldDiv;
}
