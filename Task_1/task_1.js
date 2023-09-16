//1

const arr1 = ["скорее всего", "однозначно", "100%"];
const arr2 = ["дурачок", "тормозок", "идиот", "супер дурачок"];

const res = `Ты ${arr1[Math.floor(Math.random() * arr1.length)]} ${
  arr2[Math.floor(Math.random() * arr2.length)]
}`;

console.log(res);

console.log("----------------------");

// 2

const arrManBodys = ["рука", "нога", "голова", "морда"];
const shames = ["стремная", "всратая", "уродская"];
const animalPart = ["копыта", "жопа", "хвост"];
const animals = ["слона", "лося", "осла"];

const res2 = `У тебя ${
  arrManBodys[Math.floor(Math.random() * arrManBodys.length)]
} ещё более ${shames[Math.floor(Math.random() * shames.length)]}, чем ${
  animalPart[Math.floor(Math.random() * animalPart.length)]
} у ${animals[Math.floor(Math.random() * animals.length)]}`;

console.log(res2);

console.log("----------------------");

//3

const res3 = [
  "У тебя",
  arrManBodys[Math.floor(Math.random() * arrManBodys.length)],
  "ещё более",
  shames[Math.floor(Math.random() * shames.length)],
  ", чем",
  animalPart[Math.floor(Math.random() * animalPart.length)],
  "у",
  animals[Math.floor(Math.random() * animals.length)],
];

console.log(res3.join(" "));

console.log("----------------------");

//4

const numbs = [3,2,1]

console.log(numbs.join(' больше, чем '))
