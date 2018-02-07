const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const fs= require('fs');
const mysql = require('mysql');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/user',express.static('uploads'));
app.set('views','./views');
app.set('view engine','pug');

const conn = mysql.createConnection({
  host: "aa1fir4gj2lkhs2.c4kp2nxu0eer.ap-northeast-2.rds.amazonaws.com",
  user: "youngji",
  password:"whdudwl4143",
  database:'open-tutorial'
});

conn.connect((err)=>{
  if (err) throw err;
  console.log("Connected!");
});

app.get('/topic/add',(req,res)=>{
  let sql='select id,title from topic';
  conn.query(sql,(err,rows,fields)=>{
    if(err){
      console.log('error!');
      res.status(500).send('Internal Server Error!')
    } else{
      console.log(rows)
      res.render('add',{topics:rows});
    }
  });
});

app.post('/topic/add',(req,res)=>{
  let title = req.body.title;
  let description = req.body.description;
  let author =req.body.author;
  let sql = 'insert into topic (title,description,author) values(?,?,?)'

  conn.query(sql,[title,description,author],(err,rows,fields)=>{
    if(err){
      console.log('error!');
      res.status(500).send('Internal Server Error!')
    } else {
      res.redirect('/topic');
    }
  });
});

app.get(['/topic','/topic/:id'],(req,res)=>{
  let sql1='select id,title from topic'
  conn.query(sql1,(err,rows1,fields)=>{
    let id = req.params.id; // id 값을 물고 들어왔던지, 아닌지 파악
    if(id){
      let sql2='select * from topic where id=?'
      conn.query(sql2,[id],(err,rows2,fields)=>{
        if(err){
          console.log('error!');
          res.status(500).send('Internal Server Error!')
        } else {
          res.render('view',{topics:rows1,topic:rows2[0]});
        }
      });
    } else {
      res.render('view',{topics:rows1});
    }
  })
});


app.get('/topic/:id/edit',(req,res)=>{
  let sql1='select id,title from topic';
  conn.query(sql1,(err,rows1,fields)=>{
    let id = req.params.id; // id 값을 물고 들어왔던지, 아닌지 파악
    if(id){
      let sql2='select * from topic where id=?'
      conn.query(sql2,[id],(err,rows2,fields)=>{
        if(err){
          console.log('error!');
          res.status(500).send('Internal Server Error!')
        } else {
          res.render('edit',{topics:rows1,topic:rows2[0]});
        }
      });
    } else {
      res.render('edit',{topics:rows1});
    }
  })
});

app.post('/topic/:id/edit',(req,res)=>{
  let title = req.body.title;
  let description = req.body.description;
  let author =req.body.author;
  let id = req.params.id
  let sql = 'update topic set title =?,description=?,author=? where id=?';

  conn.query(sql,[title,description,author,id],(err,rows,fields)=>{
    if(err){
      console.log('error!');
      res.status(500).send('Internal Server Error!')
    } else {
      res.redirect('/topic');
    }
  });
});

app.get('/topic/:id/delete',(req,res)=>{
  let id = req.params.id
  let sql1='select id,title from topic';

  conn.query(sql1,(err,rows1,fields)=>{
    let sql2 = 'select * from topic where id=?';
    conn.query(sql2,[id],(err,rows2)=>{
      if(err){
        console.log('error!');
        res.status(500).send('Internal Server Error!')
      } else {
        res.render('delete',{topics:rows1,topic:rows2[0]});
      }
    });
  });
});

app.post('/topic/:id/delete',(req,res)=>{
  let id = req.params.id
  let sql = 'delete from topic where id=?';

  conn.query(sql,[id],(err,rows,fields)=>{
    if(err){
      console.log('error!');
      res.status(500).send('Internal Server Error!')
    } else {
      res.redirect('/topic');
    }
  });
});

app.listen(3000,()=>{
  console.log('Connected 3000 ports!');
});
