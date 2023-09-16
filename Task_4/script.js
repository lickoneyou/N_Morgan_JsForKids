// Создаем массив со словами
let words = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "кот",
  "рот",
  "сом",
];
// Выбираем случайное слово
let approach = 3;
// Создаем итоговый массив
let answerArray = [];

let word = "";

function answer() {
  word = words[Math.floor(Math.random() * words.length)];
  answerArray = [];
  approach = 3;
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  return;
}

answer();

// Игровой цикл
while (answerArray.includes("_")) {
  // Показываем состояние игры
  alert(answerArray.join(" "));
  // Запрашиваем вариант ответа
  let guess = prompt(
    `Угадайте Букву, или нажмите Отмена для выхода из игры. Попытки: ${approach}`
  );
  if (!word.split("").includes(guess.toLowerCase())) {
    approach--;
    if (approach == 0) {
      alert("Вы Проиграли");
      answer();
    }
  }
  if (guess === null) {
    // Выходим из игрового цикла
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную Букву.");
  } else {
    // Обновляем состояние игры
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess.toLowerCase()) {
        answerArray[j] = guess.toLowerCase();

        // Конец игрового цикла
      }
    }
  }
}
// Отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);
