const fs = require('fs');
const path = require('path');
const dotenv = require("dotenv");
//dotenv.config();
const express = require("express");
const app = express();
let dbConnection = require('./mongo.config')

// returns index.html
app.use(express.static("./"));

// Return lessons from Database
app.get('/lessons', async (req, res) => {
    console.log('GET ALL LESSONS',req.query)

    const response = await dbConnection.db("coursework2").collection("lessons").find().toArray();
     if (response) {
        console.log('GET ALL LESSONS RESPONSE',response)
        res.json(response)
    } else { 
        res.json({
            acknowledged: false,
            message: 'Unable to fetch lessons at the moment'
        })
    }
})


app.listen(process.env.PORT || 3300, ()=> console.log('APP started on port 3300'))