const express = require('express')
const mongoose = require('mongoose')
const app = express()

const port = 8000

const uri =
    "mongodb+srv://vishusehrawat:yAgxIoEIvO9VUoVG@clusterproject.6bdh1ve.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProject";
  
mongoose.connect(uri).then(() => { console.log('connected to database') })

const user = require('./models/userModel')

const insert = async () => {
    await user.create({
        name: 'vishu',
        email:'varshasehrawat8@gmail.com'
    })
    await user.create({
      name: "satyawan",
      email: "panchalsatyawan@gmail.com",
    });
}

insert()

app.listen(port, () => {
    console.log('server is running at port = ',port)
})

app.get('/', (req, res) => {
    res.send('chai')
})

app.get("/about", (req, res) => {
  res.send("chai ban gayi");
});