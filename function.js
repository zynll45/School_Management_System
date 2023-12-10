// functions.js
export function createNavbar() {
  const navbarDiv = document.getElementById("navbar");
  navbarDiv.innerHTML = `
    <div class="navbar">
    <div>ABC SCHOOL</div>
    <div class="navButtons">
      <button class="content-button">Home</button>
      <button class="content-button">Classes</button>
      <button class="content-button">Students</button>
      <button class="content-button">Teachers</button>
      </div>
    <div><span class="material-symbols-outlined">
account_circle
</span></div>
      
    </div>
  `;
}



