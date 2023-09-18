const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const width = canvas.width
const height = canvas.height

const circle = function (x, y, radius, fillCircle) {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2, false)
  if (fillCircle) {
    ctx.fill()
  } else {
    ctx.stroke()
  }
}

const Ball = function () {
  this.x = width / 2
  this.y = height / 2
  this.xSpeed = 5
  this.ySpeed = 0
  this.speed = 5
  this.radius = 5
}

Ball.prototype.move = function () {
  this.x += this.xSpeed
  this.y += this.ySpeed
  // if (this.x < 0) {
  //   this.x = width
  // } else if (this.x > width) {
  //   this.x = 0
  // } else if (this.y < 0) {
  //   this.y = height
  // } else if (this.y > height) {
  //   this.y = 0
  // }
}

Ball.prototype.checkCollision = function () {
  if (this.x < 0 || this.x > width) {
    this.xSpeed = -this.xSpeed
  }
  if (this.y < 0 || this.y > height) {
    this.ySpeed = -this.ySpeed
  }
}

Ball.prototype.draw = function () {
  circle(this.x, this.y, this.radius, true)
}

Ball.prototype.setDirection = function (direction) {
  if (direction === 'up') {
    this.xSpeed = 0
    this.ySpeed = -this.speed
  } else if (direction === 'down') {
    this.xSpeed = 0
    this.ySpeed = this.speed
  } else if (direction === 'left') {
    this.xSpeed = -this.speed
    this.ySpeed = 0
  } else if (direction === 'right') {
    this.xSpeed = this.speed
    this.ySpeed = 0
  } else if (direction === 'stop') {
    this.xSpeed = 0
    this.ySpeed = 0
  }
}

const ball = new Ball()

const keyActions = {
  32: 'stop',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
}

const keySpeed = {
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7,
  56: 8,
  57: 9,
}

$('body').keydown(function (event) {
  console.log(event.keyCode)
  let direction = keyActions[event.keyCode]
  ball.setDirection(direction)
  if (event.keyCode >= 49 && event.keyCode <= 57) {
    ball.speed = keySpeed[event.keyCode]
  }
  if (event.keyCode === 90 && ball.speed <= 9) {
    ball.speed++
  }
  if (event.keyCode === 88 && ball.speed > 1) {
    ball.speed--
  }
  if (event.keyCode == 67) {
    ball.radius++
  }
  if (event.keyCode == 86 && ball.radius > 1) {
    ball.radius--
  }
})

setInterval(function () {
  ctx.clearRect(0, 0, width, height)
  ball.draw()
  ball.move()
  ball.checkCollision()
  ctx.strokeRect(0, 0, width, height)
}, 30)
