const mongoose = require('mongoose')
const Schema = mongoose;

const BlogSchena = mongoose.Schema({
    Name:{type:String},
    Catagories:{type:String},
    Discription:{type:String},
    Images:{type:String}
})

const BlogData = mongoose.model("BlogData",BlogSchena)

module.exports = BlogData;