class CardComponent {
  constructor(fieldDiv, fieldJson) {
    this.fieldDiv = fieldDiv;
    this.fieldJson = fieldJson;
    this.decorate();
  }

  decorate() {
    const image = this.fieldDiv.querySelector('img');
    const titleText = this.fieldDiv.querySelector('.title-text');
    const bodyText = this.fieldDiv.querySelector('.body-text');
    const linkText = this.fieldDiv.querySelector('.link-text');
    const separator = document.createElement('div');
    separator.classList.add('separator');

    if (image) {
      image.classList.add('card-image');
    }
    if (titleText) {
      titleText.classList.add('text-padding');
    }
    if (bodyText) {
      bodyText.classList.add('text-padding');
    }
    if (linkText) {
      linkText.classList.add('text-padding');
      linkText.parentNode.insertBefore(separator, linkText);
    }
  }
}

export default async function decorate(cardDiv, fieldJson) {
  const cardComponent = new CardComponent(cardDiv, fieldJson);
  return cardComponent.fieldDiv;
}
