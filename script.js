function changeText() {
    const textElement = document.getElementById("info-text");
    textElement.textContent = "The text has been updated!";
  }
  
  function changeStyle() {
    const heading = document.getElementById("main-heading");
    heading.style.color = "tomato";
    heading.style.fontSize = "2.5rem";
    heading.style.fontFamily = "Arial, sans-serif";
  }
  
  function addElement() {
    const container = document.getElementById("dynamic-container");
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph.";
    newParagraph.id = "new-paragraph";
    container.appendChild(newParagraph);
  }
  
  function removeElement() {
    const paragraph = document.getElementById("new-paragraph");
    if (paragraph) {
      paragraph.remove();
    }
  }
    