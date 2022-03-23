const express = require("express") 
const path =require("path");
const app = express();
const port = 80;

app.use('/static',express.static('static')) //For serving static files

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')   //set the template engine as pug
app.set('views',path.join(__dirname,'views'))  //set the view directory 

//ENDPOINTS
app.get('/',(req,res)=>{
    const con = "This is the best content on the internet so far so use it wisely "
    const params = {'title':'pubg is the best game ',content:con}
    res.status(200).render('index.pug',params);
})

//START THE SERVER 

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});