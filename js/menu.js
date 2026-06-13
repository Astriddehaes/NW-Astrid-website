const buttons = document.querySelectorAll(".menu-button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const submenu = button.nextElementSibling;
    submenu.classList.toggle("active");

    if (button.textContent.includes("+")) {
      button.textContent = button.textContent.replace("+", "–");
    } else {
      button.textContent = button.textContent.replace("–", "+");
    }
  });
});
