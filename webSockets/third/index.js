const http = require("http");
const WebSocketServer = require("websocket").server;

let connection = null;

const httpServer = http.createServer((req , res)=>{
    console.log("we have receive the request")
})

const websocket = new WebSocketServer({
    "httpServer"  : httpServer
})
websocket.on("request" ,  request =>{
  connection =  request.accept(null , request.origin);
  connection.on("open" , e => console.log("opened!!!!"))
  connection.on("close" , e => console.log("connection is closed"))
  connection.on("message" , message =>{
    console.log(`Received message ${message.
utf8Data}`)
  })

  setInterval(() => {
    console.log("hello from me")
      connection.send("hello from the server")
  }, 1000);
})

httpServer.listen(8080 , ()=>{
    console.log("My server is listening on port 8080")
})




// on vscode open run and debug then you can send message from the server only

// in browser console. // from more tools then developer tools don't open console directky



// let ws = new WebSocket("ws://localhost:8080")
// ws.onmessage = message => console.log(`we received message from server ${message.data}`)
// we wire the messge when someone from the server send the message we should get something 