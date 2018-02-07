const express= require('express');
const request = require('request');
const xml2js = require('xml2js');
const xml_parser = new xml2js.Parser();
const public_api_key = '8PZnRzZb4yXsXJQVBDX74xuf8kHhF4cmY5XnEO9apteNWtahGwpA9%2FjrthHB0tX7GBlm9zN1A%2F0rKCx3wGe27g%3D%3D';
const smp_api='https://openapi.kpx.or.kr/openapi/smp1hToday/getSmp1hToday?areaCd=1'

const app = express();
app.get('/smp',(req,res)=>{
  let api_url=`${smp_api}&ServiceKey=${public_api_key}`;
  let api_option= {
    url:api_url,
    method:'GET',
    headers:{'Content-Type': 'text/json;charset=utf-8'}
  };
  request.get(api_option,(error,response,body)=>{
    if (!error && response.statusCode == 200) {
      xml_parser.parseString(body,(err,result)=>{
        res.send(result.response.body[0].items[0].item[0]);
      });
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
     }
  })
});

app.listen(3000,()=> {
  console.log('success!');
});
