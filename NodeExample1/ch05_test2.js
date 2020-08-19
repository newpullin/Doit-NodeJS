var http = require('http');

var server = http.createServer();

var port = 3000;
server.listen(port, function () {
    console.log('start');
});

server.on('connection', function (socket) {
    var addr = socket.address();
    console.log("%s, %d", addr.address, addr.port);
});

server.on('request', function (req, res) {
    console.dir(req);
    res.writeHead(200, { "content-Type": "text/html; charset=utf-8" });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<body>");
    res.write("<h3>응답입니다.</h3>");
    res.write("</body>");
    res.write("</html>");
    res.end();
});

server.on('close', function () {
    console.log('exit');

});