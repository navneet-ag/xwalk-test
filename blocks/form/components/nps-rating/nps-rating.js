export default function decorate(fieldDiv) {
  const input = fieldDiv.querySelector('input[type="number"]');
  const max = 10;
  const npsDiv = document.createElement('div');
  npsDiv.classList.add('nps-rating');
  const labels = ['Not likely', '', '', '', '', '', '', '', '', '', 'Very likely'];
  for (let i = 0; i <= max; i += 1) {
    const number = document.createElement('span');
    number.classList.add('number');
    number.textContent = i;
    if (i <= 3) {
      number.classList.add('red');
    } else if (i <= 6) {
      number.classList.add('orange');
    } else {
      number.classList.add('green');
    }
    number.addEventListener('click', () => {
      input.value = i;
      input.dispatchEvent(new Event('change', { bubbles: true }));
      npsDiv.querySelectorAll('.number').forEach((num) => num.classList.remove('selected'));
      number.classList.add('selected');
    });
    npsDiv.appendChild(number);
  }
  const labelDiv = document.createElement('div');
  labelDiv.classList.add('labels');
  labels.forEach((label) => {
    const labelSpan = document.createElement('span');
    labelSpan.textContent = label;
    labelDiv.appendChild(labelSpan);
  });
  fieldDiv.appendChild(npsDiv);
  fieldDiv.appendChild(labelDiv);
  input.style.display = 'none';
  return fieldDiv;
}
