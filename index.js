const express = require("express");
const passportConfig = require("./services/passport");

const app = express();
console.log("it's working!");
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || app.listen(5000);

app.listen(PORT);
