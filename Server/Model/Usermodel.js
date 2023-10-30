const mongoose = require('mongoose')
const Schema = mongoose;

const UserSchema = mongoose.Schema({
    Firstname:{type:String},
    Secoundname:{type:String},
    Email:{type:String},
    Password:{type:String}
})

const Users2 = mongoose.model("Userdata",UserSchema)

module.exports = Users2;