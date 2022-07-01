const userId = [{user:'Testing',pass:'password'}]

const userLogin = (req,res) => {
    const username = req.body['user','pass'];
    if(userId.filter(username)){
        res.status (200);
        return res.json({
            status: res.status,
            message: "Login success"
        })
    }
    else {
        res.status (400);
        return res.json({
            status: res.status,
            message: "Login Failed"
        })
    }
}

module.exports = {userLogin}