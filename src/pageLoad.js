function elementCreator(element, value) {
  const elementVariable = document.createElement(`${element}`);
  element == "img"
    ? (elementVariable.src = value)
    : (elementVariable.innerText = value);
  return elementVariable;
}

function menuFactory(header, img, paragraph) {
  let div = elementCreator("div", "");
  div.appendChild(elementCreator(`h2`, header));
  div.appendChild(elementCreator("img", img));
  div.appendChild(elementCreator(`p`, paragraph));
  return div;
}

export { elementCreator, menuFactory };

//step seven to go
