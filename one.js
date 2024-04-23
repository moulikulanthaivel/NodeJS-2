import fs from "fs"
import path from "path"
import http from "http"
import dotenv from "dotenv"

dotenv.config({'path':'./setting/config.env'})

let PORT= process.env.PORT
let HOST= process.env.HOST

let fileName = path.join(process.cwd(),"send","index.html")

let server= http.createServer((req,resp)=>{
    fs.readFile(fileName,"utf-8",(err,data)=>{
        if(err) throw err
        resp.end(data)
    })
})
server.listen(PORT,HOST,(err)=>{
    if(err) throw err
    console.log(`server running : http://${HOST}:${PORT}`);
})