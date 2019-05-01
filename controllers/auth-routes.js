const passport = require("passport");
const Auth = require("../models/auth");
const log = require("con-logger");
const Users = require("../models/users");

module.exports = function(app) {
  app.get("/register", function(req, res) {
    log("Registration page");
    res.send("Registration page");
  });

  app.post("/register", function(req, res) {
    const deviceId = req.body.deviceId;
    Auth.register(
      new Auth({ username: req.body.username }),
      req.body.password,
      function(err, account) {
        if (err) {
          log("Registration page\naccount", account);
          res.send("Registration page\naccount " + account);
          // res.render("register", { account: account });
        }

        passport.authenticate("local")(req, res, function() {
          log(req.user.id);
          Users.create(
            {
              id: req.user.id,
              user: req.user.username,
              deviceId: deviceId
            },
            (err, user) => {
              if (err) log(err);
              log(user);
              res.send("User" + req.user.id);
            }
          );
        });
      }
    );
  });

  app.get("/login", function(req, res) {
    log("Login Screen");
    res.send("Login Screen");
  });

  app.post("/login", passport.authenticate("local"), function(req, res) {
    res.send(req.user);
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
  });

  app.get("/users", function(req, res) {
    Users.find({}, (err, data) => {
      if (err) log(err);
      res.send(data);
    });
  });

  app.get("/accounts", function(req, res) {
    Auth.find({}, (err, data) => {
      if (err) log(err);
      res.send(data);
    });
  });

  app.get("/reset", function(req, res) {
    Auth.remove({}, err => {
      if (err) log(err);
      Users.remove({}, err => {
        if (err) log(err);
        res.send("User and auth database reset");
      });
    });
  });
};

// req.user.username returns the username, req.user.id returns the unique id
