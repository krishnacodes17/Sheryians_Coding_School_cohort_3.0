const { Server } = require("socket.io");

function initilizeSocket(httpServer) {
  const io = new Server(httpServer, {
    cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"],
        },
  });


  // io.use((socket , next )=>{
  //     console.log("headers : " , socket.handshake.headers.authorization);
  //     const token = socket.handshake.headers.authorization  

  //     if(!token){
  //       return next(new Error("Authentication failed "))
  //     }

  //     next()

  // })


  io.on("connection", (socket) => {
    console.log("socket ID : ", socket.id);

    socket.on("disconnect", () => {
      console.log("user disconnect");
    });



    socket.on("user-message", (data) => {
      console.log("user message:", data);

      const datas = {
        id : socket.id,
        data: data
      }

      io.emit("musk",datas)
    });


  });
  
  return io;
}

module.exports = initilizeSocket;
