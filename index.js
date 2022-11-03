const http = require("http")
const date = require("./DateTimeModule")


http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html" })
    res.end(date.myDateTime())
}).listen(8080)