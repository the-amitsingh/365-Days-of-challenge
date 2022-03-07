console.log("Iterators in JavaScript");
//Itereators 

function fruitsIterator(values) {
    let nextIndex = 0;
    //we will return an object 
    return {
        next: function () {
            if (nextIndex < values.length) {
                //we will return below object 
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {

                //we will return below object  woth only done 
                return {
                    done: true
                }
            }
        }
    }
}

const myArray = ['Apples', 'grapes', 'oranges ', 'bhindi'];
console.log("My array is ", myArray);

// using iterator 
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)