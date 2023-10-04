const express = require('express')
const app = express()
const http= require('http').Server(app)
const io = require('socket.io')(http)
app.use(express.static(__dirname + '/'));
app.get('/' , function(req , res){
    res.sendFile(__dirname +'/index.html')
})

io.on('connection' , function(socket){
    console.log("usuario conectado");
    socket.on('chat message 1' , function(msg){
        console.log("mensajge del chat 1 : " + msg)
        io.emit('chat message 1 ', msg)
        var today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var formatoHora =""
        
        if (hours >12){
            formatoHora = "" + hours + ':' + minutes+ " pm"
        }else {
            formatoHora = "" + hours + ':' + minutes+ " am"
        }
      
        console.log(formatoHora);
        const datos ={mensaje: msg , chat:1  , hora : formatoHora}
        socket.emit('chat message 1', datos );
    })
    socket.on('chat message 2' , function(msg){
        console.log("mensajge del chat 2 : " + msg)
        io.emit('chat message 2 ', msg)
        var today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var formatoHora =""
        
        if (hours >12){
            formatoHora = "" + hours + ':' + minutes+ " pm"
        }else {
            formatoHora = "" + hours + ':' + minutes+ " am"
        }
      
        console.log(formatoHora);
        const datos ={mensaje: msg , chat:1  , hora : formatoHora}
        socket.emit('chat message 2', datos);
    })
    socket.on('disconnect' , function(msg){
        console.log("ususario desconectado " )
    })
})
http.listen(3000,function(){
    console.log("servidor en puerto 3000")
})