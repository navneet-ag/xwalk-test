export default async function decorate(fieldDiv, fieldJson) {
  // const image = document.createElement('img');
  // image.src = fieldJson.image.value;
  // fieldDiv.appendChild(image);

  // const title = document.createElement('div');
  // title.className = 'title';
  // title.textContent = fieldJson.title.value;
  // fieldDiv.appendChild(title);

  // const description = document.createElement('div');
  // description.className = 'description';
  // description.textContent = fieldJson.description.value;
  // fieldDiv.appendChild(description);
  console.log('fieldJson', fieldJson);

  const separator = document.createElement('div');
  separator.className = 'separator';
  fieldDiv.appendChild(separator);

  // const link = document.createElement('a');
  // link.className = 'link';
  // link.href = fieldJson.link.link;
  // link.textContent = fieldJson.link.value;
  // fieldDiv.appendChild(link);

  return fieldDiv;
}
