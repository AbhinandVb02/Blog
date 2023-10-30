const express = require('express');
const connectDB = require('./Database/Database')
const cors = require('cors')

const router = require('./Routers/Router');
const dotenv = require('dotenv')

const app = express()

app.use(express.json())
app.use(cors())
connectDB();

dotenv.config()

app.use('/',router)

 const PORT =process.env.PORT || 5005;

app.listen(PORT,()=>console.log(`server is running in ${PORT}`))