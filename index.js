var btn = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");
btn.addEventListener("click", () => {
  btn.classList.toggle("change");
});
btn.addEventListener("click", () => {
  menu.classList.toggle("open");
});
