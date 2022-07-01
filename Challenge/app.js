const express = require ('express');
const app = express();
const path = require('path');
const authRouter = require('./auth/auth');
const port = 7000;

//view engine module 
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))

//This code import the auth local module to authenticate the user login
app.use(authRouter);

//This render the home page
app.get('/',(req,res)=>{
    res.render('index');
});

//This render the game page
app.get('/game',(req,res)=>{
    res.render('game');
    res.status(300);
    return res.send('Redirected')
});


app.listen(port,(req,res)=>{
    console.log (`Server started and listening to port ${port}`);
});