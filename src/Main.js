/* Hello World in NodeJS */
//console.log("Hello, World!");

//var http = require("http");

//http.createServer(function(request, response){
    /*
        HTTP 헤더 전송
        HTTP Status: 200 : OK
        Content Type: text/plain
    */
   //response.writeHead(200, {'Content-Type': 'text/plain'});

    /*
        Response Body 를 "Hello Wolrd" 로 설정
    */
   //Response.end("Hello World\n");

//}).listen(8081);

//console.log("Server running at http://127.0.0.1:8081");




//var fs = require("fs");
/*
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program has ended");
*/
/*
fs.readFile('input.txt', function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program has ended");
*/


// event 모듈 사용
var events = require('events');

// EventEmitter 객체 생성
var eventEmitter = new events.EventEmitter();

// EventHandler 함수 생성
var connectHandler = function connected() {
    console.log("Connection Successful");

    // data_recevied 이벤트를 발생시키기
    eventEmitter.emit("data_received");
};

// connection 이벤트와 connetHandler 이벤트 핸들러를 연동
eventEmitter.on('connection', connectHandler);

// data_received 이벤트와 익명 함수와 연동
// 함수를 변수안에 담는 대신에, .on() 메소드의 인자로 직접 함수를 전달
eventEmitter.on('data_received', function(){
    console.log("Data Received");
});

// connection 이벤트 발생시키기
eventEmitter.emit('connection');

console.log("Program has ended");