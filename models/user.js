const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: "string"
});
//Ihave changed the name user to User
mongoose.model("users", userSchema);
