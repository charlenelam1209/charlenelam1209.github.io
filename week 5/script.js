// https://www.p5js.org
// this code comes from this tutorial
// command(osx)console(win) / is the comment command in any language

var fredDiv = document.getElementById("fred");
// fredDiv.hidden = true;
if(fredDiv === null){
    //do something!
}

console.log(fredDiv);

function ourDivWasClicked(){
    if(fredDiv.innerHTML === "Hello!"){
        fredDiv.innerHTML = "check me!!!";
    }else{
        fredDiv.innerHTML = "Hello!"
    }
}

fredDiv.onclick = ourDivWasClicked;

//