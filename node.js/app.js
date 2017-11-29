const express = require('express');
const bodyParser= require('body-parser');
const multer = require('multer');
const upload = multer({dest:'uploads/'});
const fs =require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.locals.pretty =true;
app.set('views','./views');
app.set('view engine','pug');

app.get('/upload',(req,res)=>{
  res.render('upload');
});
app.post('/upload',upload.single('userfile'),(req,res)=>{
  console.log(req.file);
  res.send('Uploaded'+req.file.filename);
});

app.get('/topic',(req,res)=>{
  fs.readdir('data',(err, files)=>{
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.render('view',{topics:files});
  })
});

app.get('/topic:id',(req,res)=>{
  let id = req.params.id;
  fs.readFile('data/'+id,'utf8',(err,data)=>{
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.send(data);
  });
});

app.post('/topic',(req,res)=>{
  let title = req.body.title;
  let description = req.body.description;
  fs.writeFile('data/'+title, description,(err)=>{
    if (err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.send('Success!');
  });
});
app.listen(3000,()=>{
  console.log('Connected 3000 ports!');
});
