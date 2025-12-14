import express from "express"
import http from "http"
import {initializeWebSocket} from "./chatSocket.js"
const app = express();

const server = http.createServer(app);


initializeWebSocket(server)

server.listen(3000 , ()=>{
    console.log("connected to 3000")
})