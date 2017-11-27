const http = require('http'); //웹서버를 하기 위해서 http 모듈이 필요하다.
const hostname ='127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => { // http중 createServer 라는 함수를 호출한다.
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  res.end('Hellow World\n');
});

server.listen(port, hostname, ()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
});  // litsen이 완료되었을때 비동기적으로 실행된다.

/* 똑같이 해보자 */
