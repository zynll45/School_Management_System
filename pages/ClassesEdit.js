

const buttons = document.querySelectorAll(".ClassesCartButtons");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
    const classBodyDiv = button.closest(".classBodyDiv");
        const titleElement = classBodyDiv.querySelector("h2");
        const classTitle = titleElement.textContent.trim();
        
        console.log("Clicked button in class:", classTitle);
     
      // createContent(button.textContent);
    });
  });
