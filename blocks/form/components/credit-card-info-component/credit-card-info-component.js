class CardComponent {
  constructor(fieldDiv, fieldJson) {
    this.fieldDiv = fieldDiv;
    this.fieldJson = fieldJson;
    this.decorate();
  }

  decorate() {
    this.fieldDiv.classList.add('card-component-wrapper');
    const image = this.fieldDiv.querySelector('img');
    const textElements = this.fieldDiv.querySelectorAll('.plain-text-wrapper');
    const titleText = textElements[0];
    const bodyText = textElements[1];

    const linkButton = this.fieldDiv.querySelector('.button-wrapper');
    const separator = document.createElement('div');
    separator.classList.add('separator');

    if (image) {
      image.classList.add('card-image');
    }
    if (titleText) {
      titleText.classList.add('title-text');
      titleText.classList.add('text-padding');
    }
    if (bodyText) {
      bodyText.classList.add('body-text');
      bodyText.classList.add('text-padding');
    }
    if (linkButton) {
      linkButton.classList.add('text-padding');
      linkButton.parentNode.insertBefore(separator, linkButton);
    }
  }
}

export default async function decorate(cardDiv, fieldJson) {
  const cardComponent = new CardComponent(cardDiv, fieldJson);
  return cardComponent.fieldDiv;
}
