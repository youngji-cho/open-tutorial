const express=require('express');
const app=express();
app.set('view engine','pug');
app.set('views','./views');
app.use(express.static('public'));

app.get('/template',(req,res)=>{
  res.render('temp',{time:Date(),title:'pug'});
});
app.get('/',(req,res)=>{
  res.send('Hello home page');
});
app.get('/dynamic',(req,res)=>{
  let lis = '';
  for(let i =0;i<5;i++){
    lis = lis+ `<li>coding</li>`
  }
  let time = Date();
  let output= `
  <!DOCTYPE html>
  <html>
      <head>
          <title>Sample Page</title>
      </head>
      <body>
          Hello dynamic!
          <ul>${lis}</ul>
          ${time}
      </body>
  </html>`
  res.send(output);
})
app.get('/route',(req,res)=>{
  res.send('Hello Router, <img src="/route.png">')
});
app.get('/login',(req,res)=>{
  console.log('Connected 3000 port!');
});
app.listen(3000,()=>{
  console.log('Connected 3000 port!');
});
