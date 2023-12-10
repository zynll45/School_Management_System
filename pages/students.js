import { students } from "../data/StudentsData.js";


const getStudents =(start,finish)=>{
  console.log("calisti")
  let filterStudent =students.slice(start, finish)
  localStorage.setItem("studentsStart",start);
  localStorage.setItem("studentsFinish",finish)
  return filterStudent;
  }
  
const student = getStudents(0,100)


export function createStudentPage(){



  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = `
  <div class="classes ">
  <div class="classesTable"> 
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
       </div>
      </div>
`;
let tableContent = `
    <div class="tableDiv">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Teacher</th>
            <th scope="col">Avarage Not</th>
            <th scope="col">Classes</th>
            <th scope="col">Process</th>
          </tr>
        </thead>
        <tbody>
  `;
  student.forEach((student, index) => {
  tableContent += `
    <tr>
      <th scope="row">${index + 1}</th>
      <td>${student.name}</td>
      <td>${student.teacher}</td>
      <td>${student.AvarageNumber}</td>
      <td>${student.classesName}</td>
      <td> <button class="ClassesCartButtons">
      <span class="material-symbols-outlined Button">delete</span>
    </button>
    <button class="ClassesCartButtons">
      <span class="material-symbols-outlined Button">edit_square</span>
    </button></td>
    </tr>
  `;
});

tableContent += `
      </tbody>
    </table>
    <div class="studentPageButtonsDiv">
    <button class="studentPageButtons" onclick="prev()"><span class="material-symbols-outlined">
    arrow_back_ios
    </span></button>
    <button class="studentPageButtons" onclick="next()"><span class="material-symbols-outlined">
    arrow_forward_ios
    </span></button>
    </div>
  </div>  
`;
const classesTable = document.querySelector(".classesTable");
classesTable.innerHTML = tableContent;
}

window.prev = function(){
let prev =localStorage.getItem(studentsStart);
let next =localStorage.getItem(studentsFinish);
getStudents(prev-5,next-5)
}
 
window.next= function(){
  let prev =localStorage.getItem(studentsStart);
  let next =localStorage.getItem(studentsFinish);
  getStudents(prev+5,next+5)
  }
 
