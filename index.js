require('dotenv').config()
const express = require('express');

const app = express()
const PORT = process.env ||5000

app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.get('/home',(req,res)=>{
    res.send("Welcome in Home")
}) 
app.get('/login',(req,res)=>{
res.send('<h1>Welcome in login page</h1>')
})
app.listen(process.env.PORT,()=>{
   console.log(`start at Port ${PORT}`)
})