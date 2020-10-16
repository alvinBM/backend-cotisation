const http = require("http");
const app = require("./app");

app.set("port", 3600);

const server = http.createServer(app);

server.listen( process.env.PORT || 3600);