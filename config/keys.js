if (process.env.NODE_ENV === "production") {
  //we are in production mode
  module.exports = require("./production");
} else {
  //we are in development
  module.exports = require("./dev");
}

//Client ID
//Client Secret
