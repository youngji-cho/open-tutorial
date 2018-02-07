const http = require('http');
const fs = require('fs');
const socketio = require('socket.io');

const server = http.createServer((req,res)=>{
  fs.readFile('HTMLPage.html',(err,data)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data);
  });
})

server.listen(3000,()=>{
  console.log('Success!');
});

const io = socketio.listen(server);
io.sockets.on('connection',(socket)=>{
  socket.on('rint',(data)=>{
    console.log('Client Send Data', data);
    socket.emit('smart',data);
  })
});
