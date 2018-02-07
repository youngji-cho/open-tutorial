$(document).ready(function(){
  let socket = io.connect();

  socket.on('message',(data)=>{
    let output ='';
    output += '<li>';
    output += '     <h3>'+data.name+'</h3>';
    output += '     <p>'+data.message+'</p>';
    output += '     <p>'+data.date+'</p>';
    output += '</li>';
    $(output).prependTo('#content');
  });
  $('button').click(()=>{
    socket.emit('message',{
      name : $('#name').val(),
      message : $('#message').val(),
      date : new Date().toUTCString()
    });
  });
});
