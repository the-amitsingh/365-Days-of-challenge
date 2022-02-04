console.log("This is nodule.js");

function average (arr){
    let  sum=0;
 arr.forEach(element => {
     sum+=element;
 
 });
 return sum/arr.length;
}
// module . exports =  {
//     avg:average,
//     name:"Amit",
//     repo:"github"
// }
   module.exports.name = "Amit"

