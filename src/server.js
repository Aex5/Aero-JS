const Hapi = require("@hapi/hapi");
const routes = require("./api/routes");

const init = async () => {
  const server = Hapi.server({
    port: 8080, 
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  console.log("Server running on", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
