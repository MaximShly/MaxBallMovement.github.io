//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var positionY = 0;
var velocity = 50;
var reverse = false;
var ball = document.getElementById("ball");
var ball2 = document.getElementById("ball2");

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 0;
  var Xmax = 300;

  // two y-axis coordinates
  var Ymin = 0;
  var Ymax = 300;

  if (reverse) {
velocity = velocity + 50;
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
ball2.style.left = positionX + "px";
ball2.style.top = positionY + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
ball2.style.left = positionX + "px";
ball2.style.top = positionY + "px";
  }

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

setInterval(moveBall, 1);
