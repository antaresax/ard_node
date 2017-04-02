// http set
var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
var path    = require('path');
// http set

var SerialPort = require("serialport"); // serialport set
var www ="/dev/cu.usbserial-DA01MHA4"
 var serialport = new SerialPort(www);



// http set

var HOST = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

/////////////////////////////

app.use(express.static(path.join(__dirname,"node_ard"))); // test folder index.html

var port = process.env.PORT || 8358;
http.listen(port, function(){
  console.log("server on!: http://localhost:8358/");
});

///////////////////////////////





io.on('connection', function(socket){


socket.on('user', function(data){
   console.log('123');
 io.emit('user','data');

  });





socket.on('20', function(str){
   console.log(str);
 io.emit('20',str);

});


socket.on('12', function(str){
   console.log(str);
 io.emit('12',str);

});


}); // io end






serialport.on('open', function(){
  console.log('Serial Port Opend');
  serialport.on('data', function(data){

//io.on('connection', function(socket){
     data=data.toString('utf8');
     data1 =data.substring(0,1);
     data2 =data.substring(2,5);
         data3 =data.substring(5,8);



                 console.log(data1);

 io.emit('11',data1+":aa:"+data2);
  io.emit('12',data2);
  //});

  });
});





server.bind(port, HOST);
