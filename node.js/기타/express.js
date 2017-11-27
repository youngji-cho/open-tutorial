const express = require('express');
const app = express();
app.get('/',(req,res)=>{
  res.send('Hello Home Page');
});

app.get('/login',()=>{
  res.send('Login Please!');
});

app.listen(3000,()=>{
  console.log('Connected 3000 ports!')
});
