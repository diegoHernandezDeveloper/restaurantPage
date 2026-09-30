import { menuFactory } from "./pageLoad";
import lasagnaAllaBolognese from "./lasagnaBolognese.jpg";
import lasagnaBainca from "./lasagnaBianca.jpg";
import lasagnaDiCarnevale from "./lasagnaDiCarnevale.jpg";

function menusLoad() {
  const divContent = document.querySelector("#content");
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

export { menusLoad };
