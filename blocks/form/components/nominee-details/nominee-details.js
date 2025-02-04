class NomineeDetailsPanel {
  constructor(fieldDiv, fieldJson) {
    this.fieldDiv = fieldDiv;
    this.fieldJson = fieldJson;
    this.decorate();
  }

  decorate() {
    this.fieldDiv.classList.add('nominee-details-panel');

    const title = this.fieldDiv.querySelector('legend');
    title.classList.add('nominee-details-panel__title');
    title.innerText = 'Nominee Details';

    const plainText = this.fieldDiv.querySelector('.plain-text-wrapper p');
    plainText.classList.add('nominee-details-panel__plain-text');
    plainText.innerText = 'Do you want to add a Nominee? You can add up to 4 nominees';

    const radioGroup = this.fieldDiv.querySelector('.radio-group-wrapper');
    radioGroup.classList.add('nominee-details-panel__radio-group');

    const subPanel = this.fieldDiv.querySelector('.panel-wrapper:nth-of-type(2)');
    subPanel.classList.add('nominee-details-panel__sub-panel');

    const checkboxWrapper = subPanel.querySelector('.checkbox-wrapper');
    checkboxWrapper.classList.add('nominee-details-panel__checkbox');
    const checkboxLabel = checkboxWrapper.querySelector('label');
    checkboxLabel.innerText = this.fieldJson.nominee;

    const editButtonWrapper = subPanel.querySelector('.button-wrapper');
    const editButton = editButtonWrapper.querySelector('button');
    editButton.classList.add('nominee-details-panel__edit-button');

    const addButtonWrapper = this.fieldDiv.querySelector('.button-wrapper:nth-of-type(2)');
    const addButton = addButtonWrapper.querySelector('button');
    addButton.classList.add('nominee-details-panel__add-button');
  }
}

export default async function decorate(fieldDiv, fieldJson) {
  const nomineeDetailsPanel = new NomineeDetailsPanel(fieldDiv, fieldJson);
  return nomineeDetailsPanel.fieldDiv;
}
