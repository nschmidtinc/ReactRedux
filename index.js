const mongoose = require("mongoose");
const keys = require("./config/keys");
const models = require("./models/user");
const cookieSession = require("cookie-session");
const passport = require("passport");
const express = require("express");
const passportConfig = require("./services/passport");
const app = express();

mongoose.connect(keys.mongoURI);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
console.log("it's working!");
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || app.listen(5000);

app.listen(PORT);
