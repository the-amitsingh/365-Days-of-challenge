console.log("This is day 41 ");

function greet(name,greetText="welcome to the world of javascript"){
    let name1="name1"
    console.log(greetText + " "+name );
    console.log(name +" is a good boy ");
}
function sum(a,b,c){
    let d =a+b+c;
    return d ;
    //this line will never execute (unreachable code)
    console.log("function is returned");

}

let name ="Amit";
let name1 ="Rahul";
let name2 ="Ankit";
let name3 ="Abhishek";
let greetText = "Good Morning"
greet(name , greetText);
greet(name1 , greetText);
greet(name2 , greetText);
// let returnval=greet(name3 );
// console.log(returnval)

let returnval= sum(4,5,6);
console.log(returnval);


// console.log(name +" is a good boy ");
// console.log(name1 +" is a good boy ");
// console.log(name2 +" is a good boy ");
// console.log(name3 +" is a good boy ");
