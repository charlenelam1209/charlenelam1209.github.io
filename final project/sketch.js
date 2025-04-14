let xCoordinates = [];
let yCoordinates = [];
let img;
let squareSize = 105;
let spacing = 15;
let gif1;
let gif2;
let gif3;
let gif4;
let gif5;
let gif6;
let gif7;
let fishArray = [];
let fishSquares = [];


function preload() {
  img = loadImage("istockphoto-1152237432-612x612.jpg");
  gif1 = loadImage("vscode fish 1.png");
  gif2 = loadImage("vscode fish 2.png");
  gif3 = loadImage("vscode fish 3.png");
  gif4 = loadImage("vscode fish 4.png");
  gif5 = loadImage("vscode fish 5.png");
  gif6 = loadImage("vscode fish 6.png");
  gif7 = loadImage("vscode fish 7.png");
  fishArray = [gif1, gif2, gif3, gif4, gif5, gif6, gif7];
}

function setup() {
  createCanvas(800, 800);

  //array lines referencing --> https://p5js.org/reference/p5/Array/
  for (let x = 10; x < width - squareSize; x += squareSize + spacing) { //edited math to spread out the squares
    xCoordinates.push(x);
  }

  for (let y = 10; y < height - squareSize; y += squareSize + spacing) {
    yCoordinates.push(y);
  }

  for (let y of yCoordinates) {
    for (let x of xCoordinates) {
      let fish = random(fishArray); // randomisation ref --> https://www.w3schools.com/js/js_random.asp
      fishSquares.push({ x, y, fish });
    }
  }  
  
}

function draw() {
    background(220);
    imageMode(CORNER);
    for (let sq of fishSquares) {
      let { x, y, fish, flipProgress, isFlipping, showFish } = sq;
  
      //flipping animation ref --> https://www.w3schools.com/howto/howto_css_flip_image.asp
      if (isFlipping) {
        sq.flipProgress += 0.1;
        if (sq.flipProgress >= 1) {
          sq.flipProgress = 0;
          sq.isFlipping = false;
          sq.showFish = !sq.showFish;
        }
      }
  
      // Flip effect: scale width using sin curve
      let scaleAmount = abs(cos(PI * sq.flipProgress));
  
      push();
      translate(x + squareSize / 2, y + squareSize / 2); // Move origin to center of square
      scale(scaleAmount, 1); // Scale horizontally
      translate(-squareSize / 2, -squareSize / 2); // Reset origin to top-left of square
  
      if (showFish) {
        image(fish, 0, 0, squareSize, squareSize);
      } else {
        image(img, 0, 0, squareSize, squareSize);
      }
  
      stroke(0);
      noFill();
      rect(0, 0, squareSize, squareSize);
  
      pop();
    }
  }
  

  function mousePressed() {
    for (let sq of fishSquares) {
      if (
        mouseX > sq.x &&
        mouseX < sq.x + squareSize &&
        mouseY > sq.y &&
        mouseY < sq.y + squareSize
      ) {
        if (!sq.isFlipping) {
          sq.isFlipping = true;
          sq.flipProgress = 0;
        } //////// math done with help from a friend, favourite code for it makes the whole animation function
      }
    }
  
    loop();
  }
  