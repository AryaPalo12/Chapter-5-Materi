const express = require('express');
const app = require('../app');
const router = express.Router();

/*Container of the user data*/
const userAccount = [
  {id: 00001 ,user: "Arya", password: "testinglogin777", acc_lvl: 1},
  {id: 00002 ,user: "Testing", password: "testing", acc_lvl: 2}
];

router.use(express.json());

/* Get specified user, use the username to show the user data*/
router.get('/details', function(req, res) {
  let index = userAccount.map(function(e) {return e.user}).indexOf(req.body['user']);
  res.json(userAccount[index])
});

//Use the username to delete the user entry
router.delete('/change', function(req, res) {
  let index = userAccount.map(function(e) {return e.user}).indexOf(req.body['user']);
  userAccount.splice(index,1)
  res.end('Entry deleted from data')
});

//Lists all the users
router.get('/list', (req,res)=> {
  //Change the "res.json(userAccount)" to "res.end(userList)" and will show the users prettified
  userList = "User Name List\n==================\n\n"
  for (let i = 0; i<userAccount.length; i++) {
    userList += `Username : ${userAccount[i].user} \nPassword : ${userAccount[i].password} \nId Number : ${userAccount[i].id}\n\n`
  }
  res.json(userAccount);
})


//This is the prototype to change the username and password please change it by adding header acc_lvl the value1
router.put('/change', (req,res)=> {
  if(req.headers.acc_lvl != 1){
    return res.end("You're not authorized to view this page")
  }
  let user = req.body['user']
  let index = userAccount.map(function(e) {return e.user}).indexOf(user);
  if (index) {
    let newUser = req.body['newUser']
    let newPass = req.body['newPass']
    userAccount[index].user = newUser;
    userAccount[index].password = newPass;
    return res.end("User Data Change")
  }
  else {
    return res.end("User is not in record")
  }
})

//This code will create user using two parameters given user and password
router.post('/create', function(req, res, next) {
  const id = `00000${userAccount.length + 1}`;
  const user = req.body['user'];
  const pass = req.body['password'];
  userAccount.push({"id": id, "user" : user, "password": pass, "acc_lvl": 2})
  res.end(`The user ${user} has been created`);
});

module.exports = router;
