const express= require('express');
const session =require('express-session');
const app = express();

app.use(session({
  secret : 'secret key',
  resave : false,
  saveUninitialized: true,
  cookie:{
    maxAge: 60*1000,
    bcd: 'fdsfsd'
  }
}));

app.use((req,res)=>{
  req.session.now = (new Date()).toUTCString();
  res.send(req.session);
});

app.listen(3000, ()=>{
  console.log('success!');
});
