console.log('Arrow function ');

// ARROW FUNCTIONS

// Creating a regular function
const harry = function (){
    console.log("This is the best person ever")
}

// Converting it to an arrow function
const harry = ()=>{
    console.log("This is the best person ever")
}
harry();

// function returning something
const greet = function(){
    return "Good Morning";
}

// One liners do not require braces/return
// one line will automatically return
const greet = () =>  "Good Morning";

const greet = () =>  ({name: "harry"});

// Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramteres
const greet = name =>  "Good Morning " + name + ending;



console.log(greet('Harry'))
