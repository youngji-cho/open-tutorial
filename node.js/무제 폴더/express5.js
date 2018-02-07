const express = require('express');
const session = require('express-session');
const app = express();
app.use(session({
  secret: '123231fsdfsdfsf@#@#@',
  resave: false,
  saveUninitialized: true
}));
app.get('/count',(req,res)=>{
  if(req.session.count){
    req.session.count++
  } else {
    req.session.count=1;
  }
  res.send('Count: '+req.session.count);
});
app.listen(3000,()=>{
  console.log('connected!')
})
