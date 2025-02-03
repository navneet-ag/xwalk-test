class CardBenefitsPanel {
  constructor(fieldDiv, fieldJson) {
    this.fieldDiv = fieldDiv;
    this.fieldJson = fieldJson;
    this.decorate();
  }

  static async fetchBenefits() {
    try {
      const response = await fetch('/hdfc/card/benefits');
      if (response.ok) {
        return await response.json();
      }
      throw new Error('Failed to fetch benefits');
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async decorate() {
    this.fieldDiv.classList.add('card-benefits-panel');

    const title = this.fieldDiv.querySelector('.title');
    if (title) {
      title.textContent = 'Your Moneyback+ Credit Card at a glance!';
    }

    const benefitsGrid = this.fieldDiv.querySelector('.benefits-grid');
    if (benefitsGrid) {
      const benefits = await this.fetchBenefits();
      benefits.forEach((benefit) => {
        const card = document.createElement('div');
        card.classList.add('benefit-card');

        const icon = document.createElement('div');
        icon.classList.add('icon');
        // Assuming benefit.icon contains the URL to the icon image
        const img = document.createElement('img');
        img.src = benefit.icon;
        icon.appendChild(img);

        const description = document.createElement('div');
        description.classList.add('description');
        description.textContent = benefit.description;

        card.appendChild(icon);
        card.appendChild(description);
        benefitsGrid.appendChild(card);
      });
    }

    const viewAllLink = this.fieldDiv.querySelector('.view-all-link');
    if (viewAllLink) {
      viewAllLink.textContent = 'View All Features & Benefits';
    }
  }
}

export default async function decorate(fieldDiv, fieldJson) {
  const panel = new CardBenefitsPanel(fieldDiv, fieldJson);
  return panel.fieldDiv;
}
