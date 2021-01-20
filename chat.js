var socket=io.connect("http://localhost:4000");
var roomname=document.getElementById("roomname");
var button=document.getElementById("join");
var myvideo=document.getElementById("myvideo");
var peervideo=document.getElementById("peervideo");
var roominput;
button.addEventListener('click',function(){
    if(roomname.value=="")
    {
        alert("pls enter a room name");
    }
    else{
        roominput=roomname.value;
        socket.emit("join",roominput);
        navigator.getUserMedia({ audio: true, video: { width: 500, height: 400 } },
            function(stream) {
               myvideo.srcObject = stream;
               myvideo.onloadedmetadata = function(e) {
                 myvideo.play();
               };
            },
            function(err) {
               console.log("The following error occurred: " + err.name);
            }
         );
    }
});
