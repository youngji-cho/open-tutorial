const express = require('express');
const bodyParser= require('body-parser');
const fs =require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.set('views','./views');
app.set('view engine', 'pug');
app.locals.pretty =true;

app.get('/topic/new',(req,res)=>{
  res.render('new');
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
