$("body").append("<h1>Click Me</h1>");

// function clickhandler(event) {
//   $("h1").offset({
//     left: event.pageX,
//     top: event.pageY,
//   });
// }

// $("html").click(clickhandler);

let moveL = 0;
let moveT = 0;
function h1Move() {
  console.log("moveL:", moveL, "moveT: ", moveT);

  if (moveL < 200 && moveT === 0) $("h1").offset({ left: (moveL += 1) });
  if (moveT < 200 && moveL == 200) $("h1").offset({ top: (moveT += 1) });
  if (moveT == 200 && moveL > 0) $("h1").offset({ left: (moveL -= 1) });
  if (moveT <= 200 && moveL == 0) $("h1").offset({ top: (moveT -= 1) });
}

let int = setInterval(h1Move, 1);

$("body").append("<button>Click</button>");

$("button").click((e) => {
  e.stopPropagation();
  clearInterval(int);
});

$("button").hide();

let count = 1;
let speed = 1;

$("h1").click(() => {
  if (count === 10) {
    $("h1").text(`Вы победили`);
    count = 1;
    speed = 1;
    clearInterval(int);
  } else {
    $("h1").text(`Score: ${count}`);
    count++;
    speed -= 0.1;
    clearInterval(int);
    int = setInterval(h1Move, speed);
  }
});
