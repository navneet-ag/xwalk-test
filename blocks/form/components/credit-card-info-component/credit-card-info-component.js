export default async function decorate(fieldDiv) {
  const img = document.createElement('img');
  img.src = 'https://fastly.picsum.photos/id/426/200/300.jpg?hmac=ATVZT7wbjRxxBKYqLXE043ImnR_uNOkz00T9dWGYuow';
  fieldDiv.appendChild(img);

  const title = document.createElement('div');
  title.className = 'title';
  title.innerText = 'Card Fees';
  fieldDiv.appendChild(title);

  const issuanceFees = document.createElement('div');
  issuanceFees.className = 'fees';
  issuanceFees.innerText = 'Issuance Fees: $50';
  fieldDiv.appendChild(issuanceFees);

  const annualFees = document.createElement('div');
  annualFees.className = 'fees';
  annualFees.innerText = 'Annual Fees: $100';
  fieldDiv.appendChild(annualFees);

  const button = document.createElement('a');
  button.className = 'button';
  button.href = '#';
  button.innerText = 'View Other Card Options';
  fieldDiv.appendChild(button);
  return fieldDiv;
}
