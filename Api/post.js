const express = require('express');
const bodyParser= require('body-parser');
const app = express();
app.locals.pretty= true;
app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'));
app.get('/form', (req,res)=>{
  res.render('form');
});
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/form_receiver', (req, res)=>{
  res.send('Not Accessible');
});

app.post('/form_receiver', (req,res)=>{
  let title = req.body.title;
  let description= req.body.description;
  res.json(title+','+description);
});
app.get('/topic',(req,res)=>{
  let topics=[
    'Javascript is ...',
    'Nodejs is ...',
    'Express is ...'
  ];
  let str = `
  <a href="/topic?id=0">JavaScript</a><br>
  <a href="/topic?id=1">Nodejs</a><br>
  <a href="/topic?id=2">Express</a><br><br>
  ${topics[req.query.id]}
  `;
  res.send(str);
});


app.get('/topic/:id', (req,res)=>{
  let topics = [
    'Javascript is....',
    'Nodejs is...',
    'Express is...'
  ];
  let output = `
  <a href="/topic?id=0">JavaScript</a><br>
  <a href="/topic?id=1">Nodejs</a><br>
  <a href="/topic?id=2">Express</a><br><br>
  ${req.params.id}
  `
  res.send(output);

});

app.get('/topic/:id/:mode', (req,res)=>{
  res.send(req.params.id+ ','+req.params.mode)
});

app.get('/',(req,res)=>{
  res.send('Hello home page');
});

app.get('/dynamic',(req,res)=>{
  let lis = '';
  for(let i=0; i<5; i++){
    lis= lis+'<li>coding</li>';
  }
  let time = Date();
  let output = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
        Hello, Dynamic!
        <ul>
          ${lis}
        </ul>
        ${time}
    </body>
  </html>`;
  res.send(output);
});
app.get('/route',(req,res)=>{
  res.send('Hellow Router,<img src= "/route.png">');
});

app.get('/login',(req,res)=>{
  res.send('<h1>Login please</h1>');
});
app.listen(3000,()=>{
  console.log('connected 3000 port!');
});
