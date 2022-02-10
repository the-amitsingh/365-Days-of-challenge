const express = require("express") 

const app = express();
const port = 80;

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
    console.log('The application started successfully on port ${port}' )
})