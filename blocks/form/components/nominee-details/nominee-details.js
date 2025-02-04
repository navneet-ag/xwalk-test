class NomineeDetails {
  constructor(fieldDiv, fieldJson) {
    this.fieldDiv = fieldDiv;
    this.fieldJson = fieldJson;
    this.decorate();
  }

  decorate() {
    this.fieldDiv.classList.add('nominee-details-panel');

    const header = this.fieldDiv.querySelector('legend');
    if (header) {
      header.classList.add('nominee-details-panel__header');
    }

    const plainTextWrapper = this.fieldDiv.querySelector('.plain-text-wrapper');
    if (plainTextWrapper) {
      plainTextWrapper.classList.add('nominee-details-panel__plain-text');
      const p = plainTextWrapper.querySelector('p');
      if (p) {
        p.innerText = 'Do you want to add a Nominee?';
      }
      const description = document.createElement('p');
      description.classList.add('nominee-details-panel__plain-text-description');
      description.innerText = 'You can add up to 4 nominees';
      plainTextWrapper.appendChild(description);
    }

    const radioGroupWrapper = this.fieldDiv.querySelector('.radio-group-wrapper');
    if (radioGroupWrapper) {
      radioGroupWrapper.classList.add('nominee-details-panel__radio-group');
      const radioButtons = radioGroupWrapper.querySelectorAll('input[type="radio"]');
      radioButtons.forEach((radio, index) => {
        if (index === 0) {
          radio.checked = true;
        }
      });
    }

    const innerPanel = this.fieldDiv.querySelector('.panel-wrapper');
    if (innerPanel) {
      innerPanel.classList.add('nominee-details-panel__inner-panel');
    }

    const checkboxWrapper = this.fieldDiv.querySelector('.checkbox-wrapper');
    if (checkboxWrapper) {
      checkboxWrapper.classList.add('nominee-details-panel__checkbox');
      const label = checkboxWrapper.querySelector('label');
      if (label) {
        label.innerText = this.fieldJson.nominee;
      }
    }

    const editButtonWrapper = this.fieldDiv.querySelector('.button-wrapper[data-active="true"]');
    if (editButtonWrapper) {
      const editButton = editButtonWrapper.querySelector('button');
      if (editButton) {
        editButton.classList.add('nominee-details-panel__edit-button');
        editButton.innerText = 'Edit';
      }
    }

    const addButtonWrapper = this.fieldDiv.querySelector('.button-wrapper[data-active="true"]:last-child');
    if (addButtonWrapper) {
      const addButton = addButtonWrapper.querySelector('button');
      if (addButton) {
        addButton.classList.add('nominee-details-panel__add-button');
        addButton.innerText = 'Add New Nominee';
      }
    }
  }
}

export default async function decorate(fieldDiv, fieldJson) {
  const nomineeDetails = new NomineeDetails(fieldDiv, fieldJson);
  return nomineeDetails.fieldDiv;
}
