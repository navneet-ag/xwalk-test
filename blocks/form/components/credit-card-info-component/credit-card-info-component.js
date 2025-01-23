class CreditCardInfoCard {
  constructor(fieldDiv, fieldJson) {
    this.fieldDiv = fieldDiv;
    this.fieldJson = fieldJson;
    this.decorate();
  }

  decorate() {
    const {
      image,
      cardFees,
      issuanceFees,
      annualFees,
      viewOtherOptions,
    } = this.fieldJson;
    const imgElement = document.createElement('img');
    imgElement.src = image.value;
    this.fieldDiv.appendChild(imgElement);

    const cardDetailsDiv = document.createElement('div');
    cardDetailsDiv.classList.add('card-details');

    const cardFeesElement = document.createElement('p');
    cardFeesElement.textContent = cardFees.value;
    cardDetailsDiv.appendChild(cardFeesElement);

    const issuanceFeesElement = document.createElement('p');
    issuanceFeesElement.textContent = issuanceFees.value;
    cardDetailsDiv.appendChild(issuanceFeesElement);

    const annualFeesElement = document.createElement('p');
    annualFeesElement.textContent = annualFees.value;
    cardDetailsDiv.appendChild(annualFeesElement);

    this.fieldDiv.appendChild(cardDetailsDiv);

    const viewOtherOptionsElement = document.createElement('a');
    viewOtherOptionsElement.href = '#';
    viewOtherOptionsElement.classList.add('view-other-options');
    viewOtherOptionsElement.textContent = viewOtherOptions.value;
    this.fieldDiv.appendChild(viewOtherOptionsElement);
  }
}

export default async function decorate(fieldDiv, fieldJson) {
  const creditCardInfoCard = new CreditCardInfoCard(fieldDiv, fieldJson);
  return creditCardInfoCard.fieldDiv;
}
