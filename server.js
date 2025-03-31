import http from "http"; 

const PORT = 3000; 

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Curso de Node.js");
});

server.listen(3000, () => {
    console.log(`servidor escutando na porta ${PORT}`);
});