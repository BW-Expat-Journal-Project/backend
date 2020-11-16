require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet'); 
const morgan = require ("morgan");

//router
const postsRouter = require('../posts/posts-router')

//server
const server = express();

//middleware
server.use(cors());
server.use(express.json()); 
server.use('/',helmet());
server.use('/', morgan('--API testing for Expat Journal BuildWeek--'))

//routes
server.use('/api/posts', postsRouter)


server.get('/', (req, res) =>{
    res.status(200).json({server: 'Expat Journal BuildWeek'})
})

module.exports = server;