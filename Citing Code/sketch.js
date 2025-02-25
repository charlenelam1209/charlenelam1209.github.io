// gameboy tutorial
let winWidth = 700;
let winHeight = 520;

// caterpillar game tutorial - https://p5js.org/tutorials/repeating-with-loops/
let startLine = 50; // changed size to match previous tutorial
let finishLine = 570; // changed size to match previous tutorial

let spacing = 20; 
let segmentSize = 30;
let eyeSize = 15;

let numCaterpillars = 3;
let caterpillarEnds = [];

let isRacing = false;

// add comments on everything that i've changed
// gameboy tutorial
function setup() {
  let canvas = createCanvas(winWidth, winHeight);
  
  let gameBoyEmulator = createDiv();
  gameBoyEmulator.id("game-boy-emulator");

  // didn't add score container from gameboy tutorial since no point adding it 
  
  let gameContainer = createDiv();
  gameContainer.id("game-container");
  
  let gameBoyText = createDiv("Gameboy");
  gameBoyText.id("game-boy-text");
  
  let buttonContainer = createDiv();
  buttonContainer.id("button-container");
  
  let arrowButtons = createDiv();
  arrowButtons.id("arrow-buttons");
  
  let leftRightButtons = createDiv();
  leftRightButtons.id("leftRightButton");
  
  let actionButtons = createDiv();
  actionButtons.id("action-buttons");
  
  let body = select('body');
  
  body.child(gameBoyEmulator);
  
  gameBoyEmulator.child(gameContainer);
  gameBoyEmulator.child(gameBoyText);
  gameBoyEmulator.child(buttonContainer);
  
  gameContainer.child(canvas);
  buttonContainer.child(arrowButtons);
  buttonContainer.child(actionButtons);

  // changed px size for text marked with // to fit it with the screen + /// changed color srylistic choice
  gameBoyEmulator.style( "background-color", "#e48591" ) // color
  gameBoyEmulator.style("border", "10px solid #f9e1e4"); // color
  gameBoyEmulator.style("border-radius", "10px"); 
  gameBoyEmulator.style("padding", "40px"); // px size
  gameBoyEmulator.style("box-shadow", "0 0 20px rgba(230, 102, 119, 0.8)"); //both
  
  buttonContainer.style("display", "flex");
  buttonContainer.style("align-items", "center");
  buttonContainer.style("justify-content", "space-between");
  buttonContainer.style("margin-top", "20px");
  
  arrowButtons.style("display", "flex");
  arrowButtons.style("flex-direction", "column");
  arrowButtons.style("align-items", "center");
  
  actionButtons.style("display", "flex");
  actionButtons.style("align-items", "center");
  console.log(gameBoyEmulator.elt);
  
  gameBoyText.style("margin", "10px 250px"); //px size
  gameBoyText.style("font-size", "50px"); // px size
  gameBoyText.style("color", "#fff");
  gameBoyText.style("background-color", "#eabac0"); // color
  gameBoyText.style("padding", "8px"); // px size
  gameBoyText.style("border-radius", "10px"); // px size

  // reposition canvas for a header
  gameBoyEmulator.position( 370, 60 )

  let button = createButton('Click to start');
  button.position( 355, 626 );

  button.style("margin", "15px 255px");
  button.style("font-size", "57px"); // px size
  button.style("color", "#fff");
  button.style("background-color", "#eabac0"); // color
  button.style("padding", "8px"); // px size
  button.style("border-radius", "10px"); // px size

  // caterpillar game tutorial
  frameRate(10); // changed framerate stylistic choice
  for (let i=0;i<numCaterpillars;i++) {
    caterpillarEnds.push(startLine)
  }
}


function draw() {
    // changed color for stylistic choice
  background("pink");

  // caterpillar game tutorial
  noStroke();
  fill(0);
  rect(startLine, 0, 5, height);
  fill(0, 255, 0);
  rect(finishLine, 0, 20, height);

  if (isRacing === true) {
    moveCaterpillars();
  } else { 

    writeStart();
  }

  drawCaterpillars();
 
  checkWinner();
}

function writeStart() {
  textSize(24);
  textAlign(CENTER);
  fill(255);
  noStroke();

//   text("🏁 Click to start!", width / 2, height / 2); got rid of it for the button to work
}

function drawCaterpillar(x, y, segments) {
 
  for (let i = 0; i < segments; i += 1) {
    fill(255, 0, 200);
    stroke(0);
    strokeWeight(1);
    circle(x, y, 50);
    x += spacing;
  }

  fill(0);
  stroke(255);
  strokeWeight(3);
  circle(x, y - eyeSize, eyeSize);
  circle(x - eyeSize, y - eyeSize, eyeSize);
}

function drawCaterpillars() {
  let padding = height / numCaterpillars;
  for (let i = 0; i < numCaterpillars; i += 1) {

    let y = (i + 0.5) * padding;
 
    crawl = random(3, 6);

    drawCaterpillar(caterpillarEnds[i], y, crawl);
  }
}

function mousePressed() {
  isRacing = true;
}

function moveCaterpillars() {
  for (let i = 0; i < numCaterpillars; i += 1) {

    let move = round(random(5, 30));
    caterpillarEnds[i] += move;
  }
}

function checkWinner() {
  for (let i = 0; i < caterpillarEnds.length; i += 1) {
    if (caterpillarEnds[i] >= finishLine) {
      textSize(24);
      textAlign(CENTER);
      fill(255);
      noStroke();

      text(`Caterpillar ${i + 1} wins!`,width/2,height/2);
      noLoop();
    }
  }
}