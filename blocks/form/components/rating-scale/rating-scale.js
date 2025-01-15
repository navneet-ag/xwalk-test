export default function decorate(fieldDiv) {
  const input = fieldDiv.querySelector('input[type="number"]');
  const max = input.getAttribute('max') || 10;
  const ratingDiv = document.createElement('div');
  ratingDiv.classList.add('rating-scale');
  for (let i = 0; i <= max; i += 1) {
    const rating = document.createElement('div');
    rating.classList.add('rating');
    rating.textContent = i;
    if (i <= 3) {
      rating.classList.add('low');
    } else if (i <= 6) {
      rating.classList.add('medium');
    } else {
      rating.classList.add('high');
    }
    rating.addEventListener('click', () => {
      input.value = i;
      input.dispatchEvent(new Event('change', { bubbles: true }));
      ratingDiv.querySelectorAll('.rating').forEach((r) => r.classList.remove('selected'));
      rating.classList.add('selected');
    });
    ratingDiv.appendChild(rating);
  }
  const labelDiv = document.createElement('div');
  labelDiv.classList.add('label');
  labelDiv.innerHTML = '<span>Not likely</span><span>Maybe</span><span>Very likely</span>';
  fieldDiv.appendChild(ratingDiv);
  fieldDiv.appendChild(labelDiv);
  input.style.display = 'none';
  return fieldDiv;
}
