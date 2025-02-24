function setup(){
    createCanvas(windowWidth,windowHeight)
}

function draw(){
    background(153, 204, 255, 50)
    fill('aquamarine');
    stroke('white')
    for(var i = 0; i < 8500; i++){
        rect((i*100)%width,(i*700)%height,10,10);
    }
    fill('yellow');
    stroke('white')
    if(mouseX < 800){
        rect(mouseX,mouseY,100,100); //adding a 10 in the end turns it into a circle
    }else{
        rect(mouseX,mouseY,80,80,80)   
    }
}