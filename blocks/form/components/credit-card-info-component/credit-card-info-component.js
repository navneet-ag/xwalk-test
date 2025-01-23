class CreditCardInfoComponent {
  constructor(fieldDiv, fieldJson) {
    this.fieldDiv = fieldDiv;
    this.fieldJson = fieldJson;
    this.decorate();
  }

  decorate() {
    this.fieldDiv.classList.add('credit-card-info-component-wrapper');

    const image = this.fieldDiv.querySelector('img');
    if (image) {
      image.classList.add('credit-card-image');
    }

    const cardFeesTitle = this.fieldDiv.querySelector('.card-fees-title');
    if (cardFeesTitle) {
      cardFeesTitle.classList.add('card-fees-title');
    }

    const cardFeesDetails = this.fieldDiv.querySelector('.card-fees-details');
    if (cardFeesDetails) {
      cardFeesDetails.classList.add('card-fees-details');
    }

    const link = this.fieldDiv.querySelector('.link');
    if (link) {
      link.classList.add('link');
    }
  }
}

export default async function decorate(fieldDiv, fieldJson) {
  const component = new CreditCardInfoComponent(fieldDiv, fieldJson);
  return component.fieldDiv;
}
