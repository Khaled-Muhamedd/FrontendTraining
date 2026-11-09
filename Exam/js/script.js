window.addEventListener("scroll", function () {
  let navbar = document.querySelector("#navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("nav-colored");
  } else {
    navbar.classList.remove("nav-colored");
  }
});
