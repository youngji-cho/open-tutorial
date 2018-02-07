const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use((req,res)=>{
  res.send({
    method : req.method,
    query: req.query,
    body: req.body
  });
});

app.listen(3000,()=>{
  console.log('success');
})
