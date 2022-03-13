console.log("Hey");

// Symbols------It is premitive not an object
const sym1 = Symbol('My identifier');
const sym2 = Symbol('My identifier');
console.log('Symbol is ', sym1);
console.log('Type of symbol is ', typeof sym1);
console.log(sym1 === sym2);

console.log("Checking values");
const a = "Trinity";
const b = "Dawson";

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol('Identifier for k1');
const k2 = Symbol('Identifier for k2');

myObj = {};
myObj[k1] = "Neo"
myObj[k2] = "Trinity"
myObj["Game"] = "Matrix"

console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2);   //Cannot do this to get Trinity as it is same as myObj["k2"]

for(key in myObj){
    console.log(key ,myObj[key])  //Symbols are ignored in for-in loop
}

console.log(JSON.stringify(myObj));