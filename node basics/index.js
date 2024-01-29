import http from "node:http";

const server = http.createServer((req,res)=>{
    console.log("Server has been created");
    if(req.url==="/"){
        res.writeHead(200);
        res.write("Hello from Server");
        return;
    }
    else if(req.url==="/books"){
        res.writeHead(200);
        res.write("Books is requested");
        return;
    }
    res.writeHead(200);
    res.write("Hello from Server");
})

server.listen(3000,()=>{
    console.log("Server has started");
})