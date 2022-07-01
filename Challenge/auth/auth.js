const express = require('express');
const { userLogin } = require('./auth_check');
const authRouter = express.Router();

authRouter.use(express.json());

authRouter.post('/Login',userLogin);

module.exports = authRouter;
