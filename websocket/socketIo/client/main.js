var socket= io('http://localhost:2410');
$("#usershow").hide();
$(".mainArea").hide();
//var chatData = [
//    {date:new Date(),username:"测试用户",message:"大家好啊，这条是测试信息",type:1},
//    {date:new Date(),username:"测试用户",message:"大家好啊，这条是测试信息,这是一条很长的测试信息用来测试换行，大家好啊，这条是测试信息,这是一条很长的测试信息用来测试换行，大家好啊，这条是测试信息,这是一条很长的测试信息用来测试换行",type:2},
//    {date:new Date(),username:"测试用户",message:"大家好啊，这条是测试信息",type:2},
//    {date:new Date(),username:"测试用户",message:"大家好啊，这条是测试信息",type:1},
//    {date:new Date(),username:"测试用户",message:"大家好啊，这条是测试信息",type:2},
//    {date:new Date(),username:"测试用户",message:"大家好啊，这条是测试信息",type:1},
//]
//
var username = "";
function changePanel(name){
    $("#loginInput").hide();
    $("#usershow").show().html("欢迎您:"+name);
    $(".mainArea").show();
    username = name;
}

function login(e){
    var name = $("#username").val();
    if(name==undefined || name.length == 0) {alert("请输入用户名好么？");return;}
    changePanel(name);
    socket.emit('login',{username:name});
}



//消息显示框class = chatMessageBox
function bufferFlush() {
    var box = $(".chatMessageBox")[0];
    console.log(box);
    for(var i = 0 ;i<chatData.length;i++){
        var date = chatData[i].date.toLocaleString();
        var buffer =
            `<li>
                <dl class="type${chatData[i].type}">
                    <dt>${chatData[i].username} ${date}</dt>
                    <dd>${chatData[i].message}</dd>
                </dl>
            </li>`;
        box.innerHTML += buffer;
    }
    scrollBottom();
}
function scrollBottom(){
    //默认滚动
    $('.chatMessageBox').scrollTop( $('.chatMessageBox')[0].scrollHeight );
}
//清屏
function clearScreen(){
    $('.chatMessageBox').html("");
}

function testSendMessage(){
    var msg = $("#inputMessage").val();
    var data = {date:new Date(),username:"测试用户",message:msg,type:2};
    addMessage(data);
    scrollBottom();
    $("#inputMessage").val("");
}

function addMessage(data,type){
    var box = $(".chatMessageBox")[0];
    var date = new Date(data.date).toLocaleString();
    var buffer =
        `<li>
                <dl class="type${type}">
                    <dt>${data.username} ${date}</dt>
                    <dd>${data.message}</dd>
                </dl>
            </li>`;
    box.innerHTML += buffer;
    //滚屏幕
    scrollBottom();
}

$("#inputMessage").keydown(function(e){
    var e = e || event,
        keycode = e.which || e.keyCode;

    if (keycode==13) {
        e.preventDefault();
        sendMessage();
    }
});


function sendMessage(){
    var msg = $("#inputMessage").val();
    var data = {date:new Date().valueOf(),username:username,message:msg};
    //屏幕添加数据
    addMessage(data,2);
    //下发消息
    socket.emit('message',data);
    //清空输入框
    $("#inputMessage").val("");

}
function onMessage(data){
    addMessage(data,1);
}
socket.on('message',onMessage);