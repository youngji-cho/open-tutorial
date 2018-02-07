const fs= require('fs');
const http = require('http');
const url = require('url')
const port = process.env.PORT || 3000,

const server= http.createServer((req,res)=>{
  let path  = url.parse(req.url).pathname;

  if(req.method =='GET'){
    fs.readFile('./html/html_page.html',(err,data)=>{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data);
    });
  } else if (req.method =='POST'){
    req.on('data',(data)=>{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end('<h1>'+data+'</h1>');
    })
  } else{
    res.writeHead(404);
    res.end('<h1>eroo</h1>');
  }
});

server.listen(port, ()=>{
  console.log('success')
})
