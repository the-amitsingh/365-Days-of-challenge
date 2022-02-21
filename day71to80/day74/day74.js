console.log("Asynchronous programming ");

setTimeout(() => {
    for (let index = 0; index < 4005; index++) {
        const element = index;
        console.log("This is index number" + index);
        
    }
}, 100);



console.log('done printing');
