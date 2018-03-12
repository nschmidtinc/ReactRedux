const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: "string",
  credits: {
    type: Number,
    default: 0
  }
});
//Ihave changed the name user to User again
mongoose.model("users", userSchema);
