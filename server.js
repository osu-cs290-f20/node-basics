var http = require('http');

var server = http.createServer(function (req, res) {
  console.log("== request received");
  console.log("  -- req.method:", req.method);
  console.log("  -- req.url:", req.url);
  console.log("  -- req.headers:", req.headers);

  var content = "<html>";
  content += "<body>";
  content += "<h1>Hello CS 290!</h1>";
  content += "<p>You requested this page: " + req.url + "</p>";
  content += "</body>";
  content += "</html>";

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(content);
  res.end();
});

server.listen(8000, function () {
  console.log("== server is listening on port 8000");
});
