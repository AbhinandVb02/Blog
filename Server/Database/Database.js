const mongoose = require('mongoose')

const connectDB=async()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://abhinandvb130:Abhi123@cluster0.qypxzyz.mongodb.net/",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        console.log("Database Connected");
    } catch(error){
        console.log(`Error:${error}`);

        process.exit();
    }
}

module.exports = connectDB;