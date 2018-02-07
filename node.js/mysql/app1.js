const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mysql = require('mysql');

app.use(bodyParser.urlencoded({extended:false}));
app.use('/user',express.static('uploads'));
app.set('views','./views');
app.set('view engine','pug');

const conn =mysql.createConnection({
  host: "aa1fir4gj2lkhs2.c4kp2nxu0eer.ap-northeast-2.rds.amazonaws.com",
  user: "youngji",
  password: "whdudwl4143",
});

conn.connect((err)=>{
  if (err) throw err;
  console.log("Connected!");
})

app.get('/rec',(req,res)=>{
  let sql = "select date, average_price from energy.rec_price where land_or_jeju ='total'" ;

  conn.query(sql,(err,rows,fields)=>{
    if(err){
      console.log('error');
      res.status(500).send('Internal Sever Error')
    } else {
      console.log(rows);
      res.render('view_rec',{recs:rows});
    }
  })
});

app.get('/topic',(req,res)=>{
  let sql= 'select id,title from `open-tutorial`.topic';
  conn.query(sql,(err,rows,fields)=>{
    if(err){
      console.log('error');
      res.status(500).send('Internal Sever Error')
    } else {
      console.log(rows);
      res.render('view_topic',{topics:rows});
    }
  })
});

app.listen(3000,()=>{
  console.log('Connected 3000 ports!');
});
