//1.Importing Express
const express = require('express')
require("./connection")
var empModel = require("./model/employee")
var cors = require("cors")


//2.Initialize
const app = new express()

//mid
app.use(express.json())
app.use(cors())


//3.API Creation
app.get('/', (req, res) => {
    res.send("Message from the server")
})
app.get('/trial', (req, res) => {
    res.send("Trial from the server")
})

//Add Api
app.post("/add", async (req, res) => {
    try {
        await empModel(req.body).save();
        res.send({ message: "Data Added!!" })

    } catch (error) {
        console.log(error)
    }
})
 //view
app.get("/view", async (req, res) => {
     try {
         var show = await empModel.find()
         res.send(show)

        
    } catch (error) {
        console.log(error)
        
    }
})

//delete 
app.delete("/remove/:id",async(req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send("Data deleted")
        
    } catch (error) {
     console.log(error)   
    }
})
//update
app.put("/update/:id", async(req, res )=> {
    try {
        await empModel.findByIdAndUpdate(req.params.id, req.body)
        res.send("Updated")
        
     } catch (error) {
        console.log(error)
     }
 })




//4.Port
app.listen(3004, () => {
    console.log("Port is Running");
})