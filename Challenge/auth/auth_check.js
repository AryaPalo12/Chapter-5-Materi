//This contains the user Id and password
const userId = [{user: 'Testing',pass: 'password'}]


//This funtion will filter the user data entered in the Body and if the length of the filter is > 0
//it will log the user inside
const userLogin = (req,res) => {
    const username = {
        "user": req.body['user'],
        "pass": req.body['pass']
    };
    if(userId.filter(users => users.user === username.user && users.pass === username.pass).length>0){
        res.status (200);
        return res.json({
            message: "Login success"
        })
    }
    else {
        res.status (400);
        return res.json({
            message: "Login Failed"
        })
    }
}

module.exports = {userLogin}