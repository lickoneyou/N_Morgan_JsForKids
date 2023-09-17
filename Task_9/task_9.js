function Car(x, y, speed) {
  (this.x = x), (this.y = y), (this.speed = speed);
  this.draw();
}

Car.prototype.draw = function () {
  this.car = $("<img width=270 height=200 class='car' src='./car.png'>");
  $("body").append(this.car);

  this.car.css({
    position: "absolute",
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveRight = function () {
  this.x += this.speed;
  if (this.x < 1000) {
    this.car.css({
      left: this.x,
    });
  }
};

function randomSpeed() {
  return Math.floor(Math.random() * 15);
}

const car1 = new Car(10, 20, randomSpeed());

const car2 = new Car(10, 200, randomSpeed());

const id = setInterval(() => {
  car1.moveRight();
  car2.moveRight();
}, 10);
