var section = document.querySelector("section");
var boxes = document.querySelectorAll("#boxes > div");
[].forEach.call(boxes, (box) => {
  box.addEventListener("mousemove", (e) => {
    section.style.setProperty(
      "--bg-color",
      box.style.getPropertyValue("--color")
    );

    var size = parseInt(getComputedStyle(box).width);

    // scaling
    var x = size * 0.3 * 0.7 + 0.7 * e.offsetX;
    var y = size * 0.3 * 0.7 + 0.7 * e.offsetY;
    console.log(x);
    box.style.setProperty("--x", x);
    box.style.setProperty("--y", y);
    box.style.setProperty("--size", size);
  });
});
