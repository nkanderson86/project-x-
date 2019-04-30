// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
// TODO: Update passport and uncomment this
// const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
// Heroki may require a tweak to the port to listen on:

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

// TODO: Update passport and uncomment this
// app.use(passport.initialize());
// app.use(passport.session());

// socket setup
const http = require("http").createServer(app);
const io = require("socket.io")(http);
app.io = io;

// Requiring our routes

http.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

module.exports = app;
