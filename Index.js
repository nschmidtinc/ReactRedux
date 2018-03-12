const mongoose = require("mongoose");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
const models = require("./models/User");
const cookieSession = require("cookie-session");
const passport = require("passport");

const express = require("express");
const passportConfig = require("./services/passport");
const app = express();

mongoose.connect(keys.mongoURI);
app.use(bodyParser.json());
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
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //express will serve production assets
  app.use(express.static("client/build"));
  //express will serve index.html if it does not recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || app.listen(5000);

app.listen(PORT);
