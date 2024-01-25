const http = require("http");

class Server {
  constructor(router, middleware) {
    this.router = router;
    this.middleware = middleware;
  }

  start(port) {
    const server = http.createServer(function (req, res) {
      // proses
    });

    server.listen(port, function () {
      console.log("running on " + port);
    });
  }
}

module.exports = Server;
