module.exports = {
    start: (io) => {  //objecto de socketio
        io.on("connection", (socket) => {
            console.log("user connected " + socket.id)
            
            socket.on("disconnect", () =>{
              console.log("user desconect " + socket.id);
            })

            io.sockets.emit('mensaje', { msg: "hola como estas..."})

            socket.on('mensaje', function(msg){
             console.log(msg)
            })
        })
    }
}