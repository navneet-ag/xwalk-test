class BenefitsPanel {
  constructor(fieldDiv, fieldJson) {
    this.fieldDiv = fieldDiv;
    this.fieldJson = fieldJson;
    this.decorate();
  }

  decorate() {
    const title = this.fieldDiv.querySelector('.field-label');
    title.classList.add('benefits-panel__title');

    const benefitItems = this.fieldDiv.querySelectorAll('.benefit-item');
    benefitItems.forEach((item) => {
      item.classList.add('benefits-panel__item');
      const icon = item.querySelector('.icon');
      icon.classList.add('benefits-panel__icon');
      const description = item.querySelector('.description');
      description.classList.add('benefits-panel__description');
    });
  }
}

export default async function decorate(fieldDiv, fieldJson) {
  const panel = new BenefitsPanel(fieldDiv, fieldJson);
  return panel.fieldDiv;
}
