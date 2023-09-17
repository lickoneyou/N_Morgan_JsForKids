$("body").append(
  "<img id='map' width=400 height=400 src='./treasuremap.png' alt='treasuremap'>"
);
$("body").append("<p id='distance'></p>");
$("body").append("<p id='clicks'></p>");

// Получить случайное число от 0 до size-1
const getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};
// Вычислить расстояние от клика (event) до клада (target)
const getDistance = function (event, target) {
  let diffX = event.offsetX - target.x;
  let diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};
// Получить для расстояния строку подсказки
let trys = 10;
const getDistanceHint = function (distance) {
  if (distance) {
    trys--;
    $("#clicks").text(`Осталось попыток: ${trys}`);
  }
  if (distance < 10) return "Обожжешься";
  else if (distance < 20) return "Очень горячо";
  else if (distance < 40) return "Горячо";
  else if (distance < 80) return "Tenлo";
  else if (distance < 160) return "Холодно";
  else if (distance < 320) return "Очень холодно";
  else if (distance < 620) return "Очень-очень холодно";
  else return "Замерзнешь";
};
let width = 400;
let height = 400;
let clicks = 0;

const target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

$("#map").click(function (event) {
  clicks++;
  let distance = getDistance(event, target);
  // Преобразуем расстояние в подсказку
  let distanceHint = getDistanceHint(distance);

  $("#distance").text(distanceHint);

  if (clicks >= 10) {
    alert(`Вы проиграли`);
    location.reload();
  }

  if (distance < 8) {
    alert(`Клад найден! Сделано кликов: ${clicks}`);
    location.reload();
  }
});
