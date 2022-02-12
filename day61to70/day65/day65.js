console.log("understanding DOM ");
let a=document;

a= document.all;
// a= document.body;
// a= document.forms;
a=document.links;
a=document.links[0].href;
console.log(a);
Array.from(a).forEach(function(element){
    console.log(element);
})