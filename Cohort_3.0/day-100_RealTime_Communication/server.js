import app from "./src/app.js/app.js";
import {createServer} from  "node:http"
import {Server} from "socket.io"

let httpServer = createServer(app)


// io means =>> hole server
//  socket means =>> single user            


const io = new Server(httpServer)
              
io.on("connection" , (socket)=>{
    console.log("user is connected ", socket.id);
    console.log("MSG : " );


    socket.on("disconnect" , (socket)=>{    // disconnect  spelling always keep same 
        console.log("user is disconnect ");
    })
})





let PORT = 3000 

httpServer.listen(PORT,()=>{
    console.log("server is running on Port : ", PORT);
})