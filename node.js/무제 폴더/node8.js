const fs= require('fs');
const http = require('http');
const url = require('url')

const server= http.createServer((req,res)=>{
  let path  = url.parse(req.url).pathname;

  if(path == '/'){
    fs.readFile('./html/about.html',(err,data)=>{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data);
    });
  } else if (path =='/main'){
    fs.readFile('./html/main.html',(err,data)=>{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data);
    });
  } else{
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, ()=>{
  console.log('success')
})
