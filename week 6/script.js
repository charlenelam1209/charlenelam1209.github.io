var shawn = document.getElementById("shawn");
console.log(shawn);

shawn.onclick = function(){
    alert('hello, again'); // dialog window with an ok button
    var result = confirm("are you a friend of shawn?"); // true or false
    if(result){
        shawn.innerHTML = "thanks for visiting";
    }else{
        shawn.style.backgroundColor = 'tomato';
    }

    var response = prompt('what are you thinking about?');
    alert(response);
    if(response === 'pot of gold'){
        alert('me too');
    }
};

var thecolour = 0;
var mark = document.getElementById('mark');
mark.onclick = colourChanger;

function colourChanger(){
    thecolour = (thecolour + 1) % 3;
    if(thecolour === 0){
        mark.style.background = 'tomato';
    }
    if(thecolour === 1){
        mark.style.background = 'aquamarine';
    }
    if(thecolour === 2){
        mark.style.background = 'yellow'
    }
}