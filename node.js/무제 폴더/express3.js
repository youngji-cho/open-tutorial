const express = require('express');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
  if(req.cookies.auth){
    res.send('<h1>Login Success</h1>');
  }else{
    res.redirect('/login')
  }
});

app.get('/login',(req,res)=>{
  fs.readFile('./public/login.html',(err,data)=>{
    console.log(data);
    res.send(data.toString());
  })
});

app.post('/login',(req,res)=>{
  let login =req.body.login;
  let password = req.body.password;

  if(login =='rint' && password =='1234'){
    res.cookie('auth',true);
    res.redirect('/');
  }else{
    res.redirect('/login');
  }
});

app.listen(3000, (req,res)=>{

  console.log('success');
})
