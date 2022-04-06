const root = document.querySelector(":root");
const colorSchemeBtn = document.querySelector(`.upper-header button[type="button"]`);

colorSchemeBtn.addEventListener("click", () => {
  root.classList.toggle("night-mode")
})