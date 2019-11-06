const canvas = document.querySelector("canvas");

canvas.width = 500;
// canvas.width = window.innerWidth;
canvas.height = 500;

const context = canvas.getContext("2d");

context.strokeStyle = "#5214FF";
context.lineWidth = 5;
context.lineCap = "round";

let shouldPaint = false;

document.addEventListener("mousedown", function(event) {
  shouldPaint = true;
  context.moveTo(event.pageX, event.pageY);
  context.beginPath();
});

document.addEventListener("mouseup", function(event) {
  shouldPaint = false;
});

document.addEventListener("mousemove", function(event) {
  if (shouldPaint) {
    context.lineTo(event.pageX, event.pageY);
    context.stroke();
  }
});

document.querySelectorAll(".colors a").forEach(link => {
  link.addEventListener("click", function(event) {
    context.strokeStyle = this.style.backgroundColor;
  });
});
