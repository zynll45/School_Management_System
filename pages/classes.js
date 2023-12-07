import { data } from "../data/ClassesData.js";

export function createClasses() {
  const contentDiv = document.getElementById("content");
  console.log(data);

  const classBodyDivs = data.map(
    (data1) => `
    <div  class="classBodyDiv">
      <div class="CartButtonsDiv">
        <button class="ClassesCartButtons">
          <span class="material-symbols-outlined Button">delete</span>
        </button>
        <button class="ClassesCartButtons">
          <span class="material-symbols-outlined Button">edit_square</span>
        </button>
      </div>
      <h2>${data1.name}</h2>
      <p>${data1.teacher}</p>
      <p>${data1.description}</p>
      <div class="classButton">
        <button>Students</button>
        <button>Teachers</button>
      </div>
    </div>
  `
  );

  contentDiv.innerHTML = `
    <div class="classes">
      <div class="clasTitle"><h2>Classes</h2></div>
      <div class="classBody">
        ${classBodyDivs.join("")}
      </div>
    </div>
  `;
}
