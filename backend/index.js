const express =require('express');
const mongoose =require('mongoose')
require('dotenv').config();

const PORT =process.env.PORT || 3002;
const URl =process.env.MONGODB_URL;

// import db nd call the connect method ;
require('./config/database').connect();

const app = express();



app.listen(PORT,()=>{
    console.log(`Backend is Started at ${PORT}` );
    
    
})