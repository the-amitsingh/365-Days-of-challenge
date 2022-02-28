console.log("Async and await in javascript");

async function amit (){
    console.log("Inside amit function ");
    // return"amit";
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;
}

console.log("Before calling amit");
let a=amit();
console.log("After  calling amit");
console.log(a)
a.then(data =>console.log(data) )
console.log("Last line of this js file ");