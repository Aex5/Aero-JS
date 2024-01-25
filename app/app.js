// Import class-class yang telah Anda buat
const Middleware = require('../core/middleware');
const Router = require('../core/router');
const Server = require('../core/server');

// Buat instance dari Middleware, Router, dan Server
const middleware = new Middleware();
const router = new Router();
const server = new Server(router, middleware);

// Tambahkan middleware dan route sesuai kebutuhan Anda
middleware.use(/* tambahkan middleware Anda */);
router.get('/path', /* tambahkan handler untuk metode GET */);
router.post('/path', /* tambahkan handler untuk metode POST */);

// Mulai server pada port tertentu
const port = 8080; // Gantilah dengan port yang Anda inginkan
server.start(port);
