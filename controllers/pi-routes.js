const log = require("con-logger");
const Users = require("../models/users");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/api/getUpdate", function(req, res) {
    Users.findOne({ id: "5cc916672f9738ab21ca860f" }, (err, data) => {
      if (err) console.log(err);
      console.log(data.sensors);
      res.send(data.sensors);
    });
  });
  //   app.get("/api/getUpdate", isAuthenticated, function(req, res) { // NOTE: Does not require any req.body - reads all the paramas off the authenticated user
  //     Users.findOne({ id: req.user.id }, (err, data) => {
  //       if (err) console.log(err);
  //       console.log(data);
  //       res.send(data);
  //     });
  //   });
};
