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
  circle.innerHTML = "β";
  document.body.style.cursor = "pointer";
  highfive.classList.remove("bounce");
}
function mouseleave(event) {
  circle.innerHTML = "π";
  document.body.style.cursor = "default";
}
function mouseclick(event) {
  circle.innerHTML = "π";
  highfive.classList.add("hithere");
  console.log(event);
  setTimeout(() => {
    highfive.classList.remove("hithere");
    circle.innerHTML = "β";
  }, 1000);
}

window.addEventListener("mousemove", movingHand);
highfive.addEventListener("mousemove", mouseover);
highfive.addEventListener("mouseleave", mouseleave);
highfive.addEventListener("mousedown", mouseclick);
highfive.addEventListener("dbclick", mouseclick);
highfive.addEventListener(" click", mouseclick);
// x,y κ°μ Έμ€κΈ° mouseX, mouseY
// μμ μ€μ μμΉ κ°μ Έμ€κΈ° handX handY -> μλ£
// μλ₯Ό λ΄€μλμ λ²‘ν° κ° μ μ ν (0, -1) = v1
// λ§μ°μ€μ λ²‘ν° (mouseX-handX, mouseY-handY) =v2
// mouseX-handX = x2 , mouseY-handY =y2
// κ°λ κ³μ°νκΈ° Theta =Math.asin(x2 /1 * Math.sqrt(x2 * x2 + y2 * y2) )
// transform : rotateZ μ€λ₯Έμλ²μΉ

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
