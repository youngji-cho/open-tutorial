const mysql = require('mysql');
const client = mysql.createConnection({
  host: "35.201.225.24",
  user: "youngji",
  password:"whdudwl4143",
  database:'opentutorial'
});

client.query('select * from topic',(error,result,fields)=>{
  if (error){
    console.log('이 문장에 에러가 있습니다.');
  } else {
    console.log(result);
  }
});
