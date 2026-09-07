const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const body = document.body;

function toggleMobileMenu() {
  const isOpen = hamburger.classList.toggle("active");

  mobileMenu.classList.toggle("active", isOpen);

  hamburger.setAttribute("aria-expanded", isOpen);

  hamburger.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );

  body.classList.toggle("menu-open", isOpen);
}

hamburger.addEventListener("click", toggleMobileMenu);

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");

    mobileMenu.classList.remove("active");

    hamburger.setAttribute("aria-expanded", "false");

    hamburger.setAttribute("aria-label", "Open navigation menu");

    body.classList.remove("menu-open");
  });
});

document.addEventListener("click", (event) => {
  const clickedInsideMenu = mobileMenu.contains(event.target);

  const clickedHamburger = hamburger.contains(event.target);

  if (
    mobileMenu.classList.contains("active") &&
    !clickedInsideMenu &&
    !clickedHamburger
  ) {
    hamburger.classList.remove("active");

    mobileMenu.classList.remove("active");

    hamburger.setAttribute("aria-expanded", "false");

    hamburger.setAttribute("aria-label", "Open navigation menu");

    body.classList.remove("menu-open");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    hamburger.classList.remove("active");

    mobileMenu.classList.remove("active");

    hamburger.setAttribute("aria-expanded", "false");

    hamburger.setAttribute("aria-label", "Open navigation menu");

    body.classList.remove("menu-open");
  }
});
