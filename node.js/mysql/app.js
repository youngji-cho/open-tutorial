const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const fs= require('fs');
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: "35.201.225.24",
  user: "youngji",
  password:"whdudwl4143",
  database:'opentutorial'
});

conn.connect((err)=>{
  if (err) throw err;
  console.log("Connected!");
});

const query1= 'insert into topic (title, description, author) values(?,?,?)';
const param1 = ['Supervisor', 'Watcher','graphittie'];

conn.query (query1,param1,(err,rows,fields)=>{
  if(err){
    console.log(err);
  } else{
    console.log('rows',rows.inserId);
    console.log('connected!');
  }
});
