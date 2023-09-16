// 1
const friends = ["Vasya", "Asya", "Tasya"];

$("h1").text("My friends:");

for (let i = 0; i < friends.length; i++) {
  $("body").append(`<p>${friends[i]}</p>`);
}

$("p").hide().fadeIn(3000);

$("p").append(" лучший");

// 2

for (let i = 1; i <= 5; i++) {
  $("h1").fadeOut(+`${i}000`).fadeIn(+`${i}000`);
}

// 3

$("body").append(`<h2>hi 2 h2</h2>`);

$('h2').fadeOut(2000).delay(5000).fadeIn(2000)

// 4

$("body").append(`<h3>hi 3 h3</h3>`);

$('h3').fadeTo(2000, 0.1)
