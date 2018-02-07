const express = require('express');
const cookieParser = require('cookie-parser');
const cookieEncryter = require('cookie-encrypter');
const secretKey = 'dfasdfsadfasdfasdfadf';

const app =express();
app.use(cookieParser(secretKey));
app.use(cookieEncryter(secretKey));

app.get('/setcookies',(req,res)=>{
  const cookieParams = {
    httpOnly : true,
    signed: true,
    maxAge: 30000,
  };

  res.cookie('supercookie', 'my text is encrypted',cookieParams);
  res.cookie('supercookie2',{myData:'is encrypted',cookieParams});
  res.cookie('plaincookie', 'my text is plain',{plain:true});
  res.cookie('plaincookie2', {myData:'is plain'},{plain:true});
  res.end('new cookies set');
});

app.get('/getcookies',(req,res)=>{
  console.log('Decrypted cookies ',req.singnedCookies);
  console.log('Plain cookies ',req.cookies);

  res.json({
    encryptedCookies : req.singnedCookies,
    plainCookies : req.cookies
  })
});

app.listen(3000, ()=>{
  console.log('Success!');
})
