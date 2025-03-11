// text adventure tutorial https://editor.p5js.org/cgberry/sketches/POFi65HT1
let input;
let button;
let button1; // added multple buttons for multiple choices
let button2;
let button3;
let button4; // added to not clash with 'button's' functions for first half of quiz

let txt = "";
let name = "";
let historyY = 200;
let ans = "";

let popup;
let close;

// popup tutorial https://editor.p5js.org/kangabru/sketches/IRGWTRdpK
class Popup {
  constructor() {
    this.visible = false;
    this.x = 10;
    this.y = 250;
    this.width = 350;
    this.height = 80;
    this.message = "Invalid answer! Please respond with 'yes' or 'no'.";
  }

  show() {
    this.visible = true;
  }

  draw() {
    if (this.visible) {
      fill(1, 1, 5, 1);
      rect(this.x, this.y, this.width, this.height, 10);
      
      fill(10);
      textAlign(CENTER);
      textSize(15);
      text(this.message, this.x + this.width / 2, this.y + this.height / 2 - 20);
      
      fill(200, 0, 0);
      rect(this.x + this.width - 60, this.y + this.height - 40, 50, 30, 5);
      fill(10);
      text("Close", this.x + this.width - 35, this.y + this.height - 20);
    }
  }

  close() {
    this.visible = false;
  }

  isClicked(mx, my) {
    return mx > this.x + this.width - 60 && mx < this.x + this.width - 10 && 
           my > this.y + this.height - 40 && my < this.y + this.height - 10;
  }
}

function setup() {
  createCanvas(850, 500);

  input = createInput();
  input.position(330, 400);

  button = createButton("PRESS ME!");
  button.position(360, 420);
  button.mousePressed(choice);

  button1 = createButton('a');
  button1.position(330, 330);
  button1.mousePressed(ending1);

  button2 = createButton('b');
  button2.position(370, 330);
  button2.mousePressed(ending2);

  button3 = createButton('c');
  button3.position(410, 330);
  button3.mousePressed(ending3);

  //added button so future page could run better without colliding with previous codes
  button4 = createButton("PRESS ME!");
  button4.position(360, 420);
  button4.mousePressed(choice2);

  popup = new Popup();  
  
  background(220);
  
  start();
  draw();
}

function choice() {
  if (name === "") {
    name = input.value();
  } else {
    txt += input.value() + "\n";
    ans = input.value();
  }
  start();
  draw();
}

function start() {
  if (name === "") {
    txt = "What's your name? \n";
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
  } else {
    txt = "Hello " + name + ", are you ready for me to read your future?";
    if (ans === "yes") {
        createStory();
    } else if (ans === "no") {
        toobad();
    } else if (ans !== "") {
        alertmessage();
    }
  }
}

function draw() {
  background(220);
  popup.draw(); 
  textSize(15)
  text(txt, 150, 230, 500);
}

function toobad(){
  txt = "too bad then."
}

// from 2nd text adventure tutorial https://editor.p5js.org/hosken/sketches/m1j3x42xF
function createStory() {
  txt = "which letter calls to you?"

  button.hide();
  input.hide();
  button1.show();
  button2.show();
  button3.show();
  button4.hide();
}

function ending1(){
  txt = "'a' calls to you, perhaps you're a determined individual locked in on your goals, fast to make decisions and steady on your feet. just know life is full of wonders, don't forget to enjoy the small things."

  button.show();
  input.hide();
  button1.hide();
  button2.hide();
  button3.hide();
  button4.show();  
}

function ending2(){
  txt = "'b' calls to you. you seek balance and harmony in life in all regards. you're considerate of others and observant. a tip for you, schedules and plans are great but don't forget to take risks, life's too short afterall."

  button.show();
  input.hide();
  button1.hide();
  button2.hide();
  button3.hide();
  button4.show();  
}

function ending3(){
  txt = "'c' is just for you. you're a peacemaker, a sensitive individual, finding enjoyment in theoretical topics. Though don't forget to make time for yourself, afterall you can't keep peace if you yourself aren't in peace."
  
  button.show();
  input.hide();
  button1.hide();
  button2.hide();
  button3.hide();
  button4.show();  
}

// button 4's functions
function choice2(){
  lastending();  
}

function lastending(){
  txt = "Do you believe in your reading? Well, I'll let you know, I made it all up. If you believe it, great! If you don't, that's also great. But remember, your future is your own choice. You can only pave the way yourself."

  button.hide();
  input.hide();
  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();
}

function nice(){
  txt = "Well, I'll let you know, I made it all up. If you believe it, great! If you don't, that's also great. But remember, your future is your own choice. You can only pave the way yourself."
}

function mousePressed() {
  if (popup.isClicked(mouseX, mouseY)) {
    popup.close();
  }
}

// from popup tutorial
function alertmessage() {
  popup.show();  
}
