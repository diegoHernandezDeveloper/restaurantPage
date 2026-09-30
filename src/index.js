import "./style.css";
import { homeLoad } from "./home.js";
import { menusLoad } from "./menus.js";
import { aboutLoad } from "./about.js";

const divContent = document.querySelector("#content");
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

homeBtn.addEventListener("click", homeLoad);
menuBtn.addEventListener(`click`, menusLoad);
aboutBtn.addEventListener("click", aboutLoad);

homeLoad();

//step seven to go
