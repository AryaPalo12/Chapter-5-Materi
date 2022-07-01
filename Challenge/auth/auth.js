const express = require('express');
const { userLogin } = require('./auth_check');
const authRouter = express.Router();

authRouter.use(express.json());

//The get method will respond the user with the message Login Page
authRouter.get('/Login',(req,res)=>{
    const status = res.status(200);
    return res.status(200).json({
        message : "Login Page",
    });
})

//The post method will use the auth_check to verify the user login
authRouter.post('/Login',userLogin);

module.exports = authRouter;
