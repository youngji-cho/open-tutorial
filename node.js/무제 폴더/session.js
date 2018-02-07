const express = require('express');
const session = require('express-session');
const FileStore  = require('session-file-store')(session);
const bodyParser =require('body-parser');
const app =express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({
  secret: '2312312312',
  resave: false,
  saveUninitialize: true,
  store: new FileStore()
}));

app.get('/auth/login',(req,res)=>{
  let output = `
  <form action="/auth/login" method= "post">
    <p>
      <input type="text" name="username" placeholder="username">
    </p>
    <p>
      <input type="password" name="password" placeholder="password">
    </p>
    <p>
      <input type="submit">
    </p>
  </form>
  `
  res.send(output);
});

app.post('/auth/login',(req,res)=>{
  let user = {
    username: 'egoing',
    password: '111',
    displayName : 'Egoing'
  };
  let uname= req.body.username;
  let pwd = req.body.password;
  if (uname===user.username && pwd === user.password){
    req.session.displayName =user.displayName;
    res.redirect('/welcome');
  } else {
    res.send('Who are you? <a href="/auth/login">login</a>')
  }
});

app.get('/welcome',(req,res)=>{
  if(req.session.displayName){
    res.send(`
      <h1>Hello, ${req.session.displayName}</h1>
      <a href="/auth/logout">logout</a>
    `);
  } else {
    res.send(`
      <h1>Welcome</h1>
      <a href="/auth/login">Login</a>
    `);
  }
});

app.get('/auth/logout',(req,res)=>{
  delete req.session.displayName;
  res.redirect('/welcome');
})

app.get('/count',(req,res)=>{
  if(req.session.count){
    req.session.count++;
  } else {
    req.session.count=1;
  }
  res.send('count: '+req.session.count);
});

app.listen(3000, ()=>{
  console.log('Success!');
});
