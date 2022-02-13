console.log("Element selectors in javascript");

/*
1.single element selector 
2.multi element selector 
*/

// 1.single element selector 
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
element.style.color = 'red'
element.innerText = 'Heyy Amit ';
element.innerHTML = '<b>Heyy Amit </b>';
console.log(element);
console.log(element.innerHTML);

let sel = document.querySelector('#myfirst');       // # denotes id.in query selector
sel = document.querySelector('.child');           //dot(.) denotes class in query selector.
sel.style.color = 'green'
console.log(sel);

//  multi element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
// console.log(elems[0].getElementsByClassName('child'));
elems = document.getElementsByTagName('div');
console.log(elems);

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'blue';

}
                // OR
// Array.from(elems).forEach(element => {
//     console.log(element);
//     element.style.color = 'blue';
// });
