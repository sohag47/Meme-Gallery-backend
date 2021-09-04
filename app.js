const express = require('express');
const cors = require('cors');
const ConnectDB = require('./config/db_connection');
//? api
const meme_api = require('./src/api/routes/memeApi');

//! create server app 
const app = express();

//! connect database
ConnectDB();

//! use cors for cross section data send
app.use(cors({
    origin: true,
    credentials: true
}));

//! middleware
//? for json data
app.use(express.json());



//! API endpoints
//? user api 
app.use('/api/meme', meme_api);
app.get('/', (req, res) =>{
    res.status(200).send("Welcome to Meme Gallery App");
})

module.exports = app;