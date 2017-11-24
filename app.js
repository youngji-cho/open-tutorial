var express =require('express');
var app = express();

app.locals.pretty= true;
app.set('view engine','jade');
app.set('views','./views');
app.use(express.static('public'));
app.get('/template',function(req,res){
  res.render('temp',{time:Date(),title:'Jade'});
});
app.get('/',function(req,res){
  res.send('Hello home page');
});
app.get('/dynamic',function(req,res){
  var lis= '';
  for(var i=0; i<5; i++){
    lis= lis+ '<li>coding</li>';
  }
  var time = Date();
  var output = ``




});
