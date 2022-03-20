const express = require("express") 
const path =require("path");
const app = express();
const port = 80;

//For serving static files
app.use('/static',express.static('static'))

//set the template engine as pug
app.set('view engine', 'pug')

//set the view directory 
app.set('views',path.join(__dirname,'views'))

//our pug demo endpoint
app.get("/demo",(req,res)=>{
    res.status(200).render('demo', { title: 'Hey Amit ', message: 'Hello there and thanks for giving me 2  samosa' })
});

app.get("/",(req,res)=>{
res.send("This is homepage of my first express app with me ")
});
app.get("/about",(req,res)=>{
res.status(200).send("This is about page of my first express app with me ")
});
app.post("/about",(req,res)=>{
res.send("This is about page of my first express app with me ")
});
app.post("/this ",(req,res)=>{
res.status(404).send("This page is not found  ")
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});