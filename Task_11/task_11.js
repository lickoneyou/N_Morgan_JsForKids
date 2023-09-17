const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const colorArr = ["red", "orange", "green", "blue", "black"];

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Ball(params) {
  this.x = width;
  this.y = height;
  this.xSpeed = randomIntFromInterval(-5, 5);
  this.ySpeed = randomIntFromInterval(-5, 5);
  this.color = colorArr[randomIntFromInterval(0, colorArr.length)];
}

function circle(x, y, radius, fillCircle, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}

Ball.prototype.draw = function () {
  circle(this.x, this.y, 3, true, this.color);
};

Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function () {
  if (this.x < 0 || this.x > width) {
    this.xSpeed = -this.xSpeed;
  }
  if (this.y < 0 || this.y > height) {
    this.ySpeed = -this.ySpeed;
  }
};

const ball = new Ball();

setInterval(function () {
  ctx.clearRect(0, 0, width, height);

  ball.draw();
  ball.move();
  ball.checkCollision();

  ctx.strokeRect(0, 0, width, height);
}, 30);
