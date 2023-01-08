var s = skrollr.init({
  smoothScrolling: true,
});

window.addEventListener("scroll", () => {
  let scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

  scrollTop = Math.floor(scrollTop);
  document.querySelectorAll(".scroll").forEach((sc) => {
    sc.innerText = Math.round(scrollTop);
  });
  // window.pageYOffset =< document.documentElement.scrollTop 이 될때 그 다음에 해줄 효과가 보여지게
  // else는 위로 올라가면 다시 돌아가게
  if (document.querySelector("#aboutme").offsetTop <= scrollTop) {
    document.querySelector(".section1").classList.add("show");
    document.querySelector(".underline2").classList.add("line");
  } else {
    document.querySelector(".section1").classList.remove("show");

    document.querySelector(".underline2").classList.remove("line");
  }
  if (document.querySelector("#website").offsetTop <= scrollTop) {
    document.querySelector("#website .section1").classList.add("show");
  } else {
    document.querySelector("#website .section1").classList.remove("show");
  }
  if (document.querySelector("#javascript").offsetTop <= scrollTop) {
    document.querySelector("#javascript .section1").classList.add("show");
  } else {
    document.querySelector("#javascript .section1").classList.remove("show");
  }
});

gsap.set(".section desc div:not(.first-line)", { opacity: 0, y: 50 });
gsap.set(".section desc strong:not(.first-line strong)", {
  opacity: 0,
  x: 250,
}); // hyunsoo, 열정, 도전정신
gsap.set(".section desc em", { opacity: 0, x: 250 }); // 개발자
gsap.set(".section desc b", { opacity: 0, y: 250 }); // 이모티콘들
gsap.set("#header", { opacity: 0, top: -100 }); // 맨 위에서 내려오게

setTimeout(() => {
  gsap.to(".section desc .second-line", {
    opacity: 1,
    duration: 0.4,
    stagger: 0.6,
    y: 0,
    delay: 1.5,
  });
  gsap.to(".section desc .second-line b", {
    opacity: 1,
    duration: 0.4,
    y: 0,
    ease: "bounce.out",
    delay: 2,
  });
  gsap.to(".section desc .third-line", {
    opacity: 1,
    duration: 0.4,
    stagger: 0.6,
    y: 0,
    delay: 2.5,
  });
  gsap.to(".section desc .third-line strong", {
    opacity: 1,
    duration: 0.4,
    x: 0,
    delay: 2.5,
  });
  gsap.to(".section desc .third-line b", {
    opacity: 1,
    duration: 0.4,
    y: 0,
    ease: "bounce.out",
    delay: 3,
  });
  gsap.to(".section desc .fourth-line", {
    opacity: 1,
    duration: 0.4,
    stagger: 0.6,
    y: 0,
    delay: 3.5,
  });

  gsap.to(".section desc em", {
    opacity: 1,
    duration: 0.4,
    y: 0,
    ease: "bounce.out",
    delay: 4,
  });
  gsap.to("#header", { opacity: 1, top: 0, duration: 0.4, delay: 4.5 });
}, 1000);

gsap.registerPlugin(ScrollTrigger);

var s = skrollr.init({
  smoothScrolling: true,
});

gsap.set("#aboutme .section2 .contents div", { y: 100, opacity: 0 });
gsap.set("#aboutme .section3 .box_container .box", {
  y: 200,
  opacity: 0,
});
// gsap.set("#website .section2 .contents div", { y: 100, opacity: 0 });

gsap.to("#aboutme .section2 .contents div", {
  y: 0,
  opacity: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#aboutme .section2 .contents",
    start: "top 50%",
    end: "bottom 10%",
    toggleActions: "play none none none",
  },
});

gsap.to("#aboutme .section3 .box_container div", {
  y: 0,
  opacity: 1,
  stagger: 0.2,
  duration: 0.4,
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".section3 .box_container .box",
    start: "top 100%",
    end: "bottom 10%",
    toggleActions: "play none none none",
  },
});

