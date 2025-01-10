export default function decorate(fieldDiv) {
  const input = fieldDiv.querySelector('input');
  input.type = 'text'; // Use text to allow custom formatting
  input.maxLength = 6;
  input.pattern = '\\d{6}'; // Enforce numeric input

  const wrapper = document.createElement('div');
  wrapper.className = 'otp-wrapper';
  input.after(wrapper);

  // Create individual boxes for each digit
  for (let i = 0; i < 6; i += 1) {
    const box = document.createElement('div');
    box.className = 'otp-box';
    const digitInput = document.createElement('input');
    digitInput.type = 'text';
    digitInput.maxLength = 1;
    digitInput.inputMode = 'numeric';
    box.appendChild(digitInput);
    wrapper.appendChild(box);

    // Auto-focus the next input
    digitInput.addEventListener('input', () => {
      if (digitInput.value.length === 1 && i < 5) {
        wrapper.children[i + 1].querySelector('input').focus();
      }
    });

    // Backspace to focus the previous input
    digitInput.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && digitInput.value === '' && i > 0) {
        wrapper.children[i - 1].querySelector('input').focus();
      }
    });
  }

  // Add a hidden input to store the final OTP
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'hidden';
  hiddenInput.name = input.name;
  wrapper.appendChild(hiddenInput);

  // Sync individual inputs to the hidden input
  wrapper.addEventListener('input', () => {
    hiddenInput.value = Array.from(wrapper.querySelectorAll('.otp-box input'))
      .map((el) => el.value)
      .join('');
  });

  input.remove(); // Remove the original input
  return fieldDiv;
}
