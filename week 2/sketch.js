var x = 0;
var y = 0;

function setup(){
    createCanvas(180,480);
   
}
function draw(){
    background('#64b69d') // automatic semicolon insertion
    rect(x,y,100,100);
    x = x + 2;
    x = x % 100; // modulo operator
    y = y + 5;
    y = y % 500;
}

