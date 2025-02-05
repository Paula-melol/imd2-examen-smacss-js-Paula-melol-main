var header = document.querySelector(".l-header");
function changeColor() {
  header.classList.add("is-yellow");
}

header.addEventListener("click", changeColor);

var flavors = document.querySelector(".color-onions");
function colorOnions() {
  flavors.classList.add("is-pink");
}

header.addEventListener("click", colorOnions);
