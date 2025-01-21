export default async function decorate(fieldDiv, fieldJson) {
  console.log('CARD CAROUSEL DIV: ', fieldDiv);
  console.log('CARD CAROUSEL JSON: ', fieldJson);
  const cards = fieldJson.cards || [];
  const wrapper = document.createElement('div');
  wrapper.className = 'card-carousel-wrapper';
  cards.forEach((card) => {
    const cardItem = document.createElement('div');
    cardItem.className = 'card-item';
    cardItem.innerHTML = `
      <img src="${card.image}" alt="${card.title}">
      <div class="title">${card.title}</div>
      <div class="subtitle">${card.subtitle}</div>
      <ul class="features">
        ${card.features.map((feature) => `<li>${feature}</li>`).join('')}
      </ul>
      <div class="fd-amount">Minimum FD Amount: ${card.fdAmount}</div>
      <a href="#" class="cta-button">Get This Card</a>
    `;
    wrapper.appendChild(cardItem);
  });
  fieldDiv.appendChild(wrapper);
  return fieldDiv;
}
