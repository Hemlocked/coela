var http = require('http');

var fs = require('fs');

var pages = require('./static_pages');

var server = http.createServer();

var template = fs.readFileSync(__dirname + '/index.ejs', 'utf-8');

var ejs = require('ejs');


server.on ('request', function(req, res) {
    var data = ejs.render(template, {
        content: pages.index
    });
        res.writeHead(200, {'Content-Type': 'text/html'});

        res.write(data);

        return res.end();

    });

server.listen(8000, '127.0.0.1');

console.log("server listening ...");

