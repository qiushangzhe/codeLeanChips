var io = require('socket.io')(2410);

io.on('connection', function (socket) {
    socket.on('login', function(data){

    });
    socket.on('message',function(data){
        console.log(data.username,"发来一条消息");
        console.log("时间是:",data.date);
        console.log("内容是:",data.message);
        console.log("广播给其他人");
        socket.broadcast.emit('message',data);
    });
});
