const Users2 = require("../Model/Usermodel")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')


const userGen =async (req,res)=>{
         
    const {Firstname,Secoundname,Email,Password} = req.body 

    const salt = await bcrypt.genSalt(10)
    const Hassedpassword = await bcrypt.hash(Password,salt)

    const fun = await Users2.findOne({Email})
    if(fun)
    {
        res.json("user already exist")
    }
     else{
           const details = await Users2.create({
            Firstname,
            Secoundname,
            Email,
            Password:Hassedpassword
        })
        res.json({details,
            token:gentoken(Users2._id)})
     }
    
}
    const gentoken =(id)=>{
         return jwt.sign({id},process.env.jwt_secret,{
            expiresIn:"1d"
         })     
    }

module.exports = userGen;