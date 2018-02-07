const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
  fs.readFile('./data/text.html','utf8',(error,data)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data);
  });
});
server.listen(8081,()=>{
  console.log('server is running!');
});

server.on('request',()=>{
  console.log('request');
});

server.on('connection',()=>{
  console.log('connected!');
})








/*const test =()=>{
  server.close();
};

setTimeout(test,1000);*/
