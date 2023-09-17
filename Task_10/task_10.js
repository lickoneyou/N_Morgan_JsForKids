const canvas = document.querySelector("#canvas");

const ctx = canvas.getContext("2d");

ctx.fillRect(50, 25, 50, 50);
ctx.fillRect(70, 75, 10, 20);
ctx.fillRect(0, 85, 155, 10);
ctx.fillRect(35, 85, 80, 80);
ctx.fillRect(35, 155, 10, 50);
ctx.fillRect(105, 155, 10, 50);

const canvas2 = document.querySelector("#canvas2");

const ctx2 = canvas2.getContext("2d");
ctx2.fillStyle = "red";
ctx2.fillRect(0, 0, 70, 200);
ctx2.fillStyle = "green";
ctx2.fillRect(70, 0, 70, 200);
ctx2.fillStyle = "blue";
ctx2.fillRect(140, 0, 70, 200);

const canvas3 = document.querySelector("#canvas3");

const ctx3 = canvas3.getContext("2d");
ctx3.lineWidth = 3;
ctx3.strokeRect(75, 10, 50, 50);
ctx3.beginPath();
ctx3.moveTo(100, 60);
ctx3.lineTo(100, 150);

ctx3.moveTo(100, 90);
ctx3.lineTo(55, 60);

ctx3.moveTo(100, 90);
ctx3.lineTo(140, 60);

ctx3.moveTo(100, 148);
ctx3.lineTo(130, 180);

ctx3.moveTo(100, 148);
ctx3.lineTo(70, 180);
ctx3.stroke();

const canvas4 = document.querySelector("#canvas4");

const ctx4 = canvas4.getContext("2d");

const circle = (canv, x, y, radius, fill = false, color) => {
  canv.beginPath();
  canv.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fill) {
    canv.fillStyle = color || "black";
    canv.fill();
  } else {
    canv.stroke();
  }
};

circle(ctx4, 100, 35, 30);
circle(ctx4, 100, 125, 60);
circle(ctx4, 90, 25, 5, true);
circle(ctx4, 110, 25, 5, true);
circle(ctx4, 100, 40, 5, true, "orange");
circle(ctx4, 100, 100, 5, true);
circle(ctx4, 100, 120, 5, true);
circle(ctx4, 100, 140, 5, true);

const canvas5 = document.querySelector("#canvas5");

const ctx5 = canvas5.getContext("2d");

const drawSnowMan = (x, y) => {
  circle(ctx5, 100 + x, 35 + y, 30);
  circle(ctx5, 100 + x, 125 + y, 60);
  circle(ctx5, 90 + x, 25 + y, 5, true);
  circle(ctx5, 110 + x, 25 + y, 5, true);
  circle(ctx5, 100 + x, 40 + y, 5, true, "orange");
  circle(ctx5, 100 + x, 100 + y, 5, true);
  circle(ctx5, 100 + x, 120 + y, 5, true);
  circle(ctx5, 100 + x, 140 + y, 5, true);
};

drawSnowMan(100, 0);

const canvas6 = document.querySelector("#canvas6");
const ctx6 = canvas6.getContext("2d");
ctx6.lineWidth = 1;
const arr = [
  [50, 50],
  [50, 100],
  [100, 100],
  [100, 50],
  [50, 50],
];
ctx6.beginPath();
for (let i = 1; i < arr.length; i++) {
  ctx6.moveTo(...arr[i - 1]);
  ctx6.lineTo(...arr[i]);
}

ctx6.stroke();

const canvas7 = document.querySelector("#canvas7");
const ctx7 = canvas7.getContext("2d");
ctx7.lineWidth = 1;
const arr2 = [
  [50, 50],
  [50, 100],
  [25, 120],
  [100, 50],
  [70, 90],
  [100, 90],
  [70, 120],
];

ctx7.beginPath();
for (let i = 1; i < arr2.length; i++) {
  ctx7.moveTo(...arr2[i - 1]);
  ctx7.lineTo(...arr2[i]);
}

ctx7.stroke();

const canvas8 = document.querySelector("#canvas8");
const ctx8 = canvas8.getContext("2d");

const circle2 = (canv, x, y, radius) => {
  canv.beginPath();
  canv.arc(x, y, radius, 0, Math.PI * 2, false);
  canv.fill();
};

canvas8.addEventListener("mousemove", (event) => {
  circle2(ctx8, event.pageX, event.pageY - 200, 2);
});
