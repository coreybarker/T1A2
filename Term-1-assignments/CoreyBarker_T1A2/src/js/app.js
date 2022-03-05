const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  // collect all dark-enabled Elements
  const darkElements = document.getElementsByClassName("dark-enabled");

  // collect all dark-text-enabled ELements
  const darkTextElements = document.getElementsByClassName("dark-text-enabled");

  // For each dark-enabled element, toggle "dark" class
  Array.from(darkElements).forEach((darkElement) => {
    darkElement.classList.toggle("dark");
  });

  // For each dark-text-enabled element, toggle "dark-text" class
  Array.from(darkTextElements).forEach((darkTextElement) => {
    darkTextElement.classList.toggle("dark-text");
  });
});
