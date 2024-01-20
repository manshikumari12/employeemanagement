const express = require("express")
const app = express()
app.use(express.json())
const {connection} = require("./db")
const {adminRouter} = require("./route/admin.router")
const {employeRouter} =require("./route/employe.router")
const cors = require("cors")
app.use(cors())
app.use("/admin",adminRouter)
app.use("/emp",employeRouter)

app.listen("1212",async()=>{
    try {
        await connection
        console.log("connected to data-base")
        
    } catch (error) {
       console.log(error) 
    }
    console.log("server is running on the port")
})