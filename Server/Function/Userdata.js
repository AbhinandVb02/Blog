const Users2 = require('../Model/Usermodel')
const jwt = require('jsonwebtoken')

const Userdata = async(req,res) =>{

    const {token} = req.body;

    try {
        const user = jwt.verify(token,process.env.jwt_secret,(err,resp)=>{
            if(err){
                return 'token expired'
            }else{
                return resp
            }
        })

        if(user == "token expired"){
            return res.json({message:'token expired',status:'error'})
        }

        const useremail = user.Email;

        Users2.findOne({Email:useremail})
        .then((data)=>{
            res.json({status:"ok",data:data})
        })
        .catch((err)=>{
            res.json({status:'error',data:err})
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = Userdata;