const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routesUrls = require('./router')

const dotenv = require('dotenv')

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('Database connected'))

app.use(express.json());
app.use('/app', routesUrls);

app.listen(4000, () => console.log('server up'));