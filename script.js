"use strict";

const bodyEl = document.body;
const openCloseBtn = document
  .querySelector(".closeOpen-div")
  .addEventListener("click", function () {
    bodyEl.classList.toggle("toggle");
  });

const links = document.querySelectorAll("a:link");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      bodyEl.classList.remove("toggle");
    }

    if (href !== "#" && href.startsWith("#")) {
      const selectedEl = document.querySelector(href);
      selectedEl.scrollIntoView({ behavior: "smooth" });
      bodyEl.classList.remove("toggle");
    }
  });
});

// STICKY NAVIGATION

const sectionEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      bodyEl.classList.add("sticky");
    } else {
      bodyEl.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-70px",
  },
);

obs.observe(sectionEl);
