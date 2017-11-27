var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler =function connected(){
  console.log("Connection Successful!");
  eventEmitter.emit("data_received!");
}
eventEmitter.on('connection',connectHandler);
eventEmitter.on('Data Received',function(){
  console.log("Data Received");
});

eventEmitter.emit('connection');
console.log('Program has ended!');
