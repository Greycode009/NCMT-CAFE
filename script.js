window.addEventListener("load", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  handleScroll(); // run immediately
  window.addEventListener("scroll", handleScroll);
});

const currentPath =
  window.location.pathname.split("/").pop().toLowerCase() || "index.html";

document.querySelectorAll(".nav-link").forEach((link) => {
  link.classList.remove("active");

  const linkPath = link.getAttribute("href").split("/").pop().toLowerCase();

  if (linkPath === currentPath) {
    link.classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (typeof bootstrap === "undefined") {
    console.error("Bootstrap is not loaded");
    return;
  }

  const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');

  popovers.forEach((el) => {
    new bootstrap.Popover(el);
  });
});
