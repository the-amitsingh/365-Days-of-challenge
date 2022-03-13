console.log("CV screening ");

const data = [
    {
    Name: 'paul',
    age: 38,
    city: 'Mumbai',
    Language: 'perl',
    framework: 'PHP',
    Image: 'https://randomuser.me/api/portraits/men/95.jpg'
}, {
    Name: 'Rahul mishra  ',
    age: 28,
    city: 'Delhi',
    Language: 'java',
    framework: 'Loravel',
    Image: 'https://randomuser.me/api/portraits/men/91.jpg'
},
]

//cv Iterator
function cvIterator(profiles) {
let nextIndex = 0;
return {
    next: function () {
        return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false } :
            { done: true }
    }
};
}
//Button listener for next button
const candidates = cvIterator(data);
//Button listener for next button 
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV() {
const currentCandidate = candidates.next().value;

let Image = document.getElementById('image');
let profiles = document.getElementById('profile');
if (currentCandidate != undefined){ 
Image.innerHTML = `<img src= '${currentCandidate.Image}'>`;
profiles.innerHTML = `<ul class="list-group">
<li class="list-group-item disabled" aria-disabled="true">Name: ${currentCandidate.Name}</li>
<li class="list-group-item disabled" aria-disabled="true">Age: ${currentCandidate.age} years old </li>
<li class="list-group-item disabled" aria-disabled="true">city:${currentCandidate.city}</li>
<li class="list-group-item disabled" aria-disabled="true">Works on :${currentCandidate.Language}</li>
<li class="list-group-item disabled" aria-disabled="true">Using: ${currentCandidate.framework} framework</li>
<li class="list-group-item disabled" aria-disabled="true">${currentCandidate.Image}</li>

</ul>`;
}
else{
    alert('End of candidate application');
    window.location.reload();
}
}