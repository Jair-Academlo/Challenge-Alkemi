const express = require('express');
const cors = require('cors');

//Init Express
const app = express();

//Enable Cors
app.use(cors());

//Enable incomig JSON data
app.use(express.json());

//Endpoints
//app.use('/api/v1/characters');

module.exports = { app };
