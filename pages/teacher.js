import { teachers } from "../data/TeachersData.js";

export function createTeacherPage() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = `
    <div class="teachersClasses">
      <div class="clasTitle">
        <h2 class ="Teacherstitle">Teachers</h2class>
      </div>
      <div class="row teacherclassBody">
        ${teachers.map((teacher, index) => createTeacherCard(teacher, index)).join("")}
      </div>
      <div class="newTeacherButtonDiv">
        <button class="newTeacherButton" >+</button>                 
        </div>
        <div class="newTeacherButtonDiv">         
        <p class="addNewTeacherP"><b>Add New Teachers</b></p>             
        </div>
    </div>
  `;
}

function createTeacherCard(teacher, index) {
  return `
    <div class="col-lg-4 col-md-6 col-sm-12 teacherCard">
      <div class="teacherclassBodyDiv">
      <div class="imgDiv">
        <img class="teacherImg" src="${teacher.url}" alt="${teacher.name}" />
        </div>
         <h2>${teacher.name}</h2>
        <p>${teacher.description}</p>
        <p><b>Class : </b>${teacher.classesName}</p>
        <div class="teacherButton">
        <button class="teacherContactButon">Contact</button>       
        </div>
        
        </div>
    </div>
  `;
}
