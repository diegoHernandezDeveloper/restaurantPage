import { elementCreator } from "./pageLoad";
import about from "./about.jpeg";

function aboutLoad() {
  const divContent = document.querySelector("#content");
  divContent.innerHTML = "";
  divContent.appendChild(elementCreator("h1", "We are a family business"));
  divContent.appendChild(elementCreator("img", about));
  divContent.appendChild(
    elementCreator(
      "p",
      "The only thing that we love more that lasagna, is to share what we love with the world, come by and become one more of this big and special family",
    ),
  );
}

export { aboutLoad };
