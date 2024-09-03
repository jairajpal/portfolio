function homePageAnimation() {
  gsap.set(".slidesmarquee", {
    scale: 9,
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  tl.to(
    ".videodiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "home"
  )
    .to(
      ".slidesmarquee",
      {
        scale: 1,
        ease: Power2,
      },
      "home"
    )

    .to(
      ".rgt",
      {
        xPercent: 20,
        // stagger:0.04,
        ease: Power2,
      },
      "slidesmarquee"
    )
    .to(
      ".lft",
      {
        xPercent: -20,
        // stagger:0.04,
        ease: Power2,
      },
      "slidesmarquee"
    );
}

function skiils() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".skills",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -200,
    pase: Power1,
  });
}

function teamAnimation() {
  document.querySelectorAll(".listelem").forEach(function (elem) {
    elem.addEventListener("mousemove", function (e) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        ease: Power4,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, e.clientX),
        duration: 0.5,
      });
    });
    elem.addEventListener("mouseleave", function (e) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        // ease:Power4,
        // duration:.5
      });
    });
  });
}

function parah() {
  var clutter = "";

  document
    .querySelector(".textparah")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") clutter += `<span>&nbsp;</span>`;
      clutter += `<span>${e}</span>`;
    });

  document.querySelector(".textparah").innerHTML = clutter;

  gsap.set(".textparah span", {
    opacity: 0.1,
  });

  gsap.to(".textparah span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 50%",
      end: "bottom 80%",
      scrub: 0.2,
    },
    opacity: 1,
    stagger: 2,
    ease: Power4,
  });
}
function locomotive() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}
function capsuleAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1,
    },
    y: 0,
    ease: Power4,
  });
}

function colorChanger(params) {
  document.querySelectorAll(".section").forEach(function (section) {
    ScrollTrigger.create({
      trigger: section,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        document.body.setAttribute("theme", section.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", section.dataset.color);
      },
    });
  });
}

colorChanger();
capsuleAnimation();
parah();
teamAnimation();
skiils();
homePageAnimation();
locomotive();
