const express = require('express');
const app = express();
const bodyParser =require('body-parser');

app.set('views','./views');
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.send('Hello home page');
});

app.get('/form',(req,res)=>{
  res.render('temp');
});

app.get('/form_receiver',(req,res)=>{
  let title =req.query.title;
  let description = req.query.description;
  res.send(title+','+description);
});

app.post('/form_receiver',(req,res)=>{
  let title = req.body.title;
  let description = req.body.description;
  res.send(tile+','+description);
});

app.get('/topic/:id',(req,res)=>{
  let topics = [
    'Javascript is...',
    'Nodejs is ...',
    'Express is ...'
  ];
  let output = `
  <a href='/topic?id=0'>Javascript</a><br>
  <a href='/topic?id=1'>Nodejs</a><br>
  <a href='/topic?id=2'>Express</a><br><br>
  ${topics[req.query.id]}
  `
  res.send(output);
});
app.listen(3000,()=>{
  console.log('Connected 3000 port!');
});
