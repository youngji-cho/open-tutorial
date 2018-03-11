const express = require('express');
const bodyParser= require('body-parser');
const multer= require('multer');
const _storage= multer.diskStorage({
  destination: (req,file,cb){
    cb(null,'uploads/');
  }
  filename:(req,file,cb){
    cb(null,file.originalname);
  }
});
const upload= multer({storage:_storage});
const fs = require('fs');
const mysql= require('mysql');
const conn = mysql.createConnection({
  host : '35.201.225.24',
  user : 'youngji',
  password: 'whdudwl4143',
  database: 'fermi'
});
conn.connect();
const app =express();
app.use(bodyParser.urlencoded({extended:false}));
app.locals.pretty=true;
app.use('/user',express.static('uploads'));
app.get('views','views_mysql');
app.set('view engine', 'pug');
app.get('/upload', upload.single('userfile'),(req,res)=>{
  res.send('Uploaded: '+req.file.filename);
});
app.post('')