jQuery.rnd = function (m, n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor(Math.random() * (n - m + 1)) + m;
};
function initparticles() {
  bubbles();
  confetti();
}
function bubbles() {
  $.each($(".particletext.bubbles"), function () {
    var bubblecount = ($(this).width() / 50) * 10;
    for (var i = 0; i <= bubblecount; i++) {
      var size = $.rnd(40, 80) / 10;
      $(this).append(
        '<span class="particle" style="top:' +
          $.rnd(20, 80) +
          "%; left:" +
          $.rnd(0, 95) +
          "%;width:" +
          size +
          "px; height:" +
          size +
          "px;animation-delay: " +
          $.rnd(0, 30) / 10 +
          's;"></span>'
      );
    }
  });
}
function confetti() {
  $.each($(".particletext.confetti"), function () {
    var confetticount = ($(this).width() / 50) * 10;
    for (var i = 0; i <= confetticount; i++) {
      $(this).append(
        '<span class="particle c' +
          $.rnd(1, 2) +
          '" style="top:' +
          $.rnd(10, 50) +
          "%; left:" +
          $.rnd(0, 100) +
          "%;width:" +
          $.rnd(6, 8) +
          "px; height:" +
          $.rnd(3, 4) +
          "px;animation-delay: " +
          $.rnd(0, 30) / 10 +
          's;"></span>'
      );
    }
  });
}
jQuery.rnd = function (m, n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor(Math.random() * (n - m + 1)) + m;
};

initparticles();

// javascript
let cursor = document.getElementById("cursor");
let close = document.getElementById("close");
let body = document.body;
let iframe = document.getElementById("pen");
let penLink = document.getElementById("penlink");
let links = document.getElementsByTagName("a");

let frames = [
  "https://phs8197.github.io/CSS-LocalguideApp/",
  "https://phs8197.github.io/JS-roomtour/",
  "https://phs8197.github.io/JS-Drawingboard/",
  "https://phs8197.github.io/MemoryCard-Game/",
];

let frames2 = [
  "https://github.com/phs8197/CSS-LocalguideApp",
  "https://github.com/phs8197/JS-roomtour",
  "https://github.com/phs8197/JS-Drawingboard",
  "https://github.com/phs8197/MemoryCard-Game",
];
// Load iFrames on demand & remove after modal is closed to reduce weight & smooth out transitions

let cards = document.getElementsByClassName("inner");
let javascriptPage = document.querySelector("#javascript .section3");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mousemove", function (event) {
    cursor.classList.add("active");
  });
  cards[i].addEventListener("mouseover", function (event) {
    cursor.classList.add("active");
  });

  cards[i].addEventListener("mouseout", function (event) {
    cursor.classList.remove("active");
  });
  cards[i].addEventListener(
    "click",
    function (i) {
      javascriptPage.classList.add("active");
      iframe.setAttribute("src", frames[i]);
      let penDebug = frames2[i];
      let penFull = penDebug.replace("debug", "pen");
      penLink.setAttribute("href", penFull);
    }.bind(null, i)
  );
}

// Escape key option to exit active state

document.onkeydown = function (evt) {
  evt = evt || window.event;
  let isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape) {
    javascriptPage.classList.remove("active");
    setTimeout(() => {
      iframe.setAttribute("src", "");
    }, 2000);
  }
};

close.addEventListener("click", function (event) {
  javascriptPage.classList.remove("active");
  setTimeout(() => {
    iframe.setAttribute("src", "");
  }, 2000);
});

gsap.set("#cursor", { xPercent: -50, yPercent: -50 });
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.35;

const xSet = gsap.quickSetter(cursor, "x", "px");
const ySet = gsap.quickSetter(cursor, "y", "px");

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

gsap.ticker.add(() => {
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

Splitting();

// Individual section scroll progress

gsap.utils.toArray("#wrap .panel").forEach((section, index) => {
  gsap.to(this, {
    scrollTrigger: {
      trigger: section,
      start: "top 100%",
      end: "bottom 25%",
      scrub: 0,
      onUpdate: (self) => {
        section.style.setProperty("--progress", self.progress);
      },
    },
  });
});

// Full page scroll progress

gsap.to(javascriptPage, {
  scrollTrigger: {
    trigger: "body",
    start: "top 100%",
    end: "50% 50%",
    scrub: 0,
    onUpdate: (self) => {
      javascriptPage.style.setProperty("--progress", self.progress);
    },
  },
});

// Pull out the preloader

document.addEventListener("DOMContentLoaded", function () {
  javascriptPage.classList.add("loaded");
});

// Set a delay on Scrolltrigger recalculation to accommodate element transition times

function refresh() {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 2500);
}

window.addEventListener("resize", refresh);

// 가로 스크롤
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray("#website .section3 .panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#website .container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector("#website .container").offsetWidth,
  },
});
