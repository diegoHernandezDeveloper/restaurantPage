import "./style.css";
import lasagna from "./lasagna.jpg";
import lasagnaAllaBolognese from "./lasagnaBolognese.jpg";
import lasagnaBainca from "./lasagnaBianca.jpg";
import lasagnaDiCarnevale from "./lasagnaDiCarnevale.jpg";
import about from "./about.jpeg";
import { elementCreator, menuFactory } from "./pageLoad.js";

const divContent = document.querySelector("#content");
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

homeBtn.addEventListener("click", homeLoad);
menuBtn.addEventListener(`click`, menusLoad);
aboutBtn.addEventListener("click", aboutLoad);

function homeLoad() {
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

function menusLoad() {
  console.log(`hello`);
  divContent.innerHTML = "";
  divContent.appendChild(
    menuFactory(
      `Lasagna Bainca`,
      lasagnaBainca,
      `Features a creamy cheese sauce (like alfredo or ricotta/bechamel blend) instead of red tomato sauce, often mixed with garlic, chicken, or spinach.`,
    ),
  );
  divContent.appendChild(
    menuFactory(
      `Lasagna Di Carnevale`,
      lasagnaDiCarnevale,
      `A festive Southern Italian version from Naples packed with tiny meatballs, local sausage, ricotta, mozzarella, fried eggplant, and sometimes hard-boiled eggs`,
    ),
  );
  divContent.appendChild(
    menuFactory(
      `Lasagna alla Bolognese`,
      lasagnaAllaBolognese,
      `Originates from Emilia-Romagna. It uses thin sheets of egg pasta (sometimes green from spinach) layered with a slow-cooked ragù of mixed meats (beef, pork, or veal), creamy béchamel sauce, and Parmigiano-Reggiano cheese, without mozzarella`,
    ),
  );
}

function aboutLoad() {
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

homeLoad();

//step seven to go
