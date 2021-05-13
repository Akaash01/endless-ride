const navslide = () => {
  const lines = document.querySelector(".lines");
  const nav = document.querySelector(".nav-links");
  const navlinks = document.querySelectorAll(".nav-links li");
  lines.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navlinks.forEach((link, index) => {
      link.style.animation = `navlinkfade 0.5s ease forwards ${
        index / 7 + 0.2
      }s`;
    });
    lines.classList.toggle("toggle");
  });
};

navslide();
