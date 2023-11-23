const toggler = document.querySelector(".toggler");
const togglerIcon = document.querySelector(".toggler i");
const closeAsideBtn = document.querySelector("aside button");
const navbar = document.querySelector("aside");
const navUl = document.querySelector("aside ul");

toggler.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

closeAsideBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

window.addEventListener("click", (e) => {
  if (e.target != navUl && e.target != toggler && e.target != togglerIcon) {
    if (navbar.classList.contains("open")) navbar.classList.remove("open");
  }
});

/*
    --> GSAP Animation
*/
gsap.registerPlugin(ScrollTrigger);

const introAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro",
    toggleActions: "play none none none",
  },
});

introAnimation
  .from(".intro .img", {
    x: -2000,
    opacity: 0,
    duration: 1,
  })
  .from(
    ".intro h1",
    {
      y: -400,
      opacity: 0,
      duration: 1,
    },
    "<"
  )
  .from(".intro p", {
    x: 600,
    opacity: 0,
    duration: 1,
    ease: "back(4)",
  })
  .from(".social-links", {
    y: 300,
    opacity: 0,
    duration: 0.5,
  });

gsap.from(".about .text", {
  x: 400,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about .text",
    start: "top 80%",
  },
  ease: "power1",
});
gsap.from(".about .img", {
  x: -600,
  opacity: 0,
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about .img",
    start: "top 80%",
  },
});

gsap.utils.toArray(".stat-box").forEach((box) => {
  gsap.from(box, {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse restart reverse",
    },
  });
});

gsap.utils.toArray(".job-box").forEach((box) => {
  gsap.from(box, {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse restart reverse",
    },
  });
});
gsap.utils.toArray(".country").forEach((box, index) => {
  gsap.from(box, {
    x: index < 3 ? 200 : -200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse restart reverse",
    },
  });
});

const hiringForm = gsap.timeline({
  scrollTrigger: {
    trigger: ".hiring-form",
    start: "top 80%",
    end: "bottom 20%",
  },
});

hiringForm
  .from(".hiring-form", {
    x: -400,
    opacity: 0,
    duration: 1,
  })
  .from(".hiring-form form", {
    opacity: 0,
    duration: 1,
  });

gsap.from(".importance .img-1", {
  top: -400,
  scrollTrigger: {
    trigger: ".importance .fi-1",
    start: "top 80%",
    scrub: 1,
  },
});
gsap.from(".importance .img-2", {
  bottom: -100,
  scrollTrigger: {
    trigger: ".importance .fi-1",
    start: "top 80%",
    scrub: 1,
  },
});

gsap.from(".employer .workForm", {
  opacity: 0,
  duration: 1,
  x: 500,
  scrollTrigger: {
    trigger: ".employer .workForm",
    start: "top 80%",
    end: "bottom 20%",
  },
});
gsap.from(".employer .imgCol", {
  opacity: 0,
  duration: 1,
  x: -500,
  scrollTrigger: {
    trigger: ".employer .workForm",
    start: "top 80%",
    end: "bottom 20%",
  },
});

gsap.from(".why-us .row", {
  opacity: 0,
  duration: 1,
  y: 400,
  scrollTrigger: {
    trigger: ".why-us .row",
    start: "top 90%",
    end: "bottom 20%",
  },
});
