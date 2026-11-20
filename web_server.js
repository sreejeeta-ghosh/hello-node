const http = require("node:http");

const server = http.createServer((req,res) =>{
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({message: "Hello from Node.js!",time: new Date()}));
});

server.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});