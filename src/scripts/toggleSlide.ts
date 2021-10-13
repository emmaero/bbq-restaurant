export function toggleSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  toggleClasses(nav, burger);

    navLinks.forEach((link, index) => {
      // @ts-ignore
        if (link.style.animation) {
          // @ts-ignore
          link.style.animation = "";
        } else {
          // @ts-ignore
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
    });
}
  // @ts-ignore
function toggleClasses(nav, burger) {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("cross");
}
