require('dotenv').config()

const express = require('express')

const app = express() // using that created a varable like math

const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('<h1>Welcome To Twiiter!</h1>')
})

app.get('/login',(req,res)=>{
    res.send('Login Request - Handler')
})

app.get('/signup',(req,res)=>{
    res.send('Signup Request - Handler')
})

app.listen(port,()=>{
    console.log(`Listening On Port ${port}`);
})