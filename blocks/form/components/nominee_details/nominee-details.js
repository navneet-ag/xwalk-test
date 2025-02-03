class NomineeDetailsComponent {
  constructor(fieldDiv, fieldJson) {
    this.fieldDiv = fieldDiv;
    this.fieldJson = fieldJson;
    this.decorate();
  }

  decorate() {
    this.fieldDiv.classList.add('nominee-details-panel');

    const mainText = this.fieldDiv.querySelector('.plain-text-wrapper p');
    if (mainText) {
      mainText.classList.add('main-text');
      mainText.innerText = 'Do you want to add a Nominee?';
    }

    const subText = document.createElement('p');
    subText.classList.add('subtext');
    subText.innerText = 'You can add up to 4 nominees';
    if (mainText) {
      mainText.parentNode.insertBefore(subText, mainText.nextSibling);
    }

    const radioGroup = this.fieldDiv.querySelector('.radio-group-wrapper');
    if (radioGroup) {
      radioGroup.classList.add('radio-group');
    }

    const checkBoxGroup = this.fieldDiv.querySelector('.checkbox-group-wrapper');
    if (checkBoxGroup) {
      const checkBoxLabel = checkBoxGroup.querySelector('label');
      if (checkBoxLabel) {
        checkBoxLabel.innerText = 'Sarika Kathrani';
      }

      const editButton = document.createElement('button');
      editButton.classList.add('edit-button');
      editButton.innerText = 'Edit';
      checkBoxGroup.appendChild(editButton);
    }

    const addNewNomineeButton = this.fieldDiv.querySelector('.button-wrapper button');
    if (addNewNomineeButton) {
      addNewNomineeButton.classList.add('add-new-nominee-button');
      addNewNomineeButton.innerText = 'Add New Nominee';
    }
  }
}

export default async function decorate(fieldDiv, fieldJson) {
  const nomineeDetailsComponent = new NomineeDetailsComponent(fieldDiv, fieldJson);
  return nomineeDetailsComponent.fieldDiv;
}
