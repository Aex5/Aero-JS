const {getAllDestination} = require('./handlers/destinations')
const {getTopDest}        = require('./handlers/destinations/top_dest')
const routes = [
  {
    path: "/api",
    method: "GET",
    handler: getAllDestination,
  },
  {
    path: "/api/top-dest",
    method: "GET",
    handler: getTopDest,
  }
];

module.exports = routes;
