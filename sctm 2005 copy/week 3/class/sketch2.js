

function setup(){
    createCanvas(windowWidth,windowHeight)
}

function draw(){
    background(50, 250, 100, 5)
    fill('aquamarine');
    stroke('white')
    for(var i = 0; i < 1000; i++){
        rect((i*10)%width,(i*10)%height,10,10);
    }
    fill('yellow');
    stroke('white')
    if(mouseX < 200){
        rect(mouseX,mouseY,100,100); //adding a 10 in the end turns it into a circle
    }else{
        rect(mouseX,mouseY,10,10,10)
    }
}