const circle = document.querySelector(".finger");
const highfive = document.querySelector(".highfive");

function movingHand(event) {
  let mouseX = event.x;
  let mouseY = event.y;
  let handLeft = circle.getBoundingClientRect().left;
  let handRight = circle.getBoundingClientRect().right;
  let handTop = circle.getBoundingClientRect().top;
  let handBottom = circle.getBoundingClientRect().bottom;
  let handX = (handLeft + handRight) / 2;
  let handY = (handTop + handBottom) / 2;
  let x2 = mouseX - handX;
  let y2 = mouseY - handY;

  let Theta = Math.asin(x2 / Math.sqrt(x2 * x2 + y2 * y2));
  if (y2 > 0) {
    Theta = Math.PI - Theta;
  }
  circle.style.transform = `rotateZ(${Theta}rad)`;
  console.log(Theta);
}

function mouseover(event) {
  circle.innerHTML = "✋";
  document.body.style.cursor = "pointer";
  highfive.classList.remove("bounce");
}
function mouseleave(event) {
  circle.innerHTML = "👆";
  document.body.style.cursor = "default";
}
function mouseclick(event) {
  circle.innerHTML = "🖐";
  highfive.classList.add("hithere");
  console.log(event);
  setTimeout(() => {
    highfive.classList.remove("hithere");
    circle.innerHTML = "✋";
  }, 1000);
}

window.addEventListener("mousemove", movingHand);
highfive.addEventListener("mousemove", mouseover);
highfive.addEventListener("mouseleave", mouseleave);
highfive.addEventListener("mousedown", mouseclick);
highfive.addEventListener("dbclick", mouseclick);
highfive.addEventListener(" click", mouseclick);
// x,y 가져오기 mouseX, mouseY
// 손의 중앙 위치 가져오기 handX handY -> 완료
// 위를 봤을때의 벡터 값 왜 정행 (0, -1) = v1
// 마우스의 벡터 (mouseX-handX, mouseY-handY) =v2
// mouseX-handX = x2 , mouseY-handY =y2
// 각도 계산하기 Theta =Math.asin(x2 /1 * Math.sqrt(x2 * x2 + y2 * y2) )
// transform : rotateZ 오른속법칙

// javascript
// const image = document.querySelector(
//   "#javascript .section3 .container .image .sideImage"
// );

// function imageHover(event) {
//   image.classList.add("hidden");
//   image.classList.add.innerText = "VIEW MORE";
// }
// image.addEventListener("mouseover", imageHover);

// aboutme
const imageBox1 = document.querySelector(
  "#aboutme .section3 .box_container .box1"
);
const imageBox2 = document.querySelector(
  "#aboutme .section3 .box_container .box2"
);
const imageBox4 = document.querySelector(
  "#aboutme .section3 .box_container .box4"
);
const imageBox5 = document.querySelector(
  "#aboutme .section3 .box_container .box5"
);
const imageBox3 = document.querySelector(
  "#aboutme .section3 .box_container .box3"
);

function hoverBox(event) {
  imageBox3.classList.remove("wide");
  imageBox3.classList.add("narrow");
}
function hoverBox3(event) {
  imageBox3.classList.remove("narrow");
  imageBox3.classList.add("wide");
}
imageBox1.addEventListener("mouseover", hoverBox);
imageBox2.addEventListener("mouseover", hoverBox);
imageBox4.addEventListener("mouseover", hoverBox);
imageBox5.addEventListener("mouseover", hoverBox);
imageBox3.addEventListener("mouseover", hoverBox3);

// javascript
let cursor = document.getElementById("cursor");
let close = document.getElementById("close");
let body = document.body;
let iframe = document.getElementById("pen");
let penLink = document.getElementById("penlink");
let links = document.getElementsByTagName("a");

let frames = [
  "https://phs8197.github.io/MemoryCard-Game/",
  "https://cdpn.io/cobra_winfrey/debug/wvGyKEY",
  "https://phs8197.github.io/TypingSpeed-game/",
  "https://phs8197.github.io/JS-roomtour/",
  "https://phs8197.github.io/Javascript-note/",
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
      let penDebug = frames[i];
      let penFull = penDebug.replace("debug", "pen");
      penLink.setAttribute("href", penFull);
    }.bind(null, i)
  );
}

// hover events for social links

for (link of links) {
  link.addEventListener("mouseover", function (event) {
    cursor.classList.add("linkhover");
  });
  link.addEventListener("mousemove", function (event) {
    cursor.classList.add("linkhover");
  });
  link.addEventListener("mouseout", function (event) {
    cursor.classList.remove("linkhover");
  });
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
