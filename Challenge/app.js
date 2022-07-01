const express = require ('express');
const app = express();
const path = require('path');
const authRouter = require('./auth/auth');
const port = 7000;

app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))

app.use(authRouter)

//This render the home page
app.get('/',(req,res)=>{
    res.render('index');
    //return res.send('SOmething is rising.');
})

//This render the game page
app.get('/game',(req,res)=>{
    res.render('game');
    res.status(300);
    return res.send('Redirected')
})

app.get


app.listen(port,(req,res)=>{
    console.log (`Server started and listening to port ${port}`);
})