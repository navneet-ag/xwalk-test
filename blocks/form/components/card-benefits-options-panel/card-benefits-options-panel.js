class CardBenefitsOptionsPanel {
  constructor(fieldDiv, fieldJson) {
    this.fieldDiv = fieldDiv;
    this.fieldJson = fieldJson;
    this.decorate();
  }

  decorate() {
    const { template: { panels } } = this.fieldJson;
    panels.forEach((panel) => {
      const panelDiv = document.createElement('div');
      panelDiv.classList.add('panel-wrapper');

      const panelContent = document.createElement('div');
      panelContent.classList.add('panel-content');

      const img = document.createElement('img');
      img.src = panel.image.editable ? 'editable-image-placeholder.png' : panel.image;
      panelContent.appendChild(img);

      const text = document.createElement('div');
      text.classList.add('text');
      text.textContent = panel.text;
      panelContent.appendChild(text);

      panelDiv.appendChild(panelContent);
      this.fieldDiv.appendChild(panelDiv);
    });
  }
}

export default async function decorate(fieldDiv, fieldJson) {
  const cardBenefitsOptionsPanel = new CardBenefitsOptionsPanel(fieldDiv, fieldJson);
  return cardBenefitsOptionsPanel.fieldDiv;
}
