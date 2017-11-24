const http = require('http');
const url =require('url');
const fs = require('fs');

http.createServer((request, response)=>{
  const path = url.parse(request.url, true).pathname; //url에서 path 추출
  if (request.method ==='GET'){//request method가 get이면
    if (path=== '/about'){
      response.writeHead(200,{'Content-Type':'text/html'});
      fs.readFile(__dirname+'/about.html',(err,data)=>{
        if (err){
          return console.error(err);
        }
        response.end(data,'utf-8');
      });
    } else if (path ==='/'){
      response.writeHead(200,{'Content-Type':'text/html'});
      fs.readFile(__dirname + '/main.html', (err,data)=>{
        if (err){
          return console.error(err);
        }
        response.end(data,'utf-8');
      });
    }else{
      response.statusCode=404;
      response.end('주소가 없습니다.');
    }
  }
}).listen(8080);
