const express = require('express');
const mongose = require('mongoose');
const db = require('./dbase');


const app = express()
app.use(express.json());
const port = 8000;

const connectme = mongose
.connect("mongodb+srv://vsaravananc:Flutteratlas@shoes.dsvlo.mongodb.net/chatmessage?retryWrites=true&w=majority&appName=shoes")
.then(
    app.listen(
        port
    )
)

app.get("/",
    async(req,res)=>{
        const fetchdb = await db.find({});
        res.status(200).json(fetchdb);
    }
)