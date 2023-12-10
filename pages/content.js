import { createClasses } from "./classes.js";
import { createStudentPage } from "./students.js";
import { createTeacherPage } from "./teacher.js";

export function createContent(buttonName) {
  const contentDiv = document.getElementById("content");

  if (buttonName == "Home") {
    createDefaultContent();
    
  } else if (buttonName == "Classes") {
    createClasses();
    //  contentDiv.innerHTML = `
    //   <div class="content">
    //     <div>${buttonName} - Content 1</div>

    //   </div>
    // `;
  } else if (buttonName == "Students") {
    createStudentPage();
    //   contentDiv.innerHTML = `
    //   <div class="content">
    //     <div>${buttonName} - Content 1</div>

    //   </div>
    // `;
  } else if (buttonName == "Teachers") {
    createTeacherPage();
  } else {
    createDefaultContent();
  }
}

function createDefaultContent() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = `
  <div class="content">
  <div>
  <h2>Welcome User</h2>
  <div class="homePage">
  <div>
  <p>22</p>
  <p>number of students</p>
  </div>
  <div>
  <p>3</p>
  <p>number of teachers</p>
  </div>
  <div>
  <p>5</p>
  <p>number of classes</p>
  </div>
  </div>
  
  
  </div>

  
 
  </div>`;
}

// pages/content.js
export function handleStudentButtonClick(classId) {
  // Öğrenciler butonuna tıklandığında yapılacak işlemleri buraya ekleyin
  console.log(`Öğrenciler butonuna tıklandı! Sınıf ID: ${classId}`);
}
