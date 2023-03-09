const http = require("http");
const fs = require("fs").readFileSync("./index.html");
const PORT = 8686;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write(fs);
    res.end();
});

server.listen(PORT, () => {
    console.log("success");
});
/*
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello, world!');
})

server.listen(3000, () => {
    console.log('success');
})
*/
