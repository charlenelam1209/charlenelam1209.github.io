let xCoordinates = [];
let circlePositionX = 200;
let circlePositionY = 200;

let circleSpeedX = 2;
let circleSpeedY = 3;

let circleRadius = 25;

let circleHue = 0;

let circleFadeFrames = 300;

function setup() {
  createCanvas(400, 400);

  background(255);

  ellipseMode(RADIUS);

  noStroke();
  fill(128);
  rect(0, 0, 100, height);
  rect(300, 0, 100, height);

  colorMode(HSB);

  strokeWeight(4);

  let numCircles = 5;
  let spacing = width / (numCircles + 1);
// spaced the circles out
  for (let i = 1; i <= numCircles; i++) {
    xCoordinates.push(i * spacing);
  }
}

function draw() {
  stroke(circleHue, 80, 90);

  // ref array --> https://www.w3schools.com/js/js_random.asp, edited math to have all circles move at the same time
  for (let x of xCoordinates) {
    let bounceX = x + (circlePositionX - width / 2);
    let bounceY = circlePositionY;
    stroke(circleHue, 80, 90);
    fill(circlePositionX >= 100 && circlePositionX <= 300 ? 0 : 255);
    circle(bounceX, bounceY, circleRadius);
  }  

  // ref --> https://p5js.org/examples/animation-and-variables-conditions/
  if (circlePositionX >= 100 && circlePositionX <= 300) {
    fill(0);

  } else {
    fill(255);
  }

  circle(circlePositionX, circlePositionY, circleRadius);

  if (mouseIsPressed === true) {
    circlePositionX = circlePositionX + circleSpeedX;
    circlePositionY = circlePositionY + circleSpeedY;

    circleHue = circleHue + 1;
  }

  if (circleHue >= 360) {
    circleHue = 0;
  }

  if (
    circlePositionX < circleRadius ||
    circlePositionX > width - circleRadius
  ) {
    circleSpeedX = -circleSpeedX;
  }

  if (
    circlePositionY < circleRadius ||
    circlePositionY > height - circleRadius
  ) {
    circleSpeedY = -circleSpeedY;
  }
}