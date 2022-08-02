// nav
const logo = document.querySelector("#logo");
const btnNavItems = document.querySelectorAll(".header__anchorNav");
const btnNav = document.querySelectorAll(".headerContainer__mobileNavBtn");
const nav = document.querySelector(".header__navContainer");
btnNav.forEach((el) => {
  el.addEventListener("click", toggleClassBtnNav);
});

logo.addEventListener("click", (el) => {
  el.preventDefault();
  scroll(el.target.closest("#logo"));
});

btnNavItems.forEach((el) => {
  el.addEventListener("click", (el) => {
    el.preventDefault();
    scroll(el.target.closest(".header__anchorNav"));
    toggleNav();
  });
});

function toggleClassBtnNav() {
  btnNav.forEach((el) => {
    el.classList.toggle("close");
  });
  toggleNav();
}

function toggleNav() {
  nav.classList.toggle("active");
}

function scroll(value) {
  const offset = document.querySelector(`#${value.dataset.section}`).offsetTop;
  window.scrollTo({
    top: offset - 100,
    left: 0,
    behavior: "smooth",
  });
}
