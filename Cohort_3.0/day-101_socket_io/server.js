import app from "./src/app.js";
import {createServer} from "node:http"
import initializeSocket from "./src/socket.io/socket.server.js";

const httpServer = new createServer(app)

initializeSocket(httpServer)



let PORT = 3000


httpServer.listen(PORT,()=>{
    console.log("server is running on Port : ", PORT);
})