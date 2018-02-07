const http = require('http');
/*
const server=http.createServer((req,res)=>{
  let date = new Date();
  date.setDate(date.getDate()+7);

  res.writeHead(200,{
    'Content-Type':'text/html',
    'Set-Cookie':[
      'breakfast= toast;Expires =' + date.toUTCString(),
      'dinner=chicken'
    ]
  });
  res.end('<h1>'+req.headers.cookie+'</h1>');
})


const server= http.createServer((req,res)=>{
  res.writeHead(302,{'Location':'http://www.fermi.me'});
  res.end();
});
*/
const server = http.createServer((req,res)=>{
  res.writeHead(404);
  res.end();
});

server.listen(3000,()=>{
  console.log('success!');
});
