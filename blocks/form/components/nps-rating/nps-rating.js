function updateSelection(scaleDiv, value) {
  const numbers = scaleDiv.querySelectorAll('.number');
  numbers.forEach((number, index) => {
    if (index <= value) {
      number.classList.add('selected');
    } else {
      number.classList.remove('selected');
    }
  });

  if (value <= 4) {
    scaleDiv.classList.add('low');
    scaleDiv.classList.remove('medium', 'high');
  } else if (value <= 7) {
    scaleDiv.classList.add('medium');
    scaleDiv.classList.remove('low', 'high');
  } else {
    scaleDiv.classList.add('high');
    scaleDiv.classList.remove('low', 'medium');
  }
}

export default function decorate(fieldDiv) {
  const input = fieldDiv.querySelector('input[type="number"]');
  const scaleDiv = document.createElement('div');
  scaleDiv.classList.add('scale');

  const labels = ['Not likely', 'May be', 'Very likely'];
  const labelDivs = labels.map((label) => {
    const labelDiv = document.createElement('div');
    labelDiv.classList.add('label');
    labelDiv.textContent = label;
    return labelDiv;
  });

  const barDiv = document.createElement('div');
  barDiv.classList.add('bar');
  scaleDiv.appendChild(barDiv);

  for (let i = 0; i <= 10; i += 1) {
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('number');
    numberDiv.textContent = i;
    numberDiv.addEventListener('click', () => {
      input.value = i;
      input.dispatchEvent(new Event('change', { bubbles: true }));
      updateSelection(scaleDiv, i);
    });
    scaleDiv.appendChild(numberDiv);
  }

  fieldDiv.appendChild(labelDivs[0]);
  fieldDiv.appendChild(scaleDiv);
  fieldDiv.appendChild(labelDivs[2]);

  input.style.display = 'none';

  return fieldDiv;
}
