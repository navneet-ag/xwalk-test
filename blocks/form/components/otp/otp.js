export default function decorate(fieldDiv) {
  const input = fieldDiv.querySelector('input');
  input.type = 'password';
  input.classList.add('otp-input');

  const toggleButton = document.createElement('button');
  toggleButton.type = 'button';
  toggleButton.innerText = 'Show';
  toggleButton.classList.add('otp-toggle');
  fieldDiv.appendChild(toggleButton);

  toggleButton.addEventListener('click', () => {
    if (input.type === 'password') {
      input.type = 'text';
      toggleButton.innerText = 'Hide';
    } else {
      input.type = 'password';
      toggleButton.innerText = 'Show';
    }
  });

  return fieldDiv;
}
