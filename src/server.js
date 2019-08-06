const dotenv = require('dotenv').config();

const express = require('express');
const routes = require('./routes');

const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});

server.use(express.json());
server.use(cors());
server.use(routes);

server.listen(3000);