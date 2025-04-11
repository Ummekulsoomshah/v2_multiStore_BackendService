const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const dotenv=require('dotenv').config()
const storeRoute=require('../src/routes/store')
const client=require('../src/db/databsepg')
const limiter=require('../src/middlewares/rateLimiter')
const app=express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors({
    options:'http://localhost:5173'
}))
app.use(storeRoute)
app.use(limiter)
PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})