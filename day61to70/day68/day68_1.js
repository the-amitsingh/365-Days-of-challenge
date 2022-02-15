

console.log("local and  session storage in javascript");
let imparr = ['Rohan','aditya','karan'];

// add a  key value pair inside localStorage
localStorage.setItem('Name','ankit');
localStorage.setItem('Name2','ankita');
localStorage.setItem('Human',JSON.stringify(imparr)); //returns string

// clears the entire localStorage
// localStorage.clear();

//clear a particular key value pair
// localStorage.removeItem('Name2');


// retrieve an item from localStorage.
let Name = localStorage.getItem('Name');

// retrive from  string data  to array we use parse
Name = JSON.parse(localStorage.getItem('Human'));
console.log(Name);

// session Storage
// sessionStorage.setItem('sessionName','ankit');
// sessionStorage.setItem('sessionName2','ankita');
// sessionStorage.setItem('sessionHuman',JSON.stringify(imparr)); //returns string

