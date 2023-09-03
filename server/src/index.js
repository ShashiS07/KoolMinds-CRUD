const express=require('express')
const route=require('./route/routes')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
require('dotenv').config()


app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_STRING,{
    useNewUrlParser:true
}).then(()=>console.log("MongoDb is Connected Successfully"))
.catch((err)=>console.log(err))

app.use('/',route)

app.listen(process.env.PORT,()=>{
    console.log('Server is running on port '+process.env.PORT)
})

