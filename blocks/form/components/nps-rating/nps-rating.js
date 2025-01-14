export default function decorate(fieldDiv) {
  const input = fieldDiv.querySelector('input[type="number"]');
  const max = 10;
  const scaleDiv = document.createElement('div');
  scaleDiv.classList.add('scale');

  for (let i = 0; i <= max; i += 1) {
    const number = document.createElement('span');
    number.classList.add('number');
    number.textContent = i;
    if (i <= 6) {
      number.classList.add('not-likely');
    } else if (i <= 8) {
      number.classList.add('maybe');
    } else {
      number.classList.add('very-likely');
    }
    number.addEventListener('click', () => {
      input.value = i;
      input.dispatchEvent(new Event('change', { bubbles: true }));
      scaleDiv.querySelectorAll('.number').forEach((num) => num.classList.remove('selected'));
      number.classList.add('selected');
    });
    scaleDiv.appendChild(number);
  }

  const labelsDiv = document.createElement('div');
  labelsDiv.classList.add('labels');
  const notLikelyLabel = document.createElement('span');
  notLikelyLabel.classList.add('label');
  notLikelyLabel.textContent = 'Not likely';
  const maybeLabel = document.createElement('span');
  maybeLabel.classList.add('label');
  maybeLabel.textContent = 'May be';
  const veryLikelyLabel = document.createElement('span');
  veryLikelyLabel.classList.add('label');
  veryLikelyLabel.textContent = 'Very likely';
  labelsDiv.appendChild(notLikelyLabel);
  labelsDiv.appendChild(maybeLabel);
  labelsDiv.appendChild(veryLikelyLabel);

  fieldDiv.appendChild(scaleDiv);
  fieldDiv.appendChild(labelsDiv);
  input.style.display = 'none';
  return fieldDiv;
}
