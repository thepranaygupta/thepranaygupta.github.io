let navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//  MENU SHOW
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//  MENU HIDDEN
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//  REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SKILLS
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }

  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}

skillsHeader.forEach((e) => {
  e.addEventListener("click", toggleSkills);
});

//  QUALIFICATION TABS
// const tabs = document.querySelectorAll("[data-target]"),
//   tabContents = document.querySelectorAll("[data-content]");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     const target = document.querySelector(tab.dataset.target);

//     tabContents.forEach((tabContent) => {
//       tabContent.classList.remove("qualification_active");
//     });
//     target.classList.add("qualificaion_active");

//     tabs.forEach((tab) => {
//       tab.classList.remove("qualification_active");
//     });
//     tab.classList.add("qualification_active");
//   });
// });

let education = document.getElementById("education");
let work = document.getElementById("work");
let educationheader = document.getElementById("educationheader");
let workheader = document.getElementById("workheader");
workheader.style.color = "var(--first-colour)";

educationheader.addEventListener("click", () => {
  let condition1 = work.classList.contains("qualification-inactive");
  if (!condition1) {
    education.classList.remove("qualification-inactive");
    work.classList.add("qualification-inactive");
    workheader.style.color = "var(--text-colour)";
    educationheader.style.color = "var(--first-colour)";
  }
});
workheader.addEventListener("click", () => {
  let condition2 = education.classList.contains("qualification-inactive");
  if (!condition2) {
    work.classList.remove("qualification-inactive");
    education.classList.add("qualification-inactive");
    educationheader.style.color = "var(--text-colour)";
    workheader.style.color = "var(--first-colour)";
  }
});

//  PORTFOLIO SWIPER
let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

//  TESTIMONIAL

//  SCROLL SECTIONS ACTIVE LINK

//  CHANGE BACKGROUND HEADER

//  SHOW SCROLL UP

//  DARK LIGHT THEME
