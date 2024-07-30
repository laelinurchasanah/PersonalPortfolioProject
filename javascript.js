// Scroll bar
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 130);
});
// End of scroll bar
const navLinkEls = document.querySelectorAll(".nav_link");

navLinkEls.forEach((navLinkEl) => {
  navLinkEl.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    navLinkEl.classList.add("active");
  });
});
// Active class

// End Of Active class

// Responsive Menu Navbar
let menu = document.querySelector("#menu-icon");
let menulist = document.querySelector(".menulist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  menulist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  menulist.classList.remove("open");
};

// End of responsive menu navbar
