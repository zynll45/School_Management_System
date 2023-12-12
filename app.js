// app.js
import { createNavbar } from "./function.js";
import { createFooter } from "./footer.js";
import { createContent,handleStudentButtonClick  } from "./pages/content.js";
import { createStudentTable } from "./pages/classes.js";

document.addEventListener("DOMContentLoaded", function () {
  createNavbar();
  createContent();
  createFooter();

  const buttons = document.querySelectorAll(".content-button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("object")
      createContent(button.textContent);
    });
  });
  localStorage.setItem("studentsStart",0);
  localStorage.setItem("studentsFinish",10)
});

