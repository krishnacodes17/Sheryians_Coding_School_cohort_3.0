
let http = require("http")


let server = http.createServer((req,res)=>{

    console.log( "this is our header : ",req.headers)
    console.log( "this is our status code :" ,req.statusCode)
    console.log("this is our method : " , req.method)
    res.end("Hellow from node ja")
})



server.listen(3000 , ()=>{
    console.log("server start ")
})