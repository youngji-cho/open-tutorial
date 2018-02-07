const express= require('express');
const request = require('request');
const naver_client_id = 'Pj4B0L4re6R4hCANOPLV';
const naver_client_secret = 'WowPFMQTaJ';
const blog_api='https://openapi.naver.com/v1/search/blog?query='
const public_api_key = '8PZnRzZb4yXsXJQVBDX74xuf8kHhF4cmY5XnEO9apteNWtahGwpA9%2FjrthHB0tX7GBlm9zN1A%2F0rKCx3wGe27g%3D%3D';
const LuArinfo_api='http://apis.data.go.kr/1611000/LuArinfoService/attr/getLuArinfoAttrList?'
const app = express();

app.set('views','./views');
app.set('view engine','pug');

app.get('/regulation',(req,res)=>{
  res.render('main');
});

app.post('/regulation',(req,res)=>{
  let pageNo = 1;let Rows=1;let jrsdInstt=41800;
  let spcfcuCdNm=encodeURIComponent('학교시설보호지구');
  let ladUseNm=encodeURIComponent('단독주택');
  let api_url=`${LuArinfo_api}ServiceKey=${public_api_key}&pageNo=${pageNo}&numOfRows=${Rows}&jrsdInstt=${jrsdInstt}&spcfcuCdNm=${spcfcuCdNm}&ladUseNm=${ladUseNm}&format=json`;
  let api_option= {
    url:api_url,
    method:'GET',
    headers:{'Content-Type': 'text/json;charset=utf-8'}
  }
  request.get(api_option,(error,response,body)=>{
    if (!error && response.statusCode == 200) {
      let jsonbody=JSON.parse(body)
      res.send(jsonbody.luArinfos.field);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
     }
  })
})

app.get('/blog',(req,res)=>{
  let api_url=blog_api+ encodeURI(req.query.query);
  let options={
    url: api_url,
    headers : {'X-Naver-Client-Id':naver_client_id , 'X-Naver-Client-Secret': naver_client_secret}
  };
  request.get(options,(error,response,body)=>{
    if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
  })
});

app.listen(8080,()=> {
  console.log('success!');
});
