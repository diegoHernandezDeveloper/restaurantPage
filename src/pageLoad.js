function h1Factory(text) {
  const h1 = document.createElement("h1");
  h1.innerText = text;
  return h1;
}
function paragraphFactory(text) {
  const p = document.createElement("p");
  p.innerText = text;
  return p;
}
function imageFactory(src) {
  const img = document.createElement("img");
  img.src = src;

  return img;
}

export { h1Factory, paragraphFactory, imageFactory };

//step seven to go
