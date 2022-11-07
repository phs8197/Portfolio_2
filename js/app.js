const text = document.querySelector(".text");
// splitting text
text.innerHTML = text.textContent.replace(
  /\S/g,
  "<span class='text2'>$&</span>"
);

// rotating the span elements
const element = document.querySelectorAll(".text2");
for (let i = 0; i < element.length; i++) {
  element[i].style.transform = "rotate(" + i * 17 + "deg)";
  //   you can adjust the value based on the text length
}
