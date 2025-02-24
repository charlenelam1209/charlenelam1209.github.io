var billy; // variable declaration without definition

console.log(billy); 

billy = 13;
billy = 'billy is great';
billy = 'billy said "hello"';

// keyword expression codeblock
if(true){
    console.log(billy);
}

if( 5 >= 15){
    console.log('is it true?');
}

billy = "silly";
if(billy){ //coercion change string to a boolean
    console.log('billy is silly')
}

if(billy === 'silly'){ // === testing for equal value and same type
    console.log('really silly')
}

// == testing for equal value for coercion
// billy == true 
// billy gets coerced to a boolean and the expression is true

// type operator preceeds a variable name or literal value

console.log(typeof "hdgfwekhjfg");
console.log(typeof billy);

if(typeof billy === "string:"){
    billy = 'sadbjjlkcdshhjsdg';
}else{
    billy = 42;
}

///////////
// for loop

for(var i = 0; i < 5; i++){
    console.log('hello');
}

for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(i);
//////

// function declaration
function bob(){
    console.log('i am bob')
    return 'bob';
}

// function invokation
bob(); /// () function invocation operator

/*
for(var i = 0; i < 10; i++){
    bob();
}
*/

console.log( bob() );

function bailly(data){
    console.log(data)
    return undefined
}

bailly(50)

function bailly(data){
   data = data + 100;
   return data;
}

var mydata = bailly(50);
console.log(mydata);
console.log( typeof mydata);