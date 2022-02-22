console.log("Hey");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
 console.log('You have clicked fetchBtn');

 // Instantiate a xhr object
 const xhr = new XMLHttpRequest();

 // Open the object
 xhr.open('GET', 'amit.txt', true)  //true--Not blocking    //GET---Only fetch   //POST---Send data

 // What to do on progress(Optional)
 xhr.onprogress = function(){
  console.log("On progress");
 }

 xhr.onreadystatechange = function(){
   console.log('ready state is ', xhr.readyState);
 }

 // What to do when response is ready
 xhr.onload = function(){       //onload----Ready state 4
  if(this.status === 200){     // 200---Response code of HTTP(Ok)
   console.log(this.responseText);
  }
  else{
   // console.log('Some error occured');
   console.error('Some error occured hehehehe');
  } 
 }

 // Send request
 xhr.send();
}