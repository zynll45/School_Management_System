import { data } from "../data/ClassesData.js";
import { students } from "../data/StudentsData.js";

export function createClasses() {
  const contentDiv = document.getElementById("content");

  const classBodyDivs = data.map(
    (data1) => `
    <div class="classBodyDiv">
      <div class="CartButtonsDiv row">
        <button class="ClassesCartButtons">
          <span class="material-symbols-outlined Button">delete</span>
        </button>
        <button class="ClassesCartButtons">
          <span class="material-symbols-outlined Button">edit_square</span>
        </button>        
      </div>
      <div class="calssesImgDiv"><img class="classImg" src=${data1.url}></div>
      <h2>${data1.name}</h2>
      <p>${data1.teacher}</p>
      <p>${data1.description}</p>
      <div class="classButtonDiv">
        <button class="classButon" data-class-id="${data1.id}"  onclick="deneme(${data1.id})">Students</button>
        <button class="classButon">Teachers</button>
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
      <div class="classesTable">     
      </div>
    </div>
  `;
}

export function createStudentTable(classId) {
  const classesTable = document.querySelector(".classesTable");
  const filteredStudents = students.filter(
    (student) => student.classesId == classId
  );

  let tableContent = `
    <div class="tableDiv">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Teacher</th>
            <th scope="col">Avarage Not</th>
          </tr>
        </thead>
        <tbody>
  `;

  filteredStudents.forEach((student, index) => {
    tableContent += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${student.name}</td>
        <td>${student.teacher}</td>
        <td>${student.AvarageNumber}</td>
      </tr>
    `;
  });

  tableContent += `
        </tbody>
      </table>
    </div>
    <button class="classes-button" onclick="closeStudents()">Close</button>
  `;

  classesTable.innerHTML = tableContent;
}

// export function handleStudentButtonClick(classId) {
//   // Öğrenciler butonuna tıklandığında yapılacak işlemleri buraya ekleyin
//   console.log(`Öğrenciler butonuna tıklandı! Sınıf ID: ${classId}`);
// }
window.deneme = function (clasId) {
  createStudentTable(clasId);
  console.log("Deneme fonksiyonu çalıştı!" + { clasId });
};

window.closeStudents = function () {
  const classesTable = document.querySelector(".classesTable");
  classesTable.innerHTML = ``;
};
