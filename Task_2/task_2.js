// 1

const scores = { vasya: 0, asya: 10 };

scores.vasya += 2;
scores.asya -= 2;

console.log(scores);

console.log("----------");

// 2

const myCrazyObj = {
  name: "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, 3, 3],
  "random animals": "банановая акула",
};

console.log(myCrazyObj['some array'][2].number)
