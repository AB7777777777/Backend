var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://abhinavvtt:abhinav@cluster0.tqd7r.mongodb.net/CCSIT?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
    console.log(" MongoDb Connected")
    })
    .catch((err) => {
    console.log(err)
})