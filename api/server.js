const express = require('express');
const cors = require('cors');
const helmet = require('helmet'); 
const morgan = require ("morgan");
const server = express()

server.use(cors());
server.use(express.json()); 
server.use('/',helmet());
server.use('/', morgan('--API testing for Expat Journal BuildWeek--'))

server.get('/', (req, res) =>{
    res.status(200).json({server: 'Expat Journal BuildWeek'})
})

module.exports = server;