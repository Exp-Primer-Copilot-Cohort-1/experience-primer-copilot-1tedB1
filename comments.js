//create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

//function to connect to database
const db = require('./db');
function connectDB(){
    db.connect((err)=>{
        if(err){
            console.log('unable to connect to database');
            process.exit(1);
        }else{
            console.log('connected to database');
        }
    })
}