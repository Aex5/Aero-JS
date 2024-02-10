const connection = require("../../../../utils/db");

const getAllDestination = async (request, h) => {
  try {
    const results = await new Promise((resolve, reject) => {
      connection.query("SELECT * FROM `destinations`", (error, results, fields) => {
        if (error) {
          console.error(error);
          reject(error);
        }
        resolve(results);
      });
    });

    return h
      .response({
        status: "success",
        data: results,
      })
      .code(200);
  } catch (error) {
    return h
      .response({
        status: "error",
        message: "Internal Server Error",
      })
      .code(500);
  }
};

exports.getAllDestination = getAllDestination;
