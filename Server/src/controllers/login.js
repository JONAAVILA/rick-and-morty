const users = require("../utils/users");

const login = (req,res)=>{
    const { email, password } = req.query;
    
    users.filter((user)=>{
        if(user.email === email && user.password === password){
            return res.status(200).json({access:true});
        }else{
            return res.json({access:false});
        }
    })
}

module.exports = login;