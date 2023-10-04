const burger = document.querySelector(".barrasBurguer");
const links = document.querySelector(".linksContainer");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  links.classList.toggle("active");
});
