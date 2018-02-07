const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser('asdfasdfdsafsdaf;hfewhfwend'));

app.get('/count',(req,res)=>{
  let count  = parseInt(req.signedCookies.count);
  if (count){
    count++
  } else {
    count = 1;
  }
  res.cookie('count',count,{signed:true});
  res.send('count:'+count);
});

app.listen(3000,()=>{
  console.log('success!')
})
