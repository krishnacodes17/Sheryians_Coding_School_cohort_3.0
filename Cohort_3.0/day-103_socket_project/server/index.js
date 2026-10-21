const app = require("./src/app")
const {createServer} = require('node:http');
const initilizeSocket = require("./src/socket.io/socket");

const httpServer = new createServer(app)


initilizeSocket(httpServer)


const PORT = process.env.PORT || 5000


httpServer.listen(PORT ,()=>{
    console.log("Server is running on PORT : ", PORT);
})