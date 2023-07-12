const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const model = require('./bot/route');
const app = express();

app.use(cors());
app.use('/chat',model);

app.listen(process.env.PORT,()=>{
    console.log('app runnning on http://localhost:'+process.env.PORT);
})


