import { elementCreator } from "./pageLoad.js";
import lasagna from "./lasagna.jpg";

function homeLoad() {
  const divContent = document.querySelector("#content");
  divContent.innerHTML = "";
  divContent.appendChild(
    elementCreator("h1", "Welcome to pasteria, home of lasagnas!"),
  );
  divContent.appendChild(elementCreator("img", lasagna));
  divContent.appendChild(
    elementCreator(
      "p",
      "The place where you can enjoy a lasagna that feels like home, made with the freshest ingredients and cooked by the best of the best, from the home of lasagnas",
    ),
  );
}

export { homeLoad };
