import express from "express";
import http from "http";
import { WebSocketServer} from "websocket";

const app = express ();
const port = 3000;

const server = http.createServer(app);

const wss = new WebSocketServer({server});

wss.on("connection", async(ws)) => { 
     console.log("someone connected");
     ws.on("message",(message)=> {
        console.log("received: %s, message");
        wss.send('hello,you sent ->${message}');
     });
 });

server.listen(port);