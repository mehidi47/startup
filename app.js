let links = document.querySelector(".links");
let mnu = document.querySelector(".uil-align-center-alt");
function menu() {
  links.classList.toggle("active");
  mnu.classList.toggle("uil-multiply");
}
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
AOS.init();
