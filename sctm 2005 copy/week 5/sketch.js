var colourPicker;
let strokeWeightSlider;
var bgColourPicker;

function setup(){
    createCanvas(720,300);
    colourPicker = createColorPicker('deeppink');

    strokeWeightSlider = createSlider(1,15,5,1);
    
    bgColourPicker = createColorPicker('lightpink');
    
    var bgColourButton = createButton('Refresh')
    bgColourButton.mousePressed(repaint);
    bgColourPicker.changed( repaint );
    background( bgColourPicker.value() );
}

function draw(){
    strokeWeight( strokeWeightSlider.value() );
    stroke( colourPicker.value() );
    if(mouseIsPressed){
        line(mouseX, mouseY, pmouseX, pmouseY);
        ellipse(mouseX, mouseY, 10, 10);
    }
}

function repaint(){
    background( bgColourPicker.value() );
    console.log( bgColourPicker.value().setGreen(255) );
}