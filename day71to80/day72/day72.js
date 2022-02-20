console.log("Object Prototype In javaScript");

const proto = {
    slogan: function(){
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}
/*
// This creates harry object
const Amit = Object.create(proto);
Amit.name = "Amit ";
Amit.role = "Programmer";
*/
// This also creates harry object
const Amit = Object.create(proto , {
    name:{value: "Amit ",writable:true},
    role:{ value:"programmer"},
})

Amit.changeName("Ankit ")
console.log(Amit);

//employee contructor
function employee(name, salary ,experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}

//slogan
employee.prototype.slogan =function(){
    return `This company is the best. Regards ${this.name}`;
}
let Amitobj = new employee("Amit",84512,52);
console.log(Amitobj);
console.log(Amitobj.slogan());

//programmer
function programmer(name,salary,experience,language){
    employee.call(this,name,salary,experience)
    this.language=language;
}

//inherit  the prototype
programmer.prototype = Object.create(employee.prototype);

//manually set the constructor 
programmer.prototype.constructor = programmer;

let Rohan =new programmer("Rohan",2,0,"javascript");
console.log(Rohan);


