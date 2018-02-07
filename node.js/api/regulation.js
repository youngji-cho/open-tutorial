const express= require('express');
const request = require('request');
const mysql= require('mysql');
const bodyParser = require('body-parser');
const public_api_key = '8PZnRzZb4yXsXJQVBDX74xuf8kHhF4cmY5XnEO9apteNWtahGwpA9%2FjrthHB0tX7GBlm9zN1A%2F0rKCx3wGe27g%3D%3D';
const LuArinfo_api='http://apis.data.go.kr/1611000/LuArinfoService/attr/getLuArinfoAttrList?'
const LuLuinfo_api='http://apis.data.go.kr/1611000/LuArinfoService/attr/getLuLuinfoAttrList?'

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
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
  console.log("Msyql Connected!");
});

app.get('/Arinfo',(req,res)=>{
  res.render('Arinfo');
});

app.post('/Arinfo',(req,res)=>{
  let cmptncAreaCd = req.body.cmarea;
  let spcfcuCdNm=encodeURIComponent(req.body.sparea);//용도지역
  let pageNo =req.body.page;let Rows=req.body.rows;
  let api_url=`${LuArinfo_api}ServiceKey=${public_api_key}&pageNo=${pageNo}&numOfRows=${Rows}&cmptncAreaCd =${cmptncAreaCd}&spcfcuCdNm=${spcfcuCdNm}&format=json`;
  let api_option= {
    url:api_url,
    method:'GET',
    headers:{'Content-Type': 'text/json;charset=utf-8'}
  };
  let sql = 'insert into mysql_Arinfo (cmarea,sparea,page,rows) values(?,?,?,?)'
  request.get(api_option,(error,response,body)=>{
    if (!error && response.statusCode == 200) {
      conn.query(sql,[req.body.cmarea,req.body.sparea,req.body.page,req.body.rows],(err,rows,fields)=>{
        if(err){
          console.log('mysql error!');
          res.status(500).send('Internal Server Error!')
        } else{
          let jsonbody=JSON.parse(body)
          res.send(jsonbody.luArinfos.field);
        }
      });
    }
    else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});


app.get('/Luinfo',(req,res)=>{
  res.render('Luinfo');
});


app.post('/Luinfo',(req,res)=>{
  let jrsdInstt=req.body.jrsd;
  let spcfcuCdNm=encodeURIComponent(req.body.sparea);
  let ladUseNm=encodeURIComponent(req.body.landuse);
  let pageNo = req.body.page;let Rows=req.body.rows;
  let api_url=`${LuLuinfo_api}ServiceKey=${public_api_key}&jrsdInstt=${jrsdInstt}&spcfcuCdNm=${spcfcuCdNm}&ladUseNm=${ladUseNm}&pageNo=${pageNo}&numOfRows=${Rows}&format=json`;
  console.log(api_url);
  let api_option= {
    url:api_url,
    method:'GET',
    headers:{'Content-Type': 'text/json;charset=utf-8'}
  };
  let sql = 'insert into mysql_Luinfo (jrsd,sparea,landuse,page,rows) values(?,?,?,?,?)'
  request.get(api_option,(error,response,body)=>{
    if (!error && response.statusCode == 200) {
      conn.query(sql,[req.body.jrsd,req.body.sparea,req.body.landuse,req.body.page,req.body.rows],(err,rows,fields)=>{
        if(err){
          console.log('error!');
          res.status(500).send('Internal Server Error!')
        }else{
          let jsonbody=JSON.parse(body)
          res.send(jsonbody);
        }
      });
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
     }
  });
});

app.listen(3000,()=> {
  console.log('success!');
});
