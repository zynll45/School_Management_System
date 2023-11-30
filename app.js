// app.js
import { createNavbar } from "./function.js";
import { createFooter } from "./footer.js";
import { createContent } from "./content.js";
document.addEventListener("DOMContentLoaded", function () {
  createNavbar();
  createContent();
  createFooter();

  const buttons = document.querySelectorAll(".content-button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      createContent(button.textContent);
    });
  });
});


