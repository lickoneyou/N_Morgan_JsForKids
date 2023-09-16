// 1

const animals = ["Кот", "Рыба", "Лемур", "Варан"];

for (let i = 0; i < animals.length; i++) {
  animals[i] = `${animals[i]} - прекрасное животное`;
}

console.log(animals);

console.log("-------");

// 2

const alphabet = "йцукенгшщзхъфывапролджэячсмитьбю";

let randomWord = "";
let i = 0;

while (i < 6) {
  randomWord += alphabet[Math.floor(Math.random() * alphabet.length)];
  i++;
}

console.log(randomWord);

console.log("-------");

// 3

const input = "javascript is awesome";
let output = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === "a") {
    output += 4;
    continue;
  }
  if (input[i] === "e") {
    output += 3;
    continue;
  }

  if (input[i] === "i") {
    output += 1;
    continue;
  }
  if (input[i] === "o") {
    output += 0;
    continue;
  } else {
    output += input[i];
  }
}

console.log(output);
