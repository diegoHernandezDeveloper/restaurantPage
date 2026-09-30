import "./style.css";
import img from "./background.png";

console.log("we are online in 8080!");

const divContent = document.querySelector("#content");
const background = document.createElement("img");

background.src = img;
background.style.width = "100%";

divContent.appendChild(background);
