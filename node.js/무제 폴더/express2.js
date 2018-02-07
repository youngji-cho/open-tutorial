const express = require('express');
const cookieParser = require('cookie-parser');
const app =express();


app.use(cookieParser());

app.get('/getCookie',(req,res)=>{
  res.send(req.cookies);
});

app.get('/setCookie',(req,res)=>{
  res.redirect('/getCookie')
});

app.listen(3000,()=>{
  console.log('Server Running at');
});
