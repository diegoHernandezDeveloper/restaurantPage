import "./style.css";
import lasagna from "./lasagna.jpg";
import { h1Factory, paragraphFactory, imageFactory } from "./pageLoad.js";

const divContent = document.querySelector("#content");
const paragraph =
  "The place where you can enjoy a lasagna that feels like home, made with the freshest ingredients and cooked by the best of the best, from the home of lasagnas";

divContent.appendChild(h1Factory("Welcome to pasteria, home of lasagnas!"));
divContent.appendChild(imageFactory(lasagna, `900px`));
divContent.appendChild(paragraphFactory(paragraph));

//step seven to go
