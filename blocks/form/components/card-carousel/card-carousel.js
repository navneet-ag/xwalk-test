export default async function decorate(fieldDiv, fieldJson) {
  console.log('Card Carousel DIV: ', fieldDiv);
  console.log('Card Carousel JSON: ', fieldJson);

  const cards = fieldJson.cards || [];
  const carouselWrapper = document.createElement('div');
  carouselWrapper.className = 'card-carousel-wrapper';

  cards.forEach((card) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const img = document.createElement('img');
    img.src = card.image;
    cardDiv.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const title = document.createElement('h3');
    title.innerText = card.name;
    cardContent.appendChild(title);

    const description = document.createElement('p');
    description.innerText = card.description;
    cardContent.appendChild(description);

    const benefitsList = document.createElement('ul');
    benefitsList.className = 'benefits';
    card.benefits.forEach((benefit) => {
      const benefitItem = document.createElement('li');
      benefitItem.innerText = benefit;
      benefitsList.appendChild(benefitItem);
    });
    cardContent.appendChild(benefitsList);

    const cta = document.createElement('a');
    cta.className = 'cta';
    cta.href = card.ctaLink;
    cta.innerText = 'Get This Card';
    cardContent.appendChild(cta);

    cardDiv.appendChild(cardContent);
    carouselWrapper.appendChild(cardDiv);
  });

  const navigationDots = document.createElement('div');
  navigationDots.className = 'navigation-dots';
  cards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.dataset.index = index;
    navigationDots.appendChild(dot);
  });
  carouselWrapper.appendChild(navigationDots);

  const nextArrow = document.createElement('button');
  nextArrow.className = 'next-arrow';
  nextArrow.innerText = '>';
  nextArrow.addEventListener('click', () => {
    // Logic to navigate to the next slide
  });
  carouselWrapper.appendChild(nextArrow);

  fieldDiv.appendChild(carouselWrapper);
  return fieldDiv;
}
