export default function decorate(otpComponent) {
  otpComponent.classList.add('otp-component');

  const message = document.createElement('div');
  message.classList.add('otp-message');
  message.textContent = 'An OTP has been sent to your registered mobile number.';
  otpComponent.appendChild(message);

  const editMobile = document.createElement('div');
  editMobile.classList.add('edit-mobile');
  editMobile.textContent = 'Edit Mobile Number';
  otpComponent.appendChild(editMobile);

  const input = document.createElement('input');
  input.classList.add('otp-input');
  input.type = 'text';
  input.maxLength = 6;
  input.placeholder = '••••••';
  otpComponent.appendChild(input);

  const timer = document.createElement('div');
  timer.classList.add('otp-timer');
  timer.textContent = 'Resend OTP in 60 seconds';
  otpComponent.appendChild(timer);

  const attempts = document.createElement('div');
  attempts.classList.add('otp-attempts');
  attempts.textContent = 'Attempts left: 3';
  otpComponent.appendChild(attempts);

  // Add functionality for countdown timer and attempts left
  let countdown = 60;
  const interval = setInterval(() => {
    countdown -= 1;
    timer.textContent = `Resend OTP in ${countdown} seconds`;
    if (countdown === 0) {
      clearInterval(interval);
      timer.textContent = 'Resend OTP now';
    }
  }, 1000);
}
