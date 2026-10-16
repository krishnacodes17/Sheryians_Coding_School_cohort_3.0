import { Server } from "socket.io";

export default function initializeSocket(httpServer) {
  const io = new Server(httpServer);


    io.on("connection" ,(socket)=>{

        console.log("user connected ", socket.id);

        socket.on("disconnect", ()=>{
            console.log("user disconnect ");
        })


        socket.on("elon" , (data)=>{
            console.log("pushpa " , data);

            // io.emit("musk" , "sab theek baa  ")    // yeha io.emit use kar rahe hai too jitne bhi user musk ko listen kar rahe hoge unke pass server ki taraf se seme msg jayega 

            // socket.emit("musk", "perticular bande ke liye ")   // jisne event fire kiya hoga usske pass hi server kaa msg aayega 

            socket.broadcast.emit("musk","mai broadcast hu ")    // yeha per jo event fire karega server ko ussko chod ke sab ko server ki tarf me server kaa msg milega                                 

        })

    


    })


}
