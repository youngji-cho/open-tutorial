const express = require('express');
const app =express();

const routerA= express.Router();
const routerB= express.Router();

routerA.get('/index',(req,res)=>{
  res.send('<h1>Router A</h1>');
});

routerB.get('/index',(req,res)=>{
  res.send('<h1>Router A</h1>');
});

app.use('/a',routerA);
app.use('/b',routerB);
app.listen(3000,()=>{
  console.log('Server Running!');
});

/*
app.use('/:id',(req,res,next)=>{
  let name = req.params.id;
  console.log(name);
  res.send(name);
});
app.use('/',(req,res,next)=>{
  let name2 = req.query.id;
  console.log('query is '+name2);
  res.send(name2);
});

app.listen(3000,()=>{
  console.log('Server Running!');
})*/
