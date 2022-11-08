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
}
window.addEventListener("mousemove", movingHand);
highfive.addEventListener("mouseover", mouseover);
highfive.addEventListener("mouseleave", mouseleave);
highfive.addEventListener("mousedown", mouseclick);
highfive.addEventListener("dbclick", mouseclick);
// x,y 가져오기 mouseX, mouseY
// 손의 중앙 위치 가져오기 handX handY -> 완료
// 위를 봤을때의 벡터 값 왜 정행 (0, -1) = v1
// 마우스의 벡터 (mouseX-handX, mouseY-handY) =v2
// mouseX-handX = x2 , mouseY-handY =y2
// 각도 계산하기 Theta =Math.asin(x2 /1 * Math.sqrt(x2 * x2 + y2 * y2) )
// transform : rotateZ 오른속법칙
