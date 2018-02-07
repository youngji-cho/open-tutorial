const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended:false
}));

const DummyDB=(function(){
  let DummyDB ={};
  let storage =[];
  let count =1;

  DummyDB.get =function (id){
    if (id) {
      id = (typeof id=='string')?Number(id): id;
      for (let i in storage) if (storage[i].id ==id){
        return storage[i];
      }
    } else {
      return storage;
    }
  }

  DummyDB.insert = function(data){
    data.id = count++;
    storage.push(data);
    return data;
  }
  DummyDB.remove = function(id) {
    id = (typeof id =='string')? Number(id):id;

    for (let in storage) if (storage[i].id ==id){
      storage.splice(i,1);
      return true;
    }
    return false;
  };
  return DummyDB;
})();

app.get('/user',(req,res)=>{
  res.send(DummyDB.get());
})
app.get('/user/:id',(req,res)=>{
  res.send(DummyDB.get(req.params.id));
});
app.post('/user/',(req,res)=>{
  let name =req.body.name;
  let region = req.body.region;

  if(name && region) {
    res.send(DummyDB.insert({
      name: name,
      region : region
    }))
  } else {
    throw new Error('error');
  }
});

app.put('/user/:id',(req,res)=>{
  let id = req.params.id;
  let name = req.body.name;
  let region = req.body.region;
  let item = DummyDB.get(id);
  item.name = name || item.name;
  item.region = region || item.region;
  res.send(item);
});
app.delete('/user/:id',(req,res)=>{
  res.send(DummyDB.remove(req.params.id));
});
app.listen(3000, ()=>{
  console.log('success!');
})
