import { createClasses } from "./pages/classes.js";


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
    contentDiv.innerHTML = `
    <div class="content">
      <div>${buttonName} - Content 1</div>
    
    </div>
  `;
  } else if (buttonName == "Teachers") {
    contentDiv.innerHTML = `
    <div class="content">
      <div>${buttonName} - Content 1</div>
    
    </div>
  `;
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
