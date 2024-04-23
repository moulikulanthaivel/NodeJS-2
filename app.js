// const http = require(http)
// const dotenv = require(dotenv)
// const path =require(path)

import http from "http"
import dotenv from "dotenv"


dotenv. ({"path":"./setting/config.env"})

let PORT=process.env.PORT
let HOST=process.env.HOST

let server=http.createServer((req,resp)=>{
    resp.end("hello")
})
server.listen(PORT,HOST,(err)=>{
    if(err) throw err
    console.log(`server running : http://${HOST}:${PORT}`);
})